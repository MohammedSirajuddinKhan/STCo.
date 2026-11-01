export type Service = {
  slug: string;
  number: string;
  title: string;
  emphasis: string;
  summary: string;
  intro: string;
  what: string[];
  who: string;
  enquiry: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    slug: "creator-discovery",
    number: "01",
    title: "Creator Discovery",
    emphasis: "& Matching",
    summary:
      "Finding creators whose content, audience, and working style genuinely fit the campaign.",
    intro:
      "A large following is not a strategy. We start with the brief, then look for creators whose existing content already belongs in the world your brand wants to occupy.",
    what: [
      "Translate the campaign objective into clear creator criteria: category, audience, location, format, tone, and budget.",
      "Build a considered longlist, then a shortlist with a written reason for every recommendation.",
      "Review recent content, engagement quality, audience signals, and relevant past brand work.",
      "Present the shortlist with fit notes, so the final choice stays with you.",
    ],
    who: "Brands launching a product, entering a new city or category, or looking for a creator mix that feels more considered than a directory search.",
    enquiry:
      "Share your objective, market, budget range, and timeline through the brand enquiry form. Shortlist scope and fees are confirmed in writing before work begins.",
    image: "/images/portrait-curly.jpg",
    alt: "An editorial portrait of a creator with curly hair, photographed in warm monochrome",
  },
  {
    slug: "influencer-marketing",
    number: "02",
    title: "Influencer",
    emphasis: "Marketing",
    summary:
      "Creator-led campaigns planned around an idea, not a list of handles.",
    intro:
      "Influencer marketing works when the campaign has a point of view and the creators are part of it, rather than a series of unrelated posts published in the same week.",
    what: [
      "Shape a campaign idea that gives every creator a clear role and something worth saying.",
      "Recommend a creator mix by tier, niche, and format instead of defaulting to one follower band.",
      "Write briefs, support negotiation, and review content for accuracy, disclosure, and brand fit.",
      "Coordinate posting schedules, approvals, and the wrap-up report.",
    ],
    who: "Brands that want a coordinated campaign across several creators, with a consistent idea and a realistic production plan.",
    enquiry:
      "Bring the objective, market, and expected timeline. If the campaign is still forming, we can start with a strategy engagement before any creator is approached.",
    image: "/images/hero-creator.jpg",
    alt: "Creator filming with a phone in front of a circular light",
  },
  {
    slug: "brand-partnerships",
    number: "03",
    title: "Brand",
    emphasis: "Partnerships",
    summary:
      "Longer-term collaborations between a business and the people who shape how it is seen.",
    intro:
      "A partnership is more than a post with a discount code. It is a relationship with a point of view, a duration, and responsibilities on both sides.",
    what: [
      "Assess fit between the brand, the creator, and the audience before any introduction is made.",
      "Define a partnership format: ambassador programme, co-created content or product, event series, or always-on collaboration.",
      "Frame deliverables, usage, exclusivity, and review points so both parties know what is expected.",
      "Coordinate the introduction and the early months of the collaboration.",
    ],
    who: "Businesses ready to invest in a relationship rather than a one-off placement, and creators whose audience would genuinely benefit from the association.",
    enquiry:
      "Partnership enquiries should include the brand, the intended duration, and what you hope the collaboration will achieve. We do not represent creators as a talent agency; introductions are made with both parties’ agreement.",
    image: "/images/stilllife.jpg",
    alt: "Skincare bottles and flowers arranged on a table in warm monochrome",
  },
  {
    slug: "ugc-coordination",
    number: "04",
    title: "UGC Campaign",
    emphasis: "Coordination",
    summary:
      "Useful creator-made content, briefed properly and cleared for the ways you intend to use it.",
    intro:
      "UGC is production with a creator’s perspective. It needs a shot list, a usage plan, and a realistic schedule — not a forwarded moodboard and a request for “something authentic”.",
    what: [
      "Turn the marketing need into a practical UGC brief: formats, hooks, shot list, and delivery specs.",
      "Select creators for content-making ability and category knowledge, not only audience size.",
      "Coordinate production, revisions, captions, and raw asset handover.",
      "Confirm usage rights for the channels and duration you actually need before production starts.",
    ],
    who: "Brands that need content for paid social, websites, retail screens, menus, or always-on channels, and want it to feel like it came from a real person.",
    enquiry:
      "Tell us the channels, aspect ratios, and how long you need to use the content. Usage terms and creator fees depend on those details, so they are agreed before production.",
    image: "/images/camera.jpg",
    alt: "A camera and production equipment arranged in a studio",
  },
  {
    slug: "campaign-management",
    number: "05",
    title: "Campaign",
    emphasis: "Management",
    summary:
      "One point of coordination from brief to wrap-up.",
    intro:
      "Campaigns rarely fail because of the creative. They fail in the details: an unapproved caption, a missed shipping date, three versions of the same brief in different inboxes.",
    what: [
      "Build a single timeline with owners, dates, and dependencies.",
      "Manage creator communication, product dispatch, approvals, and publishing logistics.",
      "Check deliverables against the agreed brief before anything goes live.",
      "Close with a clear wrap-up: what was delivered, what performed, and what to change next time.",
    ],
    who: "Brand teams without in-house creator operations, and marketing leads coordinating several partners or markets at once.",
    enquiry:
      "Send the campaign dates, the number of creators involved, and the current state of planning. We will confirm what can realistically be managed within the timeline.",
    image: "/images/ceramics.jpg",
    alt: "A shelf of handmade ceramic vessels in warm monochrome",
  },
  {
    slug: "campaign-strategy",
    number: "06",
    title: "Campaign Strategy",
    emphasis: "& Planning",
    summary:
      "A clear plan before anyone is approached.",
    intro:
      "The most useful strategic document is the one a team can actually approve and act on. We keep strategy specific: who, why, what, when, and how it will be judged.",
    what: [
      "Define the objective and the measures that will tell you whether it worked.",
      "Think through audience, platform behaviour, and the role each creator plays.",
      "Plan the creator mix, budget allocation, deliverables, and timeline.",
      "Set a measurement framework before the campaign starts, including the baseline you are comparing against.",
    ],
    who: "Brands planning quarterly activity or a launch, and teams that need a documented plan they can take through internal approval.",
    enquiry:
      "A strategy engagement can begin before you have a creator list or a final budget. Share the business problem and the decisions you need to make.",
    image: "/images/skincare.jpg",
    alt: "Skincare products arranged on a table with a mirror and flowers",
  },
];

