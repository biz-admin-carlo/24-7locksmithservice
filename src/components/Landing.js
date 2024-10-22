import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BriefcaseIcon, KeyIcon, RocketLaunchIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: "Convenient Booking with One Call",
    description: "Our expert locksmiths are just a phone call away, available 24/7 to assist with lockouts, lock changes, and security upgrades. With our team always on standby, we ensure quick response times, no matter the time or location.",
    icon: KeyIcon,
  },
  {
    name: "Expert Locksmiths for Any Job",
    description: "Our team of highly skilled locksmiths handles everything from simple lockouts to complex security system installations. Whether you're locked out of your home, office, or car, our technicians have the expertise to get you back in quickly.",
    icon: BriefcaseIcon,
  },
  {
    name: "Fast and Reliable Services in California and Nearby Areas",
    description: "We proudly serve California and the surrounding areas, providing quick, dependable locksmith services to keep you safe and secure. Our mobile locksmith units are equipped to reach you fast, ensuring you’re never left waiting.",
    icon: RocketLaunchIcon,
  },
]

export default function Landing() {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/reviews');
  };

  return (
    <div data-aos="fade-left">
      <div className="overflow-hidden bg-white py-12 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Your Trusted Solution for 24/7 Locksmith Services</h2>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              24/7 Locksmith Services	
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                onClick={handleNavigation}
                className="text-sm font-semibold leading-6 text-indigo-600 cursor-pointer"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether it's a home, business, or car lockout, our <span className='text-indigo-500'>expert locksmiths are available 24/7</span> to assist you. We provide fast, reliable, and affordable services across the city.
            </p>
          </div>

          </div>
        </div>
      </div>
    </div>

  )
}
