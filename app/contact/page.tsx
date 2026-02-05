import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Wellington Funeral Home Jamaica",
  description: "Contact Wellington's Funeral Home at +1 876-996-7077 or service@wellingtonfhja.com. Located at 52 Warner Street, Port Maria, St. Mary, Jamaica.",
};

export default function ContactPage() {
  return (
    <main id="main">
      {/* Hero Section */}
      <section className="hero-section py-20 md:py-28">
        <div className="hero-pattern"></div>
        <div className="hero-gradient-overlay"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="badge badge-subtle mb-6">Get In Touch</span>
            <h1 className="text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
              We&apos;re here for you 24 hours a day, 7 days a week. Reach out to us anytime.
            </p>
          </div>
        </div>
        <div className="hero-decoration"></div>
      </section>

      {/* Emergency Banner */}
      <section className="py-5 bg-gradient-to-r from-[var(--gold-500)] to-[var(--gold-400)]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[var(--navy-950)] text-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-semibold text-lg">Available 24/7 for Emergencies</span>
            </div>
            <a
              href="tel:+18769967077"
              className="btn bg-[var(--navy-900)] text-white hover:bg-[var(--navy-800)] !py-2.5 !px-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: +1 (876) 996-7077
            </a>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div>
              <span className="badge badge-gold mb-4">How to Reach Us</span>
              <h2 className="mb-6">Get In Touch</h2>
              <div className="section-divider !mx-0 !mt-4 !mb-8"></div>
              <p className="text-[var(--neutral-600)] mb-8 text-lg">
                Whether you need immediate assistance or have questions about our services, we&apos;re here to help. Our compassionate team is ready to support you.
              </p>

              {/* Contact Cards */}
              <div className="space-y-5">
                {/* Phone */}
                <div className="card p-5 flex items-start gap-4 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--navy-800)] to-[var(--navy-700)] flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[var(--navy-900)] text-lg mb-1">Phone</h3>
                    <a href="tel:+18769967077" className="text-xl font-semibold text-[var(--navy-800)] hover:text-[var(--gold-600)] transition-colors">
                      +1 (876) 996-7077
                    </a>
                    <p className="text-sm text-[var(--neutral-500)] mt-1">Available 24/7</p>
                  </div>
                </div>

                {/* Email */}
                <div className="card p-5 flex items-start gap-4 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--navy-800)] to-[var(--navy-700)] flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[var(--navy-900)] text-lg mb-1">Email</h3>
                    <a href="mailto:service@wellingtonfhja.com" className="text-lg font-medium text-[var(--navy-800)] hover:text-[var(--gold-600)] transition-colors">
                      service@wellingtonfhja.com
                    </a>
                    <p className="text-sm text-[var(--neutral-500)] mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="card p-5 flex items-start gap-4 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--navy-800)] to-[var(--navy-700)] flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[var(--navy-900)] text-lg mb-1">Location</h3>
                    <p className="text-[var(--neutral-700)]">
                      52 Warner Street<br />
                      Port Maria, St. Mary<br />
                      Jamaica
                    </p>
                    <a
                      href="https://maps.google.com/?q=52+Warner+Street+Port+Maria+St+Mary+Jamaica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--gold-600)] hover:text-[var(--gold-500)] transition-colors inline-flex items-center gap-1 mt-2 font-medium"
                    >
                      Get Directions
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="card p-5 flex items-start gap-4 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--navy-800)] to-[var(--navy-700)] flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[var(--navy-900)] text-lg mb-2">Office Hours</h3>
                    <div className="space-y-1 text-[var(--neutral-700)]">
                      <p><span className="font-medium">Office:</span> Mon - Sat, 9:00 AM - 5:00 PM</p>
                      <p><span className="font-medium text-[var(--gold-600)]">Emergency:</span> Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card card-elevated p-8 lg:p-10">
                <h2 className="text-2xl text-[var(--navy-900)] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[var(--neutral-600)] mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-[var(--color-background)]">
        <div className="container-custom">
          <div className="section-header">
            <span className="badge badge-gold mb-4">Find Us</span>
            <h2>Our Location</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Located in the heart of Port Maria, serving families across St. Mary and beyond.
            </p>
          </div>

          <div className="map-card max-w-5xl mx-auto">
            <div className="map-placeholder">
              <div className="text-center px-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[var(--navy-800)]/10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[var(--navy-800)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-[var(--navy-900)] text-xl mb-2">52 Warner Street, Port Maria</h3>
                <p className="text-[var(--neutral-600)] mb-6">St. Mary, Jamaica</p>
                <a
                  href="https://maps.google.com/?q=52+Warner+Street+Port+Maria+St+Mary+Jamaica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-navy btn-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Google Maps
                </a>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[var(--neutral-200)]">
              <div>
                <h3 className="text-[var(--navy-900)] font-semibold mb-1">Port Maria Branch</h3>
                <p className="text-[var(--neutral-600)]">52 Warner Street, Port Maria, St. Mary, Jamaica</p>
              </div>
              <a
                href="https://maps.google.com/?q=52+Warner+Street+Port+Maria+St+Mary+Jamaica"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm whitespace-nowrap"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
