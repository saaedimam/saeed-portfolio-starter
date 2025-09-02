import "./globals.css";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL("https://saaedimam.com"),
  title: {
    default: "Saaed Imam — Platform Architect & Founder",
    template: "%s | Saaed Imam"
  },
  description: "Building connected factories & clean design systems. RFID platforms, modern websites, and data pipelines for textiles and beyond.",
  keywords: ["RFID", "textile", "factory automation", "IoT", "Next.js", "FastAPI", "Supabase", "platform architect"],
  authors: [{ name: "Saaed Imam", email: "sayedimam.fahim@gmail.com" }],
  creator: "Saaed Imam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saaedimam.com",
    siteName: "Saaed Imam",
    title: "Saaed Imam — Platform Architect & Founder",
    description: "Building connected factories & clean design systems. RFID platforms, modern websites, and data pipelines for textiles and beyond.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Saaed Imam — Platform Architect & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@saaedimam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.className} ${sora.variable} ${plusJakartaSans.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="container py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
