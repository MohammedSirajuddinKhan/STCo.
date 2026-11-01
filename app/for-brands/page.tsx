import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { ImagePlate } from "@/components/image-plate";
import { ArrowUpRight, EmailLink, Eyebrow, PageIntro, SectionIndex } from "@/components/ui";
import { brandPreparation, collaborationTypes, processSteps } from "@/lib/content";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "For Brands",
  description:
    "Find the right creators for your next campaign. ST CO. handles creator matching, campaign planning, coordination, and reporting for brands across India.",
  path: "/for-brands",
});

const matchingSteps = [
  {
    number: "01",
    title: "Define the fit",
    body: "We turn the objective into criteria: category, audience, location, tone, format, and the role each creator would play.",
  },
  {
    number: "02",
    title: "Research the market",
    body: "We review recent work, audience signals, and relevant brand history — not only follower counts or a directory filter.",
  },
  {
    number: "03",
    title: "Present the shortlist",
    body: "Every recommendation comes with a reason, indicative fees, and any availability or fit risks flagged upfront.",
  },
  {
    number: "04",
    title: "Align before production",
    body: "Deliverables, usage, exclusivity, dates, approvals, and payment terms are confirmed in writing with both sides.",
  },
];

export default function ForBrandsPage() {
  return (
    <>
      <PageIntro
        eyebrow="For Brands"
        title={
          <>
            Find the right people for your next{" "}
            <em className="italic text-olive-deep">campaign.</em>
          </>
        }
        lede="You do not need a finished brief to start. Bring the objective, the audience, and an honest budget range. We will help turn it into a campaign that can actually be delivered."
        image="/images/skincare.jpg"
        imageAlt="Skincare products arranged on a table with a mirror and flowers"
        imageCaption="Product study. Illustrative photography."
        meta="Brand enquiries · India"
      >
        <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap">
          <Link href="#enquire" className="btn btn--solid">
            Send a brief
            <ArrowUpRight />
          </Link>
          <Link href="/work" className="btn">
            See concept work
          </Link>
        </div>
      </PageIntro>

      <section className="section">
        <div className="container-ed">
          <SectionIndex number="01" label="The starting point" aside="What we solve" />
          <div className="mt-9 grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="display-2 max-w-[14ch]">
                A considered campaign starts before the creator list.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 lg:pt-2">
              <p className="lede">
                Most brand–creator campaigns do not fail because the content is
                bad. They fail because the objective was vague, the creator was
                chosen for the wrong reason, or nobody agreed what “done” meant.
              </p>
              <p className="body-copy mt-5">
                ST CO. works on the decisions that shape the campaign: what it
                needs to achieve, which creators genuinely fit, what is being
                produced, how it can be used, and how the result will be judged.
                We can join at the planning stage or step in when the brief is
                already written.
              </p>

              <div className="mt-10 grid gap-6 border-t border-[var(--hairline)] pt-6 sm:grid-cols-2">
                <div>
                  <p className="eyebrow-sm text-olive-deep">We can help you decide</p>
                  <ul className="mt-4 space-y-2 text-[0.875rem] leading-relaxed text-ink/65">
                    <li>Which creators are actually relevant</li>
                    <li>What a realistic scope looks like</li>
                    <li>How to structure deliverables and usage</li>
                    <li>What to measure, and what not to claim</li>
                  </ul>
                </div>
                <div>
                  <p className="eyebrow-sm text-olive-deep">We will not pretend</p>
                  <ul className="mt-4 space-y-2 text-[0.875rem] leading-relaxed text-ink/65">
                    <li>That reach guarantees sales</li>
                    <li>That a large following means a good fit</li>
                    <li>That every creator is available</li>
                    <li>That a campaign can run without a clear owner</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--hairline)] bg-stone">
        <div className="container-ed">
          <SectionIndex number="02" label="Creator matching" aside="Four stages" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {matchingSteps.map((step) => (
              <article key={step.number} className="border-t border-[var(--hairline)] pt-5">
                <span className="index-number text-[0.8125rem]">{step.number}</span>
                <h3 className="display-3 mt-4">{step.title}</h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-ink/62">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-[62ch] border-t border-[var(--hairline)] pt-5 text-[0.75rem] leading-relaxed text-ink/45">
            Creator selection is a recommendation, not a guarantee of
            performance. Final participation depends on availability, terms, and
            the creator’s own agreement.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-ed">
          <SectionIndex number="03" label="Collaboration types" aside="What we coordinate" />
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="display-2 max-w-[14ch]">
                Different campaigns need different{" "}
                <em className="italic text-olive-deep">shapes.</em>
              </h2>
              <p className="body-copy mt-5 max-w-[34ch]">
                A one-off launch and an always-on ambassador programme are not
                the same brief. We will recommend the structure that fits the
                objective, not the one that is easiest to sell.
              </p>
            </div>
            <div className="lg:col-span-8">
              <dl>
                {collaborationTypes.map((type, index) => (
                  <div
                    key={type.title}
                    className="grid gap-2 border-t border-[var(--hairline)] py-5 sm:grid-cols-[3rem_13rem_1fr] sm:gap-5"
                  >
                    <span className="index-number pt-1 text-[0.6875rem]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <dt className="display-4">{type.title}</dt>
                    <dd className="text-[0.875rem] leading-relaxed text-ink/62">
                      {type.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--hairline)]">
        <div className="container-ed">
          <SectionIndex number="04" label="Before we begin" aside="What helps" />
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <ImagePlate
                src="/images/cafe.jpg"
                alt="A café table with coffee, pastries, and fresh fruit"
                className="aspect-[4/5] w-full"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <p className="plate-caption">
                <span>Category study — café</span>
                <span>Illustrative photography</span>
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <h2 className="display-2 max-w-[16ch]">
                What we need from you — and what can wait.
              </h2>
              <p className="body-copy mt-5 max-w-[46ch]">
                A useful brief does not need to be a twenty-page document. These
                details let us recommend a scope honestly rather than guess.
              </p>
              <ul className="mt-8 grid gap-0 sm:grid-cols-2">
                {brandPreparation.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-3 border-t border-[var(--hairline)] py-3.5 text-[0.875rem] leading-relaxed text-ink/70"
                  >
                    <span className="index-number pt-0.5 text-[0.625rem]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[0.75rem] leading-relaxed text-ink/45">
                A budget range is optional in the form, but it helps. If the
                budget cannot support the objective, we will say so and suggest a
                smaller scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-ed">
          <SectionIndex number="05" label="Campaign workflow" aside="Five stages" />
          <div className="mt-10 grid gap-8 md:grid-cols-5">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="border-t border-[var(--hairline)] pt-4 md:border-t-0 md:border-l md:pl-5 md:pt-0 first:md:border-l-0 first:md:pl-0"
              >
                <span className="index-number text-[0.75rem]">{step.number}</span>
                <h3 className="display-4 mt-3">{step.title}</h3>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink/55">
                  {step.short}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[var(--hairline)] pt-5">
            <Link href="/process" className="link-arrow">
              Read the full process
              <ArrowUpRight />
            </Link>
            <p className="text-[0.75rem] text-ink/45">
              Scope, fees, and timelines are agreed per project.
            </p>
          </div>
        </div>
      </section>

      <section id="enquire" className="scroll-mt-24 border-t border-[var(--hairline)] bg-stone">
        <div className="container-ed section">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Eyebrow tone="olive">Brand enquiry</Eyebrow>
              <h2 className="display-1 mt-6 max-w-[12ch]">
                Tell us about the{" "}
                <em className="italic text-olive-deep">campaign.</em>
              </h2>
              <p className="body-copy mt-6 max-w-[36ch]">
                Share what you know and what is still open. If there is a fit, we
                will reply with a short written scope and clear next steps.
              </p>

              <div className="mt-8 space-y-4 border-t border-[var(--hairline)] pt-6 text-[0.8125rem]">
                <div>
                  <p className="eyebrow-sm text-ink/40">Prefer email?</p>
                  <EmailLink
                    subject="Brand enquiry for ST CO."
                    className="mt-1 block break-all text-ink/75 underline decoration-[var(--hairline-strong)] underline-offset-4 hover:text-ink"
                  >
                    {site.email}
                  </EmailLink>
                </div>
                <div>
                  <p className="eyebrow-sm text-ink/40">Or call</p>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="mt-1 block text-ink/75 hover:text-ink"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
                <p className="text-[0.75rem] leading-relaxed text-ink/45">
                  We do not add enquiries to a mailing list. Details are used
                  only to respond to this conversation.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <EnquiryForm variant="brand" id="brand-enquiry-form" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
