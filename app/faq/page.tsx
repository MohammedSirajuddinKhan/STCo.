import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/accordion";
import { CtaBand } from "@/components/cta-band";
import { ArrowUpRight, Eyebrow, PageIntro } from "@/components/ui";
import { faqGroups } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "FAQ",
  description:
    "Answers about ST CO. services, creator eligibility, campaign matching, fees, timelines, deliverables, usage rights, payments, and reporting.",
  path: "/faq",
});

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  };

  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title={
          <>
            Questions, answered without the{" "}
            <em className="italic text-olive-deep">sales voice.</em>
          </>
        }
        lede="Practical answers about how ST CO. works, what creators can expect, and what is agreed before a campaign begins. If your question is not here, ask it directly."
        meta="Last reviewed October 2026"
      >
        <Link href="/contact" className="btn btn--solid">
          Ask a question
          <ArrowUpRight />
        </Link>
      </PageIntro>

      <section className="border-b border-[var(--hairline)] bg-stone py-6">
        <div className="container-ed">
          <nav aria-label="FAQ sections">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {faqGroups.map((group) => (
                <li key={group.number}>
                  <a
                    href={`#group-${group.number}`}
                    className="group flex items-baseline gap-3 border-t border-[var(--hairline)] py-3 text-[0.8125rem] text-ink/65 transition-colors hover:text-ink"
                  >
                    <span className="index-number text-[0.6875rem]">{group.number}</span>
                    <span>{group.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div className="container-ed section">
        {faqGroups.map((group) => (
          <section
            key={group.number}
            id={`group-${group.number}`}
            className="scroll-mt-28 pb-14 pt-2 first:pt-0 sm:pb-20"
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <Eyebrow tone="olive">{group.number}</Eyebrow>
                  <h2 className="display-2 mt-4 max-w-[12ch]">{group.title}</h2>
                  <p className="mt-4 max-w-[26ch] text-[0.75rem] leading-relaxed text-ink/42">
                    {group.items.length} questions
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <Accordion items={group.items} />
              </div>
            </div>
          </section>
        ))}

        <div className="mt-14 grid gap-8 border-t border-[var(--hairline)] pt-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display-2 max-w-[14ch]">
              Still unsure whether we are the right{" "}
              <em className="italic text-olive-deep">fit?</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="body-copy max-w-[48ch]">
              A short conversation is more useful than a long FAQ. Tell us what
              you are planning, even if it is still taking shape. If we are not
              the right agency for it, we will say so.
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <Link href="/contact" className="link-arrow">
                Contact ST CO.
                <ArrowUpRight />
              </Link>
              <Link href="/for-brands#enquire" className="link-arrow">
                Send a brand brief
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CtaBand
        eyebrow="Clear answers, clear scope"
        title={
          <>
            The best way to find out is a direct{" "}
            <em className="italic text-[#a3a888]">conversation.</em>
          </>
        }
        primaryLabel="Start a Campaign"
        primaryHref="/for-brands#enquire"
        secondaryLabel="Open Contact Options"
        secondaryHref="/contact"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
