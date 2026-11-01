import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { ArrowUpRight, EmailLink, Eyebrow, PageIntro, SectionIndex } from "@/components/ui";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Contact ST CO. about brand partnerships, creator campaigns, or general enquiries. Email, phone, and Instagram details for the agency.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title={
          <>
            Start with a{" "}
            <em className="italic text-olive-deep">conversation.</em>
          </>
        }
        lede="Tell us what you are planning, even if it is still taking shape. A useful first conversation is usually more valuable than a perfect brief."
        meta="India · Working nationally"
      >
        <EmailLink className="btn btn--solid">
          Email ST CO.
          <ArrowUpRight />
        </EmailLink>
      </PageIntro>

      <section className="border-b border-[var(--hairline)]">
        <div className="container-ed">
          <div className="grid divide-y divide-[var(--hairline)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="py-8 sm:py-10 sm:pr-8">
              <span className="index-number text-[0.75rem]">01</span>
              <h2 className="display-3 mt-4">For brands</h2>
              <p className="mt-3 max-w-[30ch] text-[0.875rem] leading-relaxed text-ink/60">
                Campaigns, creator partnerships, UGC, and campaign management.
              </p>
              <Link href="/for-brands#enquire" className="link-arrow mt-5 text-ink">
                Brand enquiry
                <ArrowUpRight />
              </Link>
            </div>
            <div className="py-8 sm:px-8 sm:py-10">
              <span className="index-number text-[0.75rem]">02</span>
              <h2 className="display-3 mt-4">For creators</h2>
              <p className="mt-3 max-w-[30ch] text-[0.875rem] leading-relaxed text-ink/60">
                Introduce your work for consideration in relevant campaigns.
              </p>
              <Link href="/for-creators#apply" className="link-arrow mt-5 text-ink">
                Creator application
                <ArrowUpRight />
              </Link>
            </div>
            <div className="py-8 sm:pl-8 sm:py-10">
              <span className="index-number text-[0.75rem]">03</span>
              <h2 className="display-3 mt-4">General</h2>
              <p className="mt-3 max-w-[30ch] text-[0.875rem] leading-relaxed text-ink/60">
                Questions about the agency, a collaboration, or anything else.
              </p>
              <a href="#message" className="link-arrow mt-5 text-ink">
                Send a message
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-ed">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <SectionIndex number="01" label="Direct details" aside="No office address listed" />
              <dl className="mt-8">
                <div className="border-b border-[var(--hairline)] py-5">
                  <dt className="eyebrow-sm text-ink/40">Email</dt>
                  <dd className="mt-2">
                    <EmailLink
                      className="break-all text-[1.0625rem] leading-relaxed text-ink transition-colors hover:text-olive-deep"
                    >
                      {site.email}
                    </EmailLink>
                  </dd>
                </div>
                <div className="border-b border-[var(--hairline)] py-5">
                  <dt className="eyebrow-sm text-ink/40">Phone</dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="text-[1.0625rem] text-ink transition-colors hover:text-olive-deep"
                    >
                      {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div className="border-b border-[var(--hairline)] py-5">
                  <dt className="eyebrow-sm text-ink/40">Instagram</dt>
                  <dd className="mt-2">
                    <a
                      href={site.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[1.0625rem] text-ink transition-colors hover:text-olive-deep"
                    >
                      {site.instagramHandle} <ArrowUpRight />
                    </a>
                  </dd>
                </div>
                <div className="py-5">
                  <dt className="eyebrow-sm text-ink/40">Based in</dt>
                  <dd className="mt-2 text-[0.9375rem] text-ink/70">
                    India. Working with brands and creators nationally.
                  </dd>
                </div>
              </dl>

              <div className="mt-6 bg-stone p-6">
                <p className="eyebrow-sm text-olive-deep">What to expect</p>
                <p className="mt-3 text-[0.8125rem] leading-relaxed text-ink/62">
                  Enquiries are read directly by Sirajuddin. We aim to reply
                  within three working days. If your timing is urgent, say so in
                  the subject line and include the date you are working towards.
                </p>
              </div>

              <p className="mt-6 text-[0.75rem] leading-relaxed text-ink/42">
                No office address is listed. Please direct all correspondence to
                the email above; we will confirm any other details directly if
                they are needed.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div id="message" className="scroll-mt-28">
                <Eyebrow tone="olive">Send a message</Eyebrow>
                <h2 className="display-2 mt-5 max-w-[16ch]">
                  A general enquiry, or something that does not fit a form.
                </h2>
                <p className="body-copy mt-4 mb-9 max-w-[48ch]">
                  For brand campaigns, the brand form collects more useful
                  detail. For creator applications, use the creator form. For
                  everything else, this is the right place.
                </p>
                <EnquiryForm variant="contact" id="contact-form" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm border-t border-[var(--hairline)]">
        <div className="container-ed">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="display-3 max-w-[28ch]">
              Prefer to read first? The FAQ covers fees, rights, and timelines.
            </p>
            <Link href="/faq" className="btn shrink-0">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
