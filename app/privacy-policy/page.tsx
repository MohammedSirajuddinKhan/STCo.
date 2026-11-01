import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { EmailLink } from "@/components/ui";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How ST CO. handles information submitted through this website, including brand and creator enquiries, email delivery, hosting logs, and your rights.",
  path: "/privacy-policy",
});

const sections = [
  { id: "who-we-are", label: "Who we are" },
  { id: "what-we-collect", label: "What we collect" },
  { id: "how-it-is-delivered", label: "How enquiries are delivered" },
  { id: "cookies", label: "Cookies and local storage" },
  { id: "how-we-use", label: "How we use information" },
  { id: "lawful-basis", label: "Lawful basis" },
  { id: "sharing", label: "Sharing and processors" },
  { id: "retention", label: "Retention" },
  { id: "transfers", label: "International transfers" },
  { id: "rights", label: "Your rights" },
  { id: "security", label: "Security" },
  { id: "children", label: "Children" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="What this website collects, why it is collected, where it goes, and how to ask us to change or delete it."
      updated="21 October 2026"
      sections={sections}
    >
      <p>
        This policy describes the ST CO. website as it is currently built. The
        website is a marketing and enquiry site. It does not provide user
        accounts, process payments, or host a marketing database.
      </p>

      <h2 id="who-we-are">1. Who we are</h2>
      <p>
        ST CO. is an independent brand partnerships and creator marketing
        agency operating in India. For the purposes of applicable data
        protection law, ST CO. is the controller of the enquiry information
        described here.
      </p>
      <p>
        You can contact us at{" "}
        <EmailLink>{site.email}</EmailLink> or{" "}
        <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.
      </p>

      <h2 id="what-we-collect">2. What we collect</h2>
      <p>
        We collect only the information you choose to submit through a form, the
        technical information needed to deliver a web page, and the information
        needed to keep the forms from being abused.
      </p>

      <h3>Enquiry forms</h3>
      <ul>
        <li>
          <strong>Brand enquiries:</strong> name, business email, business or
          brand name, website or social profile, industry, campaign objective,
          target audience or location, preferred creator niche, approximate
          budget (optional), expected timeline, and any additional information
          you include.
        </li>
        <li>
          <strong>Creator applications:</strong> name, email, Instagram handle,
          other social links (optional), content niche, location, follower range,
          average views (optional), media kit or portfolio link (optional),
          preferred collaboration formats, and any additional information you
          include.
        </li>
        <li>
          <strong>General enquiries:</strong> name, email, enquiry type, and your
          message.
        </li>
        <li>
          <strong>Privacy acknowledgement:</strong> the fact that you confirmed
          the privacy note on the form.
        </li>
      </ul>
      <p>
        We do not ask for social media passwords, government identity numbers,
        payment card details, or health information through these forms. Please
        do not include sensitive personal information in an enquiry.
      </p>

      <h3>Technical information</h3>
      <p>
        When you visit the site, our hosting provider may process standard server
        log information such as your IP address, browser type, requested page,
        and the date and time of the request. This is used to serve and secure
        the website.
      </p>
      <p>
        The enquiry endpoint processes your IP address in memory to limit
        repeated automated submissions. That rate-limiting record is temporary
        and is not written to a database by ST CO.
      </p>

      <h2 id="how-it-is-delivered">3. How enquiries are delivered</h2>
      <p>
        When email delivery is configured by the site operator, the information
        you submit is validated on our server and sent as an email to ST CO.
        through a transactional email provider. The email includes your details
        so that we can reply to you. Your email address is used as the reply-to
        address.
      </p>
      <p>
        <strong>If delivery is not configured</strong>, the form will tell you
        clearly that nothing has been sent and offer to open your own email app
        with the details filled in. We do not show a false success message and
        we do not store the submission in a database.
      </p>
      <p>
        The website itself does not retain form submissions. The delivered email
        exists in our email inbox and in the email provider’s systems.
      </p>

      <h2 id="cookies">4. Cookies and local storage</h2>
      <p>
        This website does not currently set cookies for analytics, advertising,
        personalisation, or session management. It does not include advertising
        pixels, social media tracking scripts, or third-party analytics.
      </p>
      <p>
        Fonts are served by the website rather than requested from a third-party
        font service. The forms keep their contents in the browser tab while you
        are filling them in; that information is not saved to persistent storage
        by the site.
      </p>
      <p>
        For more detail, including the browser control that clears local site
        data, read the{" "}
        <Link href="/cookies">Cookie Policy</Link>.
      </p>

      <h2 id="how-we-use">5. How we use information</h2>
      <ul>
        <li>To read and respond to your enquiry or creator application.</li>
        <li>
          To assess whether a brand brief or creator profile is relevant to a
          possible collaboration.
        </li>
        <li>
          To communicate about a specific opportunity, scope, or engagement you
          have asked about.
        </li>
        <li>To keep a record of the conversation for ordinary business purposes.</li>
        <li>To protect the website from spam, abuse, and technical attacks.</li>
      </ul>
      <p>
        We do not add enquiry details to a newsletter, sell them, rent them, or
        use them for automated advertising. We do not use enquiry information to
        make automated decisions with legal or similarly significant effects.
      </p>

      <h2 id="lawful-basis">6. Lawful basis</h2>
      <p>
        Where the Digital Personal Data Protection Act, 2023 (India) applies, we
        process enquiry information on the basis of your consent, which you give
        by acknowledging the privacy note and submitting the form, and for the
        legitimate purposes of responding to your request.
      </p>
      <p>
        Where the General Data Protection Regulation or similar law applies, we
        rely on your consent for the enquiry, our legitimate interests in
        responding to business correspondence and securing the website, and
        compliance with legal obligations where relevant. You may withdraw
        consent at any time by contacting us; this does not affect processing
        that already took place.
      </p>
      <p>
        This section describes our current understanding and is not a
        certification of compliance. The legal basis for any specific engagement
        is confirmed in the applicable agreement.
      </p>

      <h2 id="sharing">7. Sharing and processors</h2>
      <p>We share information only where it is necessary to operate the site or respond to you:</p>
      <ul>
        <li>
          <strong>Hosting and infrastructure provider</strong> — serves the
          website and may process standard server logs.
        </li>
        <li>
          <strong>Transactional email provider</strong> — when configured,
          delivers the enquiry email and processes its contents on our behalf.
        </li>
        <li>
          <strong>Professional advisers or authorities</strong> — where required
          by law, or to establish or defend a legal claim.
        </li>
        <li>
          <strong>Creators or brands</strong> — only when you ask us to introduce
          you, or when a collaboration discussion requires it and you have agreed.
        </li>
      </ul>
      <p>
        We do not sell personal information. External links on this site, such as
        Instagram, lead to services with their own privacy policies; we do not
        control those services.
      </p>

      <h2 id="retention">8. Retention</h2>
      <p>
        Enquiry emails are kept for as long as needed to respond and to maintain a
        reasonable record of the conversation. When they are no longer needed,
        they are deleted or archived in the ordinary course of business. Hosting
        and email provider logs are retained according to those providers’
        settings.
      </p>
      <p>
        We do not operate a separate website database of enquiries, so there is no
        separate website retention period to apply. If a working relationship
        begins, relevant records may be retained for the duration of that
        relationship and for any period required by law.
      </p>

      <h2 id="transfers">9. International transfers</h2>
      <p>
        Our hosting and email providers may process information in countries
        other than India. Where that happens, we rely on the providers’ safeguards
        for international transfers. If you would like more detail about the
        providers used for a specific enquiry, ask us.
      </p>

      <h2 id="rights">10. Your rights</h2>
      <p>
        Depending on the law that applies to you, you may have the right to
        access the personal information we hold about you, ask for a correction,
        withdraw consent, ask for deletion, or object to certain processing. You
        may also have the right to complain to a data protection authority.
      </p>
      <p>
        To make a request, email{" "}
        <EmailLink subject="Privacy request">{site.email}</EmailLink>{" "}
        with enough information for us to identify the enquiry. We may need to
        verify your identity before acting. We will respond within a reasonable
        period and within any timeframe required by applicable law.
      </p>

      <h2 id="security">11. Security</h2>
      <p>
        We take reasonable technical and organisational measures to protect
        information, including server-side validation, restricted access to the
        enquiry inbox, and rate limiting on the form endpoint. No method of
        transmission or storage is completely secure, and email is not a
        confidential channel. Please do not send passwords, identity documents,
        or sensitive financial information through the website forms.
      </p>

      <h2 id="children">12. Children</h2>
      <p>
        This website is intended for businesses and adults. It is not directed to
        children. Creator applicants must be 18 or older. We do not knowingly
        collect personal information from children through this site. If you
        believe a child has submitted information, contact us and we will delete
        it.
      </p>

      <h2 id="changes">13. Changes</h2>
      <p>
        We may update this policy when the website, our providers, or the law
        changes. The last updated date at the top of the page reflects the current
        version. Material changes affecting how enquiries are handled will be
        reflected here before the change takes effect.
      </p>

      <h2 id="contact">14. Contact</h2>
      <p>
        ST CO. — {site.email} — {site.phoneDisplay}. You can also reach us on{" "}
        <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
          Instagram {site.instagramHandle}
        </a>
        . Instagram is an external service with its own privacy terms.
      </p>
    </LegalPage>
  );
}
