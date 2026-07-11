import type { Metadata, Viewport } from "next";
import { Paytone_One, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { ConsentBanner } from "@/components/ConsentBanner";
import { JsonLd } from "@/components/JsonLd";
import { business } from "@/data/business";
import { siteDescription, siteTitle } from "@/lib/seo";

const display = Paytone_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: business.name,
    images: [
      {
        url: business.assets.communityImage,
        width: 1200,
        height: 630,
        alt: "Samurai e alunos em encontro de altinha na praia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [business.assets.communityImage],
  },
  icons: {
    icon: business.assets.logo,
    apple: business.assets.logo,
  },
};

export const viewport: Viewport = {
  themeColor: "#071426",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        <AnalyticsProvider />
        {children}
        <ConsentBanner />
        <JsonLd />
      </body>
    </html>
  );
}
