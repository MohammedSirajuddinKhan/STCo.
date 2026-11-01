import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ST CO. | Brand Partnerships & Creator Marketing",
    template: "%s — ST CO.",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "ST CO." }],
  creator: "ST CO.",
  keywords: [
    "brand partnerships",
    "creator marketing",
    "influencer marketing",
    "UGC",
    "campaign management",
    "creator collaborations",
    "India",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: "ST CO. | Brand Partnerships & Creator Marketing",
    description: site.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ST CO. — Where brands meet influence.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ST CO. | Brand Partnerships & Creator Marketing",
    description: site.description,
    images: ["/og.png"],
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ST CO.",
  description: site.description,
  url: siteUrl,
  email: site.email,
  telephone: site.phoneHref,
  areaServed: "India",
  serviceType: [
    "Creator discovery and matching",
    "Influencer marketing",
    "Brand partnerships",
    "UGC campaign coordination",
    "Campaign management",
    "Campaign strategy and planning",
  ],
  sameAs: [site.instagramUrl],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${instrument.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
