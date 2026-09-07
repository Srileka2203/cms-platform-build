import React from 'react';
import Link from 'next/link';
import Card from '../ui/Card';

export default function FeaturesGrid() {
  const features = [
    {
      id: 1,
      title: 'Easy to Use',
      description:
        'Simple and intuitive features designed to make your experience easier.',
      icon: '⚡',
    },
    {
      id: 2,
      title: 'Fast Performance',
      description:
        'Optimized performance that helps you get things done quickly and efficiently.',
      icon: '🚀',
    },
    {
      id: 3,
      title: 'Secure',
      description:
        'Built with security in mind to help keep your information protected.',
      icon: '🔒',
    },
    {
      id: 4,
      title: 'Responsive Design',
      description:
        'A responsive experience that works smoothly across all screen sizes.',
      icon: '📱',
    },
    {
      id: 5,
      title: 'Customizable',
      description:
        'Flexible options that allow you to customize the experience to your needs.',
      icon: '⚙️',
    },
    {
      id: 6,
      title: 'Reliable Support',
      description:
        'Get helpful support whenever you need assistance with the platform.',
      icon: '💬',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Features
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Everything you need to get more done with a simple and reliable
            experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="p-8 text-center hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mx-auto mb-5 h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}