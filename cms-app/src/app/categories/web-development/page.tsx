import React from 'react';
import Link from 'next/link';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Technologies from '@/components/sections/Technologies';
import WhyUs from '@/components/sections/WhyUs';
import CTABanner from '@/components/sections/CTABanner';
// import ProductCategories from '@/components/sections/ProductCategories';


export default function WebDevelopment() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="bg-gray-900 px-6 py-24 text-white">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
                            Web Development
                        </p>

                        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            Build Powerful Websites for Your Business
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            We create modern, responsive, secure, and high-performance
                            websites and web applications designed to help your business
                            grow.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-200"
                            >
                                Get Started
                            </a>


                            <Link
                                href="/products#category"
                                className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
                            >
                                Back to Categories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesGrid />
            <Technologies />
            <WhyUs />
            <CTABanner />
            {/* <ProductCategories /> */}
        </main>
    );
}
