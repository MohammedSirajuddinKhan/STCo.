import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, EmailLink, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

type CtaBandProps = {
  eyebrow?: string;
  title: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  note?: string;
};

export function CtaBand({
  eyebrow = "Start a conversation",
  title,
  primaryLabel = "Start a Campaign",
  primaryHref = "/for-brands",
  secondaryLabel = "Connect With ST CO.",
  secondaryHref = "/contact",
  note,
}: CtaBandProps) {
  return (
    <section className="dark-section">
      <div className="container-ed section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
            <h2 className="display-1 mt-7 max-w-[18ch] text-ivory">{title}</h2>
            <div className="mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Link href={primaryHref} className="btn btn--solid-light">
                {primaryLabel}
                <ArrowUpRight />
              </Link>
              <Link href={secondaryHref} className="btn btn--light">
                {secondaryLabel}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pt-16">
            <p className="eyebrow-sm text-ivory/40">Direct</p>
            <div className="mt-5 space-y-4 text-[0.9375rem]">
              <EmailLink
                className="block break-all text-ivory/82 underline decoration-ivory/25 underline-offset-4 transition-colors hover:text-ivory hover:decoration-ivory"
              >
                {site.email}
              </EmailLink>
              <a
                href={`tel:${site.phoneHref}`}
                className="block text-ivory/82 transition-colors hover:text-ivory"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ivory/70 transition-colors hover:text-ivory"
              >
                Instagram {site.instagramHandle} <ArrowUpRight />
              </a>
            </div>
            <p className="mt-8 border-t border-[var(--hairline-light)] pt-5 text-[0.75rem] leading-relaxed text-ivory/45">
              {note ??
                "Enquiries go directly to Sirajuddin. Every message is read; if there is a fit, we will reply with a clear next step."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
