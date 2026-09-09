import React from "react";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gray-100 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            {/* Small Heading */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gray-500"></span>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
                Our Services
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Solutions Designed
              <span className="block text-gray-500">
                For Your Business
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              We provide reliable, scalable, and modern digital solutions
              designed to help businesses improve their operations, strengthen
              their digital presence, and achieve sustainable growth.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="#services"
                className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-gray-700"
              >
                Explore Services

                <span className="ml-3 text-lg">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="relative rounded-2xl border border-gray-300 bg-white p-6 shadow-sm sm:p-8">

              {/* Card Header */}
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  What We Do
                </span>

                <span className="text-xs uppercase tracking-widest text-gray-400">
                  Services
                </span>
              </div>

              {/* Service List */}
              <div className="space-y-4">

                {/* Service 01 */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <span className="text-base font-medium text-gray-800">
                    Web Development
                  </span>

                  <span className="text-sm text-gray-400">
                    01
                  </span>
                </div>

                {/* Service 02 */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <span className="text-base font-medium text-gray-800">
                    UI / UX Design
                  </span>

                  <span className="text-sm text-gray-400">
                    02
                  </span>
                </div>

                {/* Service 03 */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <span className="text-base font-medium text-gray-800">
                    Mobile App Development
                  </span>

                  <span className="text-sm text-gray-400">
                    03
                  </span>
                </div>

                {/* Service 04 */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <span className="text-base font-medium text-gray-800">
                    Digital Marketing
                  </span>

                  <span className="text-sm text-gray-400">
                    04
                  </span>
                </div>

                {/* Service 05 */}
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <span className="text-base font-medium text-gray-800">
                    Cloud Solutions
                  </span>

                  <span className="text-sm text-gray-400">
                    05
                  </span>
                </div>

                {/* Service 06 */}
                <div className="flex items-center justify-between">
                  <span className="text-base font-medium text-gray-800">
                    Business Solutions
                  </span>

                  <span className="text-sm text-gray-400">
                    06
                  </span>
                </div>

              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-full border border-gray-300"></div>
          </div>

        </div>
      </div>
    </section>
  );
}   