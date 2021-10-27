import Link from "next/link";
import { Icon } from '@iconify/react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
import { FaHeartbeat } from 'react-icons/fa';
import { FaBalanceScale } from 'react-icons/fa';
import { GiStomach } from 'react-icons/gi';
import { GiNightSleep } from 'react-icons/gi';
import { FaRegEye } from 'react-icons/fa';
import { BiBone } from 'react-icons/bi';
import { BiBrain } from 'react-icons/bi';
import { GiLips } from 'react-icons/gi';
import { BsHandbag } from 'react-icons/bs';
// import Image from 'next/image';
// import LogoFooter from "../../images/quiz/bg-quiz.png";

export default function News() {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            {/* <Link href="/">
    <a>
      <Image
        src={LogoFooter}
        alt="Peoplescape"
      />
    </a>
  </Link> */}

            <div >
                <div className="mt-20 ml-16 mb-11">
                    <div className="flex flex-row">
                        <div className="text-xs text-gray-moreinfo font-light leading-3"><a href="/home">HOME</a></div>
                        <div className="px-1 text-gray-moreinfo text-xs font-light leading-3">/</div>
                        <div className=" text-xs text-black font-light leading-3">NEWS</div>
                    </div>
                </div>

                <div className="mb-32">
                    <div className="text-center text-green-shop font-medium text-4xl leading-loose">
                        NEWS
                    </div>
                </div>

                {/* ----------section---------- */}
                <div className="relative mb-28 container mx-auto">
                    <div className="mb-36 ">
                        <div className=" sm:grid md:grid-cols-5  px-4   space-y-6 md:space-y-0 md:gap-4">

                            <div className="h-full col-span-3 xl:col-span-3  rounded-md flex items-center">
                                <div className="text-gray-600 body-font">
                                    <div className="flex flex-wrap w-full mb-4 p-4">

                                    </div>
                                    <div className="flex flex-wrap -m-4">
                                        <div className="lg:w-full w-full ml-16 ">
                                            <div className="bg-white relative  hover:shadow-xl transition duration-500 rounded-lg">
                                                <img className=" w-full" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection6%2Fmain-news.8bd84a89f1218c4e302740e0ffc7d5e4.png&w=1920&q=75" alt="" />
                                                <div className="py-6 px-8 rounded-lg bg-white">
                                                    <div className="text-black font-medium text-2xl hover:text-gray-900 hover:cursor-pointer">Protein Shake Recipe: Homemade Sattu Shake To Fuel Up
                                                        Your Protein...</div>
                                                    <div className="text-gray-newstime text-base font-light leading-6 my-2">September 20, 2021</div>
                                                    <div className="text-black text-lg tracking-wide leading-7 font-light">here is much emerging information surrounding the imdivct of sleedivduration and quality on food choice and consumption in both children and adults</div>
                                                    {/* <button className="mt-6 py-2 px-4 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"><a href="/blog">READ MORE</a></button> */}
                                                </div>

                                            </div>
                                        </div>


                                    </div>{/* Pagination */}
                                    {/* <div className="flex items-center justify-center space-x-3 py-4">
                    <a href="#" className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
                      Previous
                    </a>

                    <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                      1
                    </a>
                    <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                      2
                    </a>
                    <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                      3
                    </a>
                    <a href="#" className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                      Next
                    </a>
                  </div> */}
                                </div>

                            </div>

                            <div className="h-full col-span-2 xl:col-span-2 px-8 flex items-center">
                                <div className="flex flex-wrap -m-4">
                                    <div className="bg-white  rounded-md">

                                        <div className="flex flex-col w-full mx-8 bg-white">
                                            <div className="mb-10">
                                                <img className="mb-5" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection6%2Fside-news1.5d7ec589362e4fd416affd65ec7367c8.png&w=828&q=75" />
                                                <div className="text-2xl font-medium">Why Do We Need Supplements
                                                    : Nutritionists' Perspective</div>
                                                <div className="text-gray-newstime text-base font-light leading-6 my-2">September 20, 2021</div>
                                            </div>
                                            <div>
                                                <img className="mb-5" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection6%2Fside-news2.f0ded6e9099fec1c26e48a69dbafee56.png&w=828&q=75" />
                                                <div className="text-2xl font-medium">Getting Deeper, Higher Quality Sleep with Healthy Fats</div>
                                                <div className="text-gray-newstime text-base font-light leading-6 my-2">September 20, 2021</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="flex flex-row">
                        <div className="h-1 mt-6 w-2/5 bg-gray-300 ml-36"></div>
                        <div className="text-center text-2xl font-medium leading-loose w-1/5">MOST POPULAR</div>
                        <div className="h-1 mt-6 w-2/5 bg-gray-300 mr-36"></div>
                    </div>
                </div>


                {/* ----------section---------- */}
                <div className="container mx-auto pb-60">
                    <div className="flex flex-row mb-16">
                        <div className="mr-8 w-4/12">
                            <img src="data:image/jpeg;base64,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" className="h-full w-full" />
                        </div>
                        <div className="">
                            <div className="font-medium text-2xl  mb-1 lg:w-5/12">
                                Protein Shake Recipe: Homemade Sattu Shake To Fuel Up Your Protein...
                            </div>
                            <div className=" text-base text-gray-newstime leading-6 mb-1 items-end lg:items-start">
                                September 20, 2021
                            </div>
                            <div className="text-lg font-light leading-relaxed lg:w-8/12 hidden lg:block">
                            here is much emerging information surrounding the impact of sleep duration and quality on food choice and consumption in both children and adults
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row mb-16">
                        <div className="mr-8 w-4/12">
                            <img src="data:image/jpeg;base64,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" className="h-full w-full" />
                        </div>
                        <div className="">
                            <div className="font-medium text-2xl  mb-1 lg:w-5/12">
                                Protein Shake Recipe: Homemade Sattu Shake To Fuel Up Your Protein...
                            </div>
                            <div className=" text-base text-gray-newstime leading-6 mb-1 items-end lg:items-start">
                                September 20, 2021
                            </div>
                            <div className="text-lg font-light leading-relaxed lg:w-8/12 hidden lg:block">
                            here is much emerging information surrounding the impact of sleep duration and quality on food choice and consumption in both children and adults
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row mb-16">
                        <div className="mr-8 w-4/12">
                            <img src="data:image/jpeg;base64,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" className="h-full w-full" />
                        </div>
                        <div className="">
                            <div className="font-medium text-2xl  mb-1 lg:w-5/12">
                                Protein Shake Recipe: Homemade Sattu Shake To Fuel Up Your Protein...
                            </div>
                            <div className=" text-base text-gray-newstime leading-6 mb-1 items-end lg:items-start">
                                September 20, 2021
                            </div>
                            <div className="text-lg font-light leading-relaxed lg:w-8/12 hidden lg:block">
                            here is much emerging information surrounding the impact of sleep duration and quality on food choice and consumption in both children and adults
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row mb-16">
                        <div className="mr-8 w-4/12">
                            <img src="data:image/jpeg;base64,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" className="h-full w-full" />
                        </div>
                        <div className="">
                            <div className="font-medium text-2xl  mb-1 lg:w-5/12">
                                Protein Shake Recipe: Homemade Sattu Shake To Fuel Up Your Protein...
                            </div>
                            <div className=" text-base text-gray-newstime leading-6 mb-1 items-end lg:items-start">
                                September 20, 2021
                            </div>
                            <div className="text-lg font-light leading-relaxed lg:w-8/12 hidden lg:block">
                            here is much emerging information surrounding the impact of sleep duration and quality on food choice and consumption in both children and adults
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center space-x-3 py-4">
                    <a href="#" className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
                      Previous
                    </a>

                    <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                      1
                    </a>
                    <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                      2
                    </a>
                    <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                      3
                    </a>
                    <a href="#" className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                      Next
                    </a>
                  </div>
                </div>
                {/* ----------section---------- */}

                






                {/* footer */}
            </div>
        </>
    )
}
