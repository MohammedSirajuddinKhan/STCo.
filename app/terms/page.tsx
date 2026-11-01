import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { EmailLink } from "@/components/ui";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description:
    "The terms that apply to using the ST CO. website, including intellectual property, enquiry submissions, external links, and the status of concept work.",
  path: "/terms",
});

const sections = [
  { id: "agreement", label: "Agreement" },
  { id: "website-use", label: "Website use" },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "concept-work", label: "Concept work" },
  { id: "enquiries", label: "Enquiries and submissions" },
  { id: "no-engagement", label: "No client relationship" },
  { id: "campaigns", label: "Campaign engagements" },
  { id: "external-links", label: "External links" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Liability" },
  { id: "privacy", label: "Privacy" },
  { id: "law", label: "Governing law" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="The rules for using this website, and an explanation of what this site does and does not commit ST CO. to."
      updated="21 October 2026"
      sections={sections}
    >
      <p>
        These terms apply to your use of the ST CO. website. By using the site,
        you agree to them. If you do not agree, please do not use the site.
      </p>

      <h2 id="agreement">1. Agreement</h2>
      <p>
        This website is operated by ST CO., an independent brand partnerships and
        creator marketing agency based in India. These terms are a website terms
        of use. They are not a service agreement, a campaign contract, or a
        quotation.
      </p>

      <h2 id="website-use">2. Website use</h2>
      <p>You agree to use the site lawfully and not to:</p>
      <ul>
        <li>attempt to gain unauthorised access to the site or its systems;</li>
        <li>submit false, misleading, or unlawful information through a form;</li>
        <li>use automated means to scrape, overload, or disrupt the site;</li>
        <li>impersonate another person or organisation; or</li>
        <li>use the site in a way that infringes the rights of others.</li>
      </ul>
      <p>
        We may restrict access or remove content where we believe the site is
        being misused.
      </p>

      <h2 id="intellectual-property">3. Intellectual property</h2>
      <p>
        The ST CO. name and wordmark, the design and layout of this website, the
        written content, and the concept campaign materials are owned by or
        licensed to ST CO. and are protected by applicable intellectual property
        laws.
      </p>
      <p>
        You may view the site, share links to it, and print or save pages for your
        own evaluation. You may not reproduce, republish, sell, or use the
        material commercially without written permission. Short quotations with
        clear attribution and a link to the original page are permitted.
      </p>
      <p>
        Photography on this site is illustrative and is used under the applicable
        licence or permission. It does not depict ST CO. employees, clients, or
        creators who have worked with ST CO.
      </p>

      <h2 id="concept-work">4. Concept work</h2>
      <p>
        The campaigns shown under <Link href="/work">Work</Link> are speculative
        concept projects. The brands named in them are fictional and were created
        to demonstrate planning. They are not completed campaigns, and no real
        brand, creator, client, result, or endorsement is associated with ST CO.
      </p>
      <p>
        Concept material is provided for illustration. It is not an offer, a
        promise of results, or a statement that a similar campaign will be
        available or effective for another brand.
      </p>

      <h2 id="enquiries">5. Enquiries and submissions</h2>
      <p>
        When you submit an enquiry or creator application, you confirm that the
        information is accurate and that you are entitled to share it. Do not
        submit material that belongs to someone else without permission.
      </p>
      <p>
        Please do not send confidential trade secrets, unreleased product
        information, or sensitive personal data through the website forms. An
        enquiry does not create a confidential relationship. We may already be
        working on similar ideas for another client, and we cannot agree to treat
        unsolicited concepts as exclusive.
      </p>
      <p>
        We use enquiry information to respond to you as described in the{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>. An acknowledgement or
        automated confirmation is not an acceptance of work.
      </p>

      <h2 id="no-engagement">6. No client or creator relationship</h2>
      <p>
        Sending an enquiry does not create a client, agency, employment, or
        representation relationship. ST CO. does not represent creators as a
        talent agency. A relationship begins only when both parties have accepted
        a written scope or agreement.
      </p>

      <h2 id="campaigns">7. Campaign engagements</h2>
      <p>
        Any campaign, partnership, creator collaboration, or UGC engagement is
        governed by a separate written agreement between the relevant parties.
        That agreement will set out scope, deliverables, fees, payment terms,
        timelines, approvals, usage rights, exclusivity, confidentiality, and
        liability.
      </p>
      <p>
        Information on this website about services, process, or fees is general.
        It is not a quotation and does not guarantee availability. Where anything
        on this site conflicts with a signed engagement agreement, the signed
        agreement prevails.
      </p>

      <h2 id="external-links">8. External links</h2>
      <p>
        This site links to external services, including Instagram and email
        providers. Those services are not controlled by ST CO. and have their own
        terms and privacy policies. We are not responsible for their content,
        availability, or practices.
      </p>

      <h2 id="disclaimers">9. Disclaimers</h2>
      <p>
        The website is provided on an “as is” and “as available” basis. We aim to
        keep the information accurate and current, but we do not warrant that the
        site will be uninterrupted, error-free, or complete.
      </p>
      <p>
        Nothing on this site is legal, financial, tax, or medical advice. Articles
        in <Link href="/insights">Insights</Link> reflect our working views and
        may not be appropriate for your circumstances.
      </p>
      <p>
        We do not guarantee reach, engagement, virality, sales, revenue, creator
        acceptance, or any particular campaign outcome. Any projection or example
        is illustrative only.
      </p>

      <h2 id="liability">10. Liability</h2>
      <p>
        To the maximum extent permitted by law, ST CO. is not liable for indirect,
        incidental, special, or consequential loss arising from your use of this
        website, or from reliance on its general information. Nothing in these
        terms excludes or limits liability that cannot lawfully be excluded or
        limited.
      </p>
      <p>
        If a separate written agreement applies to your engagement, its liability
        provisions govern that engagement.
      </p>

      <h2 id="privacy">11. Privacy</h2>
      <p>
        Our handling of personal information is described in the{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> and the{" "}
        <Link href="/cookies">Cookie Policy</Link>, which form part of these
        terms.
      </p>

      <h2 id="law">12. Governing law</h2>
      <p>
        These terms are governed by the laws of India. Disputes relating to the
        website are subject to the jurisdiction of the competent courts in India,
        unless applicable law requires otherwise. Any campaign engagement may
        specify a different governing law and jurisdiction in its written
        agreement.
      </p>

      <h2 id="changes">13. Changes</h2>
      <p>
        We may update these terms as the website or our services change. The “last
        updated” date reflects the current version. Continued use of the site
        after an update means you accept the revised terms.
      </p>

      <h2 id="contact">14. Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <EmailLink>{site.email}</EmailLink> or{" "}
        <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>.
      </p>
    </LegalPage>
  );
}