export const serviceCaveat =
  "Availability and scope vary by project. ST CO. confirms a service only once scope, fee, timeline, and responsibilities are agreed in writing.";

export type CollaborationType = {
  title: string;
  description: string;
};

export const collaborationTypes: CollaborationType[] = [
  {
    title: "Launch campaigns",
    description:
      "A coordinated group of creators around a product, menu, collection, or opening, with a shared idea and a defined window.",
  },
  {
    title: "Always-on ambassadors",
    description:
      "A smaller group of creators working with a brand over several months, with regular deliverables and review points.",
  },
  {
    title: "UGC production",
    description:
      "Creator-made content for paid social, web, retail, or CRM, briefed to your formats and cleared for the usage you need.",
  },
  {
    title: "Events and openings",
    description:
      "Creator attendance and coverage planned around the experience, with clear expectations for what is published and when.",
  },
  {
    title: "Co-created products",
    description:
      "A collaboration between a brand and a creator with a genuine shared audience, developed with agreed roles and terms.",
  },
  {
    title: "Paid amplification",
    description:
      "Creator content used as paid media, with permissions, whitelisting, and usage terms confirmed before production.",
  },
];

export const brandPreparation = [
  "The business objective, in one or two sentences",
  "Who you are trying to reach, and where they are",
  "What you are launching or promoting, and when",
  "A realistic budget range, including creator fees",
  "Mandatories, restrictions, and brand guidelines",
  "Who approves content internally",
  "How you intend to use the content and for how long",
];

export const creatorCategories = [
  "Food, cafés & restaurants",
  "Beauty & skincare",
  "Fashion & lifestyle",
  "Fitness & wellness",
  "Travel & city guides",
  "Home & interiors",
  "UGC & content-only creators",
  "Photography & videography",
];

export const creatorPreparation = [
  "Eight to twelve recent pieces that represent your work",
  "A media kit, if you have one — not essential",
  "Audience size, location, and the platforms that matter most",
  "Formats you enjoy making: Reels, stills, Stories, long-form",
  "A rate range for the formats you offer",
  "How you prefer to handle usage rights and exclusivity",
  "Your availability over the next two months",
];

export const creatorExpectations = [
  "Be 18 or older, and able to enter into an agreement in your own name.",
  "Keep an authentic audience. Purchased followers or engagement are not accepted.",
  "Disclose paid partnerships clearly, in line with platform rules and applicable law.",
  "Reply to agreed communications within two working days.",
  "Meet confirmed deadlines, or flag problems early.",
  "Keep approvals and agreed messaging intact.",
  "Invoice for the terms agreed, with applicable taxes where relevant.",
];
