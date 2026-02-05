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
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Relieve Your Family",
    description: "Spare your loved ones from making difficult decisions during an emotional and stressful time.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Lock in Today's Prices",
    description: "Protect against rising costs by securing current prices for future services.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Personalize Your Service",
    description: "Ensure your funeral reflects your personality, values, and the life you lived.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Pre-Planning Services
            </h1>
            <p className="text-xl text-gray-200">
              Planning ahead is a gift to yourself and your loved ones. Take control of your final arrangements with peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Why Pre-Plan Your Funeral?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Pre-planning your funeral is one of the most thoughtful things you can do for yourself and your family. It ensures your wishes are honored, relieves your loved ones of difficult decisions during an emotional time, and can provide significant financial benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Benefits of Pre-Planning
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              How Pre-Planning Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our simple four-step process makes pre-planning easy and comfortable.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mx-auto mt-2" style={{ minHeight: '60px' }} />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Planning Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Start Your Pre-Planning Journey
              </h2>
              <p className="text-gray-600 text-lg">
                Fill out this form to request a free, no-obligation pre-planning consultation.
              </p>
            </div>

            <form className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="+1 (876) 000-0000"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="planningFor" className="block text-sm font-medium text-gray-700 mb-2">
                  Who are you planning for? *
                </label>
                <select
                  id="planningFor"
                  name="planningFor"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="myself">Myself</option>
                  <option value="spouse">My spouse/partner</option>
                  <option value="parent">My parent</option>
                  <option value="both">Myself and spouse</option>
                  <option value="other">Other family member</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Service preference
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">Not sure yet</option>
                  <option value="burial">Traditional burial</option>
                  <option value="cremation">Cremation</option>
                  <option value="discuss">Would like to discuss options</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred contact method *
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">Select preference</option>
                  <option value="phone">Phone call</option>
                  <option value="email">Email</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="in-person">In-person meeting</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional notes or questions
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Share any specific concerns, questions, or preferences you'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-secondary-light transition-colors"
              >
                Request Free Consultation
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
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
            <svg className="w-12 h-12 text-secondary mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl text-gray-600 italic mb-6">
              &ldquo;Pre-planning my funeral was one of the best decisions I ever made. It gave me peace of mind knowing my wishes are documented, and my children won&apos;t have to make difficult decisions during an already hard time. The team at Wellington&apos;s made the process comfortable and dignified.&rdquo;
            </blockquote>
            <p className="text-gray-500">— A satisfied client from St. Mary</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Questions About Pre-Planning?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our compassionate team is here to answer any questions and guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+18769967077"
              className="bg-secondary text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-secondary-light transition-colors inline-flex items-center justify-center gap-2"
            >
              Call +1 (876) 996-7077
            </a>
            <Link
              href="/faqs"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
