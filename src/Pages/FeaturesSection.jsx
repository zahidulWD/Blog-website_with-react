// components/FeaturesSection.js
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: '📚',
      title: 'Informative Content',
      description: 'Our blog features well-researched articles on various topics, delivering accurate and insightful information to our readers.',
    },
    {
      icon: '✍️',
      title: 'Expert Writers',
      description: 'Our content is crafted by professional writers who are passionate about sharing knowledge and delivering quality content.',
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'We cater to a global audience with articles and perspectives that resonate with people from diverse cultures and backgrounds.',
    },
    {
      icon: '📰',
      title: 'Latest Updates',
      description: 'Stay up-to-date with fresh and trending blog posts regularly updated with the latest news and information.',
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="relative container mx-auto text-center px-4">
      <div className="relative inline-flex mb-6 sm:mb-8">
  <span className="absolute inset-x-0 bottom-0 border-b-[10px] sm:border-b-[20px] border-[#4ADE80] mb-4 sm:mb-6"></span>
  <h1 className="relative text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-4">Why Follow Our Blog?</h1>
</div>


        {/* Features Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#4ADE80] hover:text-white"
            >
              <div className="text-5xl mb-4 transition-all duration-300 hover:text-white">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 hover:text-white">{feature.title}</h3>
              <p className="text-gray-600 transition-all duration-300 hover:text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
