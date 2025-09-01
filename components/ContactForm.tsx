"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<null | string>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    
    try {
      const res = await fetch("/api/contact", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(data) 
      });
      
      if (res.ok) {
        setStatus("Thanks — I'll get back to you soon.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot field */}
      <input 
        name="website" 
        type="text" 
        style={{ display: 'none' }} 
        tabIndex={-1} 
        autoComplete="off" 
      />
      
      <div className="grid gap-4">
        <input 
          name="name" 
          required 
          placeholder="Your name" 
          className="border border-charcoal/20 dark:border-warm/20 rounded-xl px-4 py-3 bg-white/70 dark:bg-white/5 text-charcoal dark:text-warm placeholder:text-charcoal/50 dark:placeholder:text-warm/50 focus:border-teal focus:outline-none transition-colors"
        />
        <input 
          type="email" 
          name="email" 
          required 
          placeholder="Email" 
          className="border border-charcoal/20 dark:border-warm/20 rounded-xl px-4 py-3 bg-white/70 dark:bg-white/5 text-charcoal dark:text-warm placeholder:text-charcoal/50 dark:placeholder:text-warm/50 focus:border-teal focus:outline-none transition-colors"
        />
        <textarea 
          name="message" 
          required 
          placeholder="Tell me about your project…" 
          rows={6}
          className="border border-charcoal/20 dark:border-warm/20 rounded-xl px-4 py-3 bg-white/70 dark:bg-white/5 text-charcoal dark:text-warm placeholder:text-charcoal/50 dark:placeholder:text-warm/50 focus:border-teal focus:outline-none transition-colors resize-none"
        />
      </div>
      
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full px-5 py-3 rounded-2xl bg-teal text-white shadow-soft hover:bg-teal/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      
      {status && (
        <p className={`text-sm ${status.includes("Thanks") ? "text-teal" : "text-red-500"}`}>
          {status}
        </p>
      )}
    </form>
  );
}
