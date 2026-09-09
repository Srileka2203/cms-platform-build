import React from 'react';
import {
  Lightbulb,
  ShieldCheck,
  Handshake,
  Users,
} from 'lucide-react';
import Card from '../ui/Card';

interface ValueItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const values: ValueItem[] = [
  {
    title: 'Innovation',
    description:
      'We embrace new ideas and modern technologies to create smarter and more effective solutions.',
    icon: Lightbulb,
  },
  {
    title: 'Quality',
    description:
      'We maintain high standards throughout every stage of our work to deliver reliable and lasting solutions.',
    icon: ShieldCheck,
  },
  {
    title: 'Integrity',
    description:
      'We believe in honest communication, transparency, and building relationships based on trust.',
    icon: Handshake,
  },
  {
    title: 'Collaboration',
    description:
      'We work closely with our customers and team to understand challenges and achieve shared goals.',
    icon: Users,
  },
];

export default function OurValues() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
            What We Stand For
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our Values
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our values guide the way we work, make decisions, build
            relationships, and deliver solutions to our customers.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <Card
                key={value.title}
                className="group flex h-full flex-col rounded-2xl border
                           border-gray-200 bg-white p-7 shadow-sm
                           transition-all duration-300
                           hover:-translate-y-2
                           hover:border-gray-400
                           hover:shadow-xl"
              >
                {/* Icon */}
                <div
                  className="flex h-14 w-14 items-center justify-center
                             rounded-xl bg-gray-100 text-gray-700
                             transition-all duration-300
                             group-hover:bg-gray-900
                             group-hover:text-white"
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {value.description}
                </p>

                {/* Bottom Indicator */}
                <div
                  className="mt-6 h-1 w-8 rounded-full bg-gray-300
                             transition-all duration-300
                             group-hover:w-16
                             group-hover:bg-gray-700"
                />
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}