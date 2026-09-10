import React from 'react';
import Link from 'next/link';
import Card from '../ui/Card';
import ImageGallery from '../ui/ImageGallery';



interface Category {
  title: string;
  description: string;
  href: string;
}

const categories: Category[] = [
  {
    title: 'Web Development',
    description:
      'Modern, responsive websites and web applications built for performance and scalability.',
    href: '/categories/web-development',
  },
  {
    title: 'Mobile Development',
    description:
      'User-friendly mobile applications designed to deliver seamless experiences across devices.',
    href: '/categories/mobile-development',
  },
  {
    title: 'UI/UX Design',
    description:
      'Clean and intuitive digital experiences focused on usability, accessibility, and engagement.',
    href: '/categories/ui-ux-design',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Scalable and reliable cloud solutions that help businesses improve efficiency and flexibility.',
    href: '/categories/cloud-solutions',
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Categories
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Categories
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Discover our range of services and solutions designed to meet
            different business and technology needs.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="group flex h-full flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <ImageGallery />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                  {category.description}
                </p>

                <Link
                  href={category.href}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-gray-900 transition-colors duration-200 hover:text-gray-600"
                >
                  Explore Category
                  <span
                    aria-hidden="true"
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}