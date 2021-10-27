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
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { BsLine } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

// import Image from 'next/image';
// import LogoFooter from "../../images/quiz/bg-quiz.png";

export default function Newsdetail() {
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

                <div className="relative mb-36 h-2/6">
                    <img className="object-cover w-full h-2/6" src="data:image/jpeg;base64,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" />
                    <div className="absolute top-20 left-16  ">
                        <div className="flex flex-row">
                            <div className="text-xs text-black font-light leading-3"><a href="/home">HOME</a></div>
                            <div className="px-1 text-black text-xs font-light leading-3">/</div>
                            <div className="text-xs text-black font-light leading-3"><a href="/home">BLOG</a></div>
                            <div className="px-1 text-white text-xs font-light leading-3">/</div>
                            <div className=" text-xs text-white font-light leading-3">DIFFERENT TYPES OF PROTEIN POWDER & HOW TO USE IT</div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="mb-7">
                        <div className="text-center text-green-shop font-normal text-4xl leading-loose">
                            Protein Shake Recipe: Homemade Sattu
                        </div>
                        <div className="text-center text-green-shop font-normal text-4xl leading-loose">
                            Shake To Fuel Up Your Protein Intake
                        </div>
                    </div>
                    <div className="flex flex-row mb-20">
                        <div className="h-0.5 mt-3 w-4/5 bg-gray-300 "></div>
                        <div className="h-0.5 mt-3 w-4/5 bg-gray-300 "></div>
                    </div>
                </div>
                {/* ----------section---------- */}
                <div className="container mx-auto pb-56">
                    <div className="mb-16">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row">
                                <AiOutlineCalendar className="mr-2 w-6 h-6" />
                                <div className="font-light text-base leading-6">September 20, 2021</div>
                            </div>
                            <div className="flex flex-row ">
                                <BsFacebook className=" text-gray-moreinfo w-6 h-6 mx-2" />
                                <BsInstagram className=" text-gray-moreinfo w-6 h-6 mx-2" />
                                <BsLine className=" text-gray-moreinfo w-6 h-6 mx-2" />
                            </div>
                        </div>
                    </div>
                    <div className="text-lg font-extralight leading-loose mb-7">
                        The more inexpensive and effective equivalent of most protein powders, Sattu protein shake is a fantastic way to level up your protein.
                        Protein-rich flour made from powdered chana, Sattu is one of the most indigenous protein sources of India. First restricted to only a few states, Sattu is now in almost every grocery store. Sattu recently joined the list of superfoods and for good reason! It is the perfect ingredient to amp up your protein intake without breaking your bank. If budget-friendly protein options are what you're looking for, then Sattu is your holy grail. It is a powerhouse of nutrients and will energise you for a longer period of time.
                    </div>
                    <div className="mb-16">
                        <div className="text-2xl font-normal leading-loose mb-1.5"> Why Should You Be Consuming Sattu</div>
                        <div className="text-lg font-extralight leading-loose mb-7">
                            Sattu is high in fibre and, hence, packed with essential nutrients. It provides relief in summers by acting as a cooling agent and protecting us from heatstroke. It is high in fibre, and aids in digestion and maintaining cholesterol, but most importantly, for every 100 grams of Sattu, you will get a least 20 grams of protein. A high protein count means it will keep you full for a longer time so that you binge less on other fattening foods -- ultimately, helps in weight management. In short, this superfood is a gut-friendly, nutritious and protein-rich way to replenish your body and is quite helpful in weight loss.
                        </div>
                    </div>
                    <div className="mb-16">
                        <div className="flex flex-row gap-x-8 justify-center">
                            <div>
                                <img src="https://i.imgur.com/lsx73Jg.jpg" />
                            </div>
                            <div>
                                <img src="https://i.imgur.com/lsx73Jg.jpg" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-normal leading-loose mb-1.5"> Sattu Shake Recipe</div>
                        <div className="text-lg font-extralight leading-loose">
                            You can have this healthy drink any time in the day on an empty stomach. Make sure you consume it in a thin consistency so as not to upset your digestion due to its heavy ingredients. Sattu shake is extremely easy to make and is absolutely delicious. You can drink it on a daily basis to moderate your protein intake, after workouts to energise yourself and during summers to cool your body heat down. You can of course add it to your weight loss diet for better results.
                        </div>
                    </div>
                </div>
                {/* ----------section---------- */}

                








                {/* footer */}
            </div>
        </>
    )
}
