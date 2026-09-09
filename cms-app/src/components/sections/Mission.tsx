import React from 'react';
import { Target, Eye } from 'lucide-react';
import Card from '../ui/Card';

interface MissionItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const missionItems: MissionItem[] = [
  {
    title: 'Our Mission',
    description:
      'Our mission is to create reliable, innovative, and meaningful digital solutions that help businesses solve real problems, improve efficiency, and achieve sustainable growth.',
    icon: Target,
  },
  {
    title: 'Our Vision',
    description:
      'Our vision is to become a trusted technology partner for businesses by continuously delivering quality solutions, embracing innovation, and creating long-term value for our customers.',
    icon: Eye,
  },
];

export default function Mission() {
  return (
    <section className="bg-gray-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700">
            What Drives Us
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our Mission & Vision
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We are driven by a clear purpose and a long-term vision
            focused on creating meaningful value through technology.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {missionItems.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8
                           shadow-sm transition-all duration-300
                           hover:-translate-y-1 hover:border-gray-400
                           hover:shadow-xl sm:p-10"
              >
                {/* Icon */}
                <div
                  className="flex h-14 w-14 items-center justify-center
                             rounded-2xl bg-gray-900 text-white
                             transition-all duration-300
                             group-hover:bg-gray-700"
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="mt-7 text-2xl font-bold text-gray-900 sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-gray-600 sm:text-lg">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div
                  className="mt-8 h-1 w-10 rounded-full bg-gray-300
                             transition-all duration-300
                             group-hover:w-20 group-hover:bg-gray-700"
                />
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}