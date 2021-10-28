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

export default function Cartandcheckout() {
    return (

        <div>

            <title>HEALTHSCAPE - HORD Consulting &amp; Services</title>

            <div className="mt-20 ml-16 mb-11">
                <div className="flex flex-row">
                    <div className="text-xs text-gray-moreinfo font-light leading-3"><a href="/home">HOME</a></div>
                    <div className="px-1 text-gray-moreinfo text-xs font-light leading-3"> / </div>
                    <div className=" text-xs text-black font-light leading-3"><a href="/product">PRODUCTS</a></div>
                    <div className=" text-xs text-black font-light leading-3"> /</div>
                    <div className=" text-xs text-black font-light leading-3">YOUR SHOPPING CART</div>
                </div>
            </div>

            <div className="mb-28">
                <div className="text-center text-green-shop font-medium text-4xl leading-loose">
                    YOUR SHOPPING CART
                </div>
            </div>


            <div>
                {/* Section1 */}
                <div className="flex flex-col lg:flex-row container mx-auto mb-16 lg:mb-36">
                    {/* div colซ้าย */}
                    <div className="mr-9 w-full lg:w-full mb-10 lg:mb-0">
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
                                    <div><AiOutlineClose /></div>
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
                                    <div><AiOutlineClose /></div>
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
                                    <div><AiOutlineClose /></div>
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
                                    <div><AiOutlineClose /></div>
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
                                    <div><AiOutlineClose /></div>
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
                                    <div className="py-2 font-normal text-lg">CHECK OUT</div></button></div>

                        </div>
                    </div>


                </div>
                {/* Section2 */}

                <div className="container mx-auto mb-56">
                    <div className="mb-16">
                        <div className="text-green-shop text-4xl leading-loose font-medium text-center">YOU MAY ALSO LIKE</div>
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

                        <div className="lg:w-2/5 w-full bg-gray-relatedproduct mr-8 hidden lg:block">
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



                    </div>

                </div>





                

                





            </div>

        </div>
    )
}
