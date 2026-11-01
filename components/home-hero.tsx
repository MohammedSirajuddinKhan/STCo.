import Link from "next/link";
import { ArrowUpRight } from "@/components/ui";
import { ImagePlate } from "@/components/image-plate";

const sheet = [
  {
    src: "/images/hero-creator.jpg",
    alt: "A creator filming with a phone in front of a circular light",
    index: "01",
    label: "Creator direction",
  },
  {
    src: "/images/hero-portrait.jpg",
    alt: "A close beauty portrait of a woman with freckles",
    index: "02",
    label: "Beauty / portrait",
  },
  {
    src: "/images/hero-coffee.jpg",
    alt: "Hands holding a cup of coffee at a café table",
    index: "03",
    label: "Café culture",
  },
  {
    src: "/images/hero-fashion.jpg",
    alt: "A fashion silhouette in a wide-sleeved jacket against a pale backdrop",
    index: "04",
    label: "Fashion / form",
  },
];

export function HomeHero() {
  return (
    <>
      <section className="relative">
        <div className="container-ed">
          <div className="grid gap-12 pb-16 pt-8 sm:pt-10 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-14">
            <div className="flex flex-col justify-between lg:col-span-6 xl:col-span-6">
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-olive" aria-hidden="true" />
                  <span className="eyebrow text-ink/55">
                    Brand partnerships / Creator marketing
                  </span>
                </div>

                <h1 className="display-hero mt-8 sm:mt-10">
                  Where brands
                  <br />
                  meet{" "}
                  <em className="italic text-olive-deep">influence.</em>
                </h1>

                <p className="lede mt-8 max-w-[38ch]">
                  We bring brands and creators together to build meaningful
                  partnerships, create compelling campaigns, and connect with the
                  right audiences.
                </p>

                <div className="mt-9 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
                  <Link href="/for-brands" className="btn btn--solid">
                    Start a Campaign
                    <ArrowUpRight />
                  </Link>
                  <Link href="/for-creators" className="btn">
                    Join as a Creator
                  </Link>
                </div>
              </div>

              <div className="mt-14 flex flex-col gap-3 border-t border-[var(--hairline)] pt-4 text-[0.6875rem] uppercase tracking-[0.14em] text-ink/42 sm:flex-row sm:items-center sm:justify-between">
                <span>Independent brand &amp; creator agency</span>
                <span>India · Working nationally</span>
              </div>
            </div>

            <div className="lg:col-span-6 xl:pl-6">
              <div className="relative">
                <p
                  className="absolute -left-14 top-0 hidden text-[0.5625rem] uppercase tracking-[0.22em] text-ink/35 xl:block"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  aria-hidden="true"
                >
                  ST CO. / Selected studies / 2026
                </p>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                  <div className="flex flex-col gap-2.5 sm:gap-4">
                    <figure>
                      <ImagePlate
                        src={sheet[0].src}
                        alt={sheet[0].alt}
                        priority
                        quality={92}
                        className="aspect-[4/5] w-full"
                        sizes="(max-width: 1024px) 48vw, 22vw"
                      />
                      <figcaption className="plate-caption">
                        <span>{sheet[0].index}</span>
                        <span>{sheet[0].label}</span>
                      </figcaption>
                    </figure>
                    <figure>
                      <ImagePlate
                        src={sheet[2].src}
                        alt={sheet[2].alt}
                        className="aspect-[4/3] w-full"
                        sizes="(max-width: 1024px) 48vw, 22vw"
                      />
                      <figcaption className="plate-caption">
                        <span>{sheet[2].index}</span>
                        <span>{sheet[2].label}</span>
                      </figcaption>
                    </figure>
                  </div>

                  <div className="flex flex-col gap-2.5 pt-10 sm:gap-4 sm:pt-16">
                    <figure>
                      <ImagePlate
                        src={sheet[1].src}
                        alt={sheet[1].alt}
                        priority
                        quality={92}
                        className="aspect-[3/4] w-full"
                        sizes="(max-width: 1024px) 48vw, 22vw"
                      />
                      <figcaption className="plate-caption">
                        <span>{sheet[1].index}</span>
                        <span>{sheet[1].label}</span>
                      </figcaption>
                    </figure>
                    <figure>
                      <ImagePlate
                        src={sheet[3].src}
                        alt={sheet[3].alt}
                        className="aspect-square w-full"
                        sizes="(max-width: 1024px) 48vw, 22vw"
                      />
                      <figcaption className="plate-caption">
                        <span>{sheet[3].index}</span>
                        <span>{sheet[3].label}</span>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <p className="mt-4 text-[0.625rem] tracking-[0.06em] text-ink/38">
                  Illustrative photography. Not client work or campaign imagery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--hairline)] bg-stone">
        <div className="container-ed py-14 sm:py-18 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-olive" aria-hidden="true" />
                <span className="eyebrow text-olive-deep">The premise</span>
              </div>
              <p className="mt-5 max-w-[22ch] text-[0.9375rem] leading-relaxed text-ink/62">
                A considered match is worth more than a large one. That idea
                shapes everything we do.
              </p>
            </div>

            <div className="lg:col-span-9">
              <h2 className="equation">
                <span className="block">
                  Brands <span className="text-olive">+</span> Creators
                </span>
                <span className="block">
                  <span className="text-olive">=</span> Better{" "}
                  <em className="italic">connections.</em>
                </span>
              </h2>

              <div className="mt-10 grid gap-6 border-t border-[var(--hairline)] pt-6 sm:grid-cols-3">
                <div>
                  <p className="eyebrow-sm text-olive-deep">01 / The fit</p>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-ink/65">
                    Creators chosen for their audience and voice, not only their
                    size.
                  </p>
                </div>
                <div>
                  <p className="eyebrow-sm text-olive-deep">02 / The brief</p>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-ink/65">
                    A clear idea, agreed deliverables, and boundaries that make
                    sense.
                  </p>
                </div>
                <div>
                  <p className="eyebrow-sm text-olive-deep">03 / The follow-through</p>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-ink/65">
                    One coordinated process, from the first message to the
                    wrap-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
