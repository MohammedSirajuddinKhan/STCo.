import type { Metadata } from "next";
import Link from "next/link";
import { ClearSiteData } from "@/components/clear-site-data";
import { LegalPage } from "@/components/legal-page";
import { EmailLink } from "@/components/ui";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Cookie Policy",
  description:
    "ST CO. currently sets no cookies for analytics or advertising. Read what the site does and does not store, and how to clear local browser data.",
  path: "/cookies",
});

const sections = [
  { id: "summary", label: "Summary" },
  { id: "what-is-a-cookie", label: "What cookies are" },
  { id: "cookies-we-use", label: "Cookies we use" },
  { id: "local-storage", label: "Local storage" },
  { id: "third-parties", label: "Third parties" },
  { id: "controls", label: "Your controls" },
  { id: "browser", label: "Browser settings" },
  { id: "changes", label: "Future changes" },
  { id: "contact", label: "Contact" },
];

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      intro="This site currently sets no cookies for analytics, advertising, or tracking. No consent banner is shown because there is nothing non-essential to consent to."
      updated="21 October 2026"
      sections={sections}
    >
      <h2 id="summary">1. Summary</h2>
      <p>
        At the time of this version, the ST CO. website does not set cookies. It
        does not use Google Analytics, advertising pixels, heatmaps, session
        recording, or social media tracking scripts. Fonts are served from this
        site rather than a third-party font service.
      </p>
      <p>
        Because there are no non-essential cookies or trackers, there is no
        consent interface. Showing a banner that asks for permission the site
        does not need would be misleading. If tracking is added later, this page
        will be updated and a genuine consent control will be introduced before
        any non-essential cookie is set.
      </p>

      <h2 id="what-is-a-cookie">2. What cookies are</h2>
      <p>
        A cookie is a small text file that a website asks your browser to store.
        Cookies are often used to keep you signed in, remember preferences, or
        measure activity across sites. Similar technologies include local
        storage, session storage, and pixels.
      </p>

      <h2 id="cookies-we-use">3. Cookies we use</h2>
      <p>
        The site currently sets no first-party or third-party cookies. No cookie
        category is marked “essential”, “analytics”, or “marketing” because none
        are active.
      </p>

      <div className="not-prose my-8 border border-[var(--hairline)]">
        <div className="grid grid-cols-3 gap-4 border-b border-[var(--hairline)] bg-stone px-5 py-3 text-[0.625rem] uppercase tracking-[0.16em] text-ink/50">
          <span>Category</span>
          <span>Used</span>
          <span>Purpose</span>
        </div>
        {[
          ["Essential", "No", "No session or account system exists."],
          ["Analytics", "No", "No analytics service is installed."],
          ["Advertising", "No", "No ad pixels or retargeting tags."],
          ["Preferences", "No", "No cookie-based preferences are stored."],
        ].map(([category, used, purpose]) => (
          <div
            key={category}
            className="grid grid-cols-3 gap-4 border-b border-[var(--hairline)] px-5 py-3.5 text-[0.8125rem] last:border-b-0"
          >
            <span className="font-medium">{category}</span>
            <span className="text-ink/55">{used}</span>
            <span className="text-ink/60">{purpose}</span>
          </div>
        ))}
      </div>

      <h2 id="local-storage">4. Local storage</h2>
      <p>
        The website does not currently write to localStorage or sessionStorage.
        The enquiry forms hold their contents in the memory of the open browser
        tab while you fill them in. That information is cleared when you close or
        reload the tab, or after a successful submission.
      </p>
      <p>
        If a future feature saves a preference locally, this page will describe
        it and the control below will remove it.
      </p>

      <h2 id="third-parties">5. Third parties</h2>
      <p>
        The site may be served through a hosting provider that processes standard
        request logs for security and delivery. Those logs can include IP
        addresses; they are not advertising cookies. When email delivery is
        configured, an email provider processes the content of an enquiry in
        order to deliver it. Their own cookie and privacy terms apply to their
        services, not to normal page views on this site.
      </p>
      <p>
        Links to Instagram open an external service. Instagram may set cookies
        once you visit it. That activity is governed by Instagram’s policies, not
        ours.
      </p>

      <h2 id="controls">6. Your controls</h2>
      <ClearSiteData />
      <p>
        You can also block or delete cookies in your browser at any time. Blocking
        all cookies should not prevent you from reading this site or sending an
        enquiry.
      </p>

      <h2 id="browser">7. Browser settings</h2>
      <p>
        Most browsers let you view, delete, and block cookies under Settings →
        Privacy and security. The following pages explain the process for common
        browsers:
      </p>
      <ul>
        <li>Google Chrome — Settings → Privacy and security → Third-party cookies</li>
        <li>Apple Safari — Settings → Privacy → Manage Website Data</li>
        <li>Mozilla Firefox — Settings → Privacy &amp; Security → Cookies and Site Data</li>
        <li>Microsoft Edge — Settings → Cookies and site permissions</li>
      </ul>
      <p>
        Browser controls vary by version. If you are unsure, use your browser’s
        help pages.
      </p>

      <h2 id="changes">8. Future changes</h2>
      <p>
        If ST CO. introduces analytics, embedded media, advertising, or any other
        feature that uses non-essential cookies or tracking, this policy will be
        updated before the feature is enabled, and a consent mechanism will be
        provided where required. The “last updated” date will change accordingly.
      </p>

      <h2 id="contact">9. Contact</h2>
      <p>
        Questions about cookies or browser storage can be sent to{" "}
        <EmailLink>{site.email}</EmailLink>. For broader questions
        about how enquiry information is handled, read the{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
