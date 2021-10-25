import React from "react";
import Image from 'next/image'
import LogoFooter from "../../../images/home/section8/sub-3.png";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsLine } from 'react-icons/bs';

export default function Footer() { 
  return (
    <>
      <div className="bg-green-shop mt-6 "><h3>   </h3>
        <div className="pt-20 mb-16 container mx-auto">
          <div className="text-center font-normal text-lg text-white mb-5">Follow and Sign up for our newsletter</div>
          <div className="flex items-center justify-center ">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
        <div className=" rounded-full bg-green-shop border-2 shadow flex w-2/4">
            <input
                type="text"
                placeholder="Enter your email"
                className="w-full  py-1 px-4 ml-8 mt-2 mb-2 text-white bg-green-shop rounded-full" />
            <button className="bg-gray-moreinfo rounded-full   py-4 px-4 mt-2 mb-2 mr-2.5">
            <FaRegPaperPlane className="text-white text-lg" />
            </button>
        </div>
    </div>
</div>


<div className=" bg-gray-moreinfo rounded-full flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
  <div>
    <a title="Buy me a pizza" href="https://www.buymeacoffee.com/Dekartmc" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
      <img className="object-cover object-center w-full h-full rounded-full" src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"/>
    </a>
  </div>
</div>
        </div>
        <div className="relative mb-28 container mx-auto">
          
          
          <div className="mb-16 ">
            <div className=" sm:grid grid-cols-6  px-4  gap-x-28  space-y-6 md:space-y-0 md:gap-4">
            <div className="h-full col-span-1 rounded-md  ">
                <div className="text-lg text-white font-normal"> SHOP</div>
                <div className="text-white text-base font-light py-1 "><a href="#">Active Silver</a></div>
                <div className="text-white text-base font-light py-1 "><a href="#"> Excutive Silver</a></div>
                <div className="text-white text-base font-light py-1 "><a href="#"> Passive Silver</a></div>
                <div className="text-white text-base font-light py-1 "><a href="#"> Socialize Silver</a></div>
                <div className="text-white text-base font-light py-1 "><a href="#"> Fasting</a></div>
              </div>

              <div className="h-full col-span-1 rounded-md  ">
                <div className="text-lg text-white font-normal"> QUICK LINKS</div>
                <div className="text-white text-base font-light py-1 "><a href="#"> Personalize</a></div>
                <div className="text-white text-base font-light py-1 "><a href="#"> Science</a></div>
                <div className="text-white text-base font-light py-1 "><a href="#"> Promotions</a></div>
              </div>

              <div className="h-full col-span-1 rounded-md  ">
                <div className="text-lg text-white font-normal"> COMPANY</div>
                <div className="text-white text-base font-light py-1 "><a href="#"> About us</a></div>
                <div className="text-white text-base font-light py-1 "><a href="#"> News</a></div>
                <div className="text-white text-base font-light py-1 "><a href="#"> Blog</a></div>
                <div className="text-white text-base font-light py-1 "><a href="#"> Contact us</a></div>
                <div className="text-white text-base font-light py-1 "><a href="#"> Store List</a></div>
              </div>
              <div className="h-full col-span-1 rounded-md  ">
                <div className="text-lg text-white font-normal"> HELP</div>
                <div className="text-white text-base font-light py-1 "><a href="#"> Help Center</a></div>
                <div className="text-white text-base font-light py-1 "><a href="#"> Term & Conditions</a></div>
                <div className="text-white text-base font-light py-1 "><a href="#"> Privacy Policy</a></div>
              </div>

              <div className="h-full col-span-2 rounded-md  ">
                <div className="mb-10"><img className="w-20 h-14 mx-auto" src="https://peoplescape.co.th/events-landing/assets/img/logo.png"/> </div>
                <div className="text-lg text-white text-center font-normal "> FOLLOW US</div>
                <div><div className="flex justify-start my-1">
                  <div className="flex flex-row mx-auto">
              <div className="flex mx-1">
                <button className="px-2 py-2 font-semibold text-gray-moreinfo hover:text-red-1000  inline-flex items-center space-x-2 rounded">
                <BsInstagram className="text-2xl "/>
                </button>
              </div>
              <div className="flex mx-1">
                <button className="px-2 py-2 font-semibold text-gray-moreinfo hover:text-red-1000  inline-flex items-center space-x-2 rounded">
                <BsTwitter className="text-2xl "/>
                </button>
              </div>
              <div className="flex mx-1">
                <button className="px-2 py-2 font-semibold text-gray-moreinfo hover:text-red-1000  inline-flex items-center space-x-2 rounded">
                <BsFacebook className="text-2xl "/>
                </button>
              </div>
              <div className="flex mx-1">
                <button className="px-2 py-2 font-semibold text-gray-moreinfo hover:text-red-1000  inline-flex items-center space-x-2 rounded">
                <BsLine className="text-2xl "/>
                </button>
              </div>
              </div>

            </div></div>
              </div>

            </div>

          </div>
          <div className="py-2 md:flex md:items-center md:justify-center py-auto text-white " >
          <p>© 2021 Healthscape. Powered by Techscape</p>
        </div>
        </div>
      </div>
    </>
  )
}
