import React from 'react';
import {
  Lightbulb,
  ShieldCheck,
  Users,
  Rocket,
  ArrowRight,
} from 'lucide-react';
import Card from '../ui/Card';

interface WhyUsItem {
  title: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  hoverBg: string;
}

const whyUsItems: WhyUsItem[] = [
  {
    title: 'Innovation First',
    description:
      'We use modern technologies and creative thinking to develop smarter and more effective solutions.',
    icon: Lightbulb,
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-700',
    hoverBg: 'group-hover:bg-gray-700',
  },
  {
    title: 'Quality You Can Trust',
    description:
      'Every project is carefully planned, developed, tested, and delivered with a strong focus on quality.',
    icon: ShieldCheck,
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-700',
    hoverBg: 'group-hover:bg-gray-700',
  },
  {
    title: 'Customer Focused',
    description:
      'We listen, understand your goals, and work closely with you to turn your ideas into successful outcomes.',
    icon: Users,
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-700',
    hoverBg: 'group-hover:bg-gray-700',
  },
  {
    title: 'Fast & Reliable',
    description:
      'Our streamlined process helps us deliver dependable solutions on time without compromising quality.',
    icon: Rocket,
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-700',
    hoverBg: 'group-hover:bg-gray-700',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            We Build More Than Just{' '}
            <span className="text-gray-700">Solutions</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We combine expertise, innovation, and a customer-first
            approach to deliver solutions that create real value.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left - Features */}
          <div className="space-y-6">
            {whyUsItems.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="group flex gap-5 rounded-2xl border border-gray-200
                             bg-white p-6 shadow-sm
                             transition-all duration-300
                             hover:-translate-y-1
                             hover:border-gray-400
                             hover:shadow-lg"
                >
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center
                               justify-center rounded-xl
                               ${item.iconBg}
                               ${item.iconColor}
                               ${item.hoverBg}
                               transition-all duration-300
                               group-hover:text-white`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Right - Highlight Card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 shadow-2xl sm:p-10">

              {/* Decorative Background */}
              <div
                className="absolute -right-20 -top-20 h-60 w-60
                           rounded-full bg-gray-700/30 blur-3xl"
              />

              <div
                className="absolute -bottom-20 -left-20 h-60 w-60
                           rounded-full bg-gray-600/20 blur-3xl"
              />

              {/* Content */}
              <div className="relative">

                <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                  Our Promise
                </span>

                <h3 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Your Success Is{' '}
                  <span className="text-gray-300">
                    Our Priority.
                  </span>
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  From the first conversation to the final delivery,
                  we focus on creating meaningful solutions that help
                  your business grow.
                </p>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-3xl font-bold text-white">
                      100+
                    </div>

                    <div className="mt-1 text-sm text-gray-400">
                      Projects Delivered
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-3xl font-bold text-white">
                      98%
                    </div>

                    <div className="mt-1 text-sm text-gray-400">
                      Client Satisfaction
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-xl
                               bg-gray-700 px-6 py-3.5
                               text-sm font-semibold text-white
                               transition hover:bg-gray-600"
                  >
                    Let's Work Together

                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}