

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // useState for Load data
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to control "See All" button

  // API load using useEffect
  useEffect(() => {
    fetch('/Blog.json')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to toggle "See All" blogs
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest from blog</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
          </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          {
            data.slice(0, showAll ? data.length : 6).map((item) => {
              return (
                <div key={item.id} className="overflow-hidden bg-white rounded shadow transition-transform duration-300 transform hover:scale-105">
                  <div className="p-5">
                    <div className="relative group">
                      <Link to="#" title="" className="block aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                        <img style={{ height: '200px', width: '100%' }} className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110" src={item.image} alt="" />
                      </Link>
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">{item.category}</span>
                      </div>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">{item.author}</span>
                    <p className="mt-5 text-2xl font-semibold">
                      <Link to={`/single-blog/${item.id}`} className="text-black">{item.title}</Link>
                    </p>
                    <p className="mt-4 text-base text-gray-600">{item.description}</p>
                    <Link to={`/single-blog/${item.id}`} className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-lime-500 transition-all duration-200 border-b-2 border-transparent hover:border-lime-500 focus:border-blue-600">
                      Continue Reading
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })
          }
        </div>

        {/* See All button */}
        <div className="flex items-center justify-center mt-8">
          <button 
            onClick={toggleShowAll} 
            className="inline-flex items-center justify-center text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            {showAll ? "See Less" : "See All"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;



