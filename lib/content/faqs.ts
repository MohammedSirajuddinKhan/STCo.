export type FaqItem = { question: string; answer: string };
export type FaqGroup = { title: string; number: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    number: "01",
    title: "Working with ST CO.",
    items: [
      {
        question: "What does ST CO. actually do?",
        answer:
          "ST CO. plans and coordinates collaborations between brands and creators. That can include creator discovery and matching, influencer campaigns, longer-term brand partnerships, UGC coordination, campaign management, and campaign strategy. The scope of each engagement is agreed in writing before work begins.",
      },
      {
        question: "Is ST CO. a talent agency?",
        answer:
          "No. ST CO. does not represent creators as a talent agency, negotiate exclusive management, or take a commission on a creator’s wider career. We introduce brands and creators for a defined collaboration, with both parties’ agreement, and coordinate the work.",
      },
      {
        question: "How do we start working together?",
        answer:
          "Send a brand enquiry or write directly to sirajuddinkhan7718@gmail.com. A first conversation is used to understand the objective, timeline, and budget. If there is a sensible fit, we send a short written scope with fees and next steps. Nothing is committed until that scope is accepted.",
      },
      {
        question: "Can you work with a brand that is just starting out?",
        answer:
          "Yes, if the brief and budget are realistic. Smaller brands often get more from a focused collaboration with a few relevant creators than from a large campaign. We would rather propose a smaller, well-run project than promise reach that the budget cannot support.",
      },
    ],
  },
  {
    number: "02",
    title: "For creators",
    items: [
      {
        question: "Who can apply to work with ST CO.?",
        answer:
          "Creators and content makers aged 18 or over, based in India, with an authentic audience and recent work they are proud of. You do not need a minimum follower count. Micro-creators, UGC creators, photographers, and established influencers are all considered when the fit is right.",
      },
      {
        question: "Does applying guarantee campaigns or income?",
        answer:
          "No. Applying adds your details to our consideration for relevant briefs. It does not guarantee acceptance, representation, a campaign, a particular fee, or any level of earnings. We contact creators when a specific opportunity matches their work.",
      },
      {
        question: "Do you ask for social media passwords?",
        answer:
          "Never. ST CO. does not need or request passwords to any social account. If anyone claiming to represent ST CO. asks for one, do not share it and contact us directly using the details on this site.",
      },
      {
        question: "What should I send with my application?",
        answer:
          "Your handle, niche, location, audience size, recent examples of your work, and the formats you enjoy making. A media kit is useful but not essential. A portfolio or a link to three recent posts is enough to start a conversation.",
      },
    ],
  },
  {
    number: "03",
    title: "Fees, timelines & availability",
    items: [
      {
        question: "How are fees calculated?",
        answer:
          "Fees depend on the scope: the number of creators, deliverables, usage rights, exclusivity, timeline, and the amount of coordination required. We quote per project after the brief is clear. Creator fees are separate from ST CO.’s planning or management fee and are confirmed in writing.",
      },
      {
        question: "Do you publish rate cards?",
        answer:
          "No. A rate card would be misleading without context. A single Reel with organic usage is a different piece of work from a six-month paid-media licence with exclusivity. We provide a written quote once the deliverables and usage are defined.",
      },
      {
        question: "How long does a campaign take?",
        answer:
          "A focused creator campaign typically needs several weeks from approved brief to publication, depending on the number of creators, product dispatch, approvals, and the creators’ availability. Compressed timelines are sometimes possible but usually reduce the quality of the match. We confirm a realistic schedule before committing.",
      },
      {
        question: "What is the minimum budget?",
        answer:
          "There is no published minimum, but a campaign needs to cover creator fees, production, and coordination honestly. If the available budget cannot support the objective, we will say so and suggest a smaller scope rather than dilute the work.",
      },
    ],
  },
  {
    number: "04",
    title: "Deliverables, rights & reporting",
    items: [
      {
        question: "Who owns the content created?",
        answer:
          "Ownership and licence are agreed per project. Typically the creator retains copyright and grants the brand a licence for specified channels and a specified period. Paid usage, whitelisting, and exclusivity are priced separately. The terms are recorded in writing before production.",
      },
      {
        question: "Can we use creator content in paid ads?",
        answer:
          "Only if the creator has agreed to paid usage. That permission should be negotiated before content is made, because it affects the fee and the terms. We confirm the channels, territories, and duration in the agreement.",
      },
      {
        question: "How is campaign performance reported?",
        answer:
          "The measures are agreed at the start. A wrap-up normally includes what was delivered, platform-reported performance, any code or link attribution, qualitative observations, and a recommendation. We distinguish between what the data shows and what we infer, and we report underperformance rather than hiding it.",
      },
      {
        question: "Do you guarantee reach, virality, or sales?",
        answer:
          "No. Nobody can honestly guarantee reach, virality, sales, or a particular return. We can commit to a clear process, relevant creator selection, agreed deliverables, and honest reporting. If a proposal promises guaranteed results, treat that as a warning sign.",
      },
    ],
  },
];
