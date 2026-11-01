import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { ImagePlate } from "@/components/image-plate";
import { ArrowUpRight, Eyebrow, SectionIndex } from "@/components/ui";
import { conceptDisclaimer, concepts, getConcept } from "@/lib/content";
import { pageMeta } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return concepts.map((concept) => ({ slug: concept.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) return {};

  return pageMeta({
    title: `${concept.title} — Concept Project`,
    description: `${concept.summary} A speculative concept campaign by ST CO. Illustrative brand: ${concept.brand}. Not client work.`,
    path: `/work/${concept.slug}`,
    type: "article",
  });
}

export default async function ConceptPage({ params }: PageProps) {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) notFound();

  const currentIndex = concepts.findIndex((item) => item.slug === concept.slug);
  const next = concepts[(currentIndex + 1) % concepts.length];

  return (
    <>
      <article>
        <header className="border-b border-[var(--hairline)] pb-12 pt-10 sm:pb-16 sm:pt-14">
          <div className="container-ed">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/work"
                className="eyebrow-sm inline-flex items-center gap-2 text-ink/50 transition-colors hover:text-ink"
              >
                <span aria-hidden="true">←</span> All work
              </Link>
              <p className="eyebrow-sm text-olive-deep">
                Concept project — {concept.number} · {concept.year}
              </p>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-7">
                <p className="eyebrow text-ink/45">
                  {concept.sector} / Illustrative brand
                </p>
                <h1 className="display-1 mt-4 max-w-[14ch]">{concept.title}</h1>
                <p className="display-4 mt-3 text-ink/45">{concept.brand}</p>
                <p className="lede mt-7 max-w-[48ch]">{concept.summary}</p>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="border border-[var(--hairline-strong)] p-6">
                  <p className="eyebrow-sm text-olive-deep">Status</p>
                  <p className="mt-3 text-[0.9375rem] font-medium">Speculative concept</p>
                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-ink/60">
                    Not a completed campaign. No real brand, creator, client, or
                    result is associated with this work.
                  </p>
                  <Link href="/for-brands#enquire" className="link-arrow mt-6 text-ink">
                    Discuss a real brief
                    <ArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container-ed pt-8 sm:pt-10">
          <ImagePlate
            src={concept.image}
            alt={concept.alt}
            className="aspect-[4/3] w-full sm:aspect-[16/9]"
            sizes="100vw"
            priority
            quality={92}
          />
          <div className="flex flex-wrap justify-between gap-3 pt-3">
            <p className="eyebrow-sm text-ink/40">Illustrative campaign imagery</p>
            <p className="eyebrow-sm text-ink/40">
              {concept.sector} / Concept {concept.number}
            </p>
          </div>
        </div>

        <section className="section">
          <div className="container-ed">
            <SectionIndex number="01" label="The brief" aside="Objective & audience" />
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <Eyebrow tone="olive">Objective</Eyebrow>
                <p className="body-copy mt-4 max-w-[46ch]">{concept.objective}</p>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <Eyebrow tone="olive">Audience</Eyebrow>
                <p className="body-copy mt-4 max-w-[46ch]">{concept.audience}</p>
              </div>
            </div>

            <div className="mt-14 grid gap-6 border-t border-[var(--hairline)] pt-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Eyebrow tone="olive">Creative concept</Eyebrow>
                <h2 className="display-2 mt-5 max-w-[12ch]">{concept.title}</h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="display-3 max-w-[38ch]">{concept.idea}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-y border-[var(--hairline)] bg-stone">
          <div className="container-ed">
            <SectionIndex number="02" label="Creator selection" aside="Fit criteria" />
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <h2 className="display-2 max-w-[13ch]">
                  Why these creators, and not simply the largest ones.
                </h2>
                <p className="body-copy mt-5 max-w-[34ch]">
                  For a concept, the criteria matter more than the names. This is
                  the shortlist logic we would apply to a real brief.
                </p>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <ol>
                  {concept.creatorCriteria.map((criterion, index) => (
                    <li
                      key={criterion}
                      className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-[var(--hairline)] py-5"
                    >
                      <span className="index-number text-[0.6875rem]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[0.9375rem] leading-relaxed text-ink/72">
                        {criterion}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-ed">
            <SectionIndex number="03" label="Deliverables" aside="Proposed scope" />
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <h2 className="display-2 max-w-[12ch]">What would be produced.</h2>
                <p className="body-copy mt-5 max-w-[34ch]">
                  A realistic scope for the idea, including formats and usage —
                  not an open-ended content request.
                </p>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <ul>
                  {concept.deliverables.map((item, index) => (
                    <li
                      key={item}
                      className="flex gap-5 border-t border-[var(--hairline)] py-4"
                    >
                      <span className="index-number pt-0.5 text-[0.6875rem]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.9375rem] leading-relaxed text-ink/72">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section border-y border-[var(--hairline)]">
          <div className="container-ed">
            <SectionIndex number="04" label="Measurement" aside="Agreed before launch" />
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <h2 className="display-2 max-w-[13ch]">
                  How the work would be judged.
                </h2>
                <p className="body-copy mt-5 max-w-[34ch]">
                  We would agree these measures before production. No metric is
                  chosen after the fact to make the campaign look better.
                </p>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                {concept.measurement.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-5 border-t border-[var(--hairline)] py-5"
                  >
                    <span className="index-number text-[0.6875rem]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.9375rem] leading-relaxed text-ink/72">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-stone">
          <div className="container-ed">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <Eyebrow tone="olive">Art direction</Eyebrow>
                <h2 className="display-2 mt-5 max-w-[13ch]">
                  One visual language, held across every asset.
                </h2>
                <p className="body-copy mt-5 max-w-[38ch]">{concept.palette}</p>

                <div className="mt-8">
                  <p className="eyebrow-sm text-ink/40">Proposed palette</p>
                  <div className="mt-3 flex gap-2">
                    {concept.paletteColors.map((color) => (
                      <span
                        key={color}
                        className="h-12 w-12 border border-[var(--hairline)]"
                        style={{ backgroundColor: color }}
                        title={color}
                      >
                        <span className="sr-only">{color}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="border-l border-[var(--color-olive)] pl-6">
                  <p className="eyebrow-sm text-olive-deep">
                    What this concept demonstrates
                  </p>
                  <p className="display-3 mt-4 max-w-[32ch]">{concept.demonstration}</p>
                </div>
                <p className="mt-8 max-w-[56ch] text-[0.8125rem] leading-relaxed text-ink/50">
                  {conceptDisclaimer}
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      <section className="border-t border-[var(--hairline)]">
        <div className="container-ed py-10">
          <Link href={`/work/${next.slug}`} className="group flex items-center justify-between gap-6">
            <div>
              <p className="eyebrow-sm text-ink/40">Next concept</p>
              <p className="display-2 mt-2">{next.title}</p>
              <p className="meta mt-1 text-ink/45">
                {next.brand} · {next.sector}
              </p>
            </div>
            <span className="text-ink/50 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
              <ArrowUpRight />
            </span>
          </Link>
        </div>
      </section>

      <CtaBand
        eyebrow="A similar brief?"
        title={
          <>
            A concept is a starting point. The brief makes it{" "}
            <em className="italic text-[#a3a888]">real.</em>
          </>
        }
        primaryLabel="Start a Campaign"
        primaryHref="/for-brands#enquire"
        secondaryLabel="Read Our Process"
        secondaryHref="/process"
      />
    </>
  );
}
