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
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const additionalServices = [
  { name: "Obituary Writing Assistance", description: "Help crafting a meaningful tribute" },
  { name: "Floral Arrangements", description: "Coordination with local florists" },
  { name: "Catering Services", description: "Reception and gathering arrangements" },
  { name: "Grief Support Resources", description: "Counseling and support connections" },
  { name: "Legal Document Assistance", description: "Death certificates and paperwork" },
  { name: "Insurance Claims Help", description: "Guidance on insurance procedures" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive funeral services tailored to honor your loved one&apos;s life and support your family during this difficult time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-8 bg-background border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-4 py-2 bg-white rounded-full text-primary font-medium hover:bg-primary hover:text-white transition-colors shadow-sm"
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
          className={`py-16 md:py-24 ${index % 2 === 1 ? "bg-background" : ""}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-md font-medium hover:bg-secondary-light transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                  <h3 className="font-serif font-bold text-primary mb-4">What&apos;s Included:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
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
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Additional Support Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We go beyond the basics to ensure your family receives complete support during this difficult time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div key={service.name} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif font-bold text-primary mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-primary/5 border-t border-b">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-serif font-bold text-primary mb-3">
              Transparent Pricing
            </h3>
            <p className="text-gray-600 mb-4">
              We believe in transparent, honest pricing with no hidden fees. Every family receives a detailed cost breakdown before any decisions are made. Contact us for a personalized quote.
            </p>
            <a
              href="tel:+18769967077"
              className="text-secondary font-semibold hover:text-primary transition-colors"
            >
              Call us for a free consultation →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            How Can We Help You?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Every family&apos;s needs are unique. Contact us to discuss how we can best serve you during this time.
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
    </>
  );
}
