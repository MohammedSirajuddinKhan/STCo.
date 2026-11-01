import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { ImagePlate } from "@/components/image-plate";
import { ArrowUpRight, Eyebrow, PageIntro, SectionIndex } from "@/components/ui";
import { conceptDisclaimer, concepts } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Work",
  description:
    "Concept campaigns by ST CO. — detailed, speculative planning studies covering creator selection, creative direction, deliverables, and measurement. Clearly labelled, not client work.",
  path: "/work",
});

export default function WorkPage() {
  const [featured, ...rest] = concepts;

  return (
    <>
      <PageIntro
        eyebrow="Work"
        title={
          <>
            Work we would make, documented in{" "}
            <em className="italic text-olive-deep">full.</em>
          </>
        }
        lede="ST CO. has no verified client campaigns published yet. Everything below is a concept project: a complete planning study, clearly labelled as speculative."
        meta="Concept projects · Not client work"
      >
        <Link href="/for-brands#enquire" className="btn btn--solid">
          Discuss a brief
          <ArrowUpRight />
        </Link>
      </PageIntro>

      <section className="section-sm border-b border-[var(--hairline)] bg-stone">
        <div className="container-ed">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Eyebrow tone="olive">A note on this page</Eyebrow>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[0.9375rem] leading-relaxed text-ink/72">
                {conceptDisclaimer}
              </p>
            </div>
            <div className="lg:col-span-2">
              <p className="eyebrow-sm text-ink/40">Last reviewed</p>
              <p className="mt-1 text-[0.8125rem] text-ink/60">October 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-ed">
          <SectionIndex number="01" label="Concept projects" aside="Three studies" />

          <article className="mt-12">
            <Link href={`/work/${featured.slug}`} className="group block">
              <div className="relative">
                <ImagePlate
                  src={featured.image}
                  alt={featured.alt}
                  className="aspect-[4/3] w-full sm:aspect-[16/9]"
                  sizes="100vw"
                />
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <p className="eyebrow-sm text-olive-deep">
                    Concept project — {featured.number}
                  </p>
                  <p className="eyebrow-sm text-ink/40">
                    {featured.sector} · {featured.year}
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-6 border-t border-[var(--hairline)] pt-5 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <h2 className="display-1 max-w-[14ch]">{featured.title}</h2>
                  <p className="meta mt-3 text-ink/45">
                    Illustrative brand: {featured.brand}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <p className="max-w-[42ch] text-[0.9375rem] leading-relaxed text-ink/65">
                    {featured.summary}
                  </p>
                  <span className="link-arrow mt-5 text-ink">
                    Read the concept
                    <ArrowUpRight />
                  </span>
                </div>
              </div>
            </Link>
          </article>

          <div className="mt-20 grid gap-12 sm:grid-cols-2 sm:gap-8">
            {rest.map((concept) => (
              <article key={concept.slug}>
                <Link href={`/work/${concept.slug}`} className="group block">
                  <ImagePlate
                    src={concept.image}
                    alt={concept.alt}
                    className="aspect-[4/5] w-full"
                    sizes="(max-width: 640px) 100vw, 48vw"
                  />
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow-sm text-olive-deep">
                        Concept project — {concept.number}
                      </p>
                      <h2 className="display-2 mt-2">{concept.title}</h2>
                      <p className="meta mt-2 text-ink/45">
                        {concept.brand} · {concept.sector}
                      </p>
                    </div>
                    <span className="pt-1 text-ink/50 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight />
                    </span>
                  </div>
                  <p className="mt-4 max-w-[42ch] border-t border-[var(--hairline)] pt-4 text-[0.875rem] leading-relaxed text-ink/62">
                    {concept.summary}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--hairline)] bg-stone">
        <div className="container-ed">
          <SectionIndex number="02" label="Future case studies" aside="Our publishing standard" />
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="display-2 max-w-[14ch]">
                When real work is published here, it will meet four{" "}
                <em className="italic text-olive-deep">conditions.</em>
              </h2>
              <p className="body-copy mt-5 max-w-[34ch]">
                We would rather publish nothing than borrow credibility from work
                we did not do or results we cannot verify.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="border-t border-[var(--hairline)] pt-5">
                  <p className="display-3">Written approval</p>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-ink/62">
                    The client and every featured creator have agreed to be named
                    and to have the work shown publicly.
                  </p>
                </div>
                <div className="border-t border-[var(--hairline)] pt-5">
                  <p className="display-3">Verified results</p>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-ink/62">
                    Any performance figures come from platform exports or the
                    client’s own reporting, with the measurement window stated.
                  </p>
                </div>
                <div className="border-t border-[var(--hairline)] pt-5">
                  <p className="display-3">A real strategic account</p>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-ink/62">
                    The objective, audience, creator criteria, deliverables, and
                    what we would do differently — not just a gallery.
                  </p>
                </div>
                <div className="border-t border-[var(--hairline)] pt-5">
                  <p className="display-3">Clear attribution</p>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-ink/62">
                    Who did what, which partners were involved, and which parts of
                    the result can honestly be attributed to the campaign.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Have a similar brief?"
        title={
          <>
            Concepts are useful. A real brief is{" "}
            <em className="italic text-[#a3a888]">better.</em>
          </>
        }
        primaryLabel="Start a Campaign"
        primaryHref="/for-brands#enquire"
        secondaryLabel="Ask About Our Approach"
        secondaryHref="/contact"
      />
    </>
  );
}
