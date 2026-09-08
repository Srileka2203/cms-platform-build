import React from 'react';

export default function StatisticsCounters() {
  const stats = [
    {
      label: 'Founded',
      value: '2026',
      description: 'Our journey began',
      icon: '🏢',
    },
    {
      label: 'Employees',
      value: '100+',
      description: 'Talented professionals',
      icon: '👥',
    },
    {
      label: 'Customers',
      value: '10K+',
      description: 'Happy customers worldwide',
      icon: '⭐',
    },
    {
      label: 'Revenue',
      value: '$5M',
      description: 'And growing every year',
      icon: '📈',
    },
  ];

  return (
    <section className="bg-gray-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Our Achievements
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Numbers That Tell Our Story
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            We are proud of the milestones we have achieved
            together with our team and customers.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl
                         border border-gray-800 bg-gray-900 p-7
                         transition-all duration-300
                         hover:-translate-y-2
                         hover:border-blue-500/50
                         hover:shadow-xl hover:shadow-blue-500/10"
            >

              {/* Background decoration */}
              <div
                className="absolute -right-10 -top-10 h-28 w-28
                           rounded-full bg-blue-500/10
                           blur-2xl transition-all duration-300
                           group-hover:bg-blue-500/20"
              />

              {/* Icon */}
              <div
                className="relative mb-6 flex h-12 w-12 items-center
                           justify-center rounded-xl bg-blue-500/10
                           text-2xl"
              >
                {stat.icon}
              </div>

              {/* Value */}
              <div className="relative">
                <h3 className="text-4xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
                  {stat.label}
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {stat.description}
                </p>
              </div>

              {/* Bottom line */}
              <div className="mt-6 h-1 w-12 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-full" />

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}