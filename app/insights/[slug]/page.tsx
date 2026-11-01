import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { ImagePlate } from "@/components/image-plate";
import { ArrowUpRight, EmailLink, Eyebrow } from "@/components/ui";
import { insights, type ArticleBlock } from "@/lib/content";
import { absoluteUrl, pageMeta, site, siteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) return {};

  return pageMeta({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
    type: "article",
  });
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "p":
      return <p>{block.text}</p>;
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    case "list":
      return block.ordered ? (
        <ol>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = insights.find((item) => item.slug === slug);
  if (!article) notFound();

  const related = insights
    .filter((item) => item.slug !== article.slug)
    .sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category))
    .slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.dateISO,
    author: { "@type": "Organization", name: "ST CO. Editorial" },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: siteUrl,
    },
    image: absoluteUrl(article.image),
    mainEntityOfPage: absoluteUrl(`/insights/${article.slug}`),
    articleSection: article.category,
  };

  return (
    <>
      <article>
        <header className="border-b border-[var(--hairline)] pb-12 pt-10 sm:pb-16 sm:pt-14">
          <div className="container-ed">
            <Link
              href="/insights"
              className="eyebrow-sm inline-flex items-center gap-2 text-ink/50 transition-colors hover:text-ink"
            >
              <span aria-hidden="true">←</span> All insights
            </Link>

            <div className="mt-10 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="eyebrow-sm text-olive-deep">{article.category}</span>
                  <span className="h-px w-6 bg-[var(--hairline-strong)]" aria-hidden="true" />
                  <span className="eyebrow-sm text-ink/40">{article.readingTime}</span>
                </div>
                <h1 className="display-1 mt-5 max-w-[19ch] balance">{article.title}</h1>
                <p className="lede mt-6 max-w-[54ch]">{article.excerpt}</p>
              </div>
              <div className="lg:col-span-3 lg:col-start-10">
                <dl className="border-t border-[var(--hairline)] text-[0.8125rem]">
                  <div className="flex justify-between gap-4 border-b border-[var(--hairline)] py-3">
                    <dt className="text-ink/40">Written by</dt>
                    <dd>ST CO. Editorial</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-[var(--hairline)] py-3">
                    <dt className="text-ink/40">Published</dt>
                    <dd>
                      <time dateTime={article.dateISO}>{article.date}</time>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-ink/40">Reading time</dt>
                    <dd>{article.readingTime}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </header>

        <div className="container-ed pt-8 sm:pt-10">
          <ImagePlate
            src={article.image}
            alt={article.alt}
            className="aspect-[4/3] w-full sm:aspect-[16/9]"
            sizes="100vw"
            priority
            quality={92}
          />
          <p className="plate-caption">
            <span>Illustrative photography</span>
            <span>ST CO. field notes</span>
          </p>
        </div>

        <div className="container-ed section">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <aside className="order-2 lg:order-1 lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow-sm text-olive-deep">In this note</p>
                <ul className="mt-5 space-y-3">
                  {article.takeaways.map((takeaway) => (
                    <li
                      key={takeaway}
                      className="border-t border-[var(--hairline)] pt-3 text-[0.8125rem] leading-relaxed text-ink/65"
                    >
                      {takeaway}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-[var(--hairline)] pt-5">
                  <p className="text-[0.75rem] leading-relaxed text-ink/45">
                    Working on a campaign this touches? Send the brief and we
                    will tell you honestly whether we can help.
                  </p>
                  <Link href="/for-brands#enquire" className="link-arrow mt-4 text-ink">
                    Talk to ST CO.
                    <ArrowUpRight />
                  </Link>
                </div>
              </div>
            </aside>

            <div className="order-1 lg:order-2 lg:col-span-8 lg:col-start-5">
              <div className="article-prose max-w-[68ch]">
                {article.body.map((block, index) => (
                  <Block key={`${block.type}-${index}`} block={block} />
                ))}
              </div>

              <div className="mt-14 border-t border-[var(--hairline)] pt-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="eyebrow-sm text-olive-deep">ST CO. Editorial</p>
                    <p className="mt-2 max-w-[48ch] text-[0.8125rem] leading-relaxed text-ink/55">
                      Written and edited by ST CO. This note reflects our working
                      view, not legal, financial, or platform advice. No individual
                      author credentials are claimed.
                    </p>
                  </div>
                  <EmailLink className="link-arrow shrink-0 text-ink">
                    Reply by email
                    <ArrowUpRight />
                  </EmailLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="section border-t border-[var(--hairline)] bg-stone">
        <div className="container-ed">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <Eyebrow tone="olive">Continue reading</Eyebrow>
            <Link href="/insights" className="link-arrow text-ink">
              All insights
              <ArrowUpRight />
            </Link>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                className="group border-t border-[var(--hairline)] pt-5"
              >
                <p className="eyebrow-sm text-ink/45">{item.category}</p>
                <h2 className="display-2 mt-3 max-w-[20ch] transition-colors group-hover:text-olive-deep">
                  {item.title}
                </h2>
                <p className="meta mt-3 text-ink/40">
                  {item.date} · {item.readingTime}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Put a note into practice"
        title={
          <>
            A good brief is the beginning of better{" "}
            <em className="italic text-[#a3a888]">work.</em>
          </>
        }
        primaryLabel="Start a Campaign"
        primaryHref="/for-brands#enquire"
        secondaryLabel="Read Our Process"
        secondaryHref="/process"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
