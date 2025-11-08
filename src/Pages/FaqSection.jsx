import React, { useState } from 'react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the purpose of exploring nature in travel blogs?",
      answer: "Travel blogs that focus on nature help inspire others to explore beautiful landscapes and appreciate the environment. These blogs provide insight into the natural beauty that exists around the world."
    },
    {
      question: "Why are technological advancements so important to our daily lives?",
      answer: "Technology continues to shape our world, influencing how we work, communicate, and interact. Understanding upcoming advancements helps us adapt and take advantage of the benefits they offer."
    },
    {
      question: "How do healthy recipes contribute to a balanced diet?",
      answer: "Healthy recipes provide nutritious ingredients that support our overall well-being. By maintaining a balanced diet, we can improve our energy levels, mood, and health."
    },
    {
      question: "What are some tips for taking better photographs?",
      answer: "Mastering photography involves understanding composition, lighting, and camera settings. It's about experimenting, learning from mistakes, and continuously refining your skills."
    },
    {
      question: "Why is understanding the stock market crucial for beginners?",
      answer: "Understanding the stock market helps you make informed decisions, whether you're investing for the future or just trying to grasp how it impacts the global economy."
    }


  ];

  return (
    <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <h1 className="mb-6 text-xl font-bold md:text-3xl">Frequently Asked Questions</h1>
      <div className="text-sm border-t border-b border-gray-200 divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleAnswer(index)}
              className="flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none"
              role="button"
            >
              {faq.question}
              <svg
                className={`flex-none w-4 h-4 ml-4 transition transform ${openIndex === index ? 'rotate-45' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            {openIndex === index && (
              <div className="pb-5 pr-0 text-gray-700 md:pr-40">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
