
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleBlogPage = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1200, 
            easing: 'ease-out',  
            once: true,  
        });

        fetch('/Blog.json')
            .then((res) => res.json())
            .then((blogData) => {
                const findData = blogData.find((item) => item.id === Number(id));
                setData(findData || {});
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    return (
        <section className="py-10 bg-gradient-to-b from-green-50 to-green-200 sm:py-16 lg:py-24">
            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
                {/* Title Section */}
                <div className="text-left md:absolute top-20 left-12 p-4" data-aos="fade-up" data-aos-delay="100">
                    <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        <span className="relative inline-block">
                            <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
                            <span className="relative">{data?.title || "Loading..."}</span>
                        </span>
                    </h2>
                    <h3 className="mt-4 text-lg font-medium text-gray-700">Category : {data?.category || "Category"}</h3>
                </div>

                {/* Content and Image Section */}
                <div className="flex flex-col lg:flex-row mt-12 gap-12 md:gap-16">
                    {/* Left Column: Content */}
                    <div className="flex-1" data-aos="fade-right" data-aos-delay="200">
                        <h3 className="text-lg font-semibold text-gray-800">{data?.author || "Unknown Author"}</h3>
                        <p className="mt-4 text-lg text-gray-700">{data?.description || "No description available."}</p>
                        <div className="mt-8 text-gray-600">
                            <p>{data?.content || "No content available."}</p>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex-1 flex justify-center lg:justify-start" data-aos="fade-left" data-aos-delay="300">
                        <img
                            className="w-full max-w-full lg:max-w-2xl h-auto object-cover rounded-lg shadow-lg"
                            src={data?.image || "https://i.ibb.co/com/d4qyXGyF/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand-335224-1356.jpg"}
                            alt="Blog"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleBlogPage;
