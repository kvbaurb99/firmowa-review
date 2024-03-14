import type { Metadata } from "next";
import { Urbanist, Inter } from "next/font/google";
import "./index.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-urbanist",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Webleaders - Innowacje w SEO Affiliate Marketingu",
  description:
    "Jesteśmy twórcami i innowatorami w branży marketingu affiliacyjnego.",
  keywords: "SEO, Affiliate, Marketing, Innowacje, Twórcy, Innowatorzy",
  category: "Marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${urbanist.className} ${inter.variable}`}>
        <main className="overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
