import Link from "next/link";

const services = [
  {
    title: "At-Need Services",
    description: "Immediate assistance when you need it most. Our compassionate team is available 24/7 to guide you through every step.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    href: "/services#at-need",
  },
  {
    title: "Pre-Planning",
    description: "Plan ahead to ease the burden on your loved ones. Lock in today's prices and ensure your wishes are honored.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    href: "/services#pre-planning",
  },
  {
    title: "Cremation Services",
    description: "Dignified cremation options tailored to your family's needs and wishes, with various memorial service choices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    href: "/services#cremation",
  },
  {
    title: "Memorial Services",
    description: "Celebrate a life well-lived with personalized memorial services that honor your loved one's unique journey.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    href: "/services#memorial",
  },
];

const values = [
  { title: "Compassion", description: "We treat every family with kindness and understanding during their most difficult times." },
  { title: "Integrity", description: "We operate with honesty and transparency in all that we do." },
  { title: "Excellence", description: "We strive for the highest standards in every service we provide." },
  { title: "Respect", description: "We honor the dignity of every individual we serve." },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23fff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        </div>
        
        <div className="container-custom py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-fade-in-up">
              Caring is at the Heart
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up animate-delay-200">
              Compassionate funeral services for families across Jamaica. 
              We&apos;re here for you during life&apos;s most difficult moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-400">
              <Link
                href="/contact"
                className="bg-secondary text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-secondary-light transition-colors text-center"
              >
                Contact Us Today
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-primary transition-colors text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-background py-4 border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+18769967077" className="text-primary font-semibold hover:text-secondary transition-colors">
                +1 (876) 996-7077
              </a>
            </div>
            <div className="h-6 w-px bg-gray-300 hidden md:block"></div>
            <p className="text-gray-600">
              <span className="font-semibold text-secondary">Available 24/7</span> — We&apos;re here when you need us most
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide comprehensive funeral services tailored to honor your loved one&apos;s life and support your family during this difficult time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                About Wellington&apos;s Funeral Home
              </h2>
              <p className="text-gray-600 mb-4">
                Wellington&apos;s Funeral Home & Company Limited was founded in July 2021 with a mission to provide compassionate, dignified funeral services to families throughout Jamaica.
              </p>
              <p className="text-gray-600 mb-6">
                Built on a foundation of family values and professional excellence, we understand that losing a loved one is one of life&apos;s most difficult experiences. Our dedicated team is here to guide you through every step, ensuring your loved one is honored with the dignity and respect they deserve.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors"
              >
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value.title} className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="font-serif font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            We&apos;re Here For You
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            When you need us, we&apos;re just a phone call away. Our compassionate team is available 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+18769967077"
              className="bg-secondary text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-secondary-light transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +1 (876) 996-7077
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
            >
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Our Location
            </h2>
            <p className="text-gray-600 text-lg">
              Serving families throughout St. Mary and beyond
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 relative">
              {/* Placeholder for Google Maps embed */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>52 Warner Street, Port Maria</p>
                  <p className="text-sm">St. Mary, Jamaica</p>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="font-serif font-bold text-primary text-xl">Port Maria Branch</h3>
                <p className="text-gray-600">52 Warner Street, Port Maria, St. Mary, Jamaica</p>
              </div>
              <a
                href="https://maps.google.com/?q=52+Warner+Street+Port+Maria+St+Mary+Jamaica"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
              >
                Get Directions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
