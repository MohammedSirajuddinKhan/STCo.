import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/enquiry-form";
import { ImagePlate } from "@/components/image-plate";
import { ArrowUpRight, EmailLink, Eyebrow, PageIntro, SectionIndex } from "@/components/ui";
import {
  creatorCategories,
  creatorExpectations,
  creatorPreparation,
} from "@/lib/content";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "For Creators",
  description:
    "Introduce your work to ST CO. Creator applications for micro-creators, UGC creators, photographers, and established influencers based in India.",
  path: "/for-creators",
});

const matching = [
  {
    number: "01",
    title: "We read your application",
    body: "We look at your recent work, your audience, and the formats you actually enjoy making. A media kit helps, but it is not the deciding factor.",
  },
  {
    number: "02",
    title: "You are considered for briefs",
    body: "When a brand brief matches your category, location, and style, your work is considered alongside other relevant creators.",
  },
  {
    number: "03",
    title: "We contact you directly",
    body: "If there is a genuine fit, we get in touch with the specific opportunity, deliverables, timeline, and fee before anything is agreed.",
  },
];

export default function ForCreatorsPage() {
  return (
    <>
      <PageIntro
        eyebrow="For Creators"
        title={
          <>
            Good opportunities begin with the right{" "}
            <em className="italic text-olive-deep">connection.</em>
          </>
        }
        lede="ST CO. works with creators who care about what they make. Introduce your work, and we will consider you when a brand brief genuinely fits."
        image="/images/creator-recording.jpg"
        imageAlt="A creator recording a video at home with a camera on a tripod"
        imageCaption="Creator study. Illustrative photography."
        meta="Creator applications · India · 18+"
      >
        <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap">
          <Link href="#apply" className="btn btn--solid">
            Apply as a creator
            <ArrowUpRight />
          </Link>
          <Link href="/faq" className="btn">
            Creator FAQs
          </Link>
        </div>
      </PageIntro>

      <section className="section">
        <div className="container-ed">
          <SectionIndex number="01" label="Who can apply" aside="Open to" />
          <div className="mt-9 grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="display-2 max-w-[13ch]">
                You do not need a large following. You do need a point of view.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="lede">
                We are interested in creators whose audience trusts them and whose
                work has a clear identity. That can be twelve thousand followers
                in one city, or a much larger audience built over years.
              </p>
              <div className="mt-8 grid gap-6 border-t border-[var(--hairline)] pt-6 sm:grid-cols-2">
                <ul className="space-y-3 text-[0.9375rem] leading-relaxed text-ink/70">
                  <li>Creators and content makers aged 18 or over</li>
                  <li>Based in India, with an audience here</li>
                  <li>Active on at least one public platform</li>
                  <li>Recent work you are happy to be judged on</li>
                </ul>
                <div className="bg-stone p-5">
                  <p className="eyebrow-sm text-olive-deep">No passwords, ever</p>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink/65">
                    ST CO. will never ask for your social media login details.
                    If someone claiming to represent us does, do not share them
                    and contact us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--hairline)] bg-stone">
        <div className="container-ed">
          <SectionIndex number="02" label="Creator categories" aside="Where we look" />
          <div className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {creatorCategories.map((category, index) => (
              <div
                key={category}
                className="flex items-baseline gap-4 border-t border-[var(--hairline)] py-4"
              >
                <span className="index-number text-[0.6875rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="display-3">{category}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[60ch] text-[0.75rem] leading-relaxed text-ink/45">
            Categories help us organise applications; they do not limit who we
            consider. If your work sits between categories, describe it in your
            application.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-ed">
          <SectionIndex number="03" label="How matching works" aside="No guarantees" />
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="grid gap-8">
                {matching.map((step) => (
                  <article
                    key={step.number}
                    className="grid grid-cols-[2.5rem_1fr] gap-5 border-t border-[var(--hairline)] pt-5 sm:grid-cols-[3.5rem_1fr]"
                  >
                    <span className="index-number text-[0.875rem]">{step.number}</span>
                    <div>
                      <h3 className="display-3">{step.title}</h3>
                      <p className="mt-2 max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink/65">
                        {step.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-10 border border-[var(--hairline-strong)] p-6">
                <p className="eyebrow-sm text-olive-deep">An honest note</p>
                <p className="mt-3 max-w-[58ch] text-[0.875rem] leading-relaxed text-ink/70">
                  Applying does not guarantee acceptance, representation, a
                  campaign, a particular fee, or any level of earnings. We contact
                  creators when a specific brief fits. You are always free to
                  decline an opportunity.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <ImagePlate
                src="/images/creator-tutorial.jpg"
                alt="A creator filming a beauty tutorial at home"
                className="aspect-[4/5] w-full"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              <p className="plate-caption">
                <span>Creator study</span>
                <span>Illustrative photography</span>
              </p>
              <p className="mt-6 border-t border-[var(--hairline)] pt-5 text-[0.8125rem] leading-relaxed text-ink/55">
                The strongest applications show a clear body of recent work, a
                defined audience, and a realistic sense of the formats the
                creator wants to be hired for.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--hairline)]">
        <div className="container-ed">
          <SectionIndex number="04" label="Preparation" aside="What to have ready" />
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <h2 className="display-2 max-w-[16ch]">
                What creators should prepare.
              </h2>
              <p className="body-copy mt-5 max-w-[44ch]">
                You do not need a polished deck. A clear set of recent work and an
                honest sense of your audience is more useful than a long media
                kit.
              </p>
              <ul className="mt-8">
                {creatorPreparation.map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-4 border-t border-[var(--hairline)] py-3.5 text-[0.875rem] leading-relaxed text-ink/70"
                  >
                    <span className="index-number pt-0.5 text-[0.625rem]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <h2 className="display-2 max-w-[14ch]">
                What we expect from a partnership.
              </h2>
              <ul className="mt-8">
                {creatorExpectations.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-t border-[var(--hairline)] py-3.5 text-[0.875rem] leading-relaxed text-ink/70"
                  >
                    <span className="mt-[0.65em] h-px w-2.5 shrink-0 bg-olive" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.75rem] leading-relaxed text-ink/45">
                These expectations apply to agreed collaborations, not to the act
                of applying.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 border-t border-[var(--hairline)] bg-stone">
        <div className="container-ed section">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Eyebrow tone="olive">Creator application</Eyebrow>
              <h2 className="display-1 mt-6 max-w-[12ch]">
                Introduce your{" "}
                <em className="italic text-olive-deep">work.</em>
              </h2>
              <p className="body-copy mt-6 max-w-[36ch]">
                Tell us what you make and who it is for. We keep applications on
                file for relevant briefs and will contact you if there is a fit.
              </p>

              <div className="mt-8 space-y-4 border-t border-[var(--hairline)] pt-6 text-[0.8125rem]">
                <div>
                  <p className="eyebrow-sm text-ink/40">Questions first?</p>
                  <EmailLink
                    subject="Creator question for ST CO."
                    className="mt-1 block break-all text-ink/75 underline decoration-[var(--hairline-strong)] underline-offset-4 hover:text-ink"
                  >
                    {site.email}
                  </EmailLink>
                </div>
                <div>
                  <p className="eyebrow-sm text-ink/40">Instagram</p>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 text-ink/75 hover:text-ink"
                  >
                    {site.instagramHandle} <ArrowUpRight />
                  </a>
                </div>
                <p className="text-[0.75rem] leading-relaxed text-ink/45">
                  Never send passwords or sensitive identity documents through
                  this form. If documents are needed later, we will ask for them
                  separately.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <EnquiryForm variant="creator" id="creator-application-form" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
