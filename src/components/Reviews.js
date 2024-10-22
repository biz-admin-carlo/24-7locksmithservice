import React from 'react';
import { FaStar } from "react-icons/fa6";

export default function WarehouseImages() {

  const testimonials = [
    {
      quote: "I got locked out of my house late at night, and I called this 24/7 locksmith service. Within 20 minutes, the technician arrived, unlocked my door without any damage, and was super friendly. I was so relieved! Highly recommended for any emergency lockouts!",
      author: "Maria G.",
      rating: 5,
    },
    {
      quote: "My car key broke in the ignition while I was in a rush to get to work. I called this locksmith service, and they sent someone over immediately. He was very professional, and I was back on the road in no time. I’m so grateful for their fast service!",
      author: "David K.",
      rating: 5,
    },
    {
      quote: "I had an urgent situation where I needed my front door locks rekeyed after losing my keys. The locksmith arrived promptly and rekeyed all my locks within an hour. Very professional and courteous! Definitely my go-to locksmith from now on.",
      author: "Sophia R.",
      rating: 4,
    },
    {
      quote: "I locked myself out of my car while shopping and was panicking. Luckily, I called this 24/7 locksmith service, and they were able to get me back in my car within 15 minutes! Quick, efficient, and reasonably priced. I couldn't ask for better service!",
      author: "James L.",
      rating: 5,
    },
    {
      quote: "I had an issue with my office building's locks, and I needed immediate help after hours. This locksmith service was quick to respond and provided a secure fix. I’ll definitely be using them again if needed. Highly professional team!",
      author: "Alicia M.",
      rating: 5,
    },
    {
      quote: "My apartment’s lock jammed, and I couldn’t get inside after a long day at work. I called this locksmith service at 10 PM, and the technician was at my door within 30 minutes. He fixed the issue quickly and gave me tips to avoid future problems. Amazing service!",
      author: "Chris D.",
      rating: 4,
    },
    {
      quote: "I locked my keys in my car while on vacation, and this locksmith service came through when I needed them most. They arrived fast and didn’t damage my car while unlocking it. Great experience and very reasonable pricing for emergency services.",
      author: "Elena P.",
      rating: 4,
    },
    {
      quote: "After a break-in at my home, I called this locksmith service for an emergency lock replacement. They arrived within 20 minutes, replaced all the locks, and even installed a more secure deadbolt. Their professionalism and quick service were impressive!",
      author: "John W.",
      rating: 5,
    },
  ];  

  const StarRating = ({ rating }) => (
    <div className="flex text-indigo-500 mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} fill={i < rating ? "currentColor" : "none"} />
      ))}
    </div>
  );
  
  const TestimonialWithStars = ({ quote, author, rating }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mb-8" data-aos="fade-up">
      <StarRating rating={rating} />
      <blockquote className="text-xl text-gray-700 mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl py-5 text-center font-bold text-gray-900">Reviews</h1>
          <hr />
          <div className="py-5">
            {testimonials.map((testimonial, index) => (
              <TestimonialWithStars 
                key={index} 
                quote={testimonial.quote} 
                author={testimonial.author} 
                rating={testimonial.rating} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
