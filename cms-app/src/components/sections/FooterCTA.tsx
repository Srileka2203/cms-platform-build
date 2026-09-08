import React, { useState } from 'react';
import Button from '@/components/ui/Button';

export default function FooterCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* CTA Section */}
      <section className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 rounded-2xl border border-gray-700 bg-gray-800 px-6 py-10 sm:px-10 lg:flex-row lg:px-12">

            {/* CTA Content */}
            <div className="max-w-3xl text-center lg:text-left">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
                Let&apos;s Work Together
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to Start Your Project?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                Have a project idea or business requirement? Get in touch with
                our team and let&apos;s discuss how we can create the right
                technology solution for your business.
              </p>
            </div>

            {/* CTA Button */}
            <div className="shrink-0">
              <Button
                type="button"
                onClick={() => setIsOpen(true)}
              >
                Get Started
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6">

          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-gray-200 hover:text-gray-900"
              aria-label="Close"
            >
              ×
            </button>

            {/* Modal Header */}
            <div className="border-b border-gray-200 px-6 py-8 sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Get In Touch
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                Tell Us About Your Project
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                Share a few details about your project and our team will get
                back to you with the next steps.
              </p>
            </div>

            {/* Contact Form */}
            <form className="px-6 py-8 sm:px-8">

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-600 focus:ring-2 focus:ring-gray-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-600 focus:ring-2 focus:ring-gray-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-600 focus:ring-2 focus:ring-gray-200"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-600 focus:ring-2 focus:ring-gray-200"
                  />
                </div>

              </div>

              {/* Project Details */}
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project, requirements, or business goals..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-600 focus:ring-2 focus:ring-gray-200"
                />
              </div>

              {/* Form Actions */}
              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                >
                  Cancel
                </button>

                <Button type="submit">
                  Send Enquiry
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Button>

              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}