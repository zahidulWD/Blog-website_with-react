
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    fetch("/Blog.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const uniqueCategories = ["All", ...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filteredData = selectedCategory === "All" ? data : data.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-10 bg-gradient-to-b from-green-100 to-green-200 sm:py-12 lg:py-16">
      {/* Marquee */}
      <div className="w-full mb-6 text-center">
        <marquee
          className="text-xl font-semibold text-teal-500 bg-gradient-to-b from-green-200 to-green-200"
          behavior="scroll"
          direction="left"
          scrollamount="10"
          style={{ padding: "10px 0", backgroundColor: "#f1f1f1" }}
        >
          Stay tuned for the latest blog posts and updates related to technology, lifestyle, and much more. Discover new ideas, trends, and insights every week!
          অনুগ্রহ করে সর্বশেষ ব্লগ পোস্ট এবং আপডেটগুলির জন্য আমাদের সাথে থাকুন, যা প্রযুক্তি, লাইফস্টাইল এবং আরও অনেক কিছু সম্পর্কিত। প্রতি সপ্তাহে নতুন আইডিয়া, ট্রেন্ড এবং অন্তর্দৃষ্টি আবিষ্কার করুন! 
        </marquee>
      </div>

      {/* Section Title */}
      <div className="w-full mb-6 text-center">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent hover:bg-gradient-to-l hover:from-teal-400 hover:to-lime-400">Latest Blogs</h2>
        <p className="text-gray-600 mt-2 mb-6 font-medium">
          Stay updated with our latest articles and blog posts.
        </p>
      </div>

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex flex-col lg:flex-row gap-6">
        {/* Sidebar for Large Screens */}
        <aside className="w-full lg:w-1/4 hidden lg:block">
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`cursor-pointer py-2 px-4 rounded-md transition-all ${
                  selectedCategory === category ? "bg-lime-500 text-white" : "bg-white text-black hover:bg-lime-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Dropdown for Mobile */}
        <div className="w-full lg:hidden relative">
          <button
            className="w-full py-2 px-4 bg-lime-500 text-white rounded-lg flex items-center justify-between"
            onClick={toggleDropdown}
          >
            <span>Categories</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 right-0 bg-white shadow-lg rounded-md mt-2 py-2 z-10">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={`cursor-pointer py-2 px-4 transition-all ${
                    selectedCategory === category ? "bg-lime-500 text-white" : "hover:bg-lime-200"
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsDropdownOpen(false);
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Blog Grid */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.slice(0, showAll ? filteredData.length : 6).map((item) => (
            <div key={item.id} className="bg-white rounded shadow-lg p-4 transition-transform transform hover:scale-105">
              <Link to={`/single-blog/${item.id}`}>
                <img src={item.image} alt={item.title} className="rounded-lg w-full h-48 object-cover" />
              </Link>
              <div className="mt-4">
                <span className="block text-sm font-semibold text-gray-500 uppercase">{item.author}</span>
                <h3 className="text-lg font-bold mt-2">
                  <Link to={`/single-blog/${item.id}`} className="text-black">
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                <Link
                  to={`/single-blog/${item.id}`}
                  className="text-lime-500 font-semibold mt-3 inline-block hover:underline"
                >
                  Continue Reading →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See All Button */}
      {filteredData.length > 6 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={toggleShowAll}
            className="px-5 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600"
          >
            {showAll ? "See Less" : "See All"}
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
