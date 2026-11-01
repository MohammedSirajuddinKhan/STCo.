export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  dateISO: string;
  readingTime: string;
  image: string;
  alt: string;
  takeaways: string[];
  body: ArticleBlock[];
};

export const insightsIntro =
  "Working notes on creator partnerships, campaign planning, and the practical details that decide whether a collaboration is worth repeating. Written by ST CO. Editorial — no borrowed credentials, no invented data.";

export const insights: Article[] = [
  {
    slug: "choosing-creators-for-a-campaign",
    title: "Choosing creators for a campaign",
    category: "Creator strategy",
    excerpt:
      "A practical way to move past follower counts and build a shortlist you can defend in a meeting.",
    date: "16 October 2026",
    dateISO: "2026-10-16",
    readingTime: "7 min read",
    image: "/images/studio.jpg",
    alt: "A studio set with lighting and plants, photographed in warm monochrome",
    takeaways: [
      "Start with the audience and the job the content has to do.",
      "Read recent posts before you read a media kit.",
      "Write a reason for every creator on the shortlist.",
    ],
    body: [
      {
        type: "p",
        text: "Most creator selection starts in the wrong place: a directory, sorted by follower count, filtered by category. It produces a list that looks efficient and a campaign that feels interchangeable. The better starting point is the audience you need to reach and the specific job the content has to do.",
      },
      {
        type: "h2",
        text: "Start with the job, not the creator",
      },
      {
        type: "p",
        text: "A launch, a menu change, a new city, and an always-on ambassador programme need different kinds of creators. A launch needs someone who can explain a new idea quickly. A menu change needs someone whose audience already trusts their taste. A city opening needs local reach and physical presence more than national polish. Write down the job in one sentence before you open a single profile.",
      },
      {
        type: "h2",
        text: "Read the last twenty posts",
      },
      {
        type: "p",
        text: "Media kits describe intent. Recent posts describe reality. Look at the last twenty pieces of content and ask whether the brand would be an interruption or a natural next post. If every other post is a sponsored integration, the audience may have learned to scroll past them. If the creator has never worked with a brand in your category, that is not automatically a problem — but it changes what the first collaboration should ask of them.",
      },
      {
        type: "list",
        items: [
          "Does the creator actually use products or experiences in your category?",
          "Is the content style compatible with what you need to show?",
          "Do sponsored posts sit alongside organic work, or replace it?",
          "Do the comments look like a conversation with real people?",
          "Would your brand look out of place in the middle of this feed?",
        ],
      },
      {
        type: "h2",
        text: "Treat engagement as a signal, not a verdict",
      },
      {
        type: "p",
        text: "Engagement rates vary enormously by platform, format, and account size, so a single benchmark is more misleading than useful. Compare a creator’s recent posts with their own baseline. Look at saves and shares, not only likes. Read comments for questions and recognition rather than emojis. These are imperfect signals, but they are more informative than a percentage on a media kit.",
      },
      {
        type: "p",
        text: "Audience location matters just as much. A creator with a large national following may be a poor choice for a café with one location. Ask for audience geography, and be sceptical of a screenshot with no date or source.",
      },
      {
        type: "h2",
        text: "Consider how they work",
      },
      {
        type: "p",
        text: "The best content in the world is not useful if the creator misses the production window or refuses every revision. Ask how they prefer to receive briefs, how far ahead they plan, and whether they can meet the dates. A short paid test — one deliverable, clearly scoped — is often a better introduction than a large first campaign.",
      },
      {
        type: "h2",
        text: "Build a shortlist with reasons",
      },
      {
        type: "p",
        text: "A shortlist should survive a question from a sceptical colleague. For each creator, write two lines: why this person, and what you would ask them to make. If the only answer is follower count, the recommendation is not finished. Include a note on risk — availability, an audience mismatch, a category conflict — so the brand can make an informed choice rather than discovering the problem after contracts are signed.",
      },
      {
        type: "quote",
        text: "If you cannot explain why a creator is on the list without mentioning follower count, they may not belong there.",
      },
      {
        type: "h2",
        text: "Red flags worth taking seriously",
      },
      {
        type: "list",
        items: [
          "Sudden, unexplained growth in followers or engagement.",
          "Comment sections that read like a different audience from the content.",
          "A history of undeclared partnerships.",
          "A refusal to share recent performance data under reasonable confidentiality.",
          "A pattern of missed deadlines in public collaborations or tagged brand work.",
        ],
      },
      {
        type: "p",
        text: "None of these is a definitive disqualification, and context matters. Together, they are a reason to slow down. Choosing creators is a judgement call, and the quality of that judgement shows up months later in how the campaign feels — and how easy it was to run.",
      },
    ],
  },
  {
    slug: "working-with-micro-creators",
    title: "Working with micro-creators",
    category: "Creator partnerships",
    excerpt:
      "Why smaller audiences can produce better work, and what changes when you brief, pay, and manage them properly.",
    date: "9 October 2026",
    dateISO: "2026-10-09",
    readingTime: "6 min read",
    image: "/images/portrait-natural.jpg",
    alt: "A portrait of a woman in natural light, photographed in warm monochrome",
    takeaways: [
      "Micro-creators offer specificity and trust, not just lower fees.",
      "Free product is not a fee; budget for the work.",
      "Smaller campaigns need more coordination, not less.",
    ],
    body: [
      {
        type: "p",
        text: "“Micro-creator” is usually used to mean an audience of roughly five to fifty thousand, though the label matters less than the relationship. What makes these creators useful is not that they are cheaper. It is that their audience is often specific, their recommendations feel personal, and they can respond to a brief without layers of management.",
      },
      {
        type: "p",
        text: "That does not make them a shortcut. A campaign with eight micro-creators is eight relationships, eight sets of terms, and eight pieces of content to review. The economics only work when the brief and the process are designed for that reality.",
      },
      {
        type: "h2",
        text: "Specificity is the advantage",
      },
      {
        type: "p",
        text: "A creator with twelve thousand followers who covers one neighbourhood, one ingredient category, or one way of training can be more useful than a general lifestyle account ten times the size. If your objective is trial in a specific place or among a specific group, a set of smaller, credible voices can be a better instrument than a single broad one.",
      },
      {
        type: "h2",
        text: "Pay for the work",
      },
      {
        type: "p",
        text: "Free product is a gesture, not a fee. If you are asking for a filmed deliverable, usage rights, exclusivity, or multiple revisions, budget for it. Rates vary by market and scope, and a creator is entitled to quote their own. If the budget genuinely does not allow a fee, be explicit about that before anyone produces anything — and do not ask for usage rights you have not paid for.",
      },
      {
        type: "h2",
        text: "Make the brief small enough to execute",
      },
      {
        type: "p",
        text: "Large campaigns often ask micro-creators for the same output as a production agency: three videos, five stills, a blog post, and a month of exclusivity. A better approach is one clear deliverable per creator, repeated across a group. It is easier to compare, easier to approve, and far more likely to be delivered on time.",
      },
      {
        type: "h2",
        text: "Respect the format they are good at",
      },
      {
        type: "p",
        text: "If someone has built an audience through short, direct-to-camera explainers, a highly produced aesthetic film may lose what makes them worth hiring. Give direction on the substance, the mandatories, and the technical requirements — then let them make it in the language their audience recognises.",
      },
      {
        type: "h2",
        text: "Plan for more administration",
      },
      {
        type: "p",
        text: "A group of micro-creators needs a tracker, a single point of contact, and a clear payment process. Confirm who is responsible for shipping, who approves content, what happens if a deliverable misses its date, and when invoices will be paid. These details are unglamorous and they are the difference between a campaign that feels effortless and one that consumes a month of someone’s attention.",
      },
      {
        type: "h2",
        text: "Measure the right things",
      },
      {
        type: "p",
        text: "Do not judge a micro-creator campaign solely on reach. Look at saves, shares, link taps, code redemptions, comment quality, and whether the content gave the brand something useful to reuse. A small campaign that produces ten assets and a clear learning is a better outcome than a large campaign that produces a screenshot of impressions.",
      },
      {
        type: "quote",
        text: "Micro-creators are not a cheaper version of big creators. They are a different kind of partnership, and they work best when the brief admits it.",
      },
      {
        type: "p",
        text: "The practical test is simple: would you be comfortable showing a creator the terms, the timeline, and the fee before asking them to start? If not, the problem is usually the plan, not the creator.",
      },
    ],
  },
  {
    slug: "writing-a-useful-creator-brief",
    title: "Writing a useful creator brief",
    category: "Briefs & planning",
    excerpt:
      "A brief should give a creator enough direction to be useful and enough room to be themselves. Here is a structure that does both.",
    date: "28 September 2026",
    dateISO: "2026-09-28",
    readingTime: "8 min read",
    image: "/images/camera.jpg",
    alt: "Production equipment in a studio, photographed in warm monochrome",
    takeaways: [
      "Lead with the reason, not the deliverable count.",
      "Put commercial terms in the same document as the creative direction.",
      "Say who approves what, and by when.",
    ],
    body: [
      {
        type: "p",
        text: "A creator brief is not a script, and it is not a mood board. It is the document that lets someone who is not in your building make a piece of work that is useful to your brand and recognisable as their own. Most weak briefs fail in one of two ways: they over-specify the creative until nothing is left, or they under-specify the practical details until nobody knows what is being made.",
      },
      {
        type: "h2",
        text: "Start with the reason",
      },
      {
        type: "p",
        text: "Open with two paragraphs: what the brand is trying to achieve, and why this creator is part of it. Not the history of the company. Not a list of brand values. The specific change you hope the work will cause, and the role this person plays in causing it. A creator who understands the point will make better decisions on set than one who is following a shot list blindly.",
      },
      {
        type: "h2",
        text: "Separate the idea from the mandatories",
      },
      {
        type: "p",
        text: "Give one clear creative territory and a short list of non-negotiables: the product name, a required claim, a logo placement, a date, a prohibited comparison. Keep the two visually separate in the document. When everything is framed as a requirement, creators stop distinguishing between a legal necessity and a preference.",
      },
      {
        type: "h2",
        text: "Specify deliverables precisely",
      },
      {
        type: "p",
        text: "“One Reel and some Stories” is not a deliverable. A useful specification looks like this:",
      },
      {
        type: "list",
        items: [
          "Format and count: two vertical videos, 20–35 seconds each.",
          "Aspect ratios and resolution: 9:16 master, 1080 × 1920, plus a 1:1 cutdown.",
          "Required moments: product in use, one spoken line about the offer, end card.",
          "Captions: supplied separately as a text file, not only burned in.",
          "Raw footage: whether you need it, and in what format.",
          "Posting: organic post dates, or delivery-only with no posting obligation.",
          "Revisions: one consolidated round, submitted within three working days.",
        ],
      },
      {
        type: "h2",
        text: "Put the commercial terms in the same document",
      },
      {
        type: "p",
        text: "Usage rights, exclusivity, payment terms, and the campaign window should not live in a separate email that nobody reads. Include the licence period, the channels covered, whether paid amplification is included, and what happens at the end of the term. If the brand may want to extend usage, say so now and price it now. Retrospective negotiation is how good relationships turn sour.",
      },
      {
        type: "h2",
        text: "Say what approval looks like",
      },
      {
        type: "p",
        text: "Name the approver, the number of review rounds, and the response time the brand commits to. Creators plan their production around feedback, and a three-day silence can cost a shoot day. If legal review is required, say so at the start and build it into the schedule.",
      },
      {
        type: "h2",
        text: "Include references, not a dump",
      },
      {
        type: "p",
        text: "Three to five references with a sentence on what you like about each is more useful than forty images. Be explicit about what you are referencing: the pacing, the framing, the tone, or the structure. A mood board without annotation invites imitation of the surface and misses the point.",
      },
      {
        type: "h2",
        text: "Name the people",
      },
      {
        type: "p",
        text: "A brief with no named contact is an orphan. Include the day-to-day contact, the approver, the person handling product shipping, and the person who will pay the invoice. Add a short response-time expectation for both sides. Most problems in creator campaigns are communication problems long before they are creative ones.",
      },
      {
        type: "quote",
        text: "The best brief is specific about the outcome and generous about the method.",
      },
      {
        type: "p",
        text: "Finally, read the brief as if you were the creator with three other campaigns that week. If you cannot find the deliverable, the date, the fee, and the point in under two minutes, rewrite it. Clarity is a form of respect, and it tends to produce better content.",
      },
    ],
  },
  {
    slug: "understanding-ugc",
    title: "Understanding UGC before you commission it",
    category: "UGC",
    excerpt:
      "Creator-made content can be one of the most useful assets a brand owns. It can also be a rights problem waiting to happen.",
    date: "15 September 2026",
    dateISO: "2026-09-15",
    readingTime: "6 min read",
    image: "/images/skincare.jpg",
    alt: "Skincare products arranged on a table in warm monochrome",
    takeaways: [
      "UGC is production, not a free content pipeline.",
      "Agree usage, duration, channels, and paid rights before filming.",
      "Brief for editing: separate audio, clean footage, multiple ratios.",
    ],
    body: [
      {
        type: "p",
        text: "User-generated content has become a catch-all term for anything a creator makes that a brand does not shoot itself. That looseness causes problems. UGC commissioned for a paid social campaign is a different product from an organic creator post, with different rights, different production expectations, and a different fee.",
      },
      {
        type: "h2",
        text: "What UGC actually is",
      },
      {
        type: "p",
        text: "In practice, UGC means creator-made content that the brand owns or licenses for its own use: a product demo, a routine, a testimonial-style piece to camera, or a lifestyle clip. It may never appear on the creator’s own channel. The value is the perspective and the production, not the distribution.",
      },
      {
        type: "p",
        text: "That distinction matters commercially. If you are paying for distribution, you are buying media. If you are paying for content, you are buying production and usage rights. Be clear about which one the brief requires, because the fee and the contract are not the same.",
      },
      {
        type: "h2",
        text: "The rights question comes first",
      },
      {
        type: "p",
        text: "Before anyone films anything, agree the licence. At minimum: which channels, which territories, how long, whether paid media is included, whether the creator’s handle and likeness can be used, and whether the brand can edit the content. If you might want to run it as a paid ad, negotiate that at the start — paid usage usually costs more than organic usage, and it is unfair to ask for it later at the original price.",
      },
      {
        type: "list",
        items: [
          "Channels: organic social, paid social, website, email, retail screens, out-of-home.",
          "Term: three months, six months, twelve months, or perpetual — with the price reflecting it.",
          "Territory: India only, or global.",
          "Edits: can the brand recut, caption, and combine the footage?",
          "Raw files: are they included, and in what format?",
          "Exclusivity: is the creator restricted from working with competitors, and for how long?",
        ],
      },
      {
        type: "h2",
        text: "Brief for editing, not just filming",
      },
      {
        type: "p",
        text: "A campaign team will want options. Ask for footage that can survive being recut: a few seconds of clean product shots, a version without music, separate audio, captions supplied as text, and vertical and square exports. It costs the creator very little to provide this at the shoot and costs the brand a second production to recreate it later.",
      },
      {
        type: "h2",
        text: "Disclosure still matters",
      },
      {
        type: "p",
        text: "When a creator publishes a paid partnership, the disclosure rules of the platform and the applicable advertising law apply. When a brand uses creator content as an advertisement, the brand is responsible for making the commercial nature clear and for complying with the rules in the markets where it runs. UGC does not become organic because the creator is not the one posting it. Take local advice for the markets you operate in; this article is not legal advice.",
      },
      {
        type: "h2",
        text: "Build a library, not a one-off",
      },
      {
        type: "p",
        text: "The most efficient UGC programmes commission a coherent set of assets across a few creators, with a shared shot list and consistent usage terms. That gives the brand a library it can test, refresh, and localise, instead of a folder of unrelated clips that all need re-briefing next quarter.",
      },
      {
        type: "quote",
        text: "Commission UGC for the use you can describe, not the use you might imagine later.",
      },
      {
        type: "p",
        text: "The single most useful habit is a one-page content agreement attached to every UGC brief. It does not need to be intimidating. It needs to say what is being made, what it costs, how it can be used, and when those rights end.",
      },
    ],
  },
  {
    slug: "setting-campaign-deliverables",
    title: "Setting campaign deliverables that hold up",
    category: "Briefs & planning",
    excerpt:
      "Most deliverable disputes are avoidable. They begin with a sentence that sounded specific until two people read it differently.",
    date: "27 August 2026",
    dateISO: "2026-08-27",
    readingTime: "5 min read",
    image: "/images/cafe.jpg",
    alt: "A café table with coffee and breakfast, photographed in warm monochrome",
    takeaways: [
      "A deliverable is a specification, not an intention.",
      "Separate production from posting and usage.",
      "Agree revision rounds and payment triggers in advance.",
    ],
    body: [
      {
        type: "p",
        text: "“Two posts and a Reel” can mean at least four different things. It might mean two feed posts plus one video, or two posts including one video. It says nothing about duration, aspect ratio, captions, usage, or whether the content must be posted at all. Ambiguity here is not a creative problem; it is a planning problem that becomes a payment problem.",
      },
      {
        type: "h2",
        text: "A deliverable has six parts",
      },
      {
        type: "list",
        items: [
          "Format — Reel, static carousel, Story set, long-form video, photo essay.",
          "Quantity — the exact number, not a range.",
          "Specification — duration, aspect ratio, resolution, file type.",
          "Content requirements — required messages, product moments, prohibited claims.",
          "Distribution — posted by the creator, delivered only, or both.",
          "Rights — channels, term, territory, paid usage.",
        ],
      },
      {
        type: "h2",
        text: "Separate production from distribution",
      },
      {
        type: "p",
        text: "A content fee and a posting fee are not the same thing. If the brand is receiving files it can use, that is production. If the creator is also publishing to their audience, that is distribution and should be scoped with a date window. Mixing the two makes it hard to compare quotes from different creators and hard to price an extension later.",
      },
      {
        type: "h2",
        text: "Build in revision rounds",
      },
      {
        type: "p",
        text: "One consolidated round of revisions is a sensible default. Two is generous. Unlimited is a warning sign for both sides. Specify who consolidates feedback, how long the creator has to respond, and what counts as a revision rather than a new direction. If the brand changes the concept after seeing the first cut, that is a new scope, and it should be treated as one.",
      },
      {
        type: "h2",
        text: "Tie payment to clear milestones",
      },
      {
        type: "p",
        text: "For larger engagements, split payment across signature, content delivery, and publication. For smaller ones, a single invoice on delivery is fine. What matters is that the trigger is unambiguous and that payment terms are stated in days, not “on approval”. Creators plan their income around these dates.",
      },
      {
        type: "h2",
        text: "Write the handover down",
      },
      {
        type: "p",
        text: "List the files the brand will receive, where they will be delivered, and who is responsible for checking them. If raw footage is included, say how long it will be available. If the creator is posting, confirm the handle, the tags, and the disclosure format. A handover checklist takes ten minutes to write and prevents a week of messages.",
      },
      {
        type: "quote",
        text: "A good deliverables table is boring on purpose. It is the part of the campaign nobody has to discuss again.",
      },
    ],
  },
  {
    slug: "measuring-creator-campaign-performance",
    title: "Measuring creator campaign performance honestly",
    category: "Measurement",
    excerpt:
      "Impressions are easy to collect and rarely answer the question the business actually asked.",
    date: "12 August 2026",
    dateISO: "2026-08-12",
    readingTime: "7 min read",
    image: "/images/fitness.jpg",
    alt: "A person training in a gym, photographed in warm monochrome",
    takeaways: [
      "Decide what the campaign needs to prove before it starts.",
      "Use a baseline and a control where the budget allows.",
      "Report the misses alongside the wins.",
    ],
    body: [
      {
        type: "p",
        text: "Creator campaigns generate a lot of numbers. Most of them are platform-reported, some are estimates, and almost none of them are the number a finance team wants to see. Measurement starts with a decision: what will this campaign need to demonstrate, and to whom?",
      },
      {
        type: "h2",
        text: "Start with the decision, not the dashboard",
      },
      {
        type: "p",
        text: "A launch may need to prove awareness in a specific city. A performance campaign needs to prove cost per acquisition against another channel. An ambassador programme may need to prove retention or content output. These require different metrics, different windows, and different levels of confidence. Write the decision down before the campaign begins, and agree what would count as a useful result.",
      },
      {
        type: "h2",
        text: "Use a baseline",
      },
      {
        type: "p",
        text: "A number without a comparison is decoration. Compare against the brand’s own recent activity, the creator’s recent organic posts, or a holdout group where the budget allows. If no baseline exists, say so in the report and treat the campaign as a first measurement rather than proof of impact.",
      },
      {
        type: "h2",
        text: "Know what platform metrics can and cannot tell you",
      },
      {
        type: "p",
        text: "Platforms define views, reach, and engagement differently, and they change those definitions. Treat the numbers as directional. Reach is usually modelled, not counted. Saves and shares are stronger signals of intent than a like. A high view count with no profile visits or link taps may mean the content was watched and forgotten.",
      },
      {
        type: "h2",
        text: "Build attribution you can defend",
      },
      {
        type: "list",
        items: [
          "Use one code per creator so redemptions can be attributed without guesswork.",
          "Use UTM parameters for every link, and check them before the campaign goes live.",
          "Ask a short post-purchase question — “where did you hear about us?” — and report the sample size.",
          "Keep a control or comparison group for awareness or conversion studies where possible.",
          "State plainly what is correlated and what is caused.",
        ],
      },
      {
        type: "h2",
        text: "Read the qualitative signals",
      },
      {
        type: "p",
        text: "Comments, saves, direct messages, and the questions people ask are often more useful than a summary metric. If the audience is confused about the product, that is a finding. If creators tell you the brief was impossible to execute, that is a finding too. Build a place for it in the report rather than leaving it in a call.",
      },
      {
        type: "h2",
        text: "Report the misses",
      },
      {
        type: "p",
        text: "A campaign that underdelivered on one objective and overdelivered on another is normal. Reporting only the second half is not analysis; it is marketing. State the original target, what happened, and the most plausible explanation. That is what makes the next brief better.",
      },
      {
        type: "quote",
        text: "A report that only contains good news is not a report. It is a pitch.",
      },
      {
        type: "p",
        text: "Finally, keep the report short enough to be read. One page of context, one page of results, and a clear recommendation is usually more influential than a thirty-slide deck that nobody opens twice.",
      },
    ],
  },
];
