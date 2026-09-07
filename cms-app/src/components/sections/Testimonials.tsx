import React from 'react';
import Card from '../ui/Card';

interface Testimonial {
  name: string;
  service: string;
  message: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Gowtham',
    service: 'Structural Design',
    message:
      'The structural design service was professional and well planned. The team explained everything clearly and completed the work on time.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Sumathi',
    service: 'Building Construction',
    message:
      'I was very satisfied with the quality of work and support throughout the construction process. The team was reliable and professional.',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Srileka',
    service: 'Structural Consultancy',
    message:
      'Excellent consultancy service with clear guidance and practical solutions. I would definitely recommend their services.',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Trusted by our clients for quality, reliability, and professional
            service.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Avatar and Name */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {testimonial.service}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="text-yellow-400 mb-4 text-lg">
                ★ ★ ★ ★ ★
              </div>

              {/* Testimonial Message */}
              <p className="text-gray-600 leading-relaxed">
                "{testimonial.message}"
              </p>

              {/* Service */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-800">
                  Service: {testimonial.service}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
