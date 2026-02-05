import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Funeral Schedule | Wellington Funeral Home Jamaica",
  description: "View upcoming funeral services and memorial ceremonies at Wellington's Funeral Home in Port Maria, Jamaica.",
};

// Mock funeral schedule data
const upcomingServices = [
  {
    id: 1,
    deceasedName: "Mildred Elaine Thompson",
    age: 78,
    dates: "March 15, 1946 – January 28, 2025",
    serviceType: "Thanksgiving Service",
    serviceDate: "Saturday, February 15, 2025",
    serviceTime: "11:00 AM",
    location: "Port Maria Methodist Church",
    address: "Main Street, Port Maria, St. Mary",
    interment: "Port Maria Cemetery",
    familyNote: "The Thompson family welcomes all who knew and loved Mildred to join them in celebrating her life.",
  },
  {
    id: 2,
    deceasedName: "Carlton 'Charlie' Brown",
    age: 65,
    dates: "August 22, 1959 – February 1, 2025",
    serviceType: "Memorial Service",
    serviceDate: "Sunday, February 16, 2025",
    serviceTime: "2:00 PM",
    location: "Wellington's Funeral Home Chapel",
    address: "Port Maria, St. Mary",
    interment: "Private family interment",
    familyNote: "Charlie's family invites friends and colleagues to share memories of his joyful spirit.",
  },
  {
    id: 3,
    deceasedName: "Veronica 'Miss Vera' Mitchell",
    age: 92,
    dates: "December 3, 1932 – February 3, 2025",
    serviceType: "Celebration of Life",
    serviceDate: "Saturday, February 22, 2025",
    serviceTime: "10:00 AM",
    location: "Oracabessa Baptist Church",
    address: "Main Road, Oracabessa, St. Mary",
    interment: "Oracabessa Cemetery",
    familyNote: "Miss Vera lived a full life of service. Please join us in celebrating her legacy.",
  },
];

export default function SchedulePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Funeral Schedule
            </h1>
            <p className="text-xl text-gray-200">
              Upcoming funeral services and memorial ceremonies. Join us in honoring the lives of those who have passed.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Notice */}
      <section className="bg-secondary/10 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-3 text-secondary">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm">
              Service times and locations are subject to change. Please confirm details with the family or contact us at +1 (876) 996-7077.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Services */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-primary mb-8">
              Upcoming Services
            </h2>

            <div className="space-y-8">
              {upcomingServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
                  {/* Service Header */}
                  <div className="bg-primary text-white p-6">
                    <h3 className="text-2xl font-serif font-bold mb-1">
                      {service.deceasedName}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {service.dates} • Age {service.age}
                    </p>
                  </div>

                  {/* Service Details */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          {service.serviceType}
                        </h4>
                        <div className="flex items-center gap-2 text-gray-700 mb-1">
                          <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="font-medium">{service.serviceDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">{service.serviceTime}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Location
                        </h4>
                        <div className="flex items-start gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-secondary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <div>
                            <p className="font-medium">{service.location}</p>
                            <p className="text-sm text-gray-500">{service.address}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <span className="text-sm"><strong>Interment:</strong> {service.interment}</span>
                      </div>
                      <p className="text-gray-600 italic text-sm">
                        &ldquo;{service.familyNote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* No Services Notice */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-serif font-bold text-primary mb-3">
              Looking for a Past Service?
            </h3>
            <p className="text-gray-600 mb-6">
              Visit our obituaries page to view tributes and information about those we have served.
            </p>
            <Link
              href="/obituaries"
              className="inline-flex items-center gap-2 text-secondary font-medium hover:text-secondary-light transition-colors"
            >
              View Obituaries
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Need to Arrange a Service?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Our compassionate team is here to help you plan a meaningful tribute for your loved one.
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
