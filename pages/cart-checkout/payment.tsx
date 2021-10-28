// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Slider from '../../components/Slider/Slider';
// import Header from '../../components/Layout/Header/Header';
import Banner from "../../../images/banner/inner-banner.jpg";
import { Icon } from '@iconify/react';
import LogoFooter from "../../../images/logo/logosec.png";
import { BsHandbag } from 'react-icons/bs';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export default function Payment() {
    return (

        <div>

            <title>HEALTHSCAPE - HORD Consulting &amp; Services</title>

            <div className="mt-20 ml-16 mb-11">
                <div className="flex flex-row">
                    <div className="text-xs text-gray-moreinfo font-light leading-3"><a href="/home">HOME</a></div>
                    <div className="px-1 text-gray-moreinfo text-xs font-light leading-3"> / </div>
                    <div className=" text-xs text-black font-light leading-3"><a href="product">PRODUCTS</a></div>
                    <div className=" text-xs text-black font-light leading-3"> /</div>
                    <div className=" text-xs text-black font-light leading-3">CHECK OUT DETAILS</div>
                </div>
            </div>

            <div className="mb-28 ml-16">
                <div className="text-green-shop font-medium text-center text-4xl leading-loose">
                    PAYMENT
                </div>
            </div>


            <div>
                {/* Section1 */}
                <div className="flex flex-col lg:flex-row container mx-auto mb-16 lg:mb-36">
                    {/* div colซ้าย */}
                    <div className="mr-9 w-full lg:w-full mb-10 lg:mb-0">
                        <div className="leading-loose text-2xl font-normal mb-8">SHIPPING ADDRESS</div>
                        <form action="">
                            <div>
                                <div className="flex flex-col mb-10">
                                    <label className="text-lg font-light black ml-2 block italic">
                                        Jessica Chastain
                                    </label>
                                    <label className="text-lg font-light black ml-2 block italic">
                                        123/456 Rama IV Road Lumphini, Pathum Wan
                                    </label>
                                    <label className="text-lg font-light black ml-2 block italic">
                                        Bangkok, 10330 Thailand
                                    </label>
                                </div>

                                <div className="mb-12">
                                    <div className="leading-loose text-2xl font-normal mb-7">SHIPPING METHOD</div>
                                    <div className="text-lg font-light leading-loose">standard shipping ( 100 THB )</div>
                                </div>

                                <div className="mb-10">
                                    <div className="leading-loose text-2xl font-normal mb-7">PAYMENT METHOD</div>
                                    <div className="text-lg font-light leading-loose">Credit Card</div>
                                </div>
                                <div className="mb-4">
                                    <div className="text-lg font-normal leading-7"><a>Edit</a></div>
                                </div>
                                <div className="flex flex-row mb-11">
                                    <div className="h-0.5 mt-3 w-full bg-gray-300 "></div>
                                    <div className="h-0.5 mt-3 w-full bg-gray-300 "></div>
                                </div>

                                <div className="mr-9 w-full  mb-10 lg:mb-0">
                                    <div className="ml-16 leading-loose text-2xl font-normal mb-14">PRODUCT</div>
                                    <div className="flex flex-row">
                                        <div className="mr-8"><img src="https://www.tuningblog.eu/wp-content/uploads/2020/01/Mercedes-AMG-GT-R-Coupe-C190-Hypaero-Tuning-2-190x139.jpg" /> </div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-row">
                                                <div className="flex flex-col mr-56">
                                                    <div className="text-lg font-extralight leading-relaxed">SUPER ACTIVE</div>
                                                    <div className="text-lg font-extralight leading-relaxed">THE ULTIMATE BEGINNER</div>
                                                    <div className="text-lg font-extralight leading-relaxed mb-4">( 10 SACHETS)</div>
                                                </div>
                                                <div><a><AiOutlineClose /></a></div>
                                            </div>
                                            <div className="flex flex-row mb-8 justify-between">
                                                <div className="text-xl font-normal leading-loose">2,700.00 THB</div>
                                                <div className="text-xl font-normal leading-loose">5,400.00 THB</div>
                                            </div>
                                            <div className="mb-7">
                                                <select className="form-select block w-2/6 py-2 px-10 border-2 border-gray-400">

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
                                        </div>
                                    </div>
                                    <div className="flex flex-row mb-9">
                                        <div className="h-0.5 mt-3 w-full bg-gray-300 "></div>
                                        <div className="h-0.5 mt-3 w-full bg-gray-300 "></div>
                                    </div>

                                    <div className="flex flex-row">
                                        <div className="mr-8"><img src="https://www.tuningblog.eu/wp-content/uploads/2020/01/Mercedes-AMG-GT-R-Coupe-C190-Hypaero-Tuning-2-190x139.jpg" /> </div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-row">
                                                <div className="flex flex-col mr-56">
                                                    <div className="text-lg font-extralight leading-relaxed">EXCUTIVE</div>
                                                    <div className="text-lg font-extralight leading-relaxed">THE ULTIMATE BEGINNER</div>
                                                    <div className="text-lg font-extralight leading-relaxed mb-4">( 60 CAPSULES)</div>
                                                </div>
                                                <div><a><AiOutlineClose /></a></div>
                                            </div>
                                            <div className="flex flex-row mb-8 justify-between">
                                                <div className="text-xl font-normal leading-loose">2,700.00 THB</div>
                                                <div className="text-xl font-normal leading-loose">5,400.00 THB</div>
                                            </div>
                                            <div className="mb-7">
                                                <select className="form-select block w-2/6 py-2 px-10 border-2 border-gray-400">
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
                                        </div>
                                    </div>
                                    <div className="flex flex-row mb-9">
                                        <div className="h-0.5 mt-3 w-full bg-gray-300 "></div>
                                        <div className="h-0.5 mt-3 w-full bg-gray-300 "></div>
                                    </div>

                                    <div className="flex flex-row">
                                        <div className="mr-8"><img src="https://www.tuningblog.eu/wp-content/uploads/2020/01/Mercedes-AMG-GT-R-Coupe-C190-Hypaero-Tuning-2-190x139.jpg" /> </div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-row">
                                                <div className="flex flex-col mr-56">
                                                    <div className="text-lg font-extralight leading-relaxed">PASSIVE</div>
                                                    <div className="text-lg font-extralight leading-relaxed">THE ULTIMATE BEGINNER</div>
                                                    <div className="text-lg font-extralight leading-relaxed mb-4">( 10 SACHETS)</div>
                                                </div>
                                                <div><a><AiOutlineClose /></a></div>
                                            </div>
                                            <div className="flex flex-row mb-8 justify-between">
                                                <div className="text-xl font-normal leading-loose">2,700.00 THB</div>
                                                <div className="text-xl font-normal leading-loose">2,700.00 THB</div>
                                            </div>
                                            <div className="mb-7">
                                                <select className="form-select block w-2/6 py-2 px-10 border-2 border-gray-400">
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
                                        </div>
                                    </div>
                                    <div className="flex flex-row mb-9">
                                        <div className="h-0.5 mt-3 w-full bg-gray-300 "></div>
                                        <div className="h-0.5 mt-3 w-full bg-gray-300 "></div>
                                    </div>

                                    <div className="flex flex-row">
                                        <div className="mr-8"><img src="https://www.tuningblog.eu/wp-content/uploads/2020/01/Mercedes-AMG-GT-R-Coupe-C190-Hypaero-Tuning-2-190x139.jpg" /> </div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-row">
                                                <div className="flex flex-col mr-56">
                                                    <div className="text-lg font-extralight leading-relaxed">SUPER ACTIVE</div>
                                                    <div className="text-lg font-extralight leading-relaxed">THE ULTIMATE BEGINNER</div>
                                                    <div className="text-lg font-extralight leading-relaxed mb-4">( 10 SACHETS)</div>
                                                </div>
                                                <div><a><AiOutlineClose /></a></div>
                                            </div>
                                            <div className="flex flex-row mb-8 justify-between">
                                                <div className="text-xl font-normal leading-loose">2,700.00 THB</div>
                                                <div className="text-xl font-normal leading-loose">5,400.00 THB</div>
                                            </div>
                                            <div className="mb-7">
                                                <select className="form-select block w-2/6 py-2 px-10 border-2 border-gray-400">
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
                                        </div>
                                    </div>
                                    <div className="flex flex-row mb-9">
                                        <div className="h-0.5 mt-3 w-full bg-gray-300 "></div>
                                        <div className="h-0.5 mt-3 w-full bg-gray-300 "></div>
                                    </div>

                                    <div className="flex flex-row">
                                        <div className="mr-8"><img src="https://www.tuningblog.eu/wp-content/uploads/2020/01/Mercedes-AMG-GT-R-Coupe-C190-Hypaero-Tuning-2-190x139.jpg" /> </div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-row">
                                                <div className="flex flex-col mr-56">
                                                    <div className="text-lg font-extralight leading-relaxed">SOCIALIZE</div>
                                                    <div className="text-lg font-extralight leading-relaxed">THE ULTIMATE BEGINNER</div>
                                                    <div className="text-lg font-extralight leading-relaxed mb-4">( 10 SACHETS)</div>
                                                </div>
                                                <div><a><AiOutlineClose /></a></div>
                                            </div>
                                            <div className="flex flex-row mb-8 ">
                                                <div className="text-xl font-normal leading-loose mr-56">2,700.00 THB</div>
                                                <div className="text-xl font-normal leading-loose">2,700.00 THB</div>
                                            </div>
                                            <div className="mb-7">
                                                <select className="form-select block w-2/6 py-2 px-10 border-2 border-gray-400">
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
                                        </div>
                                    </div>
                                    <div className="flex flex-row ">
                                        <div className="h-0.5 mt-3 w-full bg-gray-300 "></div>
                                        <div className="h-0.5 mt-3 w-full bg-gray-300 "></div>
                                    </div>
                                </div>

                            </div>           

                        </form>


                    </div>

                    {/* div colขวา */}
                    <div className="bg-gray-cartandcheckout w-full lg:w-3/6 h-1/6 py-20">
                        <div className="flex flex-col mt-12 ml-14">
                            <div className="text-2xl font-normal leading-loose mb-10">ORDER SUMMARY</div>
                            <div className="flex flex-row mb-10 justify-between">
                                <div className="text-lg leading-loose font-light ">SUB TOTAL TOTAL</div>
                                <div className="text-xl font-normal leading-loose mr-14">16,200.00</div>
                            </div>
                            <div className="flex flex-row mb-10 justify-between">
                                <div className="text-lg leading-loose font-light ">SHIPPING</div>
                                <div className="text-xl font-normal leading-loose mr-14">0.00</div>
                            </div>
                            <div className="flex flex-row mb-12 justify-between">
                                <div className="text-lg leading-loose font-light ">DISSCOUNT</div>
                                <div className="text-xl font-normal leading-loose mr-14">0.00</div>
                            </div>
                            <div className="flex flex-row mb-5">
                                <div className="h-0.5 mt-3 w-full bg-gray-300 "></div>
                                <div className="h-0.5 mt-3 w-full bg-gray-300 mr-14"></div>
                            </div>
                            <div className="flex flex-row mb-5">
                                <div className="flex flex-col ml-8">
                                    <div className="text-lg leading-loose font-light mb-4">PROMOTION CODE</div>
                                    <div className="w-5/6 ">
                                        <input className="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg " type="promocode" name="promocode" placeholder="PROMOTION CODE" />

                                    </div>
                                </div>
                                <div><button className="text-white bg-green-shop text-sm mt-14 leading-4  rounded-3xl px-20 py-1 hover:border-transparent ">
                                    <div className="py-2 font-normal text-lg">APPLY</div></button></div>
                            </div>

                            <div className="flex flex-row mb-5">
                                <div className="flex flex-col ml-8">
                                    <div className="text-lg leading-loose font-light mb-4">HEALTH SCAPE POINTS</div>
                                    <div className="w-5/6 ">
                                        <input className="border-2 border-primary bg-red transition h-12 px-5 pr-16 rounded-md focus:outline-none w-full text-black text-lg " type="healthscapepoint" name="healthscapepoint" placeholder="INPUT POINTS" />

                                    </div>
                                </div>
                                <div><button className="text-white bg-green-shop text-sm mt-14 leading-4  rounded-3xl px-20 py-1 hover:border-transparent ">
                                    <div className="py-2 font-normal text-lg">APPLY</div></button></div>
                            </div>
                            <div className="flex flex-row mb-5">
                                <div className="h-0.5 mt-3 w-full bg-gray-300 "></div>
                                <div className="h-0.5 mt-3 w-full bg-gray-300 mr-14"></div>
                            </div>
                            <div className="flex flex-row justify-between mb-6">
                                <div className="text-lg font-normal leading-loose">TOTAL</div>
                                <div className="text-xl font-normal leading-loose mr-14">16,200.00</div>
                            </div>
                            <div className="flex flex-row mb-11">
                                <div className="h-1 mt-3 w-full bg-gray-300 "></div>
                                <div className="h-1 mt-3 w-full bg-gray-300 mr-14"></div>
                            </div>
                            <div className="mx-auto">
                                <button className="text-white bg-green-shop text-sm mt-14 leading-4  rounded-3xl px-44 py-1 hover:border-transparent ">
                                    <div className="py-2 font-normal text-lg">CONTINUE</div></button></div>

                        </div>
                    </div>


                </div>














            </div>

        </div>
    )
}
