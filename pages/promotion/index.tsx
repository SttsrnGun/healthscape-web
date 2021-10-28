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

export default function Promotion() {
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

            <div className="container mx-auto">
                <div className="mt-20  mb-11">
                    <div className="flex flex-row">
                        <div className="text-xs text-gray-moreinfo font-light leading-3"><a href="/home">HOME</a></div>
                        <div className="px-1 text-black text-xs font-light leading-3">/</div>
                        <div className=" text-xs text-black font-light leading-3">PROMOTIONS</div>
                    </div>
                </div>

                <div className="mb-32">
                    <div className="text-center text-green-shop font-medium text-4xl leading-loose">
                        PROMOTION
                    </div>
                </div>

                {/* ----------section---------- */}
                <div className="mb-16">
                    <img className="w-full h-full" src="data:image/jpeg;base64,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" />
                </div>


                {/* ----------section---------- */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  px-4   space-y-6 md:space-y-0 md:gap-4">

                        <div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-3 h-full   rounded-md flex items-center text-gray-600 body-font">
                            <div>

                                <div className="flex flex-row gap-12 mb-16">
                                    <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-auto container shadow-lg hover:shadow-xl transition duration-500 ">
                                        <div>
                                            <img className="w-full mb-6" src="http://beeimg.com/images/h26180623163.jpg" alt="" />
                                        </div>
                                        <div className="px-8 ">

                                            <div className="text-black font-medium text-2xl hover:text-gray-900 hover:cursor-pointer mb-3.5 leading-normal">SUMMER SALE UP TO 50%</div>
                                            <div className="text-black text-lg leading-7 font-light tracking-wide mb-3.5">For a limited time, save 20% off regular
                                                -price items with this Healthscape'... </div>
                                            <div className="text-gray-newstime font-light text-base leading-6 mb-14">10 Sep 2021 – 31 Oct 2021</div>
                                            <div className="mx-auto flex justify-center pb-7">
                                                <button className="text-white bg-green-shop leading-4  rounded-full px-8 py-1 hover:border-transparent">
                                                    <div className="py-2 font-normal text-lg">COPY CODE</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-auto container shadow-lg hover:shadow-xl transition duration-500 ">
                                        <div>
                                            <img className="w-full mb-6" src="http://beeimg.com/images/h26180623163.jpg" alt="" />
                                        </div>
                                        <div className="px-8 ">

                                            <div className="text-black font-medium text-2xl hover:text-gray-900 hover:cursor-pointer mb-3.5 leading-normal">SUMMER SALE UP TO 50%</div>
                                            <div className="text-black text-lg leading-7 font-light tracking-wide mb-3.5">For a limited time, save 20% off regular
                                                -price items with this Healthscape'... </div>
                                            <div className="text-gray-newstime font-light text-base leading-6 mb-14">10 Sep 2021 – 31 Oct 2021</div>
                                            <div className="mx-auto flex justify-center pb-7">
                                                <button className="text-white bg-green-shop leading-4  rounded-full px-8 py-1 hover:border-transparent">
                                                    <div className="py-2 font-normal text-lg">COPY CODE</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-auto container shadow-lg hover:shadow-xl transition duration-500 ">
                                        <div>
                                            <img className="w-full mb-6" src="http://beeimg.com/images/h26180623163.jpg" alt="" />
                                        </div>
                                        <div className="px-8 ">

                                            <div className="text-black font-medium text-2xl hover:text-gray-900 hover:cursor-pointer mb-3.5 leading-normal">SUMMER SALE UP TO 50%</div>
                                            <div className="text-black text-lg leading-7 font-light tracking-wide mb-3.5">For a limited time, save 20% off regular
                                                -price items with this Healthscape'... </div>
                                            <div className="text-gray-newstime font-light text-base leading-6 mb-14">10 Sep 2021 – 31 Oct 2021</div>
                                            <div className="mx-auto flex justify-center pb-7">
                                                <button className="text-white bg-green-shop leading-4  rounded-full px-8 py-1 hover:border-transparent">
                                                    <div className="py-2 font-normal text-lg">COPY CODE</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex flex-row gap-12 mb-16">
                                    <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-auto container shadow-lg hover:shadow-xl transition duration-500 ">
                                        <div>
                                            <img className="w-full mb-6" src="http://beeimg.com/images/h26180623163.jpg" alt="" />
                                        </div>
                                        <div className="px-8 ">

                                            <div className="text-black font-medium text-2xl hover:text-gray-900 hover:cursor-pointer mb-3.5 leading-normal">SUMMER SALE UP TO 50%</div>
                                            <div className="text-black text-lg leading-7 font-light tracking-wide mb-3.5">For a limited time, save 20% off regular
                                                -price items with this Healthscape'... </div>
                                            <div className="text-gray-newstime font-light text-base leading-6 mb-14">10 Sep 2021 – 31 Oct 2021</div>
                                            <div className="mx-auto flex justify-center pb-7">
                                                <button className="text-white bg-green-shop leading-4  rounded-full px-8 py-1 hover:border-transparent">
                                                    <div className="py-2 font-normal text-lg">COPY CODE</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-auto container shadow-lg hover:shadow-xl transition duration-500 ">
                                        <div>
                                            <img className="w-full mb-6" src="http://beeimg.com/images/h26180623163.jpg" alt="" />
                                        </div>
                                        <div className="px-8 ">

                                            <div className="text-black font-medium text-2xl hover:text-gray-900 hover:cursor-pointer mb-3.5 leading-normal">SUMMER SALE UP TO 50%</div>
                                            <div className="text-black text-lg leading-7 font-light tracking-wide mb-3.5">For a limited time, save 20% off regular
                                                -price items with this Healthscape'... </div>
                                            <div className="text-gray-newstime font-light text-base leading-6 mb-14">10 Sep 2021 – 31 Oct 2021</div>
                                            <div className="mx-auto flex justify-center pb-7">
                                                <button className="text-white bg-green-shop leading-4  rounded-full px-8 py-1 hover:border-transparent">
                                                    <div className="py-2 font-normal text-lg">COPY CODE</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-auto container shadow-lg hover:shadow-xl transition duration-500 ">
                                        <div>
                                            <img className="w-full mb-6" src="http://beeimg.com/images/h26180623163.jpg" alt="" />
                                        </div>
                                        <div className="px-8 ">

                                            <div className="text-black font-medium text-2xl hover:text-gray-900 hover:cursor-pointer mb-3.5 leading-normal">SUMMER SALE UP TO 50%</div>
                                            <div className="text-black text-lg leading-7 font-light tracking-wide mb-3.5">For a limited time, save 20% off regular
                                                -price items with this Healthscape'... </div>
                                            <div className="text-gray-newstime font-light text-base leading-6 mb-14">10 Sep 2021 – 31 Oct 2021</div>
                                            <div className="mx-auto flex justify-center pb-7">
                                                <button className="text-white bg-green-shop leading-4  rounded-full px-8 py-1 hover:border-transparent">
                                                    <div className="py-2 font-normal text-lg">COPY CODE</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Pagination */}
                                <div className="flex items-center justify-center space-x-3 pb-56">
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

                        </div>



                    </div>

                </div>
                {/* ----------section---------- */}








                {/* footer */}
            </div>
        </>
    )
}
