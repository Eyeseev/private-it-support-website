import LegalPageLayout from '@/components/LegalPageLayout';
import LegalSection from '@/components/LegalSection';
import { SITE_CONSTANTS } from '@/data/constants';

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" effectiveDate={SITE_CONSTANTS.PRIVACY_POLICY_DATE}>
      <LegalSection title="1. Information We Collect">
        <ul className="list-disc list-inside ml-4 text-base">
          <li>Your name, email address, and contact details when you book a consultation or service.</li>
          <li>Analytics data (such as pages visited, device/browser type, and referral sources) via tools like Google Analytics or Plausible.</li>
        </ul>
      </LegalSection>
      <LegalSection title="2. How We Use Your Information">
        <ul className="list-disc list-inside ml-4 mb-2 text-base">
          <li>Respond to inquiries or service requests.</li>
          <li>Send booking confirmations and follow-up communications.</li>
          <li>Improve website performance, content, and user experience.</li>
        </ul>
        <p className="mt-2 text-base">We do <strong>not</strong> sell, rent, or trade your personal information to third parties.</p>
      </LegalSection>
      <LegalSection title="3. Booking & Third-Party Services">
        <p className="text-base">When you book through Calendly, their platform collects and processes your information under their own privacy policy. Please review <a href={SITE_CONSTANTS.CALENDLY_PRIVACY_URL} className="underline text-blue-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded" target="_blank" rel="noopener noreferrer" aria-label="Read Calendly's Privacy Policy (opens in new tab)">Calendly&apos;s Privacy Policy</a> for more details.</p>
      </LegalSection>
      <LegalSection title="4. Data Security">
        <p className="text-base">We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
      </LegalSection>
      <LegalSection title="5. Your Rights">
        <p className="text-base">You may request the following at any time by emailing <a href={`mailto:${SITE_CONSTANTS.EMAIL}`} className="underline text-blue-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded" aria-label={`Send email to ${SITE_CONSTANTS.EMAIL}`}>{SITE_CONSTANTS.EMAIL}</a>:</p>
        <ul className="list-disc list-inside ml-4 text-base">
          <li>Access to the personal data we hold about you.</li>
          <li>Correction of inaccurate or outdated information.</li>
          <li>Deletion of your personal data, subject to legal or contractual obligations.</li>
        </ul>
      </LegalSection>
      <LegalSection title="6. Changes to This Policy">
        <p className="text-base">We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Effective Date&rdquo; at the top of this page. Significant changes will be communicated through this website.</p>
      </LegalSection>
      <LegalSection title="7. Contact Us">
        <p className="text-base">If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at:</p>
        <p className="mt-2 text-base"><strong>Email</strong>: <a href={`mailto:${SITE_CONSTANTS.EMAIL}`} className="underline text-blue-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded" aria-label={`Send email to ${SITE_CONSTANTS.EMAIL}`}>{SITE_CONSTANTS.EMAIL}</a></p>
      </LegalSection>
    </LegalPageLayout>
  );
} 