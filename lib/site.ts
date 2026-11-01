import type { Metadata } from "next";

/**
 * Set NEXT_PUBLIC_SITE_URL to the final domain before launch.
 * Until a domain exists we intentionally use localhost rather than inventing one;
 * canonical URLs, the sitemap and social previews all read from this value.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const site = {
  name: "ST CO.",
  legalName: "ST CO.",
  tagline: "Where brands meet influence.",
  descriptor: "Brand Partnerships / Creator Marketing / Campaign Management",
  description:
    "ST CO. connects brands with creators and helps coordinate meaningful partnerships, influencer campaigns, and creator-led content.",
  email: "sirajuddinkhan7718@gmail.com",
  phoneDisplay: "+91 7718985893",
  phoneHref: "+917718985893",
  instagramHandle: "@wokenupsiraj",
  instagramUrl: "https://www.instagram.com/wokenupsiraj/",
  location: "India",
  founder: {
    name: "Sirajuddin Khan",
    role: "Founder, ST CO.",
    /** Editable: keep this to verified personal details only. */
    statement:
      "I started ST CO. because good brand–creator work is rarely a reach problem. It is a fit problem. The brief is unclear, the creator is chosen for the wrong reason, or nobody agrees what success looks like until the content is already live. ST CO. exists to make those decisions carefully, and to make the process feel considered for both sides.",
    note: "For enquiries, write directly to Sirajuddin using the contact details on this site.",
  },
  launchYear: 2026,
} as const;

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Deep link to a pre-addressed Gmail draft (to, subject and body filled in).
 * Nothing is sent until the visitor presses Send in Gmail — this only opens
 * the compose window, which is the site's single email-sending mechanism.
 */
export function gmailComposeUrl({
  to = site.email,
  subject = "",
  body = "",
}: { to?: string; subject?: string; body?: string } = {}) {
  const params = new URLSearchParams({ view: "cm", fs: "1", to });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

type MetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  absoluteTitle?: boolean;
};

export function pageMeta({
  title,
  description,
  path,
  type = "website",
  absoluteTitle = false,
}: MetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type,
      images: [
        {
          url: absoluteUrl("/og.png"),
          width: 1200,
          height: 630,
          alt: "ST CO. — Where brands meet influence.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og.png")],
    },
  };
}

export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "For Brands", href: "/for-brands" },
  { label: "For Creators", href: "/for-creators" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
] as const;

export const footerNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;
