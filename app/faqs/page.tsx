import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Wellington Funeral Home Jamaica",
  description: "Find answers to common questions about funeral services, costs, arrangements, and more at Wellington's Funeral Home Jamaica.",
};

const faqs = [
  {
    category: "Immediate Needs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    questions: [
      {
        q: "What should I do when a loved one passes away?",
        a: "First, contact us immediately at +1 (876) 996-7077 — we're available 24/7. If the death occurred at home, you may need to contact the police or a doctor to certify the death. We will guide you through every step, including collecting your loved one and handling all necessary paperwork.",
      },
      {
        q: "How soon should I contact a funeral home?",
        a: "You should contact us as soon as possible after a death occurs. We can begin making arrangements immediately and help relieve the burden during this difficult time. Our team is available around the clock to assist you.",
      },
      {
        q: "Do you provide transportation for the deceased?",
        a: "Yes, we provide dignified transportation services throughout Jamaica. We will collect your loved one from the hospital, home, or other location and bring them into our care. This service is available 24 hours a day.",
      },
    ],
  },
  {
    category: "Services & Arrangements",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    questions: [
      {
        q: "What types of funeral services do you offer?",
        a: "We offer a full range of services including traditional burial services, cremation services, memorial services, graveside services, and repatriation services for overseas arrangements. Each service can be customized to honor your loved one's memory in a meaningful way.",
      },
      {
        q: "Can I personalize the funeral service?",
        a: "Absolutely. We believe every life is unique and deserves a personalized tribute. We can incorporate special music, photo displays, video tributes, cultural or religious traditions, and other personal touches that reflect your loved one's personality and life.",
      },
      {
        q: "Do you handle cremation services?",
        a: "Yes, we offer complete cremation services. This includes direct cremation, cremation with a memorial service, and cremation followed by burial of the ashes. We can discuss all options with you to find what best suits your family's wishes.",
      },
      {
        q: "Can you accommodate different religious and cultural traditions?",
        a: "Yes, we respect and accommodate all religious and cultural traditions. Whether Christian, Muslim, Hindu, Jewish, Rastafarian, or any other tradition, we work with families to ensure services honor their beliefs and customs.",
      },
    ],
  },
  {
    category: "Costs & Payment",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    questions: [
      {
        q: "How much does a funeral cost?",
        a: "Funeral costs vary depending on the services and products selected. We provide transparent pricing and will give you a detailed estimate before any arrangements are finalized. We offer packages starting from basic services to comprehensive arrangements. Contact us for a personalized quote.",
      },
      {
        q: "What payment options do you offer?",
        a: "We accept cash, bank transfers, and major credit cards. We also offer payment plans for families who need flexibility. Our goal is to provide dignified services that work within your budget.",
      },
      {
        q: "Do you offer affordable options for families on a budget?",
        a: "Yes, we believe everyone deserves a dignified farewell regardless of budget. We offer various packages at different price points and can work with families to find meaningful ways to honor their loved ones within their means.",
      },
    ],
  },
  {
    category: "Pre-Planning",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    questions: [
      {
        q: "Why should I pre-plan my funeral?",
        a: "Pre-planning allows you to make decisions about your own funeral while you're able, relieving your family of difficult choices during an emotional time. It also lets you lock in current prices and ensure your wishes are clearly documented.",
      },
      {
        q: "Can I change my pre-planned arrangements?",
        a: "Yes, pre-planned arrangements can be modified at any time. Life circumstances change, and we understand that your wishes may evolve. Simply contact us to update your plans.",
      },
      {
        q: "What information do I need to pre-plan?",
        a: "To begin pre-planning, you'll need to consider the type of service you want, burial or cremation preferences, any specific wishes for the ceremony, and budget considerations. Our staff will guide you through the process step by step.",
      },
    ],
  },
  {
    category: "After the Service",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    questions: [
      {
        q: "How do I obtain death certificates?",
        a: "We assist families with obtaining certified copies of the death certificate from the Registrar General's Department. These are typically needed for insurance claims, banking, and legal matters. We'll guide you on how many copies you may need.",
      },
      {
        q: "Do you provide grief support resources?",
        a: "Yes, we can provide information about grief counseling services and support groups in Jamaica. The grieving process doesn't end after the funeral, and we're here to help connect you with ongoing support.",
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <main id="main">
      {/* Hero Section */}
      <section className="hero-section py-20 md:py-28">
        <div className="hero-pattern"></div>
        <div className="hero-gradient-overlay"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="badge badge-subtle mb-6">Help & Support</span>
            <h1 className="text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
              Find answers to common questions about funeral services, arrangements, and how we can help.
            </p>
          </div>
        </div>
        <div className="hero-decoration"></div>
      </section>

      {/* FAQ Content */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--navy-800)] to-[var(--navy-700)] flex items-center justify-center text-white shadow-md">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-serif text-[var(--navy-900)]">
                    {category.category}
                  </h2>
                </div>
                <div className="space-y-4 ml-0 md:ml-[60px]">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="card p-6 hover:shadow-lg transition-all">
                      <h3 className="text-lg font-semibold text-[var(--navy-900)] mb-3 flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[var(--gold-500)] flex items-center justify-center text-white text-sm font-bold">
                          Q
                        </span>
                        <span>{faq.q}</span>
                      </h3>
                      <p className="text-[var(--neutral-600)] leading-relaxed pl-10">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section bg-[var(--color-background)]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-[var(--gold-100)] flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[var(--gold-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="mb-4">Still Have Questions?</h2>
            <p className="text-lg text-[var(--neutral-600)] mb-8">
              We understand you may have specific questions about your situation. Our compassionate team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+18769967077" className="btn btn-primary btn-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call +1 (876) 996-7077
              </a>
              <Link href="/contact" className="btn btn-navy btn-lg">
                Contact Us Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
