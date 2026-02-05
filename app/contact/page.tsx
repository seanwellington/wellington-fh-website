import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Wellington Funeral Home Jamaica",
  description: "Contact Wellington's Funeral Home at +1 876-996-7077 or service@wellingtonfhja.com. Located at 52 Warner Street, Port Maria, St. Mary, Jamaica.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200">
              We&apos;re here for you 24 hours a day, 7 days a week. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-secondary py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Available 24/7 for Emergencies</span>
            </div>
            <a
              href="tel:+18769967077"
              className="bg-white text-secondary px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: +1 (876) 996-7077
            </a>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you need immediate assistance or have questions about our services, we&apos;re here to help. Our compassionate team is ready to support you.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-primary mb-1">Phone</h3>
                      <a href="tel:+18769967077" className="text-lg text-gray-700 hover:text-secondary transition-colors">
                        +1 (876) 996-7077
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-primary mb-1">Email</h3>
                      <a href="mailto:service@wellingtonfhja.com" className="text-lg text-gray-700 hover:text-secondary transition-colors">
                        service@wellingtonfhja.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-primary mb-1">Location</h3>
                      <p className="text-gray-700">
                        52 Warner Street<br />
                        Port Maria, St. Mary<br />
                        Jamaica
                      </p>
                      <a
                        href="https://maps.google.com/?q=52+Warner+Street+Port+Maria+St+Mary+Jamaica"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-secondary hover:text-primary transition-colors inline-flex items-center gap-1 mt-2"
                      >
                        Get Directions
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-primary mb-1">Office Hours</h3>
                      <p className="text-gray-700">
                        <strong>Office:</strong> Mon - Sat, 9:00 AM - 5:00 PM
                      </p>
                      <p className="text-gray-700">
                        <strong>Emergency:</strong> Available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-primary mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Find Us
            </h2>
            <p className="text-gray-600">
              Located in the heart of Port Maria, serving families across St. Mary and beyond.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-[16/9] md:aspect-[21/9] bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.1234567890123!2d-76.9!3d18.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDIyJzEyLjAiTiA3NsKwNTQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wellington Funeral Home Location"
              ></iframe>
              {/* Fallback overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">52 Warner Street</h3>
                  <p className="text-gray-600 mb-4">Port Maria, St. Mary, Jamaica</p>
                  <a
                    href="https://maps.google.com/?q=52+Warner+Street+Port+Maria+St+Mary+Jamaica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary-dark transition-colors"
                  >
                    Open in Google Maps
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
