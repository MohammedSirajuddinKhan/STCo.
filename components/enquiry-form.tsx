"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  brandEnquirySchema,
  contactEnquirySchema,
  creatorEnquirySchema,
  budgetOptions,
  contactTypeOptions,
  creatorNicheOptions,
  followerOptions,
  formatOptions,
  formatEnquiry,
  industryOptions,
  timelineOptions,
  type Enquiry,
} from "@/lib/forms";
import { absoluteUrl, gmailComposeUrl, site } from "@/lib/site";
import { ArrowUpRight } from "@/components/ui";

type Variant = Enquiry["kind"];
type Status = "idle" | "success";

const schemaByVariant = {
  brand: brandEnquirySchema,
  creator: creatorEnquirySchema,
  contact: contactEnquirySchema,
};

const submitLabels: Record<Variant, string> = {
  brand: "Send brand enquiry",
  creator: "Send creator application",
  contact: "Send message",
};

function Field({
  name,
  label,
  optional = false,
  error,
  children,
  className = "",
}: {
  name: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`field ${className}`}>
      <label htmlFor={name} className="field-label">
        {label} {optional ? <span>(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="field-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const sourceByVariant = {
  brand: { path: "/for-brands", label: "brand enquiry form" },
  creator: { path: "/for-creators", label: "creator application form" },
  contact: { path: "/contact", label: "contact form" },
} as const satisfies Record<Variant, { path: string; label: string }>;

/** Subject and plain-text body of the email the visitor is about to send. */
function buildEmail(kind: Variant, data: Record<string, unknown>) {
  const name = String(data.name ?? "");
  const subject =
    kind === "brand"
      ? `Brand enquiry — ${String(data.business ?? "") || name}`
      : kind === "creator"
        ? `Creator application — ${name}`
        : `Website enquiry — ${String(data.enquiryType || "General enquiry")} (${name})`;
  const rows = formatEnquiry(kind, data)
    .map((row) => `${row.label}: ${row.value}`)
    .join("\n");
  const source = sourceByVariant[kind];
  const body = [
    "Hello ST CO.,",
    "",
    rows,
    "",
    "—",
    `Sent from the ${source.label} at ${absoluteUrl(source.path)}.`,
  ].join("\n");
  return { subject, body };
}

/** Non-Gmail fallback: hands the same draft to the visitor's mail app. */
function buildMailto({ subject, body }: { subject: string; body: string }) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body,
  )}`;
}

export function EnquiryForm({
  variant,
  id,
}: {
  variant: Variant;
  id?: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [draftHref, setDraftHref] = useState("");
  const [mailtoHref, setMailtoHref] = useState("");
  const [tabBlocked, setTabBlocked] = useState(false);

  const inputProps = (name: string) => ({
    id: name,
    name,
    className: "field-input",
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const describedBy = (name: string) => (errors[name] ? `${name}-error` : undefined);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const raw: Record<string, unknown> = { kind: variant };

    for (const key of [
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
      "instagram",
      "otherSocial",
      "location",
      "followers",
      "avgViews",
      "portfolio",
      "enquiryType",
      "message",
    ]) {
      const value = formData.get(key);
      if (value !== null) raw[key] = String(value);
    }
    raw.formats = formData.getAll("formats").map(String);
    raw.privacy = formData.get("privacy") === "on";

    const parsed = schemaByVariant[variant].safeParse(raw);

    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      setStatus("idle");
      setStatusMessage("Please check the highlighted fields.");
      requestAnimationFrame(() => {
        form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      });
      return;
    }

    setErrors({});
    setStatusMessage("");

    const payload = parsed.data;
    const { subject, body } = buildEmail(
      variant,
      payload as Record<string, unknown>,
    );
    const url = gmailComposeUrl({ subject, body });

    // Open synchronously inside the click's user gesture so popup blockers
    // allow it, then sever the opener for safety.
    const opened = window.open(url, "_blank");
    if (opened) opened.opener = null;

    setDraftHref(url);
    setMailtoHref(buildMailto({ subject, body }));
    setTabBlocked(!opened);
    setStatus("success");
    requestAnimationFrame(() => {
      document.getElementById("form-status")?.focus();
    });
  }

  return (
    <form
      ref={formRef}
      id={id}
      onSubmit={handleSubmit}
      noValidate
      className="relative"
      aria-describedby={statusMessage ? "form-status-message" : undefined}
    >
      {status === "success" ? (
        <div
          id="form-status"
          role="status"
          tabIndex={-1}
          className={`form-status ${
            tabBlocked ? "form-status--error" : "form-status--info"
          } mb-9 outline-none`}
        >
          <p className="font-medium text-ink">
            {tabBlocked
              ? "Your browser blocked the Gmail tab."
              : "Your email is written — press Send in Gmail."}
          </p>
          <p id="form-status-message" className="mt-2 text-ink/70">
            {tabBlocked
              ? "Nothing has been sent yet. Use the button below to open the pre-written draft in a new tab."
              : `A new tab opened with Gmail, addressed to ${site.email}, with every answer from this form filled in. Press Send there and your enquiry is on its way.`}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={draftHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--solid shrink-0"
            >
              {tabBlocked ? "Open the draft" : "Open the draft again"}
              <ArrowUpRight />
            </a>
            <a href={mailtoHref} className="link-quiet self-start text-ink/70">
              Send from another email app
            </a>
            <button
              type="button"
              className="link-quiet self-start text-ink/70"
              onClick={() => {
                setStatus("idle");
                setTabBlocked(false);
                setDraftHref("");
                setMailtoHref("");
                setErrors({});
                formRef.current?.reset();
              }}
            >
              Start a new enquiry
            </button>
          </div>
          <p className="form-note mt-4">
            Nothing is sent from this website itself — the email leaves from
            your own Gmail account, and your answers stay in the form below
            until you change them.
          </p>
        </div>
      ) : null}

      {status === "idle" && Object.keys(errors).length > 0 ? (
        <p className="form-status form-status--error mb-8" role="alert">
          Please check the highlighted fields and try again.
        </p>
      ) : null}

      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <Field name="name" label="Name" error={errors.name}>
          <input
            {...inputProps("name")}
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </Field>

        <Field name="email" label="Email" error={errors.email}>
          <input
            {...inputProps("email")}
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            required
          />
        </Field>

        {variant === "brand" ? (
          <>
            <Field name="business" label="Business or brand" error={errors.business}>
              <input
                {...inputProps("business")}
                type="text"
                autoComplete="organization"
                placeholder="Business name"
                required
              />
            </Field>

            <Field
              name="website"
              label="Website or social profile"
              optional
              error={errors.website}
            >
              <input
                {...inputProps("website")}
                type="text"
                placeholder="https:// or @handle"
              />
            </Field>

            <Field name="industry" label="Industry" error={errors.industry}>
              <select {...inputProps("industry")} defaultValue="" required>
                <option value="" disabled>
                  Select an industry
                </option>
                {industryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              name="niche"
              label="Preferred creator niche"
              error={errors.niche}
            >
              <select {...inputProps("niche")} defaultValue="" required>
                <option value="" disabled>
                  Select a creator niche
                </option>
                {creatorNicheOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              name="objective"
              label="Campaign objective"
              error={errors.objective}
              className="sm:col-span-2"
            >
              <textarea
                {...inputProps("objective")}
                rows={4}
                placeholder="What are you trying to achieve, and what are you launching or promoting?"
                required
              />
            </Field>

            <Field
              name="audience"
              label="Target audience or location"
              error={errors.audience}
            >
              <input
                {...inputProps("audience")}
                type="text"
                placeholder="Who, and where"
                required
              />
            </Field>

            <Field name="timeline" label="Expected timeline" error={errors.timeline}>
              <select {...inputProps("timeline")} defaultValue="" required>
                <option value="" disabled>
                  Select a timeline
                </option>
                {timelineOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              name="budget"
              label="Approximate budget"
              optional
              error={errors.budget}
            >
              <select {...inputProps("budget")} defaultValue="">
                <option value="">Select a range, if useful</option>
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <div className="hidden sm:block" aria-hidden="true" />

            <Field
              name="details"
              label="Additional information"
              optional
              error={errors.details}
              className="sm:col-span-2"
            >
              <textarea
                {...inputProps("details")}
                rows={4}
                placeholder="Mandatories, constraints, previous activity, or anything else that would help."
              />
            </Field>
          </>
        ) : null}

        {variant === "creator" ? (
          <>
            <Field name="instagram" label="Instagram handle" error={errors.instagram}>
              <input
                {...inputProps("instagram")}
                type="text"
                autoComplete="off"
                placeholder="@yourhandle"
                required
              />
            </Field>

            <Field
              name="otherSocial"
              label="Other social links"
              optional
              error={errors.otherSocial}
            >
              <input
                {...inputProps("otherSocial")}
                type="text"
                placeholder="YouTube, TikTok, portfolio"
              />
            </Field>

            <Field name="niche" label="Content niche" error={errors.niche}>
              <select {...inputProps("niche")} defaultValue="" required>
                <option value="" disabled>
                  Select your niche
                </option>
                {creatorNicheOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field name="location" label="Location" error={errors.location}>
              <input
                {...inputProps("location")}
                type="text"
                autoComplete="address-level2"
                placeholder="City and state"
                required
              />
            </Field>

            <Field name="followers" label="Follower range" error={errors.followers}>
              <select {...inputProps("followers")} defaultValue="" required>
                <option value="" disabled>
                  Select a range
                </option>
                {followerOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field
              name="avgViews"
              label="Average views"
              optional
              error={errors.avgViews}
            >
              <input
                {...inputProps("avgViews")}
                type="text"
                placeholder="A recent range is fine"
              />
            </Field>

            <Field
              name="portfolio"
              label="Media kit or portfolio link"
              optional
              error={errors.portfolio}
              className="sm:col-span-2"
            >
              <input
                {...inputProps("portfolio")}
                type="text"
                placeholder="Link to a media kit, three recent posts, or a portfolio"
              />
            </Field>

            <fieldset className="sm:col-span-2">
              <legend className="field-label">
                Preferred collaboration formats
              </legend>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {formatOptions.map((format) => (
                  <label key={format} className="check-line">
                    <input
                      type="checkbox"
                      name="formats"
                      value={format}
                      aria-invalid={errors.formats ? true : undefined}
                      aria-describedby={describedBy("formats")}
                    />
                    <span>{format}</span>
                  </label>
                ))}
              </div>
              {errors.formats ? (
                <p id="formats-error" className="field-error mt-3">
                  {errors.formats}
                </p>
              ) : null}
            </fieldset>

            <Field
              name="details"
              label="Additional information"
              optional
              error={errors.details}
              className="sm:col-span-2"
            >
              <textarea
                {...inputProps("details")}
                rows={4}
                placeholder="Recent brand work, formats you enjoy, availability, or anything else."
              />
            </Field>
          </>
        ) : null}

        {variant === "contact" ? (
          <>
            <Field
              name="enquiryType"
              label="What is this about?"
              error={errors.enquiryType}
            >
              <select {...inputProps("enquiryType")} defaultValue="" required>
                <option value="" disabled>
                  Select an enquiry type
                </option>
                {contactTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <div className="hidden sm:block" aria-hidden="true" />

            <Field
              name="message"
              label="Message"
              error={errors.message}
              className="sm:col-span-2"
            >
              <textarea
                {...inputProps("message")}
                rows={6}
                placeholder="Tell us what you have in mind."
                required
              />
            </Field>
          </>
        ) : null}

        <div className="sm:col-span-2">
          <label className="check-line max-w-[68ch]">
            <input
              type="checkbox"
              name="privacy"
              required
              aria-invalid={errors.privacy ? true : undefined}
              aria-describedby={describedBy("privacy")}
            />
            <span>
              I acknowledge that ST CO. will use the details I have provided to
              respond to this enquiry, as described in the{" "}
              <Link
                href="/privacy-policy"
                className="underline decoration-[var(--hairline-strong)] underline-offset-2 hover:text-ink"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.privacy ? (
            <p id="privacy-error" className="field-error mt-2">
              {errors.privacy}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2 flex flex-col gap-5 border-t border-[var(--hairline)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="form-note max-w-[38ch]">
            We use enquiry details only to respond. No newsletters, no resale,
            no automated marketing.
          </p>
          <button type="submit" className="btn btn--solid shrink-0">
            {submitLabels[variant]}
            <ArrowUpRight />
          </button>
        </div>
      </div>
    </form>
  );
}
