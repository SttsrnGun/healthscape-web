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
// import Image from 'next/image';
// import LogoFooter from "../../images/quiz/bg-quiz.png";

export default function Producdetail() {
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
                <div className="mt-20 ml-16 mb-32">
                    <div className="flex flex-row">
                        <div className="text-xs text-gray-moreinfo font-light leading-3"><a href="/home">HOME</a></div>
                        <div className="px-1 text-gray-moreinfo text-xs font-light leading-3">/</div>
                        <div className=" text-xs text-black font-light leading-3"><a href="product ">PRODUCTS</a></div>
                        <div className=" text-xs text-black font-light leading-3">/ SUPER ACTIVE</div>
                    </div>
                </div>

                {/* ----------section---------- */}
                <div className="mt-16 mb-48">
                    {/* Section1 */}
                    <div className="flex flex-col lg:flex-row  mt-28">
                        <div className="flex flex-col h-full w-full px-4 ">
                            <div className="ml-36 mb-12">
                                <img src="http://p2.cri.cn/M00/A8/C7/CqgNOl4UN1eAYzMJAAAAAAAAAAA175.733x558.jpg" alt="content" className="object-cover w-full h-full" />
                            </div>
                            <div className="ml-16 flex flex-row">
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQCisiC82m6epDrbkJaECLgw6jNpvBbuLbg&usqp=CAU" className="h-4/5 w-4/5 hidden lg:block" />
                                </div>
                                <div className="">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQCisiC82m6epDrbkJaECLgw6jNpvBbuLbg&usqp=CAU" className="h-4/5 w-4/5 hidden lg:block" />
                                </div>
                            </div>
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
                                <div className="text-left w-full flex flex-row mb-6">
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
                                <div className="italic text-red-600 text-lg font-medium leading-7"> ***Get 10% Off Purchase Over 20,000 THB </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------section---------- */}


                {/* ----------section---------- */}
                <div className="bg-gray-backgroundrec pb-36">
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

                {/* ----------section---------- */}
                <div className="relative mb-36">
                    <img className="object-cover w-full md:h-full lg:h-screen xl:h-screen" src="https://i.pinimg.com/originals/f5/25/6f/f5256f22b9dea5d4eb80c41f91f87793.jpg" />
                    <div className="absolute inset-0 flex flex-col justify-start md:justify-start lg:justify-center xl:justify-center ml-44">
                        <div className="w-full text-black text-7xl font-medium text-center md:text-center lg:text-left xl:text-left">ACTIVE SILVERS</div>
                        <div className="text-lg font-light text-black w-4/12 leading-7 mx-auto md:auto lg:mx-0 xl:mx-0 text-center">A Silver age who loves activities, explores the
                            world and challenges theirbody limits with sports and
                            embrace new experiences.</div>

                    </div>
                </div>
                {/* ----------section---------- */}

                {/* ----------section---------- */}
                <div className="mb-36">
                    <div className="mb-9">
                        <div className="text-center font-medium text-4xl leading-loose">30 INNOVATIVE INGREDIENT</div>
                        <div className="text-center font-medium text-4xl leading-loose">SUPPORT 20 FUNDAMENTAL PAIN POINTS</div>
                        <div className="text-center font-medium text-4xl leading-loose">OF SILVER AGE</div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center mb-10">
                        <div className="flex flex-row  justify-center w-full ">
                            <div><FaHeartbeat className="h-16 w-16 mx-6 my-2 md:mx-4 lg:mx-6 xl:mx-10 text-red-700" /></div>
                            <div><FaBalanceScale className="h-16 w-16 mx-6 my-2 md:mx-4 lg:mx-6 xl:mx-10 text-green-600" /></div>
                        </div>
                        <div className="flex flex-row w-full  justify-center">
                            <div><GiStomach className="h-16 w-16 mx-6 my-2 md:mx-4 lg:mx-6 xl:mx-10 text-gray-stomach" /></div>
                            <div><BiBrain className="h-16 w-16 mx-6 my-2 md:mx-4 lg:mx-6 xl:mx-10 text-gray-brain" /></div>
                        </div>
                        <div className="flex flex-row w-full  justify-center">
                            <div><GiNightSleep className="h-16 w-16 mx-6 my-2 md:mx-4 lg:mx-6 xl:mx-10 text-gray-moon" /></div>
                            <div><FaRegEye className="h-16 w-16 mx-6 my-2 md:mx-4 lg:mx-6 xl:mx-10 text-gray-eye" /></div>
                        </div>
                        <div className="flex flex-row w-full  justify-center">
                            <div><BiBone className="h-16 w-16 mx-6 my-2 md:mx-4 lg:mx-6 xl:mx-10 text-gray-bone" /></div>
                            <div><GiLips className="h-16 w-16 mx-6 my-2 md:mx-4 lg:mx-6 xl:mx-10 text-gray-lip" /></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-lg font-extralight leading-7 text-center">Enhance sleep, vision, cognition, flexibility, energy, long-range
                        </div>
                        <div className="text-lg font-extralight leading-7 text-center">health and more
                        </div>
                    </div>
                </div>
                {/* ----------section---------- */}

                {/* ----------section---------- */}
                <div className="relative mb-36">
                    <img className="object-cover w-full md:h-full lg:h-screen xl:h-screen" src="https://i.pinimg.com/originals/f5/25/6f/f5256f22b9dea5d4eb80c41f91f87793.jpg" />
                    <div className="absolute inset-0 flex flex-col justify-start md:justify-start lg:justify-center xl:justify-center ml-44">
                        <div className="w-full text-black text-4xl font-medium text-center md:text-center lg:text-left xl:text-left">ACTIVE DOSAGE INGREDIENT</div>
                        <div className="text-lg font-extralight text-black w-4/12 leading-7 mx-auto md:auto lg:mx-0 xl:mx-0 text-center">The optimal amount of ingredient dosage tha </div>
                        <div className="text-lg font-extralight text-black w-4/12 leading-7 mx-auto md:auto lg:mx-0 xl:mx-0 text-center"> effective with silver age pain points</div>

                    </div>
                </div>
                {/* ----------section---------- */}

                {/* ----------section---------- */}
                <div className="mb-40">
                    <div className="mb-16">
                        <div className="font-medium text-center text-4xl leading-loose mb-5">COFACTORS INGREDIENTS OPTIMAL PERFORMANCE</div>
                        <div className="font-extralight text-lg leading-relaxed text-center">A combination of active ingredients to enhance and</div>
                        <div className="font-extralight text-lg leading-relaxed text-center">bring about certain effect.</div>
                    </div>
                    <div className="flex flex-row mx-10 mb-12">
                        {/* Space1 */}
                        <div className="w-1/4  px-4 border-r-2 border-solid border-gray-200">
                            <div className="mx-auto">
                                <div className="h-32 w-32 text-center mx-auto rounded-full border-2 bg-gray-immunesystem border-gray-immunesystem pt-7 py-3 text-xl font-medium leading-8 text-white">IMMUNE SYSTEM</div>
                            </div>
                        </div>

                        {/* Space2 */}
                        <div className="w-1/4 px-4 border-r-2 border-solid border-gray-200">

                            <div className="mx-auto">
                                <div className="h-32 w-32 text-center mx-auto rounded-full border-2 bg-gray-bonejoint border-gray-bonejoint pt-7 py-3 text-xl font-medium leading-8 text-white">BONES & JOINTS</div>
                            </div>

                        </div>

                        {/* Space3 */}
                        <div className="w-1/4 px-4 border-r-2 border-solid border-gray-200">

                            <div className="mx-auto">
                                <div className="h-32 w-32 text-center mx-auto rounded-full border-2 bg-gray-muscle border-gray-muscle pt-11 py-3 text-xl font-medium leading-8 text-white">MUSCLE</div>
                            </div>

                        </div>

                        {/* Space4 */}
                        <div className="w-1/4 px-4">

                            <div className="mx-auto">
                                <div className="h-32 w-32 text-center mx-auto rounded-full border-2 bg-gray-skin border-gray-skin pt-11 py-3 text-xl font-medium leading-8 text-white">SKIN</div>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-row mx-10">
                        {/* Space1 */}
                        <div className="w-1/4  px-4 ">
                            <div className="mx-auto">
                                <div className="text-center font-light text-gray-immunesystem text-xl leading-8 ">
                                    Vitamin D3
                                </div>
                                <div className="text-center font-light text-gray-immunesystem text-xl leading-8 ">
                                    Megnesium Amino Acid
                                </div>
                                <div className="text-center font-light text-gray-immunesystem text-xl leading-8 ">
                                    Sun Theanine
                                </div>
                            </div>
                        </div>

                        {/* Space2 */}
                        <div className="w-1/4  px-4 ">
                            <div className="mx-auto">
                                <div className="text-center font-light text-gray-bonejoint text-xl leading-8 ">
                                    Omega 3
                                </div>
                                <div className="text-center font-light text-gray-bonejoint text-xl leading-8 ">
                                    Collagen Type ll
                                </div>
                                <div className="text-center font-light text-gray-bonejoint text-xl leading-8 ">
                                    Vitamin D3
                                </div>
                                <div className="text-center font-light text-gray-bonejoint text-xl leading-8 ">
                                    Vitamin K2
                                </div>
                            </div>
                        </div>

                        {/* Space3 */}
                        <div className="w-1/4  px-4 ">
                            <div className="mx-auto">
                                <div className="text-center font-light text-gray-muscle text-xl leading-8 ">
                                    Soy Protien Isolated
                                </div>
                                <div className="text-center font-light text-gray-muscle text-xl leading-8 ">
                                    HMO
                                </div>
                                <div className="text-center font-light text-gray-muscle text-xl leading-8 ">
                                    Amino Acid
                                </div>
                            </div>
                        </div>

                        {/* Space4 */}
                        <div className="w-1/4  px-4 ">
                            <div className="mx-auto">
                                <div className="text-center font-light text-gray-skin text-xl leading-8 ">
                                    Co Enzyme Q10
                                </div>
                                <div className="text-center font-light text-gray-skin text-xl leading-8 ">
                                    Avocado Oil
                                </div>
                                <div className="text-center font-light text-gray-skin text-xl leading-8 ">
                                    Billberry Extract
                                </div>
                                <div className="text-center font-light text-gray-skin text-xl leading-8 ">
                                    Collagen Type ll
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* ----------section---------- */}

                {/* ----------section---------- */}
                <div className="pt-32 bg-gray-productdetailchart mb-36">
                    <div className="mb-6">
                        <div className="font-medium text-4xl text-center">THE PROPORTION OF ACIVE INGREDIENT </div>
                        <div className="font-medium text-4xl text-center">THAT OPTIMAL WITH EACH LIFESTYLE </div>
                    </div>
                    <div className="mb-16">
                        <div className="text-lg text-center font-extralight leading-7">A combination of active ingredients to enhance and</div>
                        <div className="text-lg text-center font-extralight leading-7">bring about certain effect.</div>
                    </div>
                    <div className="mx-36 w-4/6 text-center  h-7 mb-24">MOCK Chart</div>
                    <div className="mx-36 w-4/6 text-center  h-7 mb-24">MOCK Chart</div>
                    <div className="mx-36 w-4/6 text-center  h-7 mb-24">MOCK Chart</div>
                    <div className="mx-36 w-4/6 text-center  h-7 mb-20">MOCK Chart</div>
                    <div className="flex flex-row">
                        <div className="h-1 mt-3 w-2/5 bg-gray-300 ml-36"></div>
                        <div className="text-center text-lg font-light leading-7 w-1/5">ACTIVE INGREDIENT</div>
                        <div className="h-1 mt-3 w-2/5 bg-gray-300 mr-36"></div>
                    </div>
                </div>
                {/* ----------section---------- */}

                {/* ----------section---------- */}
                <div className="relative mb-36">
                    <div className="">
                        <div className="flex flex-col gap-10  lg:flex-row  mt-8">
                            {/* Space1 */}
                            <div className="lg:w-1/3 w-full mx-auto my-auto">

                                <div className="text-gray-moreinfo  text-lg font-normal py-2">
                                    Testimonials
                                </div>
                                <div className=" text-4xl text-black font-medium py-1">
                                    CUSTOMERS STORIES
                                </div>
                                <div className="mt-4">
                                    <Icon icon="ci:double-quotes-l" color="#cacadf" width="58.26" height="57.91" />
                                </div>
                                <div className=" text-2xl font-extralight italic  w-full text-center text-black  mb-14">
                                    <div> The product not only tastes delicious,</div>

                                    <div>But it gives me 490% of my daily vitamin B12!</div>
                                    <div>Now I start my mornings on a more enthusiastic note</div>
                                    <div>and it gives me an extra boost to get going.</div>
                                </div>
                                <div className="text-lg  text-center lg:w-full  text-black font-normal">
                                    Jessica Chastain
                                </div>
                                <div>
                                    <Icon icon="ci:double-quotes-l" className="ml-auto" color="#cacadf" width="58.26" height="57.91" hFlip={true} vFlip={true} />
                                </div>

                            </div>

                            {/* Space2 */}


                            <div className="lg:w-1/2 w-full  lg:mt-0">
                                <div className=" w-full  px-auto">
                                    <img
                                        src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection7%2Fcustomers-stories.6cee8db7b8fdaff838c7846011b6bd1f.png&w=1920&q=75"
                                        alt="Content1" className="object-cover mx-auto w-auto max-h-full" />
                                    {/* <Image
                                src={Section1}
                                alt="Content1" className="object-cover w-full h-auto" /> */}
                                </div>
                            </div>




                        </div>


                    </div>
                </div>
                {/* ----------section---------- */}

                {/* ----------section---------- */}
                <div>
                    <div className="mb-16">
                        <div className="font-medium text-4xl ml-14 leading-6">REVIEW BY 308 CUSTOMERS</div>
                    </div>
                    <div className="ml-28">
                        <div className="flex flex-col lg:flex-row items-center py-8">
                            <div className="flex  px-4">
                                <img src="data:image/jpeg;base64,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" alt="content" className="object-cover " />
                            </div>
                            <div className="lg:w-full w-full mt-4 lg:mt-0 items-center">

                                <div className="ml-44">
                                    <div className="text-5xl font-medium">4.7</div>
                                    <div className="flex flex-col md:flex-row">
                                        <img src="https://senselesscrutiny.files.wordpress.com/2015/06/3-of-5-stars.png" className="h-4" />
                                        <div className="text-xs font-light text-gray-newstime ml-3">(1345 REVIEWS)</div>
                                        <div className="mt-7 md:-mt-10 md:ml-auto md:mr-16"><button className="text-white bg-green-shop leading-4  md:mr-0  rounded-full px-6 py-1 hover:border-transparent ">
                                            <div className="py-2 font-normal text-lg">WRITE A REVIEW</div>
                                        </button></div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="h-0.5 mt-3 w-4/5 bg-gray-300 ml-36"></div>
                        <div className="h-0.5 mt-3 w-4/5 bg-gray-300 mr-36"></div>
                    </div>
                </div>
                {/* ----------section---------- */}



                {/* footer */}
            </div>
        </>
    )
}
