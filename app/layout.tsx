import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Thorben Schirra",
  description: "This is my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-white ${inter.variable}`}>
      <body className={`${inter.className} text-black bg-white`}>
        {children}
        <Analytics />
        <GoogleAnalytics gaId={`${process.env.GOOGLE_ANALYTICS_ID}`} />
      </body>
    </html>
  );
}
