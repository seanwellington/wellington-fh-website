"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: Integrate with actual form submission (SendGrid, Supabase, etc.)
    // For now, simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      preferredContact: "email",
    });

    // Reset success message after 5 seconds
    setTimeout(() => setStatus("idle"), 5000);
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-serif font-bold text-[var(--navy-900)] mb-3">Message Sent!</h3>
        <p className="text-[var(--neutral-600)]">
          Thank you for contacting us. We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div className="form-group !mb-5">
        <label htmlFor="name" className="form-label">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Your full name"
        />
      </div>

      {/* Email & Phone Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="form-group !mb-0">
          <label htmlFor="email" className="form-label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="you@example.com"
          />
        </div>

        <div className="form-group !mb-0">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="+1 (876) 000-0000"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="form-group !mb-5">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <div className="relative">
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-input appearance-none pr-10"
          >
            <option value="">Select a subject</option>
            <option value="immediate-need">Immediate Need</option>
            <option value="pre-planning">Pre-Planning Inquiry</option>
            <option value="cremation">Cremation Services</option>
            <option value="memorial">Memorial Services</option>
            <option value="pricing">Pricing Information</option>
            <option value="other">Other</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-[var(--neutral-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="form-group !mb-5">
        <label htmlFor="message" className="form-label">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="form-input form-textarea"
          placeholder="How can we help you?"
        />
      </div>

      {/* Preferred Contact Method */}
      <div className="form-group !mb-6">
        <label className="form-label mb-3">
          Preferred Contact Method
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="radio"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact === "email"}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-5 h-5 border-2 border-[var(--neutral-300)] rounded-full peer-checked:border-[var(--navy-800)] transition-colors"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[var(--navy-800)] rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
            </div>
            <span className="text-[var(--neutral-700)] group-hover:text-[var(--navy-800)] transition-colors">Email</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="radio"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact === "phone"}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-5 h-5 border-2 border-[var(--neutral-300)] rounded-full peer-checked:border-[var(--navy-800)] transition-colors"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[var(--navy-800)] rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
            </div>
            <span className="text-[var(--neutral-700)] group-hover:text-[var(--navy-800)] transition-colors">Phone</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary w-full !py-4"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Message
          </>
        )}
      </button>

      {/* Privacy Note */}
      <p className="text-xs text-[var(--neutral-500)] text-center pt-2">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="text-[var(--gold-600)] hover:text-[var(--gold-500)] underline">
          Privacy Policy
        </a>
        . We&apos;ll never share your information with third parties.
      </p>
    </form>
  );
}
