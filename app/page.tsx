import Link from "next/link";
import type { Metadata } from "next";
import { HomeHero } from "@/components/home-hero";
import { ImagePlate } from "@/components/image-plate";
import { Reveal } from "@/components/reveal";
import {
  ArrowUpRight,
  EmailLink,
  Eyebrow,
  SectionIndex,
  TextLink,
} from "@/components/ui";
import {
  concepts,
  insights,
  principles,
  processSteps,
  services,
} from "@/lib/content";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "ST CO. | Brand Partnerships & Creator Marketing",
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

const featuredConcept = concepts[0];
const otherConcepts = concepts.slice(1);

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section">
        <div className="container-ed">
          <SectionIndex number="01" label="Services" aside="Three core practices" />

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="display-2 max-w-[14ch]">
                A small number of things, done{" "}
                <em className="italic text-olive-deep">properly.</em>
              </h2>
              <p className="body-copy mt-6 max-w-[36ch]">
                Discovery, partnerships, and campaign management. We keep the
                offer focused so the work stays considered from brief to wrap-up.
              </p>
              <div className="mt-8">
                <TextLink href="/services">Explore all services</TextLink>
              </div>
            </div>

            <div className="lg:col-span-8">
              {services.slice(0, 3).map((service, index) => (
                <Reveal key={service.slug} delay={index * 80}>
                  <Link href={`/services#${service.slug}`} className="ledger-row group">
                    <span className="index-number text-[1.05rem]">{service.number}</span>
                    <h3 className="display-3">
                      {service.title}{" "}
                      <em className="italic text-olive-deep">{service.emphasis}</em>
                    </h3>
                    <p className="row-desc max-w-[38ch] text-[0.875rem] leading-relaxed text-ink/60">
                      {service.summary}
                    </p>
                    <div className="row-thumb">
                      <ImagePlate
                        src={service.image}
                        alt={service.alt}
                        className="aspect-[4/5] w-full"
                        sizes="112px"
                      />
                    </div>
                    <span className="row-arrow justify-self-end text-ink/55">
                      <ArrowUpRight />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--hairline)]">
        <div className="container-ed">
          <SectionIndex number="02" label="Who we work with" aside="Two clear pathways" />
          <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6">
            <Reveal>
              <article className="flex h-full flex-col bg-stone">
                <div className="flex flex-1 flex-col p-7 sm:p-10">
                  <Eyebrow tone="olive">For brands</Eyebrow>
                  <h3 className="display-2 mt-6 max-w-[16ch]">
                    Find the right people for your next campaign.
                  </h3>
                  <p className="body-copy mt-5 max-w-[44ch]">
                    Thoughtful creator partnerships designed around your campaign
                    objectives — whether you are opening one café or planning a
                    national launch.
                  </p>
                  <div className="mt-auto pt-8">
                    <TextLink href="/for-brands">Find Your Creators</TextLink>
                  </div>
                </div>
                <ImagePlate
                  src="/images/skincare.jpg"
                  alt="Skincare products arranged on a table with flowers"
                  className="aspect-[16/9] w-full"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article className="dark-section flex h-full flex-col">
                <ImagePlate
                  src="/images/creator-recording.jpg"
                  alt="A creator recording a video at home with a camera on a tripod"
                  className="aspect-[16/9] w-full"
                  soft
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="flex flex-1 flex-col p-7 text-ivory sm:p-10">
                  <Eyebrow tone="light">For creators</Eyebrow>
                  <h3 className="display-2 mt-6 max-w-[16ch] text-ivory">
                    A place to introduce your work and be considered.
                  </h3>
                  <p className="mt-5 max-w-[44ch] text-[1rem] leading-relaxed text-ivory/66">
                    Tell us what you make, who it is for, and how you like to
                    work. When a brief genuinely fits, we will get in touch.
                  </p>
                  <div className="mt-auto pt-8">
                    <TextLink href="/for-creators#apply" light>
                      Introduce Yourself
                    </TextLink>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--hairline)]">
        <div className="container-ed">
          <SectionIndex
            number="03"
            label="Selected studies"
            aside="Concept projects / Not client work"
          />

          <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="display-1 max-w-[16ch]">
              How we would approach{" "}
              <em className="italic text-olive-deep">the work.</em>
            </h2>
            <p className="max-w-[38ch] text-[0.9375rem] leading-relaxed text-ink/58">
              ST CO. is early-stage. Rather than borrow credibility, we publish
              detailed concept campaigns that show our planning, creator
              criteria, and measurement thinking.
            </p>
          </div>

          <div className="mt-12">
            <Reveal>
              <Link href={`/work/${featuredConcept.slug}`} className="group block">
                <ImagePlate
                  src={featuredConcept.image}
                  alt={featuredConcept.alt}
                  className="aspect-[4/3] w-full sm:aspect-[16/9]"
                  sizes="100vw"
                />
                <div className="mt-5 grid gap-4 border-t border-[var(--hairline)] pt-5 sm:grid-cols-12">
                  <div className="sm:col-span-8">
                    <p className="eyebrow-sm text-olive-deep">
                      Concept project — {featuredConcept.number}
                    </p>
                    <h3 className="display-3 mt-3">
                      {featuredConcept.title}
                      <span className="ml-3 align-middle text-[0.75rem] uppercase tracking-[0.14em] text-ink/40">
                        {featuredConcept.brand}
                      </span>
                    </h3>
                  </div>
                  <div className="flex items-end justify-between gap-4 sm:col-span-4 sm:justify-end">
                    <p className="meta text-ink/45">
                      {featuredConcept.sector} · {featuredConcept.year}
                    </p>
                    <span className="text-ink/60 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>

            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:gap-8">
              {otherConcepts.map((concept, index) => (
                <Reveal key={concept.slug} delay={index * 90}>
                  <Link href={`/work/${concept.slug}`} className="group block">
                    <ImagePlate
                      src={concept.image}
                      alt={concept.alt}
                      className="aspect-[4/5] w-full sm:aspect-[4/3]"
                      sizes="(max-width: 640px) 100vw, 48vw"
                    />
                    <div className="mt-4 flex items-start justify-between gap-4 border-t border-[var(--hairline)] pt-4">
                      <div>
                        <p className="eyebrow-sm text-olive-deep">
                          Concept project — {concept.number}
                        </p>
                        <h3 className="display-3 mt-2">{concept.title}</h3>
                        <p className="meta mt-1 text-ink/45">
                          {concept.brand} · {concept.sector}
                        </p>
                      </div>
                      <span className="pt-1 text-ink/55 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                        <ArrowUpRight />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-[var(--hairline)] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[62ch] text-[0.75rem] leading-relaxed text-ink/42">
              All work shown is speculative. Brands, creators, and results are
              illustrative — not completed campaigns or client relationships.
            </p>
            <TextLink href="/work">View the work</TextLink>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--hairline)] bg-stone">
        <div className="container-ed">
          <SectionIndex number="04" label="How we work" aside="Five stages" />
          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h2 className="display-2 max-w-[13ch]">
                  A process built to remove{" "}
                  <em className="italic text-olive-deep">surprises.</em>
                </h2>
                <p className="body-copy mt-6 max-w-[34ch]">
                  Scope, timelines, fees, deliverables, approvals, and reporting
                  are agreed for each project. The process stays the same; the
                  detail changes.
                </p>
                <div className="mt-8">
                  <TextLink href="/process">Read the full process</TextLink>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              {processSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 60}>
                  <div className="grid grid-cols-[2.5rem_1fr] gap-5 border-t border-[var(--hairline)] py-6 sm:grid-cols-[3.5rem_1fr] sm:gap-8 sm:py-7">
                    <span className="index-number text-[1.1rem] sm:text-[1.35rem]">
                      {step.number}
                    </span>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                      <h3 className="display-4 max-w-[17ch]">{step.title}</h3>
                      <p className="max-w-[34ch] text-[0.8125rem] leading-relaxed text-ink/55">
                        {step.short}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-[var(--hairline)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-ed">
          <SectionIndex number="05" label="Principles" aside="How we make decisions" />
          <h2 className="display-1 mt-10 max-w-[20ch]">
            Good collaborations don’t happen{" "}
            <em className="italic text-olive-deep">by accident.</em>
          </h2>

          <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {principles.map((principle) => (
              <Reveal key={principle.number}>
                <article className="border-t border-[var(--hairline)] pt-5">
                  <div className="flex items-baseline gap-4">
                    <span className="index-number text-[0.875rem]">{principle.number}</span>
                    <h3 className="display-2 max-w-[15ch]">{principle.title}</h3>
                  </div>
                  <p className="body-copy mt-5 max-w-[42ch] pl-8">{principle.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm border-y border-[var(--hairline)]">
        <div className="container-ed">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Eyebrow tone="olive">Field notes</Eyebrow>
              <p className="mt-3 max-w-[20ch] text-[0.875rem] leading-relaxed text-ink/50">
                Practical thinking on the parts of a campaign that decide whether
                it works.
              </p>
            </div>
            <div className="lg:col-span-9">
              {insights.slice(0, 3).map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group grid gap-2 border-t border-[var(--hairline)] py-5 sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-6"
                >
                  <span className="eyebrow-sm text-ink/50">{article.category}</span>
                  <h3 className="display-4 transition-colors group-hover:text-olive-deep">
                    {article.title}
                  </h3>
                  <span className="hidden text-ink/45 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block">
                    <ArrowUpRight />
                  </span>
                </Link>
              ))}
              <div className="flex justify-end border-t border-[var(--hairline)] pt-5">
                <TextLink href="/insights">All insights</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container-ed section">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <Eyebrow tone="light">Start a conversation</Eyebrow>
              <h2 className="display-1 mt-7 max-w-[18ch] text-ivory">
                Have a good idea? Let’s bring the{" "}
                <em className="italic text-[#a3a888]">right people</em> together.
              </h2>
              <div className="mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                <Link href="/for-brands" className="btn btn--solid-light">
                  Start a Campaign
                  <ArrowUpRight />
                </Link>
                <Link href="/contact" className="btn btn--light">
                  Connect With ST CO.
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
                Enquiries go directly to Sirajuddin. Every message is read; if
                there is a fit, we will reply with a clear next step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
