import React from "react";

const faqs = [
  {
    question: "What types of services do you offer in the Locksmith industry?",
    answer: "We offer a range of services including Vehicle Lockout Assistance, Building Lockout Assistance, and more.",
  },
  {
    question: "Are you a locally owned business?",
    answer: "Yes, we are a locally owned business with 10 years of experience in the industry.",
  },
  {
    question: "What guarantees do you provide for your services?",
    answer: "We offer a Satisfaction Guarantee to ensure our customers are happy with the results.",
  },
  {
    question: "How quickly can I expect your service in case of an emergency?",
    answer: "We provide Emergency help and same-day assistance to ensure quick resolution of your locksmith needs.",
  },
  {
    question: "What payment options do you accept for your services?",
    answer: "We accept payments via Cash, Bank Transfer, Credit Card, Debit Card, and Check for your convenience.",
  },
  {
    question: "Do you offer appointments for non-emergency situations?",
    answer: "Yes, we offer appointments for non-emergency situations to cater to your scheduling needs.",
  },
];

export default function FAQs() {
  return (
    <>
      <section className="w-full divide-y rounded divide-slate-200 px-10">
        {faqs.map((faq, index) => (
          <details key={index} className="p-4 group" open={index === 0}>
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900 [&::-webkit-details-marker]:hidden">
              {faq.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby={`title-ac0${index + 1} desc-ac0${index + 1}`}
              >
                <title id={`title-ac0${index + 1}`}>Open icon</title>
                <desc id={`desc-ac0${index + 1}`}>
                  Icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 ps-5 text-slate-500">{faq.answer}</p>
          </details>
        ))}
      </section>
      {/*<!-- End FAQ accordion --> */}
    </>
  );
}
