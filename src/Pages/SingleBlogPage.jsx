// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Blog from './Blog';

// const SingleBlogPage = () => {
//     const { id } = useParams(); 
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         fetch('/Blog.json')
//             .then((res) => res.json())
//             .then((blogData) => {
//                 const findData = blogData.find((item) => item.id === Number(id)); 
//                 setData(findData || {}); 
//             })
//             .catch((error) => console.error("Error fetching data:", error));
//     }, [id]);

//     return (
//         <section className="py-10 bg-white sm:py-16 lg:py-24">
//             <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
//                 <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
//                     <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
//                         <span className="relative inline-block">
//                             <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
//                             <span className="relative">{data?.title || "Loading..."}</span> 
//                         </span>
//                     </h2>
//                 </div>

//                 <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
//                     <div>
//                         <img className="w-full mx-auto sm:max-w-xs" src={data?.image || "https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg"} alt="Blog" />
//                     </div>

//                     <div>
//                         <h3 className="text-lg font-semibold text-gray-900">{data?.author || "Unknown Author"}</h3>
//                         <p className="mt-4 text-lg text-gray-700">{data?.description || "No description available."}</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SingleBlogPage;




import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlogPage = () => {
    const { id } = useParams(); 
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/Blog.json')
            .then((res) => res.json())
            .then((blogData) => {
                const findData = blogData.find((item) => item.id === Number(id)); 
                setData(findData || {}); 
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                    <div className="relative lg:mb-12">
                        <img className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg" alt="" />
                        <div className="pl-12 pr-6">
                            <img className="relative" src={data?.image || "https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"} alt="Blog" />
                        </div>
                        <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                            <div className="max-w-xs bg-blue-600 rounded-lg sm:max-w-md xl:max-w-md">
                                <div className="px-3 py-4 sm:px-5 sm:py-8">
                                    <div className="flex items-start">
                                        <p className="text-3xl sm:text-4xl">👋</p>
                                        <blockquote className="ml-5">
                                            <p className="text-sm font-medium text-white sm:text-lg">
                                                “{data?.testimonial || "You made it so simple. My new site is so much faster and easier to work with than my old site."}”
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="2xl:pl-16">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">{data?.title || "Loading..."}</h2>
                        <p className="text-xl leading-relaxed text-gray-900 mt-9">{data?.shortDescription || "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."}</p>
                        <p className="mt-6 text-xl leading-relaxed text-gray-900">{data?.longDescription || "Velit officia conse duis enim velit mollit. Exercit ation veniam consequat sunt nostrud amet."}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleBlogPage;
