import { allPosts } from "@/lib/data";

export async function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://saaedimam.com";
  const items = allPosts
    .sort((a,b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map(p => `
      <item>
        <title><![CDATA[${p.title}]]></title>
        <link>${site}${p.url}</link>
        <guid>${site}${p.url}</guid>
        <pubDate>${new Date(p.date).toUTCString()}</pubDate>
        <description><![CDATA[${p.summary}]]></description>
        <author>sayedimam.fahim@gmail.com (Saaed Imam)</author>
      </item>
    `).join("\n");
    
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Saaed Imam — Writing & Notes</title>
      <link>${site}/writing</link>
      <description>Thoughts on RFID systems, factory automation, and building connected products.</description>
      <language>en</language>
      <managingEditor>sayedimam.fahim@gmail.com (Saaed Imam)</managingEditor>
      <webMaster>sayedimam.fahim@gmail.com (Saaed Imam)</webMaster>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${site}/rss" rel="self" type="application/rss+xml"/>
      ${items}
    </channel>
  </rss>`;
  
  return new Response(xml, { 
    headers: { 
      "Content-Type": "application/rss+xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    } 
  });
}
