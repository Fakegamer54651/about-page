import type { Metadata } from "next";
import { Schibsted_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-schibsted",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asilbek | Product & Motion Designer",
  description:
    "Asilbek is a product & motion designer based in Tashkent, creating impactful visual design for modern brands.",
  keywords: [
    "Asilbek",
    "product designer",
    "motion design",
    "UX",
    "UI",
    "portfolio",
    "Tashkent",
    "Uzbekistan",
  ],
  authors: [{ name: "Asilbek Khamidullayev" }],
  appleWebApp: {
    title: "Asilbek",
  },
  icons: {
    icon: "/assets/favicon.ico", // path to your favicon in the public directory
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  openGraph: {
    title: "Asilbek | Product & Motion Designer",
    description:
      "Portfolio of Asilbek – a creative product & motion designer from Uzbekistan.",
    type: "website",
    url: "https://asilbek.design",
    images: [
      {
        url: "https://asilbek.design/assets/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Asilbek Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asilbek | Product & Motion Designer",
    description:
      "Portfolio of Asilbek – a creative product & motion designer from Uzbekistan.",
  },
  robots: "index, follow",
  themeColor: "white",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${schibstedGrotesk.variable} ${inter.variable}`}
    >
      <body className="antialiased">
        {children}
        <div className="page-transition-overlay" />
      </body>
    </html>
  );
}
