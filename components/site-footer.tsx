import Link from "next/link";
import { site, footerNav } from "@/lib/site";
import { services } from "@/lib/content";
import { Wordmark, ArrowUpRight, EmailLink } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="dark-section">
      <div className="container-ed pt-14 sm:pt-16">
        <div className="grid gap-12 border-b border-[var(--hairline-light)] pb-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Wordmark tone="light" />
            <p className="body-copy mt-5 max-w-xs">
              ST CO. connects brands with creators and coordinates partnerships
              that are planned with care, briefed properly, and reviewed honestly.
            </p>
            <p className="eyebrow-sm mt-8 text-ivory/40">Where brands meet influence.</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <p className="eyebrow-sm text-ivory/40">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-[0.8125rem]">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ivory/65 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="eyebrow-sm text-ivory/40">Services</p>
            <ul className="mt-4 space-y-2.5 text-[0.8125rem]">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-ivory/65 transition-colors hover:text-ivory"
                  >
                    {service.title} {service.emphasis}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow-sm text-ivory/40">Enquiries</p>
            <div className="mt-4 space-y-3 text-[0.8125rem]">
              <p className="text-ivory/50">Brand enquiries</p>
              <EmailLink
                subject="Brand enquiry for ST CO."
                className="block break-all text-ivory/80 underline decoration-ivory/25 underline-offset-4 transition-colors hover:text-ivory hover:decoration-ivory"
              >
                {site.email}
              </EmailLink>
              <p className="pt-2 text-ivory/50">Creator applications</p>
              <Link
                href="/for-creators#apply"
                className="inline-flex items-center gap-2 text-ivory/80 transition-colors hover:text-ivory"
              >
                Introduce yourself <ArrowUpRight />
              </Link>
              <a
                href={`tel:${site.phoneHref}`}
                className="block text-ivory/80 underline decoration-ivory/25 underline-offset-4 transition-colors hover:text-ivory hover:decoration-ivory"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ivory/80 transition-colors hover:text-ivory"
              >
                Instagram {site.instagramHandle} <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-7 text-[0.6875rem] tracking-[0.04em] text-ivory/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ST CO. All rights reserved.</p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <li>
                <Link href="/privacy-policy" className="transition-colors hover:text-ivory">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-ivory">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="transition-colors hover:text-ivory">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="overflow-hidden pb-6" aria-hidden="true">
          <p className="footer-wordmark">
            ST CO<span>.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
