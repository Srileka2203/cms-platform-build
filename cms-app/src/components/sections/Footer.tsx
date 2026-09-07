import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Information */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-bold text-white tracking-tight mb-5"
            >
              CMS<span className="text-gray-400">Platform</span>
            </Link>

            <p className="text-gray-400 text-sm leading-7 max-w-sm">
              We build modern, reliable, and high-performance digital
              solutions that help businesses establish a strong online
              presence and grow with confidence.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-7">

              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V11H7.5v3h2.8v8h3.2z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.47 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2zm-1.1 17.9h1.73L8.28 4H6.42l11.38 15.9z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/team"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Our Team
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/services/web-design"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Web Design
                </Link>
              </li>

              <li>
                <Link
                  href="/services/development"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Full Stack Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services/backend"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Backend Development
                </Link>
              </li>

              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm">

              {/* Address */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s7-5.5 7-12a7 7 0 10-14 0c0 6.5 7 12 7 12z"
                  />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>

                <p className="text-gray-400 leading-6">
                  123 Business Avenue,
                  <br />
                  Coimbatore, Tamil Nadu,
                  <br />
                  India - 641001
                </p>
              </div>

              {/* Email */}
              <a
                href="mailto:info@cmsplatform.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-gray-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />
                  <path d="M3 7l9 6 9-6" />
                </svg>

                info@cmsplatform.com
              </a>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-gray-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.6 3h2.2l1.4 4-2 1.6a15 15 0 007.2 7.2l1.6-2 4 1.4v2.2c0 1.1-.9 2-2 2C11.8 19.4 4.6 12.2 4.6 5c0-1.1.9-2 2-2z"
                  />
                </svg>

                +91 98765 43210
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} CMSPlatform. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">

              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-conditions"
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                Terms
              </Link>

              <Link
                href="/cookie-policy"
                className="text-gray-500 hover:text-white transition-colors duration-200"
              >
                Cookies
              </Link>

            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}
