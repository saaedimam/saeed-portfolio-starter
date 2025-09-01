import { Metadata } from "next";

export function generateMetadata({
  title,
  description,
  path = "",
  image = "/og/default.png",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "https://saaedimam.com"}${path}`;
  const imageUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://saaedimam.com"}${image}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Saaed Imam",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}
