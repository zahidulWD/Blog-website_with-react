
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true); 

    return (
        <header className="bg-gradient-to-b from-green-100 to-green-200 shadow-md sticky top-0 z-50">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link 
                            to="/" 
                            className="text-3xl font-bold bg-gradient-to-r from-teal-300 to-lime-400 bg-clip-text text-transparent hover:bg-gradient-to-l hover:from-teal-300 hover:to-lime-400"
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
                        <Link to="/" className="text-base font-semibold text-black transition-all duration-200 hover:text-lime-500">Home</Link>
                        <Link to="/about" className="text-base font-semibold text-black transition-all duration-200 hover:text-lime-500">About</Link>
                        <Link to="/blog" className="text-base font-semibold text-black transition-all duration-200 hover:text-lime-500">Blog</Link>
                        <Link to="/contact" className="text-base font-semibold text-black transition-all duration-200 hover:text-lime-500">Contact</Link>
                    
                        {/* Toggle Button (Sign Up / Log In) */}
                        <div className="flex items-center space-x-2">
                            <Link 
                                to={isSignUp ? "/signup" : "/login"} 
                                className={`px-5 py-2 font-medium rounded-full transition-all duration-300 ${
                                    isSignUp ? "bg-green-500 text-white hover:bg-green-600" : "bg-green-100 text-black hover:bg-green-200"
                                }`}
                                onClick={() => setIsSignUp(!isSignUp)}
                            >
                                {isSignUp ? "Sign Up" : "Log In"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${menuOpen ? "block" : "hidden"} lg:hidden`}>
                <div className="px-4 pt-2 pb-3 space-y-2 bg-white shadow-md">
                    <Link to="/" className="block px-3 py-2 text-base font-semibold text-black hover:bg-gray-100 transition">Home</Link>
                    <Link to="/about" className="block px-3 py-2 text-base font-semibold text-black hover:bg-gray-100 transition">About</Link>
                    <Link to="/blog" className="block px-3 py-2 text-base font-semibold text-black hover:bg-gray-100 transition">Blog</Link>
                    <Link to="/contact" className="block px-3 py-2 text-base font-semibold text-black hover:bg-gray-100 transition">Contact</Link>

                    {/* Mobile Toggle Button (Sign Up / Log In) */}
                    <div className="flex flex-col space-y-2 mt-2">
                        <Link 
                            to={isSignUp ? "/signup" : "/login"} 
                            className={`px-5 py-2 font-medium rounded-full text-center transition-all duration-300 ${
                                isSignUp ? "bg-green-500 text-white hover:bg-green-600" : "bg-green-100 text-black hover:bg-green-200"
                            }`}
                            onClick={() => setIsSignUp(!isSignUp)}
                        >
                            {isSignUp ? "Sign Up" : "Log In"}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
