import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "At-Need Services",
    description: "Immediate, compassionate assistance when you need it most. Our caring team guides you through every step with dignity and respect.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    href: "/services#at-need",
  },
  {
    title: "Pre-Planning",
    description: "Thoughtfully plan ahead to ease the burden on loved ones. Lock in today's prices and ensure your wishes are honored.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    href: "/pre-planning",
  },
  {
    title: "Cremation Services",
    description: "Dignified cremation options tailored to your family's needs and wishes, with various meaningful memorial service choices.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    href: "/services#cremation",
  },
  {
    title: "Memorial Services",
    description: "Celebrate a life well-lived with personalized memorial services that beautifully honor your loved one's unique journey.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    href: "/services#memorial",
  },
];

const values = [
  { 
    title: "Compassion", 
    description: "We treat every family with genuine kindness and understanding during their most difficult times.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  { 
    title: "Integrity", 
    description: "We operate with complete honesty and transparency in all that we do.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  { 
    title: "Excellence", 
    description: "We strive for the highest standards in every service we provide.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  { 
    title: "Respect", 
    description: "We honor the dignity of every individual and family we serve.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
];

const stats = [
  { value: "2021", label: "Est." },
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Dedicated" },
];

export default function Home() {
  return (
    <main id="main">
      {/* ========================================
          HERO SECTION
          ======================================== */}
      <section className="hero-section min-h-[85vh] lg:min-h-[90vh] flex items-center relative">
        {/* Decorative Pattern */}
        <div className="hero-pattern"></div>
        <div className="hero-gradient-overlay"></div>
        
        {/* Hero Content */}
        <div className="container-custom py-20 md:py-28 relative z-10">
          <div className="max-w-4xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up">
              <span className="badge badge-subtle">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Trusted Funeral Services in Jamaica
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-white mb-6 animate-fade-in-up animate-delay-100">
              Honoring Lives with
              <span className="block text-[var(--gold-400)]">Dignity & Compassion</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed animate-fade-in-up animate-delay-200">
              When words fall short, let our compassionate team guide you through life&apos;s most difficult moments with care, respect, and unwavering support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animate-delay-300">
              <Link href="/contact" className="btn btn-primary btn-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us Now
              </Link>
              <Link href="/services" className="btn btn-secondary btn-lg">
                Explore Our Services
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/20 animate-fade-in-up animate-delay-400">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-[var(--gold-400)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
              <div className="hidden sm:block h-12 w-px bg-white/20"></div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--gold-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium">Port Maria, St. Mary</div>
                  <div className="text-white/60 text-sm">Jamaica</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="hero-decoration"></div>
      </section>

      {/* ========================================
          QUICK CONTACT BAR
          ======================================== */}
      <section className="trust-bar">
        <div className="trust-item">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href="tel:+18769967077" className="font-semibold text-[var(--navy-800)] hover:text-[var(--gold-600)] transition-colors">
            +1 (876) 996-7077
          </a>
        </div>
        <div className="trust-divider"></div>
        <div className="trust-item">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="font-semibold text-[var(--gold-600)]">Available 24/7</span>
          </span>
          <span className="text-[var(--neutral-600)]">— We&apos;re here when you need us most</span>
        </div>
      </section>

      {/* ========================================
          SERVICES SECTION
          ======================================== */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container-custom">
          {/* Section Header */}
          <div className="section-header">
            <span className="badge badge-gold mb-4">What We Offer</span>
            <h2>Comprehensive Funeral Services</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              We provide thoughtful, personalized services tailored to honor your loved one&apos;s life and support your family during this difficult time.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="card service-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="text-[var(--navy-900)] group-hover:text-[var(--gold-600)] transition-colors">
                  {service.title}
                </h3>
                <p>{service.description}</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-[var(--navy-700)] group-hover:text-[var(--gold-600)] font-medium text-sm transition-colors">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-navy">
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          ABOUT SECTION
          ======================================== */}
      <section className="section bg-[var(--color-background)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="badge badge-gold mb-4">About Us</span>
              <h2 className="mb-6">Wellington&apos;s Funeral Home</h2>
              <div className="section-divider !mx-0"></div>
              
              <p className="text-[var(--neutral-700)] text-lg mb-6 leading-relaxed">
                Wellington&apos;s Funeral Home & Company Limited was founded in July 2021 with a heartfelt mission: to provide compassionate, dignified funeral services to families throughout Jamaica.
              </p>
              <p className="text-[var(--neutral-600)] mb-8">
                Built on a foundation of family values and professional excellence, we understand that losing a loved one is one of life&apos;s most difficult experiences. Our dedicated team is here to guide you through every step, ensuring your loved one is honored with the dignity and respect they deserve.
              </p>
              
              <Link href="/about" className="btn btn-primary">
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((value) => (
                <div key={value.title} className="value-card">
                  <div className="w-10 h-10 rounded-lg bg-[var(--navy-800)]/10 flex items-center justify-center mb-3 text-[var(--navy-800)]">
                    {value.icon}
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          CTA SECTION
          ======================================== */}
      <section className="cta-section section">
        <div className="container-custom text-center relative z-10">
          <span className="badge badge-subtle mb-6">We&apos;re Here For You</span>
          <h2 className="text-white mb-6 max-w-3xl mx-auto">
            When You Need Us, We&apos;re Just a Phone Call Away
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Our compassionate team is available 24 hours a day, 7 days a week. Let us help you through this difficult time with care and dignity.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
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

          {/* Quick Contact Info */}
          <div className="inline-flex flex-wrap justify-center items-center gap-6 px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5 text-[var(--gold-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>service@wellingtonfhja.com</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5 text-[var(--gold-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>52 Warner Street, Port Maria</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          LOCATION SECTION
          ======================================== */}
      <section className="section">
        <div className="container-custom">
          {/* Section Header */}
          <div className="section-header">
            <span className="badge badge-gold mb-4">Find Us</span>
            <h2>Our Location</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Proudly serving families throughout St. Mary and beyond
            </p>
          </div>

          {/* Map Card */}
          <div className="map-card max-w-5xl mx-auto">
            <div className="map-placeholder">
              <div className="text-center px-4">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[var(--navy-800)]/10 flex items-center justify-center">
                  <svg className="w-10 h-10 text-[var(--navy-800)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-[var(--navy-900)] mb-2">52 Warner Street, Port Maria</h3>
                <p className="text-[var(--neutral-600)]">St. Mary, Jamaica</p>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[var(--neutral-200)]">
              <div>
                <h3 className="text-[var(--navy-900)] mb-1">Port Maria Branch</h3>
                <p className="text-[var(--neutral-600)]">52 Warner Street, Port Maria, St. Mary, Jamaica</p>
              </div>
              <a
                href="https://maps.google.com/?q=52+Warner+Street+Port+Maria+St+Mary+Jamaica"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy btn-sm whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA SECTION
          ======================================== */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="container-custom">
          <div className="bg-[var(--navy-900)] rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold-500)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-white text-3xl md:text-4xl mb-4">
                Ready to Speak With Us?
              </h2>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                We understand how difficult this time can be. Let us help you honor your loved one with the dignity they deserve.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:+18769967077" className="btn btn-primary btn-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <Link href="/pre-planning" className="btn btn-secondary btn-lg">
                  Learn About Pre-Planning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
