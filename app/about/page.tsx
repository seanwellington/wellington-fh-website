import type { Metadata } from "next";
import Link from "next/link";

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
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "We operate with honesty and transparency in all that we do. You can trust us to provide straightforward guidance and fair pricing.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "We strive for the highest standards in every service we provide. From the smallest detail to the overall experience, we pursue excellence.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Respect",
    description: "We honor the dignity of every individual we serve. Regardless of background, beliefs, or circumstances, every life deserves to be celebrated.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              About Us
            </h1>
            <p className="text-xl text-gray-200">
              Learn about our commitment to serving families with compassion, dignity, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Wellington&apos;s Funeral Home & Company Limited was founded in July 2021 with a clear mission: to provide compassionate, dignified funeral services to families throughout Jamaica.
              </p>
              <p className="text-gray-600 mb-4">
                Our roots in the funeral industry run deep, with leadership that has served communities across Jamaica for many years. We understand that losing a loved one is one of life&apos;s most difficult experiences, and we&apos;re committed to walking alongside families during these challenging times.
              </p>
              <p className="text-gray-600 mb-4">
                Built on a foundation of family values and professional excellence, we believe that every life deserves to be honored and celebrated with dignity, respect, and personalized care. Our team brings together experience, compassion, and a genuine desire to serve.
              </p>
              <p className="text-gray-600">
                From our base in Port Maria, St. Mary, we serve families across Jamaica, providing a full range of funeral services tailored to meet each family&apos;s unique needs and wishes.
              </p>
            </div>
            <div className="bg-background rounded-lg p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-4xl font-serif">W</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">Wellington&apos;s</h3>
                <p className="text-secondary font-medium mb-4">Funeral Home</p>
                <p className="text-gray-500 italic">&ldquo;Caring is at the Heart&rdquo;</p>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Established July 2021</p>
                  <p className="text-sm text-gray-600">Port Maria, St. Mary, Jamaica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To provide families with compassionate, professional funeral services during their time of need, while honoring the memory of their loved ones with dignity and respect.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve families in their time of need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the dedicated professionals committed to serving families with compassion and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Let Us Help You
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            When you need compassionate support, we&apos;re here for you. Contact us anytime — we&apos;re available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+18769967077"
              className="bg-secondary text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-secondary-light transition-colors inline-flex items-center justify-center gap-2"
            >
              Call +1 (876) 996-7077
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
