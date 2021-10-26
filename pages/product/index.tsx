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
import { BiBrain } from 'react-icons/bi';
// import Image from 'next/image';
// import LogoFooter from "../../images/quiz/bg-quiz.png";

export default function Product() {
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

                {/* ----------section---------- */}
                <div className="mt-20 ml-16">
                    <div className="flex flex-row">
                        <div className="text-xs text-gray-moreinfo font-light leading-3"><a href="/home">HOME</a></div>
                        <div className="px-1 text-gray-moreinfo text-xs font-light leading-3">/</div>
                        <div className=" text-xs text-black font-light leading-3">PRODUCTS</div>
                    </div>
                </div>
                <div className="mt-16 mb-48">
                    <div className="text-center text-4xl text-black font-medium mb-16">PRODUCTS</div>
                    <div className="flex justify-center items-center h-screen">
                        {/* https://tailwindcomponents.com/component/tabs-1 */}
                        <div x-data="setup()">
                            <ul className="flex justify-center items-center my-4">
                                <template x-for="(tab, index) in tabs" key="index">
                                    <li className="cursor-pointer py-2 px-4 text-gray-500 border-b-8"

                                        x-text="tab"></li>
                                </template>
                            </ul>

                            <div className="w-80 bg-white p-16 text-center mx-auto border">
                                <div x-show="activeTab===0">Content 1</div>
                                <div x-show="activeTab===1">Content 2</div>
                                <div x-show="activeTab===2">Content 3</div>
                                <div x-show="activeTab===3">Content 4</div>
                            </div>

                            <ul className="flex justify-center items-center my-4">
                                <template x-for="(tab, index) in tabs" key="index">
                                    <li className="cursor-pointer py-3 px-4 rounded transition"

                                        x-text="tab"></li>
                                </template>
                            </ul>

                            <div className="flex gap-4 justify-center border-t p-4">
                                <button
                                    className="py-2 px-4 border rounded-md border-blue-600 text-blue-600 cursor-pointer uppercase text-sm font-bold hover:bg-blue-500 hover:text-white hover:shadow"
                                    x-show="activeTab>0"
                                >Back</button>
                                <button
                                    className="py-2 px-4 border rounded-md border-blue-600 text-blue-600 cursor-pointer uppercase text-sm font-bold hover:bg-blue-500 hover:text-white hover:shadow"
                                    x-show="activeTab<tabs.length-1"
                                >Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------section---------- */}


                {/* ----------section---------- */}
                <div className="bg-gray-backgroundrec pb-56">
                    <div className="pt-36 text-center font-medium text-4xl leading-loose mb-16">BENEFITS</div>
                    {/* Section3 */}
                    <div className="flex flex-col md:flex-row mx-10 ">
                        {/* Space1 */}
                        <div className="flex flex-row w-full mb-4 md:mb-0 lg:mb-0 xl:mb-0">
                            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-4 ">

                                <div className="mx-auto mb-8">
                                    <FaHeartbeat className="h-16 w-16 mx-auto rounded-full border-2 border-black px-2 py-3" />
                                </div>
                                <div className="text-center text-xl font-normal leading-snug mb-6">
                                    Heart Health
                                </div>
                                <div className="text-center text-lg text-light leading-snug px-1">
                                    B Vitamins to help promote
                                    heart health
                                </div>
                            </div>

                            {/* Space2 */}
                            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2  px-4 ">

                                <div className="mx-auto mb-8">
                                    <FaBalanceScale className="h-16 w-16 mx-auto rounded-full border-2 border-black px-2 py-3" />
                                </div>
                                <div className="text-center text-xl font-normal leading-snug mb-6">
                                    Balance
                                </div>
                                <div className="text-center text-lg text-light leading-snug px-1">
                                    B Vitamins to help promote
                                    heart health
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full">
                            {/* Space3 */}
                            <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2  px-4 ">

                                <div className="mx-auto mb-8">
                                    <GiStomach className="h-16 w-16 mx-auto rounded-full border-2 border-black px-2 py-3" />
                                </div>
                                <div className="text-center text-xl font-normal leading-snug mb-6">
                                    Stomach
                                </div>
                                <div className="text-center text-lg text-light leading-snug px-1">
                                    B Vitamins to help promote
                                    heart health
                                </div>
                            </div>

                            {/* Space4 */}
                            <div className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2  px-4 ">

                                <div className="mx-auto mb-8">
                                    <BiBrain className="h-16 w-16 mx-auto rounded-full border-2 border-black px-2 py-3" />
                                </div>
                                <div className="text-center text-xl font-normal leading-snug mb-6">
                                    Brain
                                </div>
                                <div className="text-center text-lg text-light leading-snug px-1">
                                    B Vitamins to help promote
                                    heart health
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
