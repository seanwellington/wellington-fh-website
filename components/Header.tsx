"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Obituaries", href: "/obituaries" },
  { name: "Pre-Planning", href: "/pre-planning" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Skip to main content link */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        {/* Top bar with contact info */}
        <div className="header-top">
          <div className="container-custom">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-6">
                <a 
                  href="tel:+18769967077" 
                  className="flex items-center gap-2 text-white/90 hover:text-[var(--gold-400)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">+1 (876) 996-7077</span>
                </a>
                <a 
                  href="mailto:service@wellingtonfhja.com" 
                  className="hidden md:flex items-center gap-2 text-white/90 hover:text-[var(--gold-400)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>service@wellingtonfhja.com</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[var(--gold-500)]/20 text-[var(--gold-300)] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available 24/7
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="header-nav border-b border-[var(--neutral-100)]">
          <div className="container-custom">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--gold-500)]/30 group-hover:border-[var(--gold-500)] transition-colors shadow-md">
                  <Image
                    src="/logo.png"
                    alt="Wellington's Funeral Home"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-serif text-[var(--navy-900)] font-bold leading-tight tracking-tight">
                    Wellington&apos;s
                  </h1>
                  <p className="text-[10px] text-[var(--neutral-500)] uppercase tracking-[0.15em] font-medium">
                    Funeral Home & Co.
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 text-[var(--neutral-700)] hover:text-[var(--navy-800)] font-medium text-[0.9375rem] transition-colors group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--gold-500)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Link>
                ))}
              </div>

              {/* CTA Button - Desktop */}
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  href="/contact"
                  className="btn btn-primary btn-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Get Help Now
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                type="button"
                className="lg:hidden p-2.5 rounded-lg text-[var(--neutral-700)] hover:bg-[var(--neutral-100)] transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div 
              className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-4 pb-6 border-t border-[var(--neutral-200)] mt-4">
                <div className="flex flex-col gap-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-[var(--neutral-700)] hover:text-[var(--navy-800)] hover:bg-[var(--neutral-100)] font-medium rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-4 px-4">
                    <Link
                      href="/contact"
                      className="btn btn-primary w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Get Help Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
