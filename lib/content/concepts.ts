export type Concept = {
  slug: string;
  number: string;
  brand: string;
  title: string;
  sector: string;
  year: string;
  summary: string;
  image: string;
  alt: string;
  objective: string;
  audience: string;
  idea: string;
  creatorCriteria: string[];
  deliverables: string[];
  measurement: string[];
  demonstration: string;
  palette: string;
  paletteColors: string[];
};

export const conceptDisclaimer =
  "Speculative concept. The brands named here are fictional and were created to demonstrate ST CO.’s planning approach. These are not completed campaigns, and no real brand, creator, client, or result is associated with ST CO. Any resemblance to existing businesses is unintentional.";

export const concepts: Concept[] = [
  {
    slug: "slow-ritual",
    number: "01",
    brand: "Morrow & Ash Coffee",
    title: "Slow Ritual",
    sector: "Specialty coffee",
    year: "2026",
    summary:
      "A launch concept for a fictional roaster introducing a single-origin range to people who already care about how their coffee is made.",
    image: "/images/cafe.jpg",
    alt: "A breakfast table with coffee, pastries, and fresh fruit, photographed in warm monochrome",
    objective:
      "Introduce a three-coffee single-origin range and move first-time buyers from “I like coffee” to “I want to understand this one.” The commercial goal is trial of the range, not a discount-led volume push.",
    audience:
      "Urban coffee drinkers aged 22–34 in Mumbai, Pune, and Bengaluru who visit independent cafés, follow food creators, and are willing to pay more for provenance. They are curious but not yet confident describing tasting notes.",
    idea:
      "“Slow Ritual” treats making coffee at home as a small, deliberate pause rather than a productivity hack. The content follows ordinary mornings — a kettle, a window, a notebook, a second cup — and lets the coffee’s origin appear as a detail worth noticing. No aspirational kitchens, no slow-motion milk pours.",
    creatorCriteria: [
      "Four food and lifestyle creators with 8k–40k followers and a documented café culture audience.",
      "Two home-brew enthusiasts who already publish method-led content and can explain tasting notes without jargon.",
      "One city photographer for the still-life layer and event coverage.",
      "Audience location weighted to the three launch cities; engagement quality reviewed manually, not by ratio alone.",
    ],
    deliverables: [
      "8 short-form videos: four creator-led morning rituals, two brewing explainers, two café-partner features.",
      "16 edited stills for organic use and the brand’s owned channels.",
      "4 Story sets with a link to the range landing page.",
      "2 cutdown edits per lead creator, cleared for 90 days of paid social.",
      "One launch morning at a partner café, covered by the photographer and two creators.",
    ],
    measurement: [
      "Saves and shares on method-led content, reviewed against the account’s own recent baseline.",
      "Profile visits and link taps from creator Stories.",
      "A single-use code redeemed in the partner café and online, reported by source.",
      "A short post-campaign survey of first-time buyers asking which creator or format they remembered.",
    ],
    demonstration:
      "This concept shows how a small creator mix can carry a specific idea, how usage rights are planned alongside organic deliverables, and how measurement is agreed before production.",
    palette: "Warm stone, ink, and a single olive accent",
    paletteColors: ["#E7E3DB", "#171715", "#777B60", "#F7F5F0"],
  },
  {
    slug: "second-skin",
    number: "02",
    brand: "Fern & Form",
    title: "Second Skin",
    sector: "Skincare",
    year: "2026",
    summary:
      "A barrier-care launch concept built on ingredient literacy, honest language, and content that survives beyond the launch week.",
    image: "/images/skincare.jpg",
    alt: "Skincare bottles arranged on a table with flowers and a mirror, photographed in warm monochrome",
    objective:
      "Launch a three-product barrier-care range to an audience that already reads ingredient lists, without relying on before-and-after claims the brand cannot substantiate.",
    audience:
      "Skincare-aware adults aged 20–35 who follow dermatology educators, compare formulations, and are sceptical of launch-week hype. They are more likely to save a post than comment on it.",
    idea:
      "“Second Skin” frames the range as a routine you can understand, not a transformation you can photograph. Creators explain one idea each — barrier function, layering, or what a product should not do — and show the texture honestly. The campaign’s visual language is clinical but warm: macro textures, soft daylight, no clinical white lab imagery.",
    creatorCriteria: [
      "Three beauty educators with a track record of accurate, source-conscious explainers.",
      "Two skincare creators with sensitive-skin audiences and a calm, non-hype tone.",
      "Two UGC creators briefed for texture and routine footage, not review claims.",
      "No creator with a history of unsubstantiated medical or transformation claims.",
    ],
    deliverables: [
      "6 explainer videos, each focused on one ingredient or routine principle.",
      "10 texture stills and 6 short routine clips for owned and paid channels.",
      "3 creator Stories sequences with a saved-highlight asset for the brand.",
      "A usage-cleared UGC library of 12 clips for 6 months of paid social.",
      "An internal claims checklist applied to every script before approval.",
    ],
    measurement: [
      "Saves and completion rate on explainer content.",
      "Comment sentiment reviewed manually for ingredient questions and confusion.",
      "Landing-page sessions from creator link-in-bio, with a first-order code.",
      "Repeat purchase at 60 days, where the brand can attribute it to a first order.",
    ],
    demonstration:
      "This concept shows how a regulated category can be approached with credible creators, a claims-review step, and a content library designed for use after the launch.",
    palette: "Bone, clay, and muted olive",
    paletteColors: ["#F2EEE6", "#C9B8A6", "#777B60", "#171715"],
  },
  {
    slug: "the-long-run",
    number: "03",
    brand: "Halcyon Athletic",
    title: "The Long Run",
    sector: "Performance apparel",
    year: "2026",
    summary:
      "A community-led repositioning concept for a fictional training brand moving from gym performance to everyday movement.",
    image: "/images/fitness.jpg",
    alt: "A person training in a gym, photographed in warm monochrome",
    objective:
      "Shift perception from a gym-only label to a brand for everyday training, and build a first-party community the brand can speak to beyond the campaign window.",
    audience:
      "Adults aged 24–40 who run, lift, or play casually and feel alienated by elite performance imagery. They value consistency over intensity and are influenced by people in their own city.",
    idea:
      "“The Long Run” documents one month of ordinary training rather than one perfect athlete. Five creators and two run-club leads show the unglamorous middle of a training block: the short session, the missed week, the early start. The visual language is documentary — dawn light, real routes, no studio set.",
    creatorCriteria: [
      "Three fitness creators with coaching experience and a local audience.",
      "Two everyday-movement creators whose content includes walking, cycling, or beginner running.",
      "Two run-club organisers in the launch cities, engaged as community partners rather than billboards.",
      "Audience quality reviewed for local participation, not only follower count.",
    ],
    deliverables: [
      "5 documentary-style short films following one month of training.",
      "2 community run events with creator attendance and photography.",
      "A 20-image photo essay for the brand’s owned channels and retail displays.",
      "8 UGC clips for paid social, cleared for 6 months.",
      "A simple email capture mechanic at each run event, with clear consent language.",
    ],
    measurement: [
      "Run-event RSVPs and attendance, reported separately.",
      "Email sign-ups with consent, and 30-day engagement.",
      "Content saves and shares, compared with the brand’s previous campaign baseline.",
      "A short survey of event attendees on perception of the brand.",
    ],
    demonstration:
      "This concept shows how a brand can use creators as community organisers, build an owned audience, and measure participation rather than reach alone.",
    palette: "Dawn grey, faded olive, and ink",
    paletteColors: ["#D8D6CE", "#777B60", "#4A4B42", "#171715"],
  },
];

export function getConcept(slug: string) {
  return concepts.find((concept) => concept.slug === slug);
}
