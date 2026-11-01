import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { ImagePlate } from "@/components/image-plate";
import { ArrowUpRight, Eyebrow, PageIntro, SectionIndex } from "@/components/ui";
import { processNote, processSteps } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Our Process",
  description:
    "The ST CO. campaign process: understanding the brief, matching creators, agreeing deliverables, coordinating production, and reviewing performance.",
  path: "/process",
});

const agreementPoints = [
  "What is being delivered, in what format, and by when",
  "The fee, payment schedule, and who is responsible for creator payment",
  "Usage rights: channels, territory, duration, and paid media",
  "Who approves content, how many revision rounds, and the response window",
  "What will be measured, when, and in what form it will be reported",
];

export default function ProcessPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our Process"
        title={
          <>
            A clear process, from the first brief to the{" "}
            <em className="italic text-olive-deep">wrap-up.</em>
          </>
        }
        lede="Five stages, each with a defined output. The detail changes by project; the order and the honesty do not."
        image="/images/camera.jpg"
        imageAlt="A camera and production equipment arranged in a studio"
        imageCaption="Production study. Illustrative photography."
        meta="Scope, timelines, fees, and reporting agreed per project"
      >
        <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap">
          <Link href="/for-brands#enquire" className="btn btn--solid">
            Start a brief
            <ArrowUpRight />
          </Link>
          <Link href="/services" className="btn">
            View services
          </Link>
        </div>
      </PageIntro>

      <section className="section-sm border-b border-[var(--hairline)] bg-stone">
        <div className="container-ed">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <Eyebrow tone="olive">The principle</Eyebrow>
            </div>
            <div className="lg:col-span-6">
              <p className="display-3 max-w-[34ch]">
                A campaign should be understood by everyone involved before a
                single frame is filmed.
              </p>
            </div>
            <div className="lg:col-span-3">
              <p className="text-[0.8125rem] leading-relaxed text-ink/55">
                {processNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-ed">
          <SectionIndex number="01" label="The workflow" aside="Five stages" />

          <div className="mt-12">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className="grid gap-6 border-t border-[var(--hairline)] py-10 sm:gap-8 lg:grid-cols-12 lg:py-14"
              >
                <div className="lg:col-span-3">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-[2.75rem] leading-none text-olive sm:text-[3.5rem]">
                      {step.number}
                    </span>
                    <span className="eyebrow-sm max-w-[8rem] text-ink/40">
                      Stage {index + 1} of 5
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <h2 className="display-2 max-w-[16ch]">{step.title}</h2>
                  <p className="body-copy mt-5 max-w-[44ch]">{step.description}</p>
                </div>

                <div className="lg:col-span-4">
                  <div className="border-l border-[var(--color-olive)] pl-5">
                    <p className="eyebrow-sm text-olive-deep">What you receive</p>
                    <p className="mt-3 text-[0.875rem] leading-relaxed text-ink/65">
                      {step.youGet}
                    </p>
                  </div>
                </div>
              </article>
            ))}
            <div className="border-t border-[var(--hairline)]" />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--hairline)]">
        <div className="container-ed py-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <ImagePlate
                src="/images/cafe.jpg"
                alt="A café table with coffee and a shared breakfast"
                className="aspect-[4/3] w-full"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="flex flex-col justify-center lg:col-span-7 lg:col-start-6">
              <p className="eyebrow text-olive-deep">In practice</p>
              <p className="display-3 mt-4 max-w-[34ch]">
                Most projects take weeks, not days. The schedule is set by
                approvals, product dispatch, and creator availability — not by how
                quickly a brief can be sent.
              </p>
              <p className="body-copy mt-5 max-w-[48ch]">
                We would rather agree a realistic window at the start than
                compress a production and compromise the work. If a deadline is
                fixed and immovable, we will tell you what is possible within it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-ed">
          <SectionIndex number="02" label="Agreed per project" aside="In writing" />
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="display-2 max-w-[13ch]">
                Five things that are never left to{" "}
                <em className="italic text-olive-deep">assumption.</em>
              </h2>
              <p className="body-copy mt-5 max-w-[34ch]">
                Every project is different, so we do not publish fixed packages.
                These terms are confirmed for the specific engagement.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {agreementPoints.map((point, index) => (
                <div
                  key={point}
                  className="flex gap-5 border-t border-[var(--hairline)] py-5"
                >
                  <span className="index-number text-[0.75rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink/72">
                    {point}
                  </p>
                </div>
              ))}
              <div className="border-t border-[var(--hairline)] pt-5">
                <Link href="/faq" className="link-arrow">
                  Read the FAQs
                  <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--hairline)] bg-stone">
        <div className="container-ed">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Eyebrow tone="olive">Where projects go wrong</Eyebrow>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="border-t border-[var(--hairline)] pt-5">
                  <p className="display-3">A brief that is really a mood board</p>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-ink/62">
                    Without a clear objective and deliverable specification,
                    everyone optimises for a different outcome. The content may be
                    beautiful and still be unusable.
                  </p>
                </div>
                <div className="border-t border-[var(--hairline)] pt-5">
                  <p className="display-3">Usage rights discussed afterwards</p>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-ink/62">
                    Asking for paid media, whitelisting, or extended use after
                    production changes the value of the work. It should be priced
                    and agreed at the start.
                  </p>
                </div>
              </div>
              <p className="mt-8 max-w-[58ch] text-[0.8125rem] leading-relaxed text-ink/50">
                The process above exists to prevent these problems. It is not
                glamorous, but it is the reason a campaign can be reviewed on its
                results rather than its arguments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="A brief in mind?"
        title={
          <>
            Start with the objective. We will help with the{" "}
            <em className="italic text-[#a3a888]">rest.</em>
          </>
        }
        primaryLabel="Start a Campaign"
        primaryHref="/for-brands#enquire"
        secondaryLabel="Ask a Question"
        secondaryHref="/contact"
      />
    </>
  );
}
