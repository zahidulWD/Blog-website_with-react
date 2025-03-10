import React from 'react';

const SubscribeSection = () => {
    return (
        <section className="py-10 bg-gradient-to-b from-green-50 to-green-100 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    Stay Updated with Our Blog
                </h2>
                <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
                    Subscribe to our newsletter and never miss an update from us. Get the latest blog posts delivered to your inbox.
                </p>
                <div className="mt-6">
                    <form className="flex flex-col items-center sm:flex-row sm:justify-center">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-200  sm:w-96"
                        />
                        <button 
                            type="submit" 
                            className="mt-3 sm:mt-0 sm:ml-3 px-6 py-3 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm text-center"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;

