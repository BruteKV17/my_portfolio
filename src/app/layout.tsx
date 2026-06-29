import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Kishan Verma — AI Product Designer & Frontend Builder",
  description: "Portfolio of Kishan Verma. I design and build AI-first digital products, dashboards, landing pages, and frontend-ready product systems.",
  keywords: ["AI Product Design", "Frontend Developer", "Next.js Portfolio", "Kishan Verma", "UX/UI Designer India"],
  authors: [{ name: "Kishan Verma" }],
  creator: "Kishan Verma",
  openGraph: {
    title: "Kishan Verma — AI Product Designer & Frontend Builder",
    description: "I design and build AI-first digital products, dashboards, landing pages, and frontend-ready product systems.",
    type: "website",
    locale: "en_IN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#050505] text-[#F5F1E8]">
        {children}
      </body>
    </html>
  );
}
