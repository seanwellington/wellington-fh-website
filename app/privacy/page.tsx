import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Wellington Funeral Home Jamaica",
  description: "Privacy Policy for Wellington Funeral Home. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
              Privacy Policy
            </h1>
            <p className="text-gray-200">
              Last updated: February 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Introduction</h2>
                <p className="text-gray-600">
                  Wellington&apos;s Funeral Home & Company Limited (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Information We Collect</h2>
                <p className="text-gray-600 mb-4">We may collect information about you in various ways, including:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, and mailing address when you contact us or use our services.</li>
                  <li><strong>Service Information:</strong> Information related to funeral arrangements, including details about the deceased and family members.</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, and pages visited.</li>
                  <li><strong>Communication Data:</strong> Records of correspondence when you contact us via phone, email, or our contact form.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Provide and manage our funeral services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send service-related communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Maintain records as required by law</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Information Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Service Providers:</strong> With trusted partners who assist us in providing our services (e.g., cemeteries, florists, clergy).</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to respond to legal processes.</li>
                  <li><strong>With Consent:</strong> When you have given us permission to share your information.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Your Rights</h2>
                <p className="text-gray-600 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Cookies</h2>
                <p className="text-gray-600">
                  Our website may use cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Changes to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-background p-6 rounded-lg mt-4">
                  <p className="font-serif font-bold text-primary">Wellington&apos;s Funeral Home & Company Limited</p>
                  <p className="text-gray-600">52 Warner Street, Port Maria, St. Mary, Jamaica</p>
                  <p className="text-gray-600">Phone: +1 (876) 996-7077</p>
                  <p className="text-gray-600">Email: service@wellingtonfhja.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
