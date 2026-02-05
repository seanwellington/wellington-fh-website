import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Obituaries | Wellington Funeral Home Jamaica",
  description: "View obituaries and service announcements for those in our care at Wellington Funeral Home, Port Maria, Jamaica.",
};

// Mock obituaries data - will be replaced with Supabase connection
const mockObituaries = [
  {
    id: "1",
    slug: "dorothy-brown",
    name: "Dorothy Brown",
    photo: null,
    birthDate: "March 15, 1945",
    deathDate: "January 28, 2026",
    excerpt: "A beloved mother, grandmother, and pillar of the Port Maria community.",
    serviceDate: "February 8, 2026",
    serviceTime: "10:00 AM",
    serviceLocation: "Wellington Funeral Home Chapel",
  },
  {
    id: "2",
    slug: "james-thompson",
    name: "James Thompson",
    photo: null,
    birthDate: "July 22, 1952",
    deathDate: "January 25, 2026",
    excerpt: "A devoted husband, father, and respected businessman who touched many lives.",
    serviceDate: "February 5, 2026",
    serviceTime: "2:00 PM",
    serviceLocation: "St. Mary Parish Church",
  },
  {
    id: "3",
    slug: "margaret-williams",
    name: "Margaret Williams",
    photo: null,
    birthDate: "December 3, 1938",
    deathDate: "January 20, 2026",
    excerpt: "A woman of faith whose kindness and generosity will never be forgotten.",
    serviceDate: "February 1, 2026",
    serviceTime: "11:00 AM",
    serviceLocation: "Wellington Funeral Home Chapel",
  },
];

export default function ObituariesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Obituaries
            </h1>
            <p className="text-xl text-gray-200">
              Honoring the lives of those entrusted to our care. Share condolences and celebrate their memory.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 bg-background border-b">
        <div className="container-custom">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search obituaries..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Search obituaries"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Obituaries Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockObituaries.map((obituary) => (
              <article
                key={obituary.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                {/* Photo placeholder */}
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-serif text-primary font-bold">
                      {obituary.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-serif font-bold text-primary mb-2">
                    {obituary.name}
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">
                    {obituary.birthDate} — {obituary.deathDate}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {obituary.excerpt}
                  </p>
                  
                  {/* Service Details */}
                  <div className="bg-background rounded-md p-3 mb-4">
                    <p className="text-sm font-medium text-primary">Service Details</p>
                    <p className="text-sm text-gray-600">
                      {obituary.serviceDate} at {obituary.serviceTime}
                    </p>
                    <p className="text-sm text-gray-600">
                      {obituary.serviceLocation}
                    </p>
                  </div>
                  
                  <button
                    className="w-full bg-primary/10 text-primary py-2 rounded-md font-medium hover:bg-primary hover:text-white transition-colors"
                    disabled
                  >
                    View Full Obituary
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State Message */}
          <div className="mt-12 text-center">
            <div className="bg-background rounded-lg p-8 max-w-2xl mx-auto">
              <svg
                className="w-12 h-12 text-gray-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h3 className="text-lg font-serif font-bold text-primary mb-2">
                Looking for someone specific?
              </h3>
              <p className="text-gray-600 mb-4">
                If you can&apos;t find the obituary you&apos;re looking for, please contact us directly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-secondary font-medium hover:text-primary transition-colors"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12 bg-background border-t">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-serif font-bold text-primary mb-2">
              Stay Informed
            </h3>
            <p className="text-gray-600 mb-4">
              Subscribe to receive obituary notifications and service announcements.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Email for obituary notifications"
              />
              <button className="bg-secondary text-white px-6 py-2 rounded-md font-medium hover:bg-secondary-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
