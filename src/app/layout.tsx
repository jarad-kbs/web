import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
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
  description: "Coexistence solutions for Oregon's waterways. Helping landowners manage water and wildlife harmoniously through beaver coexistence strategies.",
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
      </body>
    </html>
  );
}
