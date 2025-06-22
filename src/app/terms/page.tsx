import LegalPageLayout from '@/components/LegalPageLayout';
import LegalSection from '@/components/LegalSection';
import { SITE_CONSTANTS } from '@/data/constants';

export default function TermsOfService() {
  return (
    <LegalPageLayout title="Terms of Service" effectiveDate={SITE_CONSTANTS.TERMS_DATE}>
      <LegalSection title="1. Services Covered">
        <ul className="list-disc list-inside ml-4 text-base">
          <li>The Computer Tune-Up</li>
          <li>General IT support (remote or on-site)</li>
          <li>Consultations</li>
          <li>Future service packages</li>
        </ul>
        <p className="mt-2 text-base">Free 15-minute IT consultations are offered <strong>at our discretion</strong> and may be declined or canceled without notice.</p>
      </LegalSection>
      <LegalSection title="2. Payment Methods">
        <ul className="list-disc list-inside ml-4 text-base">
          <li>Stripe</li>
          <li>Calendly-integrated payment</li>
          <li>Cash</li>
          <li>Zelle</li>
          <li>PayPal</li>
          <li>Venmo</li>
          <li>Google Pay</li>
          <li>Apple Pay</li>
        </ul>
        <p className="mt-2 text-base">Payment must be made in full before or at the time of service, unless otherwise agreed upon.</p>
      </LegalSection>
      <LegalSection title="3. Refund Policy">
        <p className="text-base">Customer satisfaction is our priority. Refunds are offered <strong>at our discretion</strong>. While we typically honor refund requests in most cases where a customer is unsatisfied, we reserve the right to decline a refund in cases of suspected abuse or fraud.</p>
      </LegalSection>
      <LegalSection title="4. Eligibility">
        <p className="text-base">Our services are intended for individuals <strong>18 years of age or older</strong>. Clients under the age of 18 must be accompanied by a parent or legal guardian during service delivery.</p>
      </LegalSection>
      <LegalSection title="5. Data Privacy">
        <p className="text-base">We do <strong>not collect or store personal data</strong> from your devices, accounts, or networks beyond what is strictly necessary to perform the requested services. For example, your IP address may be used temporarily to resolve a network issue and is deleted immediately after service completion.</p>
        <p className="mt-2 text-base">We only retain limited contact details such as:</p>
        <ul className="list-disc list-inside ml-4 text-base">
          <li>Your name and email address for invoicing purposes</li>
          <li>Your phone number for communication</li>
        </ul>
        <p className="mt-2 text-base">Our newsletter is <strong>opt-in only</strong> and includes a clearly visible unsubscribe option in each message.</p>
      </LegalSection>
      <LegalSection title="6. Liability Disclaimer">
        <p className="text-base">Private IT Support is <strong>not liable</strong> for:</p>
        <ul className="list-disc list-inside ml-4 text-base">
          <li>Any loss of data</li>
          <li>Hardware or software failures</li>
          <li>Downtime or incidental damages resulting from service delivery</li>
        </ul>
        <p className="mt-2 text-base">If damages are directly caused by our service, a refund or reimbursement may be offered <strong>at our sole discretion</strong>. Our maximum liability is limited to the amount paid for the affected service.</p>
      </LegalSection>
      <LegalSection title="7. Modifications to Services or Terms">
        <ul className="list-disc list-inside ml-4 text-base">
          <li>Modify or discontinue services without prior notice</li>
          <li>Update these Terms at any time, with changes becoming effective immediately upon posting to our website</li>
        </ul>
      </LegalSection>
      <LegalSection title="8. Contact">
        <p className="text-base">For any questions or concerns regarding these Terms, please contact:</p>
        <p className="mt-2 text-base"><strong>Email</strong>: <a href={`mailto:${SITE_CONSTANTS.EMAIL}`} className="underline text-blue-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded" aria-label={`Send email to ${SITE_CONSTANTS.EMAIL}`}>{SITE_CONSTANTS.EMAIL}</a></p>
      </LegalSection>
    </LegalPageLayout>
  );
} 