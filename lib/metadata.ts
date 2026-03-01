import { Metadata } from "next";
import { siteConfig } from "@/config/site";

const defaultTitle = "Arshnoor Kirmani | Front-End Developer";
const defaultDescription =
  "Front-End Developer specializing in building scalable, high-performance web applications using React.js, Next.js, and TypeScript.";
const defaultUrl = siteConfig.url; // Centralized in site.ts

export const defaultMetadata: Metadata = {
  title: {
    template: `%s | Arshnoor Kirmani`,
    default: defaultTitle,
  },
  description: defaultDescription,
  metadataBase: new URL(defaultUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: defaultUrl,
    siteName: "Arshnoor Kirmani Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
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
};
