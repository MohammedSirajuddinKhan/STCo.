import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for is no longer here.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center border-b border-[var(--hairline)]">
      <div className="container-ed py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-olive" aria-hidden="true" />
              <Eyebrow>404 / Not found</Eyebrow>
            </div>
            <h1 className="display-hero mt-8 max-w-[13ch]">
              This page has left the{" "}
              <em className="italic text-olive-deep">campaign.</em>
            </h1>
            <p className="lede mt-7 max-w-[44ch]">
              The link may be old, or the page may have moved. Nothing is broken
              that a different route cannot fix.
            </p>
            <div className="mt-9 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Link href="/" className="btn btn--solid">
                Back to home
                <ArrowUpRight />
              </Link>
              <Link href="/contact" className="btn">
                Contact ST CO.
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow-sm text-ink/40">Useful routes</p>
            <nav aria-label="Useful links" className="mt-4">
              {[
                { href: "/services", label: "Services" },
                { href: "/work", label: "Work" },
                { href: "/insights", label: "Insights" },
                { href: "/for-brands", label: "For Brands" },
                { href: "/for-creators", label: "For Creators" },
                { href: "/faq", label: "FAQ" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-4 border-t border-[var(--hairline)] py-3 text-[0.9375rem] text-ink/70 transition-colors hover:text-ink"
                >
                  {item.label}
                  <span className="text-ink/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight />
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
