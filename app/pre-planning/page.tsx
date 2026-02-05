import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pre-Planning Funeral Services | Wellington Funeral Home Jamaica",
  description: "Plan ahead with Wellington's Funeral Home. Pre-planning your funeral gives you peace of mind and relieves your family of difficult decisions during an emotional time.",
};

const benefits = [
  {
    title: "Peace of Mind",
    description: "Know that your wishes will be honored exactly as you want, giving you comfort and security.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Relieve Your Family",
    description: "Spare your loved ones from making difficult decisions during an emotional and stressful time.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Lock in Today's Prices",
    description: "Protect against rising costs by securing current prices for future services.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Personalize Your Service",
    description: "Ensure your funeral reflects your personality, values, and the life you lived.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "1",
    title: "Initial Consultation",
    description: "Meet with our pre-planning specialist to discuss your wishes, preferences, and any questions you may have. This can be done in person or over the phone.",
  },
  {
    number: "2",
    title: "Make Your Choices",
    description: "Decide on the type of service, burial or cremation, casket or urn selection, music, readings, and other personal touches you'd like included.",
  },
  {
    number: "3",
    title: "Document Your Wishes",
    description: "We'll create a detailed record of all your preferences, ensuring nothing is overlooked and your family knows exactly what you want.",
  },
  {
    number: "4",
    title: "Review & Finalize",
    description: "Review your plan, make any adjustments, and finalize the arrangements. You can update your plan at any time as circumstances change.",
  },
];

export default function PrePlanningPage() {
  return (
    <main id="main">
      {/* Hero Section */}
      <section className="hero-section py-20 md:py-28">
        <div className="hero-pattern"></div>
        <div className="hero-gradient-overlay"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="badge badge-subtle mb-6">Plan Ahead</span>
            <h1 className="text-white mb-6">
              Pre-Planning Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
              Planning ahead is a gift to yourself and your loved ones. Take control of your final arrangements with peace of mind.
            </p>
          </div>
        </div>
        <div className="hero-decoration"></div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="badge badge-gold mb-4">Why Pre-Plan?</span>
            <h2 className="mb-6">
              A Thoughtful Gift for Your Family
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-[var(--neutral-600)] leading-relaxed mt-6">
              Pre-planning your funeral is one of the most thoughtful things you can do for yourself and your family. It ensures your wishes are honored, relieves your loved ones of difficult decisions during an emotional time, and can provide significant financial benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-[var(--color-background)]">
        <div className="container-custom">
          <div className="section-header">
            <span className="badge badge-gold mb-4">Advantages</span>
            <h2>Benefits of Pre-Planning</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card card-elevated p-8 hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--navy-800)] to-[var(--navy-700)] flex items-center justify-center mb-5 text-white shadow-md">
                  {benefit.icon}
                </div>
                <h3 className="text-[var(--navy-900)] text-xl mb-3">{benefit.title}</h3>
                <p className="text-[var(--neutral-600)] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container-custom">
          <div className="section-header">
            <span className="badge badge-gold mb-4">The Process</span>
            <h2>How Pre-Planning Works</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Our simple four-step process makes pre-planning easy and comfortable.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-500)] flex items-center justify-center text-[var(--navy-950)] font-bold text-xl font-serif shadow-lg">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-[var(--neutral-300)] mx-auto mt-3" style={{ minHeight: '50px' }} />
                  )}
                </div>
                <div className="card p-6 flex-1">
                  <h3 className="text-[var(--navy-900)] text-lg mb-2">{step.title}</h3>
                  <p className="text-[var(--neutral-600)]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Planning Form */}
      <section className="section bg-[var(--color-background)]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="section-header">
              <span className="badge badge-gold mb-4">Get Started</span>
              <h2>Start Your Pre-Planning Journey</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle">
                Fill out this form to request a free, no-obligation pre-planning consultation.
              </p>
            </div>

            <form className="card card-elevated p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="form-group !mb-0">
                  <label htmlFor="firstName" className="form-label">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="form-input"
                    placeholder="Your first name"
                  />
                </div>
                <div className="form-group !mb-0">
                  <label htmlFor="lastName" className="form-label">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="form-input"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="form-group !mb-0">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group !mb-0">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="form-input"
                    placeholder="+1 (876) 000-0000"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="planningFor" className="form-label">
                  Who are you planning for? <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="planningFor"
                    name="planningFor"
                    required
                    className="form-input appearance-none pr-10"
                  >
                    <option value="">Select an option</option>
                    <option value="myself">Myself</option>
                    <option value="spouse">My spouse/partner</option>
                    <option value="parent">My parent</option>
                    <option value="both">Myself and spouse</option>
                    <option value="other">Other family member</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-[var(--neutral-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="serviceType" className="form-label">
                  Service preference
                </label>
                <div className="relative">
                  <select
                    id="serviceType"
                    name="serviceType"
                    className="form-input appearance-none pr-10"
                  >
                    <option value="">Not sure yet</option>
                    <option value="burial">Traditional burial</option>
                    <option value="cremation">Cremation</option>
                    <option value="discuss">Would like to discuss options</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-[var(--neutral-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="notes" className="form-label">
                  Additional notes or questions
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="form-input form-textarea"
                  placeholder="Share any specific concerns, questions, or preferences you'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full !py-4"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Request Free Consultation
              </button>

              <p className="text-center text-xs text-[var(--neutral-500)] mt-4">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-[var(--gold-100)] flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[var(--gold-600)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-xl text-[var(--neutral-700)] italic mb-6 leading-relaxed">
              &ldquo;Pre-planning my funeral was one of the best decisions I ever made. It gave me peace of mind knowing my wishes are documented, and my children won&apos;t have to make difficult decisions during an already hard time. The team at Wellington&apos;s made the process comfortable and dignified.&rdquo;
            </blockquote>
            <p className="text-[var(--neutral-500)]">— A satisfied client from St. Mary</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section section">
        <div className="container-custom text-center relative z-10">
          <span className="badge badge-subtle mb-6">Questions?</span>
          <h2 className="text-white mb-6 max-w-3xl mx-auto">
            Have Questions About Pre-Planning?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Our compassionate team is here to answer any questions and guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+18769967077" className="btn btn-primary btn-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +1 (876) 996-7077
            </a>
            <Link href="/faqs" className="btn btn-secondary btn-lg">
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
