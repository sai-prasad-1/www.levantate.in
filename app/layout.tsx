import type { Metadata } from "next";
import { Onest } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";


const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
});

// Agile custom font
const agile = localFont({
  src: [
    {
      path: "./fonts/agile.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/agile.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-agile",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.levantate.in"),
  title: {
    default: "Levantate Labs | Blockchain, AI, Web Development & UI/UX Design Services",
    template: "%s | Levantate Labs"
  },
  description: "Levantate Labs empowers businesses with cutting-edge Blockchain Development, AI Solutions, Web Development, and UI/UX Design. Transform your business with generative AI, smart applications, robust web projects, and secure blockchain solutions.",
  keywords: [
    "Blockchain Development",
    "AI Solutions",
    "Web Development",
    "UI/UX Design",
    "Generative AI",
    "Artificial Intelligence",
    "Smart Applications",
    "Secure Blockchain",
    "Levantate Labs",
    "Custom Software Development",
    "Machine Learning",
    "DApp Development",
    "React Development",
    "Next.js Development",
    "Digital Transformation"
  ],
  authors: [{ name: "Levantate Labs" }],
  creator: "Levantate Labs",
  publisher: "Levantate Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.levantate.in",
    siteName: "Levantate Labs",
    title: "Levantate Labs | Blockchain, AI, Web Development & UI/UX Design Services",
    description: "Empowering businesses with cutting-edge Blockchain Development, AI Solutions, Web Development, and UI/UX Design services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Levantate Labs - Blockchain, AI, Web Development & UI/UX Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Levantate Labs | Blockchain, AI, Web Development & UI/UX Design Services",
    description: "Empowering businesses with cutting-edge Blockchain Development, AI Solutions, Web Development, and UI/UX Design services.",
    images: ["/og-image.jpg"],
    creator: "@LevantateLabs",
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
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/levantate_logo_square_white.svg" />
        <link rel="canonical" href="https://www.levantate.in" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${onest.variable} ${agile.variable} antialiased`}
      >
        <StructuredData />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
