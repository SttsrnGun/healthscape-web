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
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row mb-12">

                        <div className="flex flex-row justify-center  md:justify-end w-full ">
                            {/* Space1 */}
                            <div className="w-1/4  px-4 border-r-2 border-solid border-gray-200 mx-4">

                                <div className="flex flex-col">
                                    <div className="mx-auto mb-12">
                                        <div className="h-32 w-32 text-center mx-auto rounded-full border-2 bg-gray-immunesystem border-gray-immunesystem pt-7 py-3 text-xl font-medium leading-8 text-white">IMMUNE SYSTEM</div>
                                    </div>
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
                            </div>

                            {/* Space2 */}
                            <div className="w-1/4  px-4 border-r-2 border-solid border-gray-200 mx-4">
                                <div className="flex flex-col">
                                    <div className="mx-auto mb-12">
                                        <div className="h-32 w-32 text-center mx-auto rounded-full border-2 bg-gray-bonejoint border-gray-bonejoint pt-7 py-3 text-xl font-medium leading-8 text-white">BONES & JOINTS</div>
                                    </div>
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
                            </div>
                        </div>
                        <div className="flex flex-row  justify-center mt-8 md:mt-0 md:justify-start w-full ">
                            {/* Space3 */}
                            <div className="w-1/4  px-4 border-r-2 border-solid border-gray-200 mx-4">
                                <div className="flex flex-col">
                                    <div className="mx-auto mb-12">
                                        <div className="h-32 w-32 text-center mx-auto rounded-full border-2 bg-gray-muscle border-gray-muscle pt-11 py-3 text-xl font-medium leading-8 text-white">MUSCLE</div>
                                    </div>
                                    <div className="mx-auto">
                                        <div className="text-center font-light text-gray-muscle text-xl leading-8 ">
                                            Soy protien Isolated
                                        </div>
                                        <div className="text-center font-light text-gray-muscle text-xl leading-8 ">
                                            HMO
                                        </div>
                                        <div className="text-center font-light text-gray-muscle text-xl leading-8 ">
                                            Amino Acid
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Space4 */}
                            <div className="w-1/4  px-4  mx-4">
                                <div className="flex flex-col">
                                    <div className="mx-auto mb-12">
                                        <div className="h-32 w-32 text-center mx-auto rounded-full border-2 bg-gray-skin border-gray-skin pt-11 py-3 text-xl font-medium leading-8 text-white">SKIN</div>
                                    </div>
                                    <div className="mx-auto">
                                        <div className="text-center font-light text-gray-skin text-xl leading-8 ">
                                            Co Enzyme Q10
                                        </div>
                                        <div className="text-center font-light text-gray-skin text-xl leading-8 ">
                                            Avocado Oil
                                        </div>
                                        <div className="text-center font-light text-gray-skin text-xl leading-8 ">
                                            Bilberry Extract
                                        </div>
                                        <div className="text-center font-light text-gray-skin text-xl leading-8 ">
                                            Collagen Type ll
                                        </div>
                                    </div>
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
                <div className="mb-11">
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

                {/* ----------section---------- */}
                <div className="mb-20">
                    <div className="flex flex-col md:flex-row  py-8">
                        <div className="w-full md:w-1/3 px-4 mx-auto md:mx-0">
                            <div className="ml-3 md:ml-3">
                                <div className=" text-left md:text-center text-lg font-normal leading-6  mb-2">Jenny</div>
                                <img src="https://senselesscrutiny.files.wordpress.com/2015/06/3-of-5-stars.png" className="h-4 md:mx-auto mb-2" />
                            </div>
                            <div className="text-gray-newstime text-right md:text-center font-extralight text-lg leading-5 -mt-14 mb-14 md:mb-0 md:-mt-0">8 August 2021</div>
                        </div>
                        <div className="md:w-full w-full mx-7 md:mx-0 md:mt-0">

                            <div className=" text-lg leading-7 mb-1 font-normal ">
                                Super Active Product
                            </div>
                            <div className=" text-lg  w-4/5  text-black font-extralight leading-7 ">
                                This moisturiser is fabulous great for rebalancing the skin. I use it not as my main moisturiser but as straight after I wash my face then follow with a serum and another moisturiser with spf that way it acts like a sponge.If using with a serum and just as a moisturiser on its own apply the serum first or you can just use it on its own as it is totally good enough to do that.
                            </div>



                        </div>
                    </div>
                </div>
                {/* ----------section---------- */}
                <div className="flex flex-row mb-20">
                    <div className="h-0.5 mt-3 w-4/5 bg-gray-300 ml-36"></div>
                    <div className="h-0.5 mt-3 w-4/5 bg-gray-300 mr-36"></div>
                </div>

                {/* ----------section---------- */}
                <div className="mb-20">
                    <div className="flex flex-col md:flex-row  py-8">
                        <div className="w-full md:w-1/3 px-4 mx-auto md:mx-0">
                            <div className="ml-3 md:ml-3">
                                <div className=" text-left md:text-center text-lg font-normal leading-6  mb-2">Jenny</div>
                                <img src="https://senselesscrutiny.files.wordpress.com/2015/06/3-of-5-stars.png" className="h-4 md:mx-auto mb-2" />
                            </div>
                            <div className="text-gray-newstime text-right md:text-center font-extralight text-lg leading-5 -mt-14 mb-14 md:mb-0 md:-mt-0">8 August 2021</div>
                        </div>
                        <div className="md:w-full w-full mx-7 md:mx-0 md:mt-0">

                            <div className=" text-lg leading-7 mb-1 font-normal ">
                                Super Active Product
                            </div>
                            <div className=" text-lg  w-4/5  text-black font-extralight leading-7 ">
                                This moisturiser is fabulous great for rebalancing the skin. I use it not as my main moisturiser but as straight after I wash my face then follow with a serum and another moisturiser with spf that way it acts like a sponge.If using with a serum and just as a moisturiser on its own apply the serum first or you can just use it on its own as it is totally good enough to do that.
                            </div>



                        </div>
                    </div>
                </div>
                {/* ----------section---------- */}
                <div className="flex flex-row mb-20">
                    <div className="h-0.5 mt-3 w-4/5 bg-gray-300 ml-36"></div>
                    <div className="h-0.5 mt-3 w-4/5 bg-gray-300 mr-36"></div>
                </div>

                {/* ----------section---------- */}
                <div className="mb-20">
                    <div className="flex flex-col md:flex-row  py-8">
                        <div className="w-full md:w-1/3 px-4 mx-auto md:mx-0">
                            <div className="ml-3 md:ml-3">
                                <div className=" text-left md:text-center text-lg font-normal leading-6  mb-2">Jenny</div>
                                <img src="https://senselesscrutiny.files.wordpress.com/2015/06/3-of-5-stars.png" className="h-4 md:mx-auto mb-2" />
                            </div>
                            <div className="text-gray-newstime text-right md:text-center font-extralight text-lg leading-5 -mt-14 mb-14 md:mb-0 md:-mt-0">8 August 2021</div>
                        </div>
                        <div className="md:w-full w-full mx-7 md:mx-0 md:mt-0">

                            <div className=" text-lg leading-7 mb-1 font-normal ">
                                Super Active Product
                            </div>
                            <div className=" text-lg  w-4/5  text-black font-extralight leading-7 ">
                                This moisturiser is fabulous great for rebalancing the skin. I use it not as my main moisturiser but as straight after I wash my face then follow with a serum and another moisturiser with spf that way it acts like a sponge.If using with a serum and just as a moisturiser on its own apply the serum first or you can just use it on its own as it is totally good enough to do that.
                            </div>



                        </div>
                    </div>
                </div>
                {/* ----------section---------- */}
                <div className="flex flex-row mb-20">
                    <div className="h-0.5 mt-3 w-4/5 bg-gray-300 ml-36"></div>
                    <div className="h-0.5 mt-3 w-4/5 bg-gray-300 mr-36"></div>
                </div>

                <div className="mb-36">
                    <button className="text-white bg-green-shop leading-4 rounded-full px-12 py-1 mx-auto flex justify-center hover:border-transparent ">
                        <div className="py-2 font-normal text-lg">READ ALL REVIEWS</div>
                    </button>
                </div>

                {/* ----------section---------- */}
                <div className="mb-36">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 ml-16 flex flex-col">
                            <div className="text-gray-moreinfo text-center md:text-left  text-lg font-normal py-2">
                                Product
                            </div>
                            <div className=" text-4xl text-black text-center md:text-left font-medium ">
                                RELATED
                            </div>
                            <div className=" text-4xl text-black text-center md:text-left font-medium ">
                                PRODUCTS
                            </div>
                            <button className="text-white hidden md:block  bg-green-shop leading-4 rounded-full px-12 py-1 mx-auto ml-0 hover:border-transparent mt-auto  items-end">
                                <div className="py-2 font-normal md:text-base ld:text-lg">VIEW ALL PRODUCTS</div>
                            </button>
                        </div>
                        <div className="flex flex-row mx-auto mt-7 md:mt-0 md:mx-4 lg:mx-0">
                            <div className="lg:w-2/5 w-full bg-gray-relatedproduct mr-8">
                                <div className=" relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg pb-7">
                                    <img className=" px-14 mb-7 mt-16 w-full" src="data:image/jpeg;base64,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" alt="" />
                                    <div className="ml-7">
                                        <div className="text-green-shop text-2xl font-medium leading-loose ">PASSIVE</div>
                                        <div className="flex flex-row mb-3">
                                            <img src="https://senselesscrutiny.files.wordpress.com/2015/06/3-of-5-stars.png" className="h-4 mb-2 mr-4" />
                                            <div className="text-xs font-light text-gray-newstime ">(1345 REVIEWS)</div>
                                        </div>
                                        <div className="font-extralight text-sm leading-5 mb-1.5">
                                            <div>The best of creative and modern</div>
                                            <div>  innovation. Multivitamin is...</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="flex flex-col">
                                                <div className="line-through text-sm font-light leading-6 text-gray-newstime mb-1">3,100 THB</div>
                                                <div className="text-black text-lg leading-6 font-medium">2,790 THB</div>
                                            </div>
                                            <div className="mr-6">
                                                <button>
                                                    <BsHandbag className="h-12 w-12 mx-auto rounded-full border-2 text-white bg-gray-moreinfo border-gray-moreinfo px-1 py-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="lg:w-2/5 w-full hidden md:block bg-gray-relatedproduct mr-8">
                                <div className=" relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg pb-7">
                                    <img className=" px-14 mb-7 mt-16 w-full" src="https://hoonsmart.com/wp-content/uploads/2018/07/TTW-252x182.png" alt="" />
                                    <div className="ml-7">
                                        <div className="text-green-shop text-2xl font-medium leading-loose ">PASSIVE</div>
                                        <div className="flex flex-row mb-3">
                                            <img src="https://senselesscrutiny.files.wordpress.com/2015/06/3-of-5-stars.png" className="h-4 mb-2 mr-4" />
                                            <div className="text-xs font-light text-gray-newstime ">(1345 REVIEWS)</div>
                                        </div>
                                        <div className="font-extralight text-sm leading-5 mb-1.5">
                                            <div>The best of creative and modern</div>
                                            <div>  innovation. Multivitamin is...</div>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <div className="flex flex-col">
                                                <div className="line-through text-sm font-light leading-6 text-gray-newstime mb-1">3,100 THB</div>
                                                <div className="text-black text-lg leading-6 font-medium">2,790 THB</div>
                                            </div>
                                            <div className="mr-6">
                                                <button>
                                                    <BsHandbag className="h-12 w-12 mx-auto rounded-full border-2 text-white bg-gray-moreinfo border-gray-moreinfo px-1 py-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="mx-auto mt-9 md:mt-0">
                            <button className="text-white block md:hidden  bg-green-shop leading-4 rounded-full px-12 py-1 mx-auto ml-0 hover:border-transparent mt-auto  items-end">
                                <div className="py-2 font-normal text-lg">VIEW ALL PRODUCT</div>
                            </button>
                        </div>
                    </div>
                </div>
                {/* ----------section---------- */}

                {/* ----------section---------- */}
                <div>
                    <div className="flex flex-col md:flex-row">
                        <div className="items-center flex">
                            <div className=" font-medium leading-loose text-4xl text-center xl:w-7/12">FIND THE RIGHT SUPPLEMENTS FOR YOUR UNIQUE NEED.</div>
                        </div>
                <div className="py-10 bg-white flex justify-center md ">
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard phone-1 bg-white py-24">
                  <img
                    className=" mx-auto"
                    src="https://techstar-production.s3.amazonaws.com/employer/8a2ce96b-cc7e-4305-a7bd-8c522d432329_11.jpg"
                    alt="Peoplescape"
                  />
                  <div className="text-blue-homephone text-lg font-medium text-center pt-10 my-2">YOUR JOURNEY</div>
                  <div className="text-blue-homephone text-lg font-medium text-center pb-3">TO HEALTH STARTS HERE.</div>
                  <div>
                    <button className="text-white mx-auto bg-gray-moreinfo text-sm flex justify-center my-9  leading-4  rounded-full px-8 py-4 hover:border-transparent ">
                      <div className="py-2 font-medium text-lg"><a href="/quiz">TAKE A QUIZ</a></div></button>
                  </div>
                  <div className="py-2 text-black text-base font-extralight text-center">
                    <div>vitamins, protein,</div>
                    <div>and now collagen too,</div>
                    <div>personalized just for you.</div>
                  </div>
                </div>
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
