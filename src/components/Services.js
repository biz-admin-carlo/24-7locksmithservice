import React from 'react';
import Image1 from '../assets/automotive-key-cutting.webp';
import Image2 from '../assets/emergency-unlocking.webp';
import Image3 from '../assets/door-lock-repair.webp';
import Image4 from '../assets/vehicle-lockout-assistance.webp';
import Image5 from '../assets/re-keying.webp';
import Image6 from '../assets/block-lockout-assistance.webp';
import Image7 from '../assets/key-duplication.webp';

const servicesData = [
  {
    title: "Automotive Key Cutting",
    description: "When it comes to automotive key cutting, trust our expert locksmiths to provide you with efficient and precise solutions. Whether you need a replacement key, a spare key, or a key programmed for your vehicle, our skilled technicians have the knowledge and equipment to handle it all. We understand the importance of timeliness in these situations, and our team is dedicated to delivering prompt and reliable service. With our state-of-the-art technology and attention to detail, you can be confident that your automotive key cutting needs will be met with professionalism and expertise.",
    image: Image1 
  },
  {
    title: "Emergency Unlocking",
    description: "Discover prompt and reliable assistance for your emergency unlocking needs with our professional locksmiths. Locked out of your home, office, or car? Our expert team is available 24/7 to provide fast and efficient unlocking solutions, ensuring minimal disruption to your day. Whether you've lost your keys, broken a lock, or need immediate access, we have the skills and tools to help. With our trusted locksmith services, you can regain entry quickly and safely, giving you peace of mind in stressful situations. Trust us for all your emergency unlocking needs.",
    image: Image2 
  },
  {
    title: "Door Lock Repair",
    description: "Don't let a malfunctioning door lock compromise the security of your property. Trust our expert locksmiths to provide efficient and reliable door lock repair services. With years of experience in the industry, we have the knowledge and skills to diagnose and fix a wide range of lock issues quickly and effectively. Our team uses top-of-the-line tools and techniques to ensure a seamless repair that meets the highest standards of quality and security. Restore your peace of mind and protect your property with our professional door lock repair services.",
    image: Image3
  },
  {
    title: "Vehicle Lockout Assistance",
    description: "Area experts in swift and reliable vehicle lockout assistance. Our skilled locksmiths understand the frustration and urgency that comes with being locked out of your vehicle. With our prompt response times and 24/7 availability, we are always here to help you regain access to your car quickly and efficiently. Our trained professionals utilize the latest techniques and tools to ensure a damage-free entry into your vehicle. Trust our expert locksmiths to provide you with the peace of mind and reliable assistance you need in any vehicle lockout situation.",
    image: Image4
  },
  {
    title: "Re-Keying",
    description: "Tired of worrying about the security of your property? Our professional locksmiths are here to provide expert re-keying services. Whether you’ve moved into a new home or need to enhance the security of your business, our team will reconfigure your locks to ensure that only authorized individuals have access. With our precision and attention to detail, we guarantee a seamless and secure re-keying process. Trust our experienced locksmiths to keep your property safe and give you peace of mind with our reliable re-keying service.",
    image: Image5
  },
  {
    title: "Key Duplication",
    description: "We specialize in efficient and accurate key duplication services to meet all your locksmith needs. With our state-of-the-art equipment and skilled technicians, we provide reliable key copies for your home, office, or vehicle. Whether you need a spare key or have lost your original, our professional team is here to assist you. We understand the importance of security and convenience, which is why we deliver quick and precise key duplication services. Trust us to provide you with high-quality duplicates that work flawlessly every time.",
    image: Image6
  },
  {
    title: "Building Lockout Assistance",
    description: "Discover quick and reliable solutions for all your building lockout emergencies with our professional locksmiths. Our experienced team understands the stress and inconvenience of being locked out, and we are here to help you regain access efficiently and safely. With our state-of-the-art tools and expertise, we can handle various types of locks and provide prompt assistance to get you back inside in no time. Trust our licensed and insured locksmiths to deliver reliable and affordable building lockout assistance when you need it most.",
    image: Image7
  }
];

export default function Services() {
  return (
    <div data-aos="fade-down">
      <section className="py-24">
        <div className="container px-6 m-auto">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 pb-6 pt-24 border-gray-200">Our Services</h1>
          <div className="space-y-24">
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-4/3 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg leading-8 text-gray-600">
                    {service.description.split(' ').map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className={word.includes('locksmith') || 
                                 word.includes('key') || 
                                 word.includes('security') || 
                                 word.includes('efficient') || 
                                 word.includes('professional') ? 
                                 'text-indigo-500' : ''}
                      >
                        {word}{' '}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}