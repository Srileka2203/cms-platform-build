import React from 'react';
import ImageGallery from '../ui/ImageGallery';
import Card from '../ui/Card';

export default function AboutHero() {
  return (
    <section className="bg-gray-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left - Content */}
          <div className="max-w-2xl">

            {/* Label */}
            <span className="inline-flex rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700">
              About Us
            </span>

            {/* Heading */}
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Building Solutions
              <span className="block text-gray-600">
                That Make a Difference
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              We are a team focused on creating reliable, innovative,
              and meaningful digital solutions that help businesses
              solve real challenges and achieve their goals.
            </p>

            <p className="mt-4 text-base leading-7 text-gray-600">
              From understanding your ideas to delivering the final
              solution, we work closely with our customers to create
              technology that delivers lasting value.
            </p>

           

          </div>

          {/* Right - Image Placeholder */}
          <div className="relative">

            <div
              className="overflow-hidden rounded-3xl border border-gray-200
                         bg-white p-2 shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200">
                <ImageGallery />
              </div>
            </div>

            {/* Small Supporting Card */}
            <Card
              className="absolute -bottom-6 -left-4 hidden rounded-2xl
                         border border-gray-200 bg-white p-5 shadow-lg
                         sm:block lg:-left-8"
            >
              <p className="text-sm font-semibold text-gray-900">
                Driven by Purpose
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Focused on creating meaningful solutions
              </p>
            </Card>

          </div>

        </div>

      </div>
    </section>
  );
}