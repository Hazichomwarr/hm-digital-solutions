import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HM Digital Solutions",
    template: "%s | HM Digital Solutions",
  },

  description:
    "HM Digital Solutions helps local businesses modernize with websites, automation systems, branding, AI solutions, and digital infrastructure.",

  keywords: [
    "Web Development",
    "Business Automation",
    "AI Solutions",
    "Digital Agency",
    "Newark Web Design",
    "CRM Systems",
    "Business Support",
    "Branding",
    "HM Digital Solutions",
  ],

  metadataBase: new URL("https://hmdigitalsolutions.tech"),

  openGraph: {
    title: "HM Digital Solutions",
    description: "Helping local businesses modernize, automate, and grow.",
    url: "https://hmdigitalsolutions.tech",
    siteName: "HM Digital Solutions",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HM Digital Solutions",
    description: "Helping local businesses modernize, automate, and grow.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
