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

export default function Science() {
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
                        <div className=" text-xs text-black font-light leading-3">SCIENCE</div>
                    </div>
                </div>

                <div className="mb-32">
                    <div className="text-center text-green-shop font-medium text-4xl leading-loose">
                        SCIENCE
                    </div>
                </div>

                {/* ----------section---------- */}
                <div className="flex flex-col-reverse lg:flex-row mb-36">

                    <div className="lg:w-full w-full mt-4 lg:mt-0 px-40">
                        <div className="mb-6">
                            <div className="font-medium text-4xl text-black leading-loose">
                                TECHNOLOGY
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="font-extralight text-lg text-black leading-relaxed">
                                WE was born out of years of research into the causes of ageing which is a result of multiple processes that simultaneously tip the balance between damage and repair.
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="font-extralight text-lg text-black leading-relaxed">
                                As you grow older, the body accumulates damage that can lead to inefficiencies and degeneration.
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="font-extralight text-lg text-black leading-relaxed">
                                Your body starts losing efficiency in your 20’s, and stress, environmental toxins and a reliance on caffeine and sugar speed up the process and diminish your reserve of essential nutrients. While you welcome the wisdom and confidence age brings, the less-than-supple skin, fatigue and lack of balance are unwanted distractions.
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="font-extralight text-lg text-black leading-relaxed">
                                Our comprehensive supplements naturally stimulate the body’s defences that decline as you age, repairing, restoring and sustaining youthfulness at a cellular level, resulting in multiple benefits.
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="font-extralight text-lg text-black leading-relaxed">
                                Lumity supplements improve; skin, hair and nails; tiredness & energy; brain health & focus; immunity; stronger bones, muscles, joints and teeth; plus enhanced quality of life.
                            </div>
                        </div>



                    </div>
                    <div className="flex  w-full px-20 lg:px-0 ">
                        <img src="https://images.squarespace-cdn.com/content/v1/55693d60e4b06d83cf793431/1572011217553-5ZHDIVJ56MUKT57S1DOG/5c881f5f54b42c20a58fb824_K_Smetters+704x704.jpg?format=1000w " alt="content" className="object-cover w-full ml-20 lg:ml-0 h-auto" />
                    </div>
                </div>
                {/* ----------section---------- */}


                {/* ----------section---------- */}
                <div className="flex flex-col lg:flex-row mb-36">


                    <div className="flex  w-full px-20 lg:px-0">
                        <img src="https://images.squarespace-cdn.com/content/v1/55693d60e4b06d83cf793431/1572011217553-5ZHDIVJ56MUKT57S1DOG/5c881f5f54b42c20a58fb824_K_Smetters+704x704.jpg?format=1000w " alt="content" className="object-cover w-full ml-20 lg:ml-0 h-auto" />
                    </div>
                    <div className="lg:w-full w-full mt-4 lg:mt-0 px-40">
                        <div className="mb-6">
                            <div className="font-medium text-4xl text-black leading-loose">
                                CLINICAL STUDY
                            </div>
                        </div>
                        <div className="mb-6">
                            <div className="font-extralight text-lg text-black leading-relaxed">
                                A clinical study involves research using human volunteers (also called participants) that is intended to add to medical knowledge. There are two main types of clinical studies: clinical trials (also called interventional studies) and observational studies. ClinicalTrials.gov includes both interventional and observational studies.
                            </div>
                        </div>
                        <div >
                            <div className="font-extralight text-lg text-black leading-relaxed">
                                Clinical Trials
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="font-extralight text-lg text-black leading-relaxed">
                                In a clinical trial, participants receive specific interventions according to the research plan or protocol created by the investigators. These interventions may be medical products, such as drugs or devices; procedures; or changes to participants' behavior, such as diet. Clinical trials may compare a new medical approach to a standard one that is already available, to a placebo that contains no active ingredients, or to no intervention. Some clinical trials compare interventions that are already available to each other. When a new product or approach is being studied, it is not usually known whether it will be helpful, harmful, or no different than available alternatives (including no intervention). The investigators try to determine the safety and efficacy of the intervention by measuring certain outcomes in the participants.
                            </div>
                        </div>




                    </div>
                </div>
                {/* ----------section---------- */}

                {/* ----------section---------- */}
                <div className="mb-36">
                    <div className="mt-36 mb-11">
                        <div className="text-green-shop text-4xl text-center font-medium leading-loose">AWARDS</div>
                    </div>
                    <div className="flex justify-center mb-8">
                        <img src="https://lh3.googleusercontent.com/proxy/7sUWpLyVetwUDvgnpYUkpJxdiO3HGX2yhuxraDxV7UBJIus8ia7xbR312MyST1qn4IbbIn8rQXThyy6RMMIG6Ww3Ck-9Hj5nxfKgbk6MrqTc8rZSN3aot1Ljzu6jaMKqsUK4YLHWd0a_WWCi6g" />
                    </div>
                    <div className="pb-52">
                        <div className="text-2xl text-center italic font-extralight leading-loose">
                            “ Delicious living supplement Awards “
                        </div>
                        <div className="text-2xl text-center italic font-extralight leading-loose">
                            2021
                        </div>
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


               



                {/* footer */}
            </div>
        </>
    )
}
