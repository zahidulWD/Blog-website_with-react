

import React from "react";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/about" className="hover:text-lime-300">About</Link></li>
              <li><Link to="#" className="hover:text-lime-300">Features</Link></li>
              <li><Link to="#" className="hover:text-lime-300">Works</Link></li>
              <li><Link to="#" className="hover:text-lime-300">Career</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500">Help</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="#" className="hover:text-lime-300">Support</Link></li>
              <li><Link to="#" className="hover:text-lime-300">Delivery</Link></li>
              <li><Link to="#" className="hover:text-lime-300">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-lime-300">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="#" className="hover:text-lime-300">Free eBooks</Link></li>
              <li><Link to="#" className="hover:text-lime-300">Development</Link></li>
              <li><Link to="#" className="hover:text-lime-300">Blog</Link></li>
              <li><Link to="#" className="hover:text-lime-300">YouTube</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500">Extra</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="#" className="hover:text-lime-300">Contact</Link></li>
              <li><Link to="#" className="hover:text-lime-300">FAQs</Link></li>
              <li><Link to="#" className="hover:text-lime-300">Affiliate</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Brand Logo */}
          <div className="text-2xl font-bold">
            <span className="text-lime-400">ZahiD</span>
            <span className="text-yellow-500">Blogs</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
          <ul class="flex items-center space-x-3 md:order-3">
    {/* Facebook */}
    <li>
        <a href="#" title="Facebook"
           class="flex items-center justify-center text-white transition-all duration-200 bg-gray-700 hover:bg-blue-600 w-10 h-10 rounded-full">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11 9.95v-7.03H8v-2.92h3v-2.27c0-3 1.8-4.67 4.54-4.67 1.32 0 2.7.24 2.7.24v3h-1.52c-1.5 0-1.96.93-1.96 1.89v2.1h3.33l-.53 2.92h-2.8v7.03A10 10 0 0 0 22 12Z"/>
            </svg>
        </a>
    </li>

    {/* Twitter */}
    <li>
        <a href="#" title="Twitter"
           class="flex items-center justify-center text-white transition-all duration-200 bg-gray-700 hover:bg-blue-400 w-10 h-10 rounded-full">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973"/>
            </svg>
        </a>
    </li>

    {/* Instagram */}
    <li>
        <a href="#" title="Instagram"
           class="flex items-center justify-center text-white transition-all duration-200 bg-gray-700 hover:bg-pink-600 w-10 h-10 rounded-full">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.75 2h8.5C19.1 2 22 4.9 22 8.75v6.5C22 19.1 19.1 22 16.25 22h-8.5C4.9 22 2 19.1 2 16.25v-8.5C2 4.9 4.9 2 7.75 2Zm4.25 5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5Zm0 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.88-1.38a.88.88 0 1 0 0 1.76.88.88 0 0 0 0-1.76Z"/>
            </svg>
        </a>
    </li>

    {/* LinkedIn */}
    <li>
        <a href="#" title="LinkedIn"
           class="flex items-center justify-center text-white transition-all duration-200 bg-gray-700 hover:bg-blue-700 w-10 h-10 rounded-full">
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.984 3.396a2.397 2.397 0 1 0 0 4.795 2.397 2.397 0 0 0 0-4.795Zm-.036 5.902h.072c1.528 0 2.47.99 2.47 2.447v7.79h-2.95v-7.79c0-.676-.485-1.146-1.126-1.146-.627 0-1.115.478-1.115 1.146v7.79H0v-7.79c0-1.457.953-2.447 2.47-2.447h.072ZM23.948 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12Zm-3.24 7.236h-2.96v-4.526c0-1.133-.405-1.906-1.424-1.906-.776 0-1.243.526-1.448 1.035-.074.182-.097.434-.097.69v4.707h-2.96v-7.79h2.96v1.113c.407-.623 1.017-1.116 2.007-1.116 1.458 0 2.463 1.02 2.463 3.21v4.582Z"/>
            </svg>
        </a>
    </li>
</ul>

          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} ZahiD Blogs. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
