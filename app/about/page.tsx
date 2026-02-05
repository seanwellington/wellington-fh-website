import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Wellington Funeral Home Jamaica",
  description: "Learn about Wellington's Funeral Home — a family-owned funeral service provider in Jamaica committed to compassion, integrity, and excellence.",
};

const team = [
  {
    name: "Sean Wellington",
    role: "Managing Director",
    description: "With years of experience in the funeral industry, Sean leads our team with compassion and dedication to serving families.",
  },
  {
    name: "Valerie Jean Wellington",
    role: "Company Secretary",
    description: "Valerie ensures our operations run smoothly and families receive the care and attention they deserve.",
  },
  {
    name: "Dr. Nardiah Wellington, DBA",
    role: "Director",
    description: "Dr. Wellington brings her expertise in business management to help us deliver excellence in every service.",
  },
  {
    name: "Steven Wellington",
    role: "Director",
    description: "Steven supports our mission to provide dignified services to families throughout Jamaica.",
  },
];

const values = [
  {
    title: "Compassion",
    description: "We treat every family with kindness and understanding during their most difficult times. Your grief is our concern, and we walk alongside you with genuine care.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "We operate with honesty and transparency in all that we do. You can trust us to provide straightforward guidance and fair pricing.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "We strive for the highest standards in every service we provide. From the smallest detail to the overall experience, we pursue excellence.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Respect",
    description: "We honor the dignity of every individual we serve. Regardless of background, beliefs, or circumstances, every life deserves to be celebrated.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const milestones = [
  { year: "2021", event: "Wellington's Funeral Home founded in Port Maria" },
  { year: "2022", event: "Expanded services to serve more of St. Mary" },
  { year: "2023", event: "Enhanced facilities and service offerings" },
  { year: "2024", event: "Continuing our mission to serve families with excellence" },
];

export default function AboutPage() {
  return (
    <main id="main">
      {/* Hero Section */}
      <section className="hero-section py-20 md:py-28">
        <div className="hero-pattern"></div>
        <div className="hero-gradient-overlay"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="badge badge-subtle mb-6">About Us</span>
            <h1 className="text-white mb-6">
              Our Story &amp; Mission
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
              Learn about our commitment to serving families with compassion, dignity, and excellence.
            </p>
          </div>
        </div>
        <div className="hero-decoration"></div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="badge badge-gold mb-4">Our Story</span>
              <h2 className="mb-6">A Legacy of Compassion</h2>
              <div className="section-divider !mx-0 !mt-4 !mb-6"></div>
              
              <p className="text-[var(--neutral-700)] text-lg mb-5 leading-relaxed">
                Wellington&apos;s Funeral Home & Company Limited was founded in July 2021 with a clear mission: to provide compassionate, dignified funeral services to families throughout Jamaica.
              </p>
              <p className="text-[var(--neutral-600)] mb-5">
                Our roots in the funeral industry run deep, with leadership that has served communities across Jamaica for many years. We understand that losing a loved one is one of life&apos;s most difficult experiences, and we&apos;re committed to walking alongside families during these challenging times.
              </p>
              <p className="text-[var(--neutral-600)] mb-5">
                Built on a foundation of family values and professional excellence, we believe that every life deserves to be honored and celebrated with dignity, respect, and personalized care.
              </p>
              <p className="text-[var(--neutral-600)]">
                From our base in Port Maria, St. Mary, we serve families across Jamaica, providing a full range of funeral services tailored to meet each family&apos;s unique needs and wishes.
              </p>
            </div>
            
            <div className="relative">
              <div className="card card-elevated p-8 text-center">
                <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[var(--gold-400)] shadow-lg">
                  <Image
                    src="/logo.png"
                    alt="Wellington's Funeral Home"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[var(--navy-900)] text-2xl mb-2">Wellington&apos;s</h3>
                <p className="text-[var(--gold-600)] font-semibold mb-4 text-sm uppercase tracking-wider">Funeral Home & Co.</p>
                <p className="text-[var(--neutral-600)] italic text-lg mb-6">&ldquo;Caring is at the Heart&rdquo;</p>
                
                <div className="pt-6 border-t border-[var(--neutral-200)]">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-2xl font-serif font-bold text-[var(--gold-500)]">2021</div>
                      <div className="text-xs text-[var(--neutral-500)] uppercase tracking-wider">Est.</div>
                    </div>
                    <div>
                      <div className="text-2xl font-serif font-bold text-[var(--gold-500)]">24/7</div>
                      <div className="text-xs text-[var(--neutral-500)] uppercase tracking-wider">Support</div>
                    </div>
                    <div>
                      <div className="text-2xl font-serif font-bold text-[var(--gold-500)]">100%</div>
                      <div className="text-xs text-[var(--neutral-500)] uppercase tracking-wider">Dedicated</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--gold-500)]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--navy-800)]/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-20 bg-[var(--gold-100)]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge badge-gold mb-6">Our Mission</span>
            <h2 className="text-[var(--navy-900)] mb-8">
              Honoring Every Life with Dignity
            </h2>
            <p className="text-xl md:text-2xl text-[var(--neutral-700)] leading-relaxed">
              To provide families with compassionate, professional funeral services during their time of need, while honoring the memory of their loved ones with dignity and respect.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="container-custom">
          <div className="section-header">
            <span className="badge badge-gold mb-4">Our Values</span>
            <h2>What Guides Us</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              These core values guide everything we do and shape how we serve families in their time of need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value) => (
              <div key={value.title} className="card card-elevated p-8 hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--navy-800)] to-[var(--navy-700)] flex items-center justify-center mb-5 text-white shadow-md">
                  {value.icon}
                </div>
                <h3 className="text-[var(--navy-900)] text-xl mb-3">{value.title}</h3>
                <p className="text-[var(--neutral-600)] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-[var(--color-background)]">
        <div className="container-custom">
          <div className="section-header">
            <span className="badge badge-gold mb-4">Our Journey</span>
            <h2>Milestones</h2>
            <div className="section-divider"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--neutral-300)] hidden md:block"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6 md:gap-8">
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-500)] flex items-center justify-center text-[var(--navy-950)] font-bold font-serif shadow-lg">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="card p-6 flex-1">
                      <p className="text-[var(--neutral-700)]">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container-custom">
          <div className="section-header">
            <span className="badge badge-gold mb-4">Our Team</span>
            <h2>Leadership Team</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Meet the dedicated professionals committed to serving families with compassion and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card card-elevated p-6 text-center group hover:shadow-xl transition-all">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--navy-800)] to-[var(--navy-700)] flex items-center justify-center mx-auto mb-5 group-hover:from-[var(--gold-400)] group-hover:to-[var(--gold-500)] transition-all duration-300 shadow-lg">
                  <span className="text-white font-bold text-2xl font-serif">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-[var(--navy-900)] text-lg mb-1">{member.name}</h3>
                <p className="text-[var(--gold-600)] text-sm font-semibold mb-4 uppercase tracking-wide">{member.role}</p>
                <p className="text-[var(--neutral-600)] text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section section">
        <div className="container-custom text-center relative z-10">
          <span className="badge badge-subtle mb-6">Get In Touch</span>
          <h2 className="text-white mb-6 max-w-3xl mx-auto">
            Let Us Help You
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            When you need compassionate support, we&apos;re here for you. Contact us anytime — we&apos;re available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+18769967077" className="btn btn-primary btn-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +1 (876) 996-7077
            </a>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
