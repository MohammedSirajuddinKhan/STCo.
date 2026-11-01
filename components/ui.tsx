import Link from "next/link";
import type { ReactNode } from "react";
import { ImagePlate } from "@/components/image-plate";
import { gmailComposeUrl } from "@/lib/site";

/**
 * Every "email us" link on the site opens a pre-addressed Gmail draft in a
 * new tab instead of a bare mailto: — one consistent send path, matching the
 * enquiry forms.
 */
export function EmailLink({
  subject = "",
  body = "",
  className = "",
  children,
}: {
  subject?: string;
  body?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={gmailComposeUrl({ subject, body })}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2.9 11.1 11.1 2.9M11.1 2.9H4.1M11.1 2.9v7" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="10"
      viewBox="0 0 18 10"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 5h16M12 1l4 4-4 4" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

type WordmarkProps = {
  className?: string;
  href?: string | null;
  tone?: "ink" | "light";
};

export function Wordmark({ className = "", href = "/", tone = "ink" }: WordmarkProps) {
  const markup = (
    <span
      className={`wordmark ${tone === "light" ? "text-ivory" : "text-ink"} ${className}`}
      aria-label="ST CO."
    >
      <span className="wordmark-st">ST</span>
      <span className="wordmark-co">
        CO<span className="text-olive">.</span>
      </span>
    </span>
  );

  if (!href) return markup;
  return (
    <Link href={href} aria-label="ST CO. — home" className="inline-flex">
      {markup}
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  tone?: "ink" | "light" | "olive";
  className?: string;
}) {
  const color =
    tone === "light" ? "text-ivory/62" : tone === "olive" ? "text-olive-deep" : "text-ink/58";
  return <span className={`eyebrow ${color} ${className}`}>{children}</span>;
}

export function SectionIndex({
  number,
  label,
  aside,
  light = false,
  className = "",
}: {
  number: string;
  label: string;
  aside?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`section-index ${light ? "section-index--light" : ""} ${className}`}
      aria-hidden={false}
    >
      <span className={`eyebrow ${light ? "text-ivory/60" : "text-ink/55"}`}>
        {number} <span className="mx-2 text-olive">{light ? "/" : "/"}</span> {label}
      </span>
      {aside ? (
        <span
          className={`eyebrow-sm hidden sm:inline ${light ? "text-ivory/45" : "text-ink/40"}`}
        >
          {aside}
        </span>
      ) : null}
    </div>
  );
}

export function TextLink({
  href,
  children,
  className = "",
  light = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`link-arrow group ${light ? "text-ivory" : "text-ink"} ${className}`}
    >
      <span className="border-b border-current/30 pb-0.5 transition-colors group-hover:border-current">
        {children}
      </span>
      <ArrowUpRight />
    </Link>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lede,
  meta,
  image,
  imageAlt,
  imageCaption,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  meta?: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-[var(--hairline)] pb-14 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
      <div className="container-ed">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8 xl:col-span-7">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-olive" aria-hidden="true" />
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <h1 className="display-1 mt-7 max-w-[19ch] balance">{title}</h1>
            {lede ? <p className="lede mt-8 max-w-[52ch]">{lede}</p> : null}
            {children ? <div className="mt-9">{children}</div> : null}
            {meta ? (
              <p className="eyebrow-sm mt-8 border-t border-[var(--hairline)] pt-4 text-ink/42">
                {meta}
              </p>
            ) : null}
          </div>
          {image ? (
            <div className="lg:col-span-4 xl:col-span-5 xl:pl-10">
              <ImagePlate
                src={image}
                alt={imageAlt ?? ""}
                soft
                priority
                className="aspect-[4/3] w-full lg:aspect-[4/5]"
                sizes="(max-width: 1024px) 100vw, 36vw"
              />
              {imageCaption ? (
                <p className="meta mt-3 text-ink/45">{imageCaption}</p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
