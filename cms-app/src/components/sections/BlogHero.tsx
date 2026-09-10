import Link from "next/link";
import Button from "@/components/ui/Button";

export default function BlogHero() {
  return (
    <section className="border-b border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}

          <div>

            {/* Small Label */}
            <div className="mb-5 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2">
              <span className="mr-2 h-2 w-2 rounded-full bg-gray-900"></span>

              <span className="text-sm font-semibold text-gray-700">
                CMS Platform Blog
              </span>
            </div>


            {/* Main Heading */}
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Ideas, insights and
              <span className="block text-gray-500">
                inspiration for growth.
              </span>
            </h1>


            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              Explore practical insights, industry trends, product updates,
              and useful guides to help you build, manage, and grow better.
            </p>


            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              <Link href="#latest-posts">
                <Button
                  variant="primary"
                  size="md"
                >
                  Explore Articles
                </Button>
              </Link>

              <Link
                href="/categories"
                className="inline-flex items-center rounded-lg border border-gray-300
                           bg-white px-5 py-2.5 text-sm font-semibold text-gray-700
                           transition-colors hover:bg-gray-100 hover:text-gray-900"
              >
                Browse Categories
              </Link>

            </div>


            {/* Category Pills */}
            <div className="mt-10 flex flex-wrap gap-2">

              <Link
                href="/blog?category=technology"
                className="rounded-full border border-gray-200 bg-white px-4 py-2
                           text-sm font-medium text-gray-600
                           transition-colors hover:border-gray-300
                           hover:text-gray-900"
              >
                Technology
              </Link>

              <Link
                href="/blog?category=business"
                className="rounded-full border border-gray-200 bg-white px-4 py-2
                           text-sm font-medium text-gray-600
                           transition-colors hover:border-gray-300
                           hover:text-gray-900"
              >
                Business
              </Link>

              <Link
                href="/blog?category=design"
                className="rounded-full border border-gray-200 bg-white px-4 py-2
                           text-sm font-medium text-gray-600
                           transition-colors hover:border-gray-300
                           hover:text-gray-900"
              >
                Design
              </Link>

              <Link
                href="/blog?category=product"
                className="rounded-full border border-gray-200 bg-white px-4 py-2
                           text-sm font-medium text-gray-600
                           transition-colors hover:border-gray-300
                           hover:text-gray-900"
              >
                Product
              </Link>

            </div>

          </div>


          {/* ================= FEATURED ARTICLE ================= */}

          <div className="relative">

            <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

              {/* Image Placeholder */}
              <div className="relative h-64 overflow-hidden bg-gray-900 sm:h-72">

                <div className="absolute inset-0 bg-linear-to-br from-gray-800 via-gray-900 to-black" />

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="text-center">

                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-700 bg-gray-800">
                      <svg
                        className="h-8 w-8 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>

                    <p className="text-sm font-medium text-gray-400">
                      Featured Article
                    </p>

                  </div>

                </div>

              </div>


              {/* Article Content */}
              <div className="p-6 sm:p-7">

                {/* Category + Reading Time */}
                <div className="mb-4 flex items-center justify-between">

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                    Featured
                  </span>

                  <span className="text-sm text-gray-500">
                    6 min read
                  </span>

                </div>


                {/* Article Title */}
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  How modern businesses can build a stronger digital presence
                </h2>


                {/* Article Description */}
                <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
                  Discover practical strategies, modern tools, and proven
                  approaches for creating better digital experiences.
                </p>


                {/* Author + Read More */}
                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">

                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      CMS Editorial Team
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      September 10, 2026
                    </p>
                  </div>


                  <Link
                    href="/blog/modern-digital-presence"
                    className="text-sm font-semibold text-gray-900 transition-colors hover:text-gray-500"
                  >
                    Read article →
                  </Link>

                </div>

              </div>

            </article>

          </div>

        </div>

      </div>
    </section>
  );
}