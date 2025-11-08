
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, 
            once: true, 
            easing: 'ease-in-out', 
        });
    }, []);

    return (
        <div className=' bg-gradient-to-b from-green-100 to-green-200'>
            <section className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16" data-aos="fade-up">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">
                        <div data-aos="fade-up">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                Hey 👋 I am <br className="block sm:hidden" />Zahidul Islam
                            </h2>
                            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                                I’m Zahidul Islam, the voice behind ZahiDBlogs. I share my passion for knowledge, creativity, and personal growth to help you explore, learn, and evolve through insightful articles on Technology, Health, Travel, and more.
                            </p>

                            <p className="mt-4 text-xl text-gray-600 md:mt-8">
                                <span className="relative inline-block">
                                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                                    <span className="relative"> Have a question? </span>
                                </span>
                                <br className="block sm:hidden" />
                                Feel free to ask me on{' '}
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    title=""
                                    className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
                                >
                                    Facebook
                                </a>
                            </p>
                        </div>

                        <div className="relative" data-aos="fade-left" data-aos-delay="300">
                            <img
                                className="absolute inset-x-0 bottom-35 -mb-25 -translate-x-1/6 left-1/4 transform scale-150"
                                src="https://raw.githubusercontent.com/zahidulWD/Blog-website_with-react/refs/heads/main/src/assets/blob%20(2).svg"
                                alt="Background Graphic"
                            />
                            <img
                                className="relative w-80% xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                                src="https://i.ibb.co/Lh8L8Zxs/IMG20230105125457-1-removebg-preview.png"
                                alt="Zahidul Islam"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 sm:py-16 lg:py-24" data-aos="fade-up" data-aos-delay="500">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">What ZahiDBlogs Offers</h2>
                        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                            ZahiDBlogs is a platform where you can explore articles across multiple categories. We aim to provide valuable insights in fields like Technology, Health, Travel, and more, to help you stay informed and inspired.
                        </p>
                    </div>

                    <div className="relative mt-12 lg:mt-20">
                        <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                            <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="Curved Line" />
                        </div>

                        <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                            <div data-aos="fade-up" data-aos-delay="600">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <span className="text-xl font-semibold text-gray-700"> 1 </span>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Explore Categories</h3>
                                <p className="mt-4 text-base text-gray-600">
                                    Dive into a variety of categories, from technology updates to health tips, and immerse yourself in an enriching reading experience.
                                </p>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="700">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <span className="text-xl font-semibold text-gray-700"> 2 </span>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Read & Learn</h3>
                                <p className="mt-4 text-base text-gray-600">
                                    Read articles, stories, and guides that will broaden your knowledge and help you grow personally and professionally.
                                </p>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="800">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <span className="text-xl font-semibold text-gray-700"> 3 </span>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Engage & Share</h3>
                                <p className="mt-4 text-base text-gray-600">
                                    Join the community by engaging with content, commenting on posts, and sharing your thoughts on social media.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
