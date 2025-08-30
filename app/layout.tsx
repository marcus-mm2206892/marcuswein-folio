import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "./config/theme";
import { SITE_CONFIG } from "./config/constants";
import NavBar from "./components/molecules/NavBar";
import GrainOverlay from "./components/molecules/GrainOverlay";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.author,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: SITE_CONFIG.twitterHandle,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  metadataBase: new URL(SITE_CONFIG.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/assets/images/personal/mwlogo.png"
        />
        <meta name="theme-color" content="#262626" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`font-body ${spaceGrotesk.className}`}
        suppressHydrationWarning={true}
      >
        <GrainOverlay />
        <div>{children}</div>
      </body>
    </html>
  );
}
