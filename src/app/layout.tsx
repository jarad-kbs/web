import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Variable.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-VariableItalic.ttf",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

const workSans = localFont({
  src: "../../public/fonts/WorkSans-Variable.ttf",
  variable: "--font-work-sans",
});

const ebGaramond = localFont({
  src: "../../public/fonts/EBGaramond-Variable.ttf",
  variable: "--font-eb-garamond",
});

export const metadata: Metadata = {
  title: "Keystone Beaver Strategies LLC",
  description: "Portland Oregon based beaver coexistence specialist",
  openGraph: {
    title: "Keystone Beaver Strategies LLC",
    description: "Portland Oregon based beaver coexistence specialist",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keystone Beaver Strategies LLC",
    description: "Portland Oregon based beaver coexistence specialist",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${satoshi.variable} ${satoshi.className} ${jetbrainsMono.variable} ${workSans.variable} ${ebGaramond.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
