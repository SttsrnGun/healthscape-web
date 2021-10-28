import React from "react";
import Image from 'next/image'
import Link from "next/link";
import { Icon } from '@iconify/react';
//  import LogoFooter from "../../images/home/pod3.jpg";

export default function Blog() {
    return (
        // <Slider/>
        <div className="">
            {/* <Link href="/">
            <a>
              <Image
                src={LogoFooter}
                alt="Peoplescape"
              />
            </a>
          </Link> */}


            <div className="container mx-auto">
                <div>
                    <div className=" sm:grid grid-cols-5  px-4   space-y-6 md:space-y-0 md:gap-4">

                        <div className="h-full col-span-3 xl:col-span-4  rounded-md flex items-center">
                            <div className="text-gray-600 body-font">
                                <div className="flex flex-wrap w-full mb-4 p-4">
                                    {/* <div className="w-full mb-6 lg:mb-0">
                                        <h1 className="sm:text-4xl text-5xl  font-bold title-font mb-2 text-gray-900">BLOG</h1>
                                        <div className="h-1 w-20 bg-gray-500 rounded"></div>
                                    </div> */}
                                </div>
                                <div className="flex flex-wrap -m-4">
                                    <div className="lg:w-1/2 w-full p-4">
                                        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                                            <img className="rounded-t-lg w-full" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fblog%2F3.9b768b3474956587d52eb6180edc2a0e.jpg&w=384&q=75" alt="" />
                                            <div className="py-6 px-8 rounded-lg bg-white">
                                                <div className="text-gray-700 font-bold text-lg mb-3 hover:text-gray-900 hover:cursor-pointer">Its like a kind of torture to have to watch the show.</div>
                                                <p className="text-gray-700 text-sm tracking-wide">A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government apartment in the sky.</p>
                                                <button className="mt-6 py-2 px-4 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"><a href="/blog">READ MORE</a></button>
                                            </div>
                                            <div className="absolute bottom-56 lg:bottom-52 mb-3 lg:mb-0 left-2 py-1 px-2 lg:px-3 bg-blue-900 rounded-lg">
                                                <span className="text-sm text-white">Feb 06, 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 w-full p-4">
                                        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                                            <img className="rounded-t-lg w-full" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fblog%2F4.9b768b3474956587d52eb6180edc2a0e.jpg&w=384&q=75" alt="" />
                                            <div className="py-6 px-8 rounded-lg bg-white">
                                                <div className="text-gray-700 font-bold text-lg mb-3 hover:text-gray-900 hover:cursor-pointer">Trouble with the law since.</div>
                                                <p className="text-gray-700 text-sm tracking-wide">To seek out new life and new civilizations to boldly go where no man has gone before you would see the biggest gift.</p>
                                                <button className="mt-6 py-2 px-4 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">READ MORE</button>
                                            </div>
                                            <div className="absolute bottom-48 lg:bottom-52 mb-3 lg:mb-0 left-2 py-1 px-2 lg:px-3 bg-blue-900 rounded-lg">
                                                <span className="text-sm text-white">Feb 06, 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 w-full p-4">
                                        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                                            <img className="rounded-t-lg w-full" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fblog%2F5.9b768b3474956587d52eb6180edc2a0e.jpg&w=384&q=75" alt="" />
                                            <div className="py-6 px-8 rounded-lg bg-white">
                                                <div className="text-gray-700 font-bold text-lg mb-3 hover:text-gray-900 hover:cursor-pointer">Trouble with the law since.</div>
                                                <p className="text-gray-700 text-sm tracking-wide">To seek out new life and new civilizations to boldly go where no man has gone before you would see the biggest gift.</p>
                                                <button className="mt-6 py-2 px-4 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">READ MORE</button>
                                            </div>
                                            <div className="absolute bottom-48 lg:bottom-52 mb-3 lg:mb-0 left-2 py-1 px-2 lg:px-3 bg-blue-900 rounded-lg">
                                                <span className="text-sm text-white">Feb 06, 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 w-full p-4">
                                        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                                            <img className="rounded-t-lg w-full" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fblog%2F3.9b768b3474956587d52eb6180edc2a0e.jpg&w=384&q=75" alt="" />
                                            <div className="py-6 px-8 rounded-lg bg-white">
                                                <div className="text-gray-700 font-bold text-lg mb-3 hover:text-gray-900 hover:cursor-pointer">Trouble with the law since.</div>
                                                <p className="text-gray-700 text-sm tracking-wide">To seek out new life and new civilizations to boldly go where no man has gone before you would see the biggest gift.</p>
                                                <button className="mt-6 py-2 px-4 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">READ MORE</button>
                                            </div>
                                            <div className="absolute bottom-48 lg:bottom-52 mb-3 lg:mb-0 left-2 py-1 px-2 lg:px-3 bg-blue-900 rounded-lg">
                                                <span className="text-sm text-white">Feb 06, 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 w-full p-4">
                                        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                                            <img className="rounded-t-lg w-full" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fblog%2F4.9b768b3474956587d52eb6180edc2a0e.jpg&w=384&q=75" alt="" />
                                            <div className="py-6 px-8 rounded-lg bg-white">
                                                <div className="text-gray-700 font-bold text-lg mb-3 hover:text-gray-900 hover:cursor-pointer">Trouble with the law since.</div>
                                                <p className="text-gray-700 text-sm tracking-wide">To seek out new life and new civilizations to boldly go where no man has gone before you would see the biggest gift.</p>
                                                <button className="mt-6 py-2 px-4 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">READ MORE</button>
                                            </div>
                                            <div className="absolute bottom-48 lg:bottom-52 mb-3 lg:mb-0 left-2 py-1 px-2 lg:px-3 bg-blue-900 rounded-lg">
                                                <span className="text-sm text-white">Feb 06, 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 w-full p-4">
                                        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                                            <img className="rounded-t-lg w-full" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fblog%2F5.9b768b3474956587d52eb6180edc2a0e.jpg&w=384&q=75" alt="" />
                                            <div className="py-6 px-8 rounded-lg bg-white">
                                                <div className="text-gray-700 font-bold text-lg mb-3 hover:text-gray-900 hover:cursor-pointer">Trouble with the law since.</div>
                                                <p className="text-gray-700 text-sm tracking-wide">To seek out new life and new civilizations to boldly go where no man has gone before you would see the biggest gift.</p>
                                                <button className="mt-6 py-2 px-4 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">READ MORE</button>
                                            </div>
                                            <div className="absolute bottom-48 lg:bottom-52 mb-3 lg:mb-0 left-2 py-1 px-2 lg:px-3 bg-blue-900 rounded-lg">
                                                <span className="text-sm text-white">Feb 06, 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Pagination */}
                                <div className="flex items-center justify-center space-x-3 py-4">
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

                        <div className="h-96 col-span-2 xl:col-span-1 ">
                            <div className="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
                                {/* <input type="text" placeholder="seach" className=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2"> */}
                                <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg></span>
                            </div>
                            <div className="bg-white  rounded-md">

                                <div className="flex w-full max-w-xs p-4 bg-white">
                                    <ul className="flex flex-col w-full">
                                        <li className="my-px">
                                            <span className="flex font-medium text-lg text-blue-900 px-4 my-2 ">Categories</span>
                                        </li>
                                        <li className="my-px">
                                            <ul className="my-1 list-disc text-gray-footertext ">
                                                <a href="#"
                                                    className="flex flex-row items-center  px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                                                    <li className="text-sm lg:text-base py-1 uppercase">HR&OD CONSULTING</li></a>
                                                <a href="#"
                                                    className="flex flex-row items-center  px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                                                    <li className="text-sm lg:text-base py-1 uppercase">TRAINING SERVICES</li></a>
                                                <a href="#"
                                                    className="flex flex-row items-center  px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                                                    <li className="text-sm lg:text-base py-1 uppercase">EMPLOYEE EXPERIENCE MANAGEMENT</li></a>
                                                <a href="#"
                                                    className="flex flex-row items-center  px-4 rounded-lg text-gray-600 hover:bg-gray-100">
                                                    <li className="text-sm lg:text-base py-1 uppercase">BUSINESS PROCESS CONSULTANT</li></a>
                                            </ul>
                                        </li>

                                        <li className="my-px">
                                            <span className="flex font-medium text-lg text-blue-900 px-4 py-2 ">Recent Posts</span>
                                        </li>
                                        <li className="py-2 border-b-2 border-gray-200">
                                            <a href="#"
                                                className="flex flex-row items-center h-14 px-4 rounded-lg text-gray-600 ">
                                                <img className="h-14 w-16 mt-5 rounded-md" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fblog%2F6.2771489ce1048f0b8c9f4ec5b2d2bdde.jpg&w=96&q=75" alt="" />
                                                <div className="mx-3 text-sm ">World don't move to beat of just one drum.</div>

                                            </a>
                                            <span className="pl-24 py-0 italic text-gray-400">5 minutes ago</span>
                                        </li>
                                        <li className="py-2 border-b-2 border-gray-00">
                                            <a href="#"
                                                className="flex flex-row items-center h-14 px-4 rounded-lg text-gray-600 ">
                                                <img className="h-14 w-16 mt-5 rounded-md" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fblog%2F7.ec06c7554e07a1ae0c6c21291458512b.jpg&w=96&q=75" alt="" />
                                                <div className="mx-3 text-sm ">Be right for you may not be right for some.</div>

                                            </a>
                                            <span className="pl-24 py-0 italic text-gray-400">2 days ago</span>
                                        </li>
                                        <li className="py-2 ">
                                            <a href="#"
                                                className="flex flex-row items-center h-14 px-4 rounded-lg text-gray-600 ">
                                                <img className="h-14 w-16 mt-5 rounded-md" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fblog%2F8.416b3ccceb62fbd1564f13d2669bcaae.jpg&w=96&q=75" alt="" />
                                                <div className="mx-3 text-sm ">World don't move to beat of just one drum.</div>

                                            </a>
                                            <span className="pl-24 py-0 italic text-gray-400">1 month ago</span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
        </div>
    )
}
