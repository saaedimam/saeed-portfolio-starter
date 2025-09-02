import { rateLimit } from "@/lib/rate-limit";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null) as any;
    
    // Basic validation
    if (!body?.email || !body?.message || !body?.name) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), { 
        status: 400, 
        headers: { "Content-Type": "application/json" } 
      });
    }

    // Honeypot check
    if (body.website) {
      return new Response(JSON.stringify({ ok: false, error: "Spam detected" }), { 
        status: 400, 
        headers: { "Content-Type": "application/json" } 
      });
    }

    // Rate limiting
    const clientIP = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    const rateLimitResult = rateLimit(clientIP, 5, 60000); // 5 requests per minute
    
    if (!rateLimitResult.success) {
      return new Response(JSON.stringify({ ok: false, error: "Too many requests" }), { 
        status: 429, 
        headers: { "Content-Type": "application/json" } 
      });
    }

    const { error: sendError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "owner@example.com",
      subject: `New contact form submission from ${body.name}`,
      replyTo: body.email,
      text: body.message
    });

    if (sendError) {
      console.error("Failed to send contact form email:", sendError);
      return new Response(JSON.stringify({ ok: false, error: "Failed to send email" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
    
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({ ok: false, error: "Internal server error" }), { 
      status: 500, 
      headers: { "Content-Type": "application/json" } 
    });
  }
}
