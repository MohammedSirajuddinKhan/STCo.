import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { ImagePlate } from "@/components/image-plate";
import { ArrowUpRight, EmailLink, Eyebrow, PageIntro, SectionIndex } from "@/components/ui";
import { serviceCaveat, services } from "@/lib/content";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "Creator discovery, influencer marketing, brand partnerships, UGC coordination, campaign management, and campaign strategy from ST CO.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title={
          <>
            Six ways we help brands and creators work{" "}
            <em className="italic text-olive-deep">together.</em>
          </>
        }
        lede="From a first shortlist to the final wrap-up, each service is scoped around a specific job. Not every project needs all six."
        image="/images/studio.jpg"
        imageAlt="Studio lighting, plants, and a stool on a production set"
        imageCaption="Production study. Illustrative photography."
        meta="Scope and fees confirmed in writing"
      >
        <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap">
          <Link href="/for-brands#enquire" className="btn btn--solid">
            Send a brief
            <ArrowUpRight />
          </Link>
          <Link href="/process" className="btn">
            See the process
          </Link>
        </div>
      </PageIntro>

      <section className="section-sm border-b border-[var(--hairline)]">
        <div className="container-ed">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Eyebrow tone="olive">The offer</Eyebrow>
            </div>
            <div className="lg:col-span-6">
              <p className="lede">
                A creator campaign is a production, a relationship, and a
                commercial agreement at the same time. Our services cover the
                parts that most often get skipped.
              </p>
            </div>
            <div className="lg:col-span-3">
              <p className="text-[0.8125rem] leading-relaxed text-ink/55">
                {serviceCaveat}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-ed">
          <SectionIndex number="01" label="Capabilities" aside="Six services" />

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
            <aside className="hidden lg:col-span-3 lg:block">
              <nav aria-label="Services on this page" className="lg:sticky lg:top-28">
                <p className="eyebrow-sm text-ink/40">On this page</p>
                <ul className="mt-5 space-y-0">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <a
                        href={`#${service.slug}`}
                        className="group flex items-baseline gap-3 border-t border-[var(--hairline)] py-3 text-[0.8125rem] text-ink/60 transition-colors hover:text-ink"
                      >
                        <span className="index-number text-[0.6875rem]">
                          {service.number}
                        </span>
                        <span>
                          {service.title} {service.emphasis}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-[var(--hairline)] pt-5">
                  <p className="text-[0.75rem] leading-relaxed text-ink/45">
                    Not sure where to start? Send the objective and we will
                    recommend a scope.
                  </p>
                  <Link
                    href="/for-brands#enquire"
                    className="link-arrow mt-4 text-ink"
                  >
                    Enquire
                    <ArrowUpRight />
                  </Link>
                </div>
              </nav>
            </aside>

            <div className="lg:col-span-9">
              {services.map((service, index) => (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-28 border-t border-[var(--hairline)] py-12 first:border-t-0 first:pt-0 sm:py-16"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="index-number text-[0.875rem]">{service.number}</span>
                    <h2 className="display-2 max-w-[18ch]">
                      {service.title}{" "}
                      <em className="italic text-olive-deep">{service.emphasis}</em>
                    </h2>
                  </div>

                  <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-8">
                    <div
                      className={`lg:col-span-7 ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <p className="lede max-w-[48ch]">{service.intro}</p>

                      <div className="mt-9">
                        <h3 className="eyebrow-sm text-olive-deep">
                          What it involves
                        </h3>
                        <ul className="mt-5 space-y-3">
                          {service.what.map((point) => (
                            <li
                              key={point}
                              className="grid grid-cols-[0.9rem_1fr] gap-3 text-[0.9375rem] leading-relaxed text-ink/72"
                            >
                              <span className="mt-[0.7em] h-px w-2.5 bg-olive" aria-hidden="true" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <dl className="mt-9 grid gap-6 border-t border-[var(--hairline)] pt-6 sm:grid-cols-2">
                        <div>
                          <dt className="eyebrow-sm text-ink/40">Who it serves</dt>
                          <dd className="mt-2 text-[0.875rem] leading-relaxed text-ink/65">
                            {service.who}
                          </dd>
                        </div>
                        <div>
                          <dt className="eyebrow-sm text-ink/40">How to enquire</dt>
                          <dd className="mt-2 text-[0.875rem] leading-relaxed text-ink/65">
                            {service.enquiry}{" "}
                            <Link
                              href="/for-brands#enquire"
                              className="mt-2 inline-flex border-b border-[var(--hairline-strong)] pb-0.5 text-ink transition-colors hover:border-olive hover:text-olive-deep"
                            >
                              Use the brand enquiry form
                            </Link>
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div
                      className={`lg:col-span-5 ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <ImagePlate
                        src={service.image}
                        alt={service.alt}
                        className="aspect-[4/5] w-full"
                        sizes="(max-width: 1024px) 100vw, 34vw"
                      />
                      <p className="plate-caption">
                        <span>Service {service.number}</span>
                        <span>Illustrative photography</span>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm border-y border-[var(--hairline)] bg-stone">
        <div className="container-ed">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow tone="olive">A note on scope</Eyebrow>
            </div>
            <div className="lg:col-span-7">
              <p className="display-3 max-w-[30ch]">
                We will tell you what we can deliver, what depends on creator
                availability, and what we would not promise.
              </p>
              <p className="body-copy mt-5 max-w-[56ch]">
                Creator availability, platform rules, production windows, and
                usage rights all affect what is realistic. A written scope
                protects both sides from assumptions. If something is outside our
                capacity, we will say so rather than add it to a proposal.
              </p>
              <div className="mt-6 flex flex-wrap gap-6">
                <Link href="/process" className="link-arrow">
                  Our process
                  <ArrowUpRight />
                </Link>
                <EmailLink className="link-arrow">
                  Email ST CO.
                  <ArrowUpRight />
                </EmailLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Start with the brief"
        title={
          <>
            Tell us what the campaign needs to{" "}
            <em className="italic text-[#a3a888]">do.</em>
          </>
        }
        primaryLabel="Start a Campaign"
        primaryHref="/for-brands#enquire"
        secondaryLabel="See How We Work"
        secondaryHref="/process"
      />
    </>
  );
}
