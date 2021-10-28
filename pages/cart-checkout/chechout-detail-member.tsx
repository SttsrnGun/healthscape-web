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

export default function Checkoutdetailmember() {
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

            <div className="mb-12 ml-16">
                <div className="text-green-shop font-medium text-4xl leading-loose">
                    CHECK OUT DETAILS
                </div>
            </div>


            <div>
                {/* Section1 */}
                <div className="flex flex-col lg:flex-row container mx-auto mb-16 lg:mb-36">
                    {/* div colซ้าย */}
                    <div className="mr-9 w-full lg:w-full mb-10 lg:mb-0">
                        <div className="leading-loose text-2xl font-normal mb-7">SHIPPING ADDRESS</div>
                        <form action="">
                        <div>
                                <div className="flex  mb-10">
                                    <input id="country-option-1" type="radio" name="countries" value="USA" className="h-4 w-4 mt-2 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                                    <div className="flex flex-col">
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
                                </div>

                                <div className="flex items-center mb-8">
                                    <input id="country-option-2" type="radio" name="newaddress" value="newaddress" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2" />
                                    <label className="text-sm font-medium text-gray-900 ml-2 block">
                                        Add new address
                                    </label>
                                </div>


                            </div>

                            <div className="flex flex-col mb-12">
                                <div className="flex flex-row">
                                    <label className="inline-block  
                                  font-extralight text-lg text-black">First name</label><label className="text-red-500">*</label></div>
                                <input type="text" id="name" name="name" placeholder="First Name"
                                    className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                            </div>

                            <div className="flex flex-col mb-12">
                                <div className="flex flex-row">
                                    <label className="inline-block 
                                  font-extralight text-lg text-black">Last name</label><label className="text-red-500">*</label></div>
                                <input type="text" id="name" name="name" placeholder="Last Name"
                                    className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                            </div>

                            <div className="flex flex-col mb-12">
                                <div className="flex flex-row">
                                    <label className="inline-block  
                                  font-extralight text-lg text-black">Company name (Option)</label></div>
                                <input type="text" id="name" name="name" placeholder="Company name"
                                    className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                            </div>

                            <div className="flex flex-col mb-12">
                                <div className="flex flex-row">
                                    <label className="inline-block  
                                  font-extralight text-lg text-black">Address</label><label className="text-red-500">*</label></div>
                                <input type="text" id="name" name="name" placeholder="Address"
                                    className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                            </div>

                            <div className="flex flex-col mb-12">
                                <div className="flex flex-row">
                                    <label className="inline-block  
                                  font-extralight text-lg text-black">City / Town</label><label className="text-red-500">*</label></div>
                                <input type="text" id="name" name="name" placeholder="Last Name"
                                    className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                            </div>

                            <div className="flex flex-col mb-12">
                                <div className="flex flex-row">
                                    <label className="inline-block  
                                  font-extralight text-lg text-black">Country</label><label className="text-red-500">*</label></div>
                                <select className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none">
                                    <option>Surabaya</option>
                                    <option>Jakarta</option>
                                    <option>bandung</option>
                                    <option>Tangerang</option>
                                </select>
                            </div>

                            <div className="flex flex-col mb-12">
                                <div className="flex flex-row">
                                    <label className="inline-block  
                                  font-extralight text-lg text-black">Postcode / zip</label><label className="text-red-500">*</label></div>
                                <input type="text" id="name" name="name" placeholder="Postcode/Zip"
                                    className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                            </div>

                            <div className="flex flex-col mb-12">
                                <div className="flex flex-row">
                                    <label className="inline-block  
                                  font-extralight text-lg text-black">Email address</label><label className="text-red-500">*</label></div>
                                <input type="text" id="name" name="name" placeholder="Email"
                                    className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                            </div>

                            <div className="flex flex-col mb-12">
                                <div className="flex flex-row">
                                    <label className="inline-block  
                                  font-extralight text-lg text-black">Phone number</label><label className="text-red-500">*</label></div>
                                <input type="text" id="name" name="name" placeholder="Phone number"
                                    className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                            </div>

                            <div className="leading-loose text-2xl font-normal mb-14">SHIPPING METHOD</div>
                            <div className="flex flex-col mb-16">
                                <div className="flex flex-row">
                                    <label className="inline-block  
                                  font-extralight text-lg text-black">Standard shipping ( 100 THB)</label></div>
                                <select className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none">
                                    <option>Surabaya</option>
                                    <option>Jakarta</option>
                                    <option>bandung</option>
                                    <option>Tangerang</option>
                                </select>
                            </div>
                            <div>
                                <div className="leading-loose text-2xl font-light mb-12">PAYMENT METHOD</div>



                                <div className="flex items-center mb-8">
                                    <input id="country-option-1" type="radio" name="countries" value="USA" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
                                    <label className="text-sm font-medium text-gray-900 ml-2 block">
                                        Mobile banking
                                    </label>
                                </div>

                                <div className="flex items-center mb-8">
                                    <input id="country-option-2" type="radio" name="countries" value="Germany" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2" />
                                    <label className="text-sm font-medium text-gray-900 ml-2 block">
                                        Credit card
                                    </label>
                                </div>

                                <div className="flex items-center mb-8">
                                    <input id="country-option-3" type="radio" name="countries" value="Spain" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-3" aria-describedby="country-option-3" />
                                    <label className="text-sm font-medium text-gray-900 ml-2 block">
                                        Cash on delivery
                                    </label>
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
