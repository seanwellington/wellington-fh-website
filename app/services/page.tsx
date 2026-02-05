import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Funeral Services | Wellington Funeral Home Jamaica",
  description: "Explore our funeral services including at-need arrangements, pre-planning, cremation, and memorial services. Tailored to honor your loved one with dignity.",
};

const services = [
  {
    id: "at-need",
    title: "At-Need Services",
    description: "When you're faced with the loss of a loved one, we're here to guide you through every step of the process with compassion and professionalism.",
    features: [
      "24/7 immediate response",
      "Complete funeral planning and coordination",
      "Professional body preparation with dignity",
      "Private and public viewing options",
      "Religious or secular funeral ceremonies",
      "Professional hearse and family transportation",
      "Cemetery coordination and arrangements",
      "Obituary preparation and publication",
      "Floral arrangement coordination",
      "Reception and catering assistance",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: "pre-planning",
    title: "Pre-Planning Services",
    description: "Planning ahead is one of the most thoughtful gifts you can give your family. Pre-planning allows you to make your wishes known and reduces the burden on your loved ones.",
    features: [
      "Document your wishes in advance",
      "Lock in today's prices",
      "Flexible payment options",
      "Reduce emotional burden on family",
      "Ensure your final wishes are honored",
      "Personalize every detail",
      "Confidential consultations",
      "No obligation planning sessions",
      "Transfer arrangements if you relocate",
      "Peace of mind for you and your family",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "cremation",
    title: "Cremation Services",
    description: "We offer dignified cremation services with various options to meet your family's needs and honor your loved one's wishes.",
    features: [
      "Direct cremation options",
      "Cremation with memorial service",
      "Witness cremation available",
      "Wide selection of urns and keepsakes",
      "Scattering services",
      "Cremation jewelry options",
      "Memorial garden placement",
      "Combination of burial and cremation",
      "Environmentally conscious options",
      "Personalized memorial tributes",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    id: "memorial",
    title: "Memorial Services",
    description: "Celebrate a life well-lived with personalized memorial services that truly honor your loved one's unique journey and legacy.",
    features: [
      "Personalized ceremony planning",
      "Photo and video tributes",
      "Music and readings selection",
      "Memory tables and displays",
      "Celebration of life events",
      "Graveside services",
      "Home or venue-based services",
      "Cultural and religious accommodations",
      "Online memorial pages",
      "Keepsake programs and materials",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const additionalServices = [
  { 
    name: "Obituary Writing", 
    description: "Help crafting a meaningful tribute",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  { 
    name: "Floral Arrangements", 
    description: "Coordination with local florists",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  { 
    name: "Catering Services", 
    description: "Reception and gathering arrangements",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    )
  },
  { 
    name: "Grief Support", 
    description: "Counseling and support connections",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  { 
    name: "Legal Assistance", 
    description: "Death certificates and paperwork",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  { 
    name: "Insurance Claims", 
    description: "Guidance on insurance procedures",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
];

export default function ServicesPage() {
  return (
    <main id="main">
      {/* Hero Section */}
      <section className="hero-section py-20 md:py-28">
        <div className="hero-pattern"></div>
        <div className="hero-gradient-overlay"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="badge badge-subtle mb-6">What We Offer</span>
            <h1 className="text-white mb-6">
              Comprehensive Funeral Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
              Thoughtfully tailored services to honor your loved one&apos;s life and support your family during this difficult time.
            </p>
          </div>
        </div>
        <div className="hero-decoration"></div>
      </section>

      {/* Services Navigation */}
      <section className="py-6 bg-[var(--color-background)] border-b border-[var(--neutral-200)] sticky top-[120px] z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-5 py-2.5 bg-white rounded-full text-[var(--navy-800)] font-medium text-sm hover:bg-[var(--navy-800)] hover:text-white transition-all shadow-sm border border-[var(--neutral-200)] hover:border-[var(--navy-800)]"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section ${index % 2 === 1 ? "bg-[var(--color-background)]" : "bg-white"}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "" : ""}`}>
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--navy-800)] to-[var(--navy-700)] flex items-center justify-center mb-6 text-white shadow-lg">
                  {service.icon}
                </div>
                <h2 className="text-[var(--navy-900)] mb-4">
                  {service.title}
                </h2>
                <div className="section-divider !mx-0 !mt-4 !mb-6"></div>
                <p className="text-lg text-[var(--neutral-600)] mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="card card-elevated p-8">
                  <h3 className="text-[var(--navy-900)] text-xl mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[var(--gold-100)] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--gold-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[var(--gold-500)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[var(--neutral-700)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="section bg-[var(--color-background)]">
        <div className="container-custom">
          <div className="section-header">
            <span className="badge badge-gold mb-4">Additional Support</span>
            <h2>Additional Support Services</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              We go beyond the basics to ensure your family receives complete support during this difficult time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div key={service.name} className="card p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--navy-800)]/10 flex items-center justify-center flex-shrink-0 text-[var(--navy-800)]">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-[var(--navy-900)] text-lg mb-1">{service.name}</h3>
                  <p className="text-[var(--neutral-600)] text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-[var(--gold-100)] border-t border-b border-[var(--gold-200)]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-[var(--gold-500)]/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[var(--gold-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif text-[var(--navy-900)] mb-4">
              Transparent & Honest Pricing
            </h3>
            <p className="text-[var(--neutral-700)] mb-6 text-lg">
              We believe in transparent, honest pricing with no hidden fees. Every family receives a detailed cost breakdown before any decisions are made.
            </p>
            <a
              href="tel:+18769967077"
              className="btn btn-primary"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Request a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section section">
        <div className="container-custom text-center relative z-10">
          <span className="badge badge-subtle mb-6">We&apos;re Here For You</span>
          <h2 className="text-white mb-6 max-w-3xl mx-auto">
            How Can We Help You Today?
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Every family&apos;s needs are unique. Contact us to discuss how we can best serve you during this time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+18769967077" className="btn btn-primary btn-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +1 (876) 996-7077
            </a>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
