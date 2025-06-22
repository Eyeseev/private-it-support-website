import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4 text-gray-900">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: June 22, 2025</p>
      <section className="mb-8">
        <p>Private IT Support (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or book our services.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Your name, email address, and contact details when you book a consultation or service.</li>
          <li>Analytics data (such as pages visited, device/browser type, and referral sources) via tools like Google Analytics or Plausible.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside ml-4 mb-2">
          <li>Respond to inquiries or service requests.</li>
          <li>Send booking confirmations and follow-up communications.</li>
          <li>Improve website performance, content, and user experience.</li>
        </ul>
        <p className="mt-2">We do <strong>not</strong> sell, rent, or trade your personal information to third parties.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Booking & Third-Party Services</h2>
        <p>When you book through Calendly, their platform collects and processes your information under their own privacy policy. Please review <a href="https://calendly.com/privacy" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">Calendly's Privacy Policy</a> for more details.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p>We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
        <p>You may request the following at any time by emailing <a href="mailto:victor@privateitsupport.com" className="underline text-blue-700">victor@privateitsupport.com</a>:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Access to the personal data we hold about you.</li>
          <li>Correction of inaccurate or outdated information.</li>
          <li>Deletion of your personal data, subject to legal or contractual obligations.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. When we do, we will revise the "Effective Date" at the top of this page. Significant changes will be communicated through this website.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at:</p>
        <p className="mt-2"><strong>Email</strong>: <a href="mailto:victor@privateitsupport.com" className="underline text-blue-700">victor@privateitsupport.com</a></p>
      </section>
      <hr className="my-8" />
      <p className="text-xs text-gray-400">© 2025 Private IT Support. All rights reserved.</p>
      <div className="mt-8">
        <Link href="/" className="text-blue-700 underline">← Back to Home</Link>
      </div>
    </main>
  );
} 