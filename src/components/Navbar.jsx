

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                   {/* Logo */}
                   <div className="flex-shrink-0">
                       <Link 
                           to="/" 
                           className="text-3xl font-bold bg-gradient-to-r from-teal-200 to-lime-200 bg-clip-text text-transparent hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200"
                       >
                           ZahiDBlogs
                       </Link>
                   </div>

                    {/* Mobile Menu Button */}
                    <button 
                        type="button" 
                        className="lg:hidden p-2 text-black border border-black focus:bg-gray-100 hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105" 
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {/* Open Menu Icon */}
                        <svg className={`${menuOpen ? "hidden" : "block"} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        {/* Close Menu Icon */}
                        <svg className={`${menuOpen ? "block" : "hidden"} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-12">
                        <Link to="/" className="text-base font-semibold text-black transition-all duration-200 border-b-3 border-transparent hover:border-lime-200 hover:text-lime-500">Home</Link>
                        <Link to="/about" className="text-base font-semibold text-black transition-all duration-200 border-b-3 border-transparent hover:border-lime-200 hover:text-lime-500">About</Link>
                        <Link to="/blog" className="text-base font-semibold text-black transition-all duration-200 border-b-3 border-transparent hover:border-lime-200 hover:text-lime-500">Blog</Link>
                        <Link to="/contact" className="text-base font-semibold text-black transition-all duration-200 border-b-3 border-transparent hover:border-lime-200 hover:text-lime-500">Contact</Link>
                        <div className="w-px h-5 bg-black/20"></div>
                        <Link to="/login" className="text-base font-semibold text-black transition-all duration-200 border-b-3 border-transparent hover:border-lime-200 hover:text-lime-500">Log in</Link>
                        <Link to="/blog" type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300 ease-in-out transform hover:scale-105">
                            Try for free
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${menuOpen ? "block" : "hidden"} lg:hidden`}>
                <div className="px-4 pt-2 pb-3 space-y-2 bg-white shadow-md">
                    <Link to="/" className="block px-3 py-2 text-base font-semibold text-black hover:bg-gray-100 transition-all duration-300 ease-in-out">Home</Link>
                    <Link to="/about" className="block px-3 py-2 text-base font-semibold text-black hover:bg-gray-100 transition-all duration-300 ease-in-out">About</Link>
                    <Link to="/blog" className="block px-3 py-2 text-base font-semibold text-black hover:bg-gray-100 transition-all duration-300 ease-in-out">Blog</Link>
                    <Link to="/contact" className="block px-3 py-2 text-base font-semibold text-black hover:bg-gray-100 transition-all duration-300 ease-in-out">Contact</Link>
                    <Link to="/login" className="block px-3 py-2 text-base font-semibold text-black hover:bg-gray-100 transition-all duration-300 ease-in-out">Log in</Link>
                    <Link to="/blog" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-3 transition-all duration-300 ease-in-out transform hover:scale-105">
                        Try for free
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

