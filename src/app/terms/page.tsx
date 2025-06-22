import Link from 'next/link';

export default function TermsOfService() {
  return (
    <main className="section-spacing">
      <div className="section-content">
        <h1 className="text-3xl font-semibold mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Effective Date: June 22, 2025</p>
        <section className="mb-8">
          <p className="text-base">These Terms of Service ("Terms") govern your use of the services provided by Private IT Support ("we," "our," or "us"). By booking or using our services, you agree to be bound by these Terms.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Services Covered</h2>
          <ul className="list-disc list-inside ml-4 text-base">
            <li>The Computer Tune-Up</li>
            <li>General IT support (remote or on-site)</li>
            <li>Consultations</li>
            <li>Future service packages</li>
          </ul>
          <p className="mt-2 text-base">Free 15-minute IT consultations are offered <strong>at our discretion</strong> and may be declined or canceled without notice.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">2. Payment Methods</h2>
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
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">3. Refund Policy</h2>
          <p className="text-base">Customer satisfaction is our priority. Refunds are offered <strong>at our discretion</strong>. While we typically honor refund requests in most cases where a customer is unsatisfied, we reserve the right to decline a refund in cases of suspected abuse or fraud.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. Eligibility</h2>
          <p className="text-base">Our services are intended for individuals <strong>18 years of age or older</strong>. Clients under the age of 18 must be accompanied by a parent or legal guardian during service delivery.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">5. Data Privacy</h2>
          <p className="text-base">We do <strong>not collect or store personal data</strong> from your devices, accounts, or networks beyond what is strictly necessary to perform the requested services. For example, your IP address may be used temporarily to resolve a network issue and is deleted immediately after service completion.</p>
          <p className="mt-2 text-base">We only retain limited contact details such as:</p>
          <ul className="list-disc list-inside ml-4 text-base">
            <li>Your name and email address for invoicing purposes</li>
            <li>Your phone number for communication</li>
          </ul>
          <p className="mt-2 text-base">Our newsletter is <strong>opt-in only</strong> and includes a clearly visible unsubscribe option in each message.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Liability Disclaimer</h2>
          <p className="text-base">Private IT Support is <strong>not liable</strong> for:</p>
          <ul className="list-disc list-inside ml-4 text-base">
            <li>Any loss of data</li>
            <li>Hardware or software failures</li>
            <li>Downtime or incidental damages resulting from service delivery</li>
          </ul>
          <p className="mt-2 text-base">If damages are directly caused by our service, a refund or reimbursement may be offered <strong>at our sole discretion</strong>. Our maximum liability is limited to the amount paid for the affected service.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">7. Modifications to Services or Terms</h2>
          <ul className="list-disc list-inside ml-4 text-base">
            <li>Modify or discontinue services without prior notice</li>
            <li>Update these Terms at any time, with changes becoming effective immediately upon posting to our website</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">8. Contact</h2>
          <p className="text-base">For any questions or concerns regarding these Terms, please contact:</p>
          <p className="mt-2 text-base"><strong>Email</strong>: <a href="mailto:victor@privateitsupport.com" className="underline text-blue-700">victor@privateitsupport.com</a></p>
        </section>
        <hr className="my-8" />
        <p className="text-xs text-gray-400">© 2025 Private IT Support. All rights reserved.</p>
        <div className="mt-8">
          <Link href="/" className="text-blue-700 underline">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
} 