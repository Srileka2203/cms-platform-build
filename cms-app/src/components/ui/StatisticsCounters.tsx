'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

const stats: Stat[] = [
  {
    label: 'Founded',
    value: 2026,
    suffix: '',
    description: 'Building our journey with purpose',
  },
  {
    label: 'Employees',
    value: 100,
    suffix: '+',
    description: 'Talented professionals',
  },
  {
    label: 'Customers',
    value: 10,
    suffix: 'K+',
    description: 'Customers worldwide',
  },
  {
    label: 'Revenue',
    value: 5,
    suffix: 'M+',
    description: 'And growing every year',
  },
];

function Counter({
  value,
  suffix,
  startCounting,
}: {
  value: number;
  suffix: string;
  startCounting: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    const duration = 1800;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Ease-out animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [startCounting, value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatisticsCounters() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-100 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Our Achievements
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Numbers That Tell Our Story
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Our growth is built on the people we work with,
            the solutions we create, and the results we deliver.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative p-8 text-center transition-all duration-300 hover:bg-gray-50 sm:p-10 ${
                index !== 0
                  ? 'border-t border-gray-200 sm:border-l sm:border-t-0'
                  : ''
              } ${
                index === 2
                  ? 'lg:border-l'
                  : ''
              }`}
            >
              {/* Number */}
              <div className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  startCounting={isVisible}
                />
              </div>

              {/* Label */}
              <h3 className="mt-5 text-sm font-bold uppercase tracking-widest text-gray-700">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-gray-500">
                {stat.description}
              </p>

              {/* Bottom indicator */}
              <div className="mx-auto mt-6 h-1 w-8 rounded-full bg-gray-300 transition-all duration-300 group-hover:w-16 group-hover:bg-gray-700" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}