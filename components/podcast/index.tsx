import React from "react";
import Image from 'next/image'
import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Podcast() {
    return (
        // <Slider/>
        <div className="py-2">
            <div className="container mx-auto">
                <div className="py-2 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                    {/* Ep.1 */}
                    <div className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                        <a href="https://open.spotify.com/episode/3tvH11JRNWwQ5CxtNFXwUK?si=a7849494ee004f5e">
                            <div className="flex relative">
                                <img alt="podcast1" className="absolute w-full h-auto object-cover" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fpod1.ab4e2969edbeb79c4d8630e3f5c8b430.jpg&w=640&q=75" />
                                <div className=" flex items-center justify-center py-36 mx-auto z-10 w-full rounded-lg  border-4 border-gray-100 bg-blue-podcast opacity-0 hover:opacity-80">
                                    <button type="submit" className="text-lg font-semibold text-gray-800  px-6 py-2 rounded hover:bg-gray-300 bg-white ">LISTEN</button>
                                </div>
                            </div>
                        </a>
                        <div className="px-4">
                            <h3 className="text-xl text-gray-500 ">
                                <a className="font-bold text-black " href="#">
                                    PeopleScape Podcast EP.1
                                </a>
                            </h3>
                            <p className="py-2 text-sm text-gray-900 group-hover:text-indigo-800">พบกับคุณแตงกวา ธีริศรา พวงประโคน Co-Founder PeopleScape จะมาบอกเล่าความเป็นมาในการทำ Podcast และความตั้งใจในการสร้าง Podcast.</p>
                        </div>
                    </div>
                    {/* Ep.2 */}
                    <div className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                        <a href="https://open.spotify.com/episode/4rjYqD1kXiCGGzffMZZ6fI?si=b8bdb9904b614ef8">
                            <div className="flex relative">
                                <img alt="podcast2" className="absolute w-full h-auto object-cover" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fpod2.9c75bb79c0948b64f07a69695ea8b006.jpg&w=640&q=75" />
                                <div className=" flex items-center justify-center py-36 mx-auto z-10 w-full rounded-lg  border-4 border-gray-100 bg-blue-podcast opacity-0 hover:opacity-80">
                                    <button type="submit" className="text-lg font-semibold text-gray-800  px-6 py-2 rounded hover:bg-gray-300 bg-white ">LISTEN</button>
                                </div>
                            </div>
                        </a>
                        <div className="px-4">
                            <h3 className="text-xl text-gray-500 ">
                                <a className="font-bold text-black " href="#">
                                    PeopleScape Podcast EP.2
                                </a>
                            </h3>
                            <p className="py-2 text-sm text-gray-900 group-hover:text-indigo-800">นำเสนองานอย่างไร ให้ตรงจุด ตรงใจ และตรงประเด็น ปัจจุบันการประชุมหรือการสอนผ่านระบบออนไลน์เป็นทักษะสำคัญที่ช่วยเพิ่มประสิทธิภาพในการทำงาน.</p>
                        </div>
                    </div>
                    {/* Ep.3 */}
                    <div className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200 hidden lg:block">
                        <a href="https://open.spotify.com/episode/5PkyoETmWRssfNVzz2FwgU?si=4ce96d3633ee4f9c">
                            <div className="flex relative">
                                <img alt="podcast3" className="absolute w-full h-auto object-cover" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fpod3.b8b720f4c3fcf6c8dd80dc7fd42c289c.jpg&w=640&q=75" />
                                <div className=" flex items-center justify-center py-36 mx-auto z-10 w-full rounded-lg  border-4 border-gray-100 bg-blue-podcast opacity-0 hover:opacity-80">
                                    <button type="submit" className="text-lg font-semibold text-gray-800  px-6 py-2 rounded hover:bg-gray-300 bg-white ">LISTEN</button>
                                </div>
                            </div>
                        </a>
                        <div className="px-4">
                            <h3 className="text-xl text-gray-500 ">
                                <a className="font-bold text-black " href="#">
                                    PeopleScape Podcast EP.3
                                </a>
                            </h3>
                            <p className="py-4 text-sm text-gray-900 group-hover:text-indigo-800">คงเคยมีอารมณ์แบบนี้ ที่จู่ๆ พอทำงานไปนาน ๆ จะพบว่า งานที่ทำไม่มีความท้าทาย ไม่มีอะไรใหม่ ๆ ให้ตื่นเต้น โดยเฉพาะการทำงานที่ซ้ำซากจำเจ</p>
                        </div>
                    </div>
                    {/* Ep.4 pagination */}
                    {/* <div className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                        <div className="relative w-full h-80 md:h-64 lg:h-44">
                            <img src="https://cdn.pixabay.com/photo/2021/09/12/17/43/parrot-feathers-6619082_960_720.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="px-3 py-4">
                            <h3 className="text-sm text-gray-500 pb-2">
                                <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                                    <span className="absolute inset-0"></span>
                                    Advanced Level
                                </a>
                            </h3>
                            <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div> */}
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
    )
}
