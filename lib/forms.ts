import { z } from "zod";

const required = (label: string) => `${label} is required.`;

const nameField = z
  .string()
  .trim()
  .min(2, "Please enter your name.")
  .max(120, "Please keep this under 120 characters.");

const emailField = z
  .string()
  .trim()
  .max(200, "Please keep this under 200 characters.")
  .email("Please enter a valid email address.");

const optionalText = (max = 500) =>
  z
    .string()
    .trim()
    .max(max, `Please keep this under ${max} characters.`)
    .optional()
    .or(z.literal(""));

const privacyField = z
  .boolean()
  .refine((value) => value === true, "Please acknowledge the privacy note to continue.");

const honeypot = z.string().max(0).optional().or(z.literal(""));

export const brandEnquirySchema = z.object({
  kind: z.literal("brand"),
  name: nameField,
  email: emailField,
  business: z.string().trim().min(2, required("Business or brand name")).max(160),
  website: optionalText(240),
  industry: z.string().trim().min(1, "Please select an industry."),
  objective: z.string().trim().min(20, "Please describe the objective in a little more detail.").max(2000),
  audience: z.string().trim().min(2, required("Target audience or location")).max(500),
  niche: z.string().trim().min(1, "Please select a creator niche."),
  budget: optionalText(80),
  timeline: z.string().trim().min(1, "Please select an expected timeline."),
  details: optionalText(3000),
  privacy: privacyField,
  _gotcha: honeypot,
});

export const creatorEnquirySchema = z.object({
  kind: z.literal("creator"),
  name: nameField,
  email: emailField,
  instagram: z.string().trim().min(2, "Please add your Instagram handle.").max(120),
  otherSocial: optionalText(300),
  niche: z.string().trim().min(1, "Please select your content niche."),
  location: z.string().trim().min(2, required("Location")).max(160),
  followers: z.string().trim().min(1, "Please select a follower range."),
  avgViews: optionalText(80),
  portfolio: optionalText(300),
  formats: z.array(z.string()).min(1, "Please choose at least one collaboration format."),
  details: optionalText(3000),
  privacy: privacyField,
  _gotcha: honeypot,
});

export const contactEnquirySchema = z.object({
  kind: z.literal("contact"),
  name: nameField,
  email: emailField,
  enquiryType: z.string().trim().min(1, "Please select an enquiry type."),
  message: z.string().trim().min(20, "Please write a little more so we can help.").max(3000),
  privacy: privacyField,
  _gotcha: honeypot,
});

export const enquirySchema = z.discriminatedUnion("kind", [
  brandEnquirySchema,
  creatorEnquirySchema,
  contactEnquirySchema,
]);

export type BrandEnquiry = z.infer<typeof brandEnquirySchema>;
export type CreatorEnquiry = z.infer<typeof creatorEnquirySchema>;
export type ContactEnquiry = z.infer<typeof contactEnquirySchema>;
export type Enquiry = z.infer<typeof enquirySchema>;

export const industryOptions = [
  "Café or restaurant",
  "Food and beverage",
  "Beauty and skincare",
  "Fashion and lifestyle",
  "Fitness and wellness",
  "Home and interiors",
  "Hospitality and travel",
  "Consumer products",
  "Services",
  "Other",
];

export const creatorNicheOptions = [
  "Food, cafés and restaurants",
  "Beauty and skincare",
  "Fashion and lifestyle",
  "Fitness and wellness",
  "Travel and city guides",
  "Home and interiors",
  "UGC and content creation",
  "Photography and videography",
  "Mixed lifestyle",
];

export const budgetOptions = [
  "Not sure yet",
  "Under ₹25,000",
  "₹25,000 – ₹75,000",
  "₹75,000 – ₹1,50,000",
  "₹1,50,000 – ₹3,00,000",
  "₹3,00,000+",
  "Prefer not to say",
];

export const timelineOptions = [
  "Within 2 weeks",
  "3–4 weeks",
  "1–2 months",
  "3 months or more",
  "Flexible / planning ahead",
];

export const followerOptions = [
  "Under 5,000",
  "5,000 – 20,000",
  "20,000 – 50,000",
  "50,000 – 100,000",
  "100,000 – 500,000",
  "500,000+",
];

export const formatOptions = [
  "Instagram Reels",
  "Instagram Stories",
  "Static posts",
  "YouTube",
  "UGC only (no posting)",
  "Event coverage",
  "Photography",
];

export const contactTypeOptions = [
  "Brand collaboration",
  "Creator question",
  "General enquiry",
  "Something else",
];

/** Human label for each field, used in the delivered email. */
export const enquiryFieldOrder: Record<Enquiry["kind"], string[]> = {
  brand: [
    "name",
    "email",
    "business",
    "website",
    "industry",
    "objective",
    "audience",
    "niche",
    "budget",
    "timeline",
    "details",
  ],
  creator: [
    "name",
    "email",
    "instagram",
    "otherSocial",
    "niche",
    "location",
    "followers",
    "avgViews",
    "portfolio",
    "formats",
    "details",
  ],
  contact: ["name", "email", "enquiryType", "message"],
};

function displayValue(value: unknown): string {
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "string") return value.trim();
  return "";
}

export function formatEnquiry(kind: Enquiry["kind"], data: Record<string, unknown>) {
  return enquiryFieldOrder[kind]
    .map((key) => ({
      label: fieldLabels[key] ?? key,
      value: displayValue(data[key]),
    }))
    .filter((row) => row.value.length > 0);
}

export const fieldLabels: Record<string, string> = {
  name: "Name",
  email: "Email",
  business: "Business or brand",
  website: "Website or social profile",
  industry: "Industry",
  objective: "Campaign objective",
  audience: "Target audience or location",
  niche: "Preferred creator niche",
  budget: "Approximate budget",
  timeline: "Expected timeline",
  details: "Additional information",
  instagram: "Instagram handle",
  otherSocial: "Other social links",
  location: "Location",
  followers: "Follower range",
  avgViews: "Average views",
  portfolio: "Media kit or portfolio",
  formats: "Preferred collaboration formats",
  enquiryType: "Enquiry type",
  message: "Message",
  privacy: "Privacy acknowledgement",
};
