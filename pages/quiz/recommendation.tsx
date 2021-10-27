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

export default function Quiz() {
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
                <div className="mt-36 mb-48">
                    <div className="text-center text-4xl text-black font-medium">RECOMMENDATION</div>
                    {/* Section1 */}
                    <div className="flex flex-col lg:flex-row  mt-28">
                        <div className="flex  w-full px-4">
                            <img src="http://p2.cri.cn/M00/A8/C7/CqgNOl4UN1eAYzMJAAAAAAAAAAA175.733x558.jpg" alt="content" className="object-cover w-full h-full" />
                        </div>
                        <div className="lg:w-full w-full">
                            <div className="flex flex-row px-4 mb-4 w-4/5">
                                <div className=" font-medium text-5xl pl-5  mb-2 ">
                                    SUPER ACTIVE
                                </div>
                                <div className="flex flex-row justify-end ml-auto">
                                    <button onClick={toggle}><AiOutlineHeart className="text-4xl" /></button>
                                    {/*The bottom code should toggle on and off when the button is pressed*/}
                                    <div style={{
                                        display: showMe ? "block" : "none"
                                    }}>
                                        <AiFillHeart className="text-4xl text-pink-favorite" />
                                    </div>
                                </div>
                            </div>
                            {/* https://www.npmjs.com/package/react-rating-stars-component */}
                            <div className="ml-10 flex flex-row mb-4">
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                /><span className="ml-3 mt-2 text-base font-light text-gray-newstime leading-5">(1345 REVIEWS)</span>
                            </div>
                            <div className=" text-lg  w-full font-normal  text-black leading-6 pl-10 mb-4">
                                The Ultimate Beginner ( 10 Sachets)
                            </div>
                            <div className=" text-lg  w-4/5 font-extralight  text-black leading-6 pl-10 mb-6 ">
                                Our clinically proven two-step healthy ageing supplements work around-the-clock to nourish health and sustain youth, giving you the energy and freedom to focus on the things you love.
                            </div>
                            <div className="pl-10 mb-6">
                                <div className="underline font-normal text-lg text-black leading-6 mb-2"><a href="#">+ INGREDIENTS</a></div>
                                <div className="underline font-normal text-lg text-black leading-6 mb-2"><a href="#">+ KEY NUTRITIONALS</a></div>
                                <div className="underline font-normal text-lg text-black leading-6"><a href="#">+ USAGE</a></div>
                            </div>
                            <div className="pl-10 mb-4">
                                <div className="text-lg text-extralight leading-6 text-black mb-2">Flavor:</div>

                                <div className="flex flex-row justify-start ">
                                    <div className="flex flex-col mr-8">
                                        <div className="border-4 border-gray-moreinfo">
                                            <label className="inline-flex items-center bg-gray-moreinfo">
                                                <input type="checkbox" className="form-checkbox h-6 w-6 p-4 mr-2 bg-gray-moreinfo" /><span className="p-2 bg-white text-black text-lg font-normal">STRAWBERRY</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="border-4 border-gray-moreinfo">
                                            <label className="inline-flex items-center bg-gray-moreinfo">
                                                <input type="checkbox" className="form-checkbox h-6 w-6 p-4 mr-2 bg-gray-moreinfo" /><span className="p-2 bg-white text-black text-lg font-extralight">CHOCOLATE</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="pl-10 mb-6">
                                <div className="text-lg text-extralight leading-6 text-black mb-2">SIZE:</div>

                                <div className="flex flex-row justify-start ">
                                    <div className="flex flex-col mr-8">
                                        <div className="border-4 border-gray-moreinfo">
                                            <label className="inline-flex items-center bg-gray-moreinfo">
                                                <input type="checkbox" className="form-checkbox h-6 w-6 p-4 mr-2 bg-gray-moreinfo" /><span className="p-2 bg-white text-black text-lg font-normal">500g.</span>
                                            </label>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="pl-10 mb-4">
                                <div className="font-normal text-4xl text-black leading-loose">2,700 THB</div>
                            </div>
                            <div className="pl-10">
                                <div className="text-left w-full flex flex-row">
                                    <div>
                                        <select className="form-select block w-full py-2 px-10 border-2 border-gray-400">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>
                                    </div>
                                    <div>
                                        <button className="text-white bg-green-shop leading-4  rounded-full px-12 py-1 ml-16 hover:border-transparent ">
                                            <div className="py-2 font-normal text-lg">ADD TO CART</div>
                                        </button>
                                    </div>
                                </div>
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
