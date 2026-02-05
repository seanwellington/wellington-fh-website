import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Wellington Funeral Home Jamaica",
  description: "Terms of Service for Wellington Funeral Home. Please read these terms carefully before using our services.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
              Terms of Service
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
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Agreement to Terms</h2>
                <p className="text-gray-600">
                  By accessing and using the Wellington&apos;s Funeral Home website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Services</h2>
                <p className="text-gray-600 mb-4">
                  Wellington&apos;s Funeral Home & Company Limited provides funeral and memorial services to families in Jamaica. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Funeral planning and arrangement</li>
                  <li>Body preparation and embalming</li>
                  <li>Cremation services</li>
                  <li>Memorial services</li>
                  <li>Pre-planning services</li>
                  <li>Transportation services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Service Agreements</h2>
                <p className="text-gray-600">
                  All funeral service arrangements are subject to a separate written service agreement that will outline the specific services to be provided, associated costs, and payment terms. The terms of that agreement shall govern the provision of funeral services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Payment Terms</h2>
                <p className="text-gray-600 mb-4">
                  Payment terms for funeral services will be specified in your service agreement. General payment policies include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>A deposit may be required to commence services</li>
                  <li>Payment plans may be available for qualifying arrangements</li>
                  <li>Accepted payment methods include cash, bank transfers, and major payment cards</li>
                  <li>Pre-planning payments are subject to separate terms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Website Use</h2>
                <p className="text-gray-600 mb-4">
                  When using our website, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Provide accurate information when submitting forms</li>
                  <li>Use the website for lawful purposes only</li>
                  <li>Not attempt to interfere with the website&apos;s operation</li>
                  <li>Not copy, reproduce, or distribute website content without permission</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Intellectual Property</h2>
                <p className="text-gray-600">
                  All content on this website, including text, graphics, logos, images, and software, is the property of Wellington&apos;s Funeral Home & Company Limited and is protected by copyright and trademark laws. You may not use, reproduce, or distribute any content without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Limitation of Liability</h2>
                <p className="text-gray-600">
                  To the fullest extent permitted by law, Wellington&apos;s Funeral Home shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or services. Our liability for any claim shall be limited to the amount paid for the specific services giving rise to the claim.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Disclaimer</h2>
                <p className="text-gray-600">
                  Our website is provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not guarantee that the website will be uninterrupted, secure, or error-free. Information on our website is for general purposes only and should not be considered professional advice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Governing Law</h2>
                <p className="text-gray-600">
                  These Terms of Service shall be governed by and construed in accordance with the laws of Jamaica. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Jamaica.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of our website or services after any changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have questions about these Terms of Service, please contact us at:
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
