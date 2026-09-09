import React from 'react';
import ImageGallery from '../ui/ImageGallery';

interface TeamMember {
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Growtham',
    role: 'CEO',
  },
  {
    name: 'Ezhil',
    role: 'VP, Growth & Development',
  },
  {
    name: 'Sumathi',
    role: 'VP, Finance & Operations',
  },
  {
    name: 'Srileka',
    role: 'VP, Strategy',
  },
  {
    name: 'Jieun Segal',
    role: 'VP, Sales & Marketing',
  },
  {
    name: 'Darren Maher',
    role: 'Creative Director',
  },
  {
    name: 'Ben Van Exan',
    role: 'Sr. Account Executive',
  },
  {
    name: 'John Blown',
    role: 'Founding Partner',
  },
  {
    name: 'Chris Breikss',
    role: 'Founding Partner',
  },
];

export default function TeamGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Meet the Team
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Meet the people behind our work and the expertise that helps
            us deliver meaningful solutions.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-5 lg:gap-x-8">

          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center"
            >

              {/* Profile Image */}
              <div
                className="h-24 w-24 overflow-hidden rounded-full
                           bg-gray-200 ring-1 ring-gray-200
                           transition-all duration-300
                           group-hover:ring-2 group-hover:ring-gray-400
                           sm:h-28 sm:w-28"
              >
                <ImageGallery />
              </div>

              {/* Member Information */}
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                  {member.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}