import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { ImagePlate } from "@/components/image-plate";
import { ArrowUpRight, Eyebrow, PageIntro, SectionIndex } from "@/components/ui";
import { aboutBeliefs, principles } from "@/lib/content";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "ST CO. is an independent brand partnerships and creator marketing agency built on fit, clarity, and a considered process. Meet the agency and its founder.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About ST CO."
        title={
          <>
            Better collaborations start with{" "}
            <em className="italic text-olive-deep">common ground.</em>
          </>
        }
        lede="ST CO. exists to make brand–creator partnerships more considered — for the brand, for the creator, and for the audience watching."
        meta="Independent · India"
      >
        <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap">
          <Link href="/services" className="btn btn--solid">
            What we do
            <ArrowUpRight />
          </Link>
          <Link href="/contact" className="btn">
            Talk to us
          </Link>
        </div>
      </PageIntro>

      <section className="section">
        <div className="container-ed">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Eyebrow tone="olive">Purpose</Eyebrow>
              <h2 className="display-2 mt-6 max-w-[13ch]">
                A referral is not a strategy.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="lede">
                Brand and creator collaborations often begin with good intent and
                very little structure. A brand knows it wants to work with
                creators; a creator knows they want better partnerships. What is
                missing is the work in between: a clear objective, a relevant
                shortlist, an honest brief, and someone coordinating the details.
              </p>
              <p className="body-copy mt-6">
                ST CO. is built around that in-between work. We help brands define
                what they actually need, find creators whose audience and voice
                fit, agree what is being made and on what terms, and coordinate
                the campaign through to a written review. We work with
                small and medium businesses, growing consumer brands, and
                creators who take their work seriously.
              </p>
              <p className="body-copy mt-6">
                The agency is early-stage, and we are direct about that. We do not
                present borrowed client logos or invented results. Instead, we
                show how we think: through detailed concept campaigns, a defined
                process, and clear standards for the work.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-12">
            <div className="sm:col-span-7">
              <ImagePlate
                src="/images/studio.jpg"
                alt="Studio lighting and plants arranged on a set"
                className="aspect-[4/3] w-full"
                sizes="(max-width: 640px) 100vw, 58vw"
              />
              <p className="plate-caption">
                <span>Production study</span>
                <span>Illustrative photography</span>
              </p>
            </div>
            <div className="sm:col-span-5">
              <ImagePlate
                src="/images/stilllife.jpg"
                alt="Skincare bottles and flowers arranged on a table"
                className="aspect-[4/5] w-full"
                sizes="(max-width: 640px) 100vw, 40vw"
              />
              <p className="plate-caption">
                <span>Product study</span>
                <span>Warm monochrome</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--hairline)] bg-stone">
        <div className="container-ed">
          <SectionIndex number="01" label="How we think" aside="Three beliefs" />
          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {aboutBeliefs.map((belief, index) => (
              <article key={belief.title} className="border-t border-[var(--hairline)] pt-5">
                <div className="flex items-baseline gap-3">
                  <span className="index-number text-[0.8125rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-3 max-w-[12ch]">{belief.title}</h3>
                </div>
                <p className="mt-4 max-w-[34ch] text-[0.9375rem] leading-relaxed text-ink/65">
                  {belief.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-ed">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <SectionIndex number="02" label="Founder" aside="A note from Sirajuddin" />
              <div className="mt-10 border border-[var(--hairline)] bg-stone p-8">
                <span className="font-display text-6xl leading-none text-olive">SK</span>
                <p className="mt-8 display-4">{site.founder.name}</p>
                <p className="meta mt-1 text-ink/50">{site.founder.role}</p>
                <div className="mt-8 border-t border-[var(--hairline)] pt-5">
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow text-ink"
                  >
                    Instagram {site.instagramHandle}
                    <ArrowUpRight />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 lg:pl-10">
              <Eyebrow tone="olive">In his words</Eyebrow>
              <blockquote className="mt-6">
                <p className="display-2 max-w-[24ch] text-ink">
                  “{site.founder.statement}”
                </p>
              </blockquote>
              <div className="mt-8 flex flex-col gap-4 border-t border-[var(--hairline)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-[46ch] text-[0.8125rem] leading-relaxed text-ink/55">
                  {site.founder.note} The best way to understand whether ST CO.
                  is right for a project is a direct conversation, without a
                  pitch deck in between.
                </p>
                <Link href="/contact" className="link-arrow shrink-0">
                  Contact Sirajuddin
                  <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-[var(--hairline)]">
        <div className="container-ed">
          <SectionIndex number="03" label="Principles" aside="Applied to every project" />
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {principles.map((principle) => (
              <article key={principle.number} className="border-t border-[var(--hairline)] pt-5">
                <div className="flex items-baseline gap-4">
                  <span className="index-number text-[0.8125rem]">{principle.number}</span>
                  <h3 className="display-2 max-w-[16ch]">{principle.title}</h3>
                </div>
                <p className="body-copy mt-4 max-w-[44ch] pl-8">{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with ST CO."
        title={
          <>
            If the fit is right, the work gets{" "}
            <em className="italic text-[#a3a888]">better.</em>
          </>
        }
        primaryLabel="Start a Campaign"
        primaryHref="/for-brands"
        secondaryLabel="Introduce Yourself"
        secondaryHref="/for-creators#apply"
      />
    </>
  );
}
