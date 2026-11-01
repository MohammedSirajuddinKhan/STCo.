import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, EmailLink, PageIntro } from "@/components/ui";
import { site } from "@/lib/site";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: { id: string; label: string }[];
  children: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
  children,
}: LegalPageProps) {
  return (
    <>
      <PageIntro
        eyebrow={eyebrow}
        title={title}
        lede={intro}
        meta={`Last updated ${updated}`}
      />

      <div className="container-ed section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-3">
            <nav aria-label="On this page" className="lg:sticky lg:top-28">
              <p className="eyebrow-sm text-ink/40">On this page</p>
              <ul className="mt-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block border-t border-[var(--hairline)] py-2.5 text-[0.8125rem] leading-snug text-ink/55 transition-colors hover:text-ink"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-[var(--hairline)] pt-5">
                <p className="text-[0.75rem] leading-relaxed text-ink/45">
                  Questions about this document can be sent to{" "}
                  <EmailLink
                    className="underline decoration-[var(--hairline-strong)] underline-offset-2 hover:text-ink"
                  >
                    {site.email}
                  </EmailLink>
                  .
                </p>
              </div>
            </nav>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <div className="article-prose max-w-[68ch]">{children}</div>

            <div className="mt-14 border-t border-[var(--hairline)] pt-6">
              <p className="text-[0.8125rem] leading-relaxed text-ink/55">
                This document is maintained by ST CO. and describes the website
                as it is currently built. It is not legal advice. Please contact{" "}
                <EmailLink className="link-quiet">{site.email}</EmailLink>{" "}
                with any question or correction.
              </p>
              <div className="mt-5 flex flex-wrap gap-6">
                <Link href="/privacy-policy" className="link-arrow text-ink">
                  Privacy Policy
                  <ArrowUpRight />
                </Link>
                <Link href="/terms" className="link-arrow text-ink">
                  Terms of Use
                  <ArrowUpRight />
                </Link>
                <Link href="/cookies" className="link-arrow text-ink">
                  Cookie Policy
                  <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
