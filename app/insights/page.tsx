import type { Metadata } from "next";
import Link from "next/link";
import { ImagePlate } from "@/components/image-plate";
import { ArrowUpRight, Eyebrow, PageIntro, SectionIndex } from "@/components/ui";
import { insights, insightsIntro } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Insights",
  description:
    "Working notes from ST CO. on choosing creators, writing useful briefs, understanding UGC, setting deliverables, and measuring creator campaigns honestly.",
  path: "/insights",
});

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title={
          <>
            Field notes on better{" "}
            <em className="italic text-olive-deep">collaborations.</em>
          </>
        }
        lede={insightsIntro}
        meta="ST CO. Editorial · No borrowed credentials"
      />

      <section className="section">
        <div className="container-ed">
          <SectionIndex number="01" label="Latest" aside="Featured note" />

          <article className="mt-10">
            <Link href={`/insights/${featured.slug}`} className="group grid gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <ImagePlate
                  src={featured.image}
                  alt={featured.alt}
                  className="aspect-[4/3] w-full"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
              <div className="flex flex-col justify-between lg:col-span-5">
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="eyebrow-sm text-olive-deep">{featured.category}</span>
                    <span className="h-px w-6 bg-[var(--hairline-strong)]" aria-hidden="true" />
                    <span className="eyebrow-sm text-ink/40">{featured.readingTime}</span>
                  </div>
                  <h2 className="display-1 mt-6 max-w-[15ch] transition-colors group-hover:text-olive-deep">
                    {featured.title}
                  </h2>
                  <p className="body-copy mt-5 max-w-[42ch]">{featured.excerpt}</p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-[var(--hairline)] pt-4">
                  <span className="meta text-ink/45">{featured.date}</span>
                  <span className="link-arrow text-ink">
                    Read
                    <ArrowUpRight />
                  </span>
                </div>
              </div>
            </Link>
          </article>

          <div className="mt-20">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-[var(--hairline)] pt-4">
              <Eyebrow tone="olive">All notes</Eyebrow>
              <span className="eyebrow-sm text-ink/40">
                {String(rest.length).padStart(2, "0")} more
              </span>
            </div>

            <div>
              {rest.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group grid gap-3 border-t border-[var(--hairline)] py-7 sm:grid-cols-[3rem_10rem_1fr_auto] sm:items-baseline sm:gap-6"
                >
                  <span className="index-number text-[0.75rem]">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                  <span className="eyebrow-sm text-ink/45">{article.category}</span>
                  <div>
                    <h3 className="display-2 max-w-[24ch] transition-colors group-hover:text-olive-deep">
                      {article.title}
                    </h3>
                    <p className="meta mt-2 text-ink/40">
                      {article.date} · {article.readingTime}
                    </p>
                  </div>
                  <span className="hidden text-ink/45 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block">
                    <ArrowUpRight />
                  </span>
                </Link>
              ))}
              <div className="border-t border-[var(--hairline)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm border-y border-[var(--hairline)] bg-stone">
        <div className="container-ed">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow tone="olive">Editorial policy</Eyebrow>
            </div>
            <div className="lg:col-span-7">
              <p className="display-3 max-w-[36ch]">
                Written by the agency, not attributed to invented experts.
              </p>
              <p className="body-copy mt-5 max-w-[56ch]">
                These notes are written and edited by ST CO. Editorial. We do not
                claim academic credentials, cite research we have not read, or
                present invented statistics. Where a view is an opinion, it is
                written as one. If a note becomes outdated, it is revised rather
                than quietly deleted.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
