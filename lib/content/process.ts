export type ProcessStep = {
  number: string;
  title: string;
  short: string;
  description: string;
  youGet: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand the brief",
    short: "Objectives, audience, timing, and constraints.",
    description:
      "We start with a conversation, not a creator list. What is the business trying to change? Who needs to see this? What is fixed, and what is open? If the brief is still forming, this stage can include shaping it.",
    youGet: "A short written scope covering the objective, deliverables, timeline, fee, and what is explicitly out of scope.",
  },
  {
    number: "02",
    title: "Find the right fit",
    short: "A shortlist with reasons, not a spreadsheet.",
    description:
      "We translate the brief into creator criteria, research the market, and review recent work rather than only headline numbers. The shortlist includes why each creator is there, and what we would ask them to make.",
    youGet: "A shortlist with fit notes, indicative creator fees, and any availability risks flagged before you commit.",
  },
  {
    number: "03",
    title: "Align on deliverables",
    short: "Formats, usage, dates, approvals, and fees.",
    description:
      "The least glamorous stage, and the one that prevents most problems. We agree exactly what is being made, who approves it, how it can be used, and when it needs to be delivered.",
    youGet: "A deliverables schedule and terms summary for each creator, confirmed by both sides before production.",
  },
  {
    number: "04",
    title: "Coordinate the campaign",
    short: "Briefs, production, approvals, publishing.",
    description:
      "One point of contact for the brand and the creators. We manage briefs, product dispatch, timelines, content review, scheduling, and the small decisions that keep a campaign moving.",
    youGet: "A live tracker, approved content, and a clear record of what published where and when.",
  },
  {
    number: "05",
    title: "Review and learn",
    short: "What worked, what did not, and what next.",
    description:
      "We review performance against the measures agreed at the start — not vanity totals chosen after the fact. The wrap-up is written to be useful to both the brand and the creators involved.",
    youGet: "A wrap-up note with results, observations, and a recommendation for the next campaign.",
  },
];

export const processNote =
  "Scope, timelines, fees, deliverables, approvals, usage, and reporting are agreed according to the individual project. Nothing on this website is a quotation, a guarantee of availability, or a commitment to a particular outcome.";

export type Principle = {
  number: string;
  title: string;
  body: string;
};

export const principles: Principle[] = [
  {
    number: "01",
    title: "The right fit matters.",
    body: "Audience size is the least interesting thing about a creator. We look for a genuine match of voice, audience, and intent — and we are willing to recommend fewer, better partnerships.",
  },
  {
    number: "02",
    title: "Expectations should be clear.",
    body: "Deliverables, dates, usage, approvals, and fees belong in writing before content is made. Clarity is not bureaucracy; it is what lets creative work happen without resentment.",
  },
  {
    number: "03",
    title: "Creativity needs direction.",
    body: "A useful brief gives a creator something to work with: the idea, the boundaries, and the reason it matters. Direction is not control, and freedom is not the absence of a plan.",
  },
  {
    number: "04",
    title: "Every partnership deserves respect.",
    body: "Creators are collaborators, not distribution. That means fair terms, realistic timelines, honest feedback, and credit for the work. It also means being straight with a brand when an idea will not achieve what they hope.",
  },
];

export const aboutBeliefs = [
  {
    title: "Fit before reach",
    body: "The strongest collaboration is not always the largest creator. It is the one whose audience already cares about the problem your brand solves.",
  },
  {
    title: "Clarity before content",
    body: "A campaign should be understood by everyone involved before a single frame is filmed. We spend longer on the brief than most people expect.",
  },
  {
    title: "Evidence before claims",
    body: "We report what happened, including what underperformed. A campaign that teaches you something is more valuable than a report that flatters it.",
  },
];
