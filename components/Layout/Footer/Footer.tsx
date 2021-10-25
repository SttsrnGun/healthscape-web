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
                <div className="text-white text-base font-light ">Active Silver</div>
                <div className="text-white text-base font-light ">Excutive Silver</div>
                <div className="text-white text-base font-light ">Passive Silver</div>
                <div className="text-white text-base font-light ">Socialize Silver</div>
                <div className="text-white text-base font-light ">Fasting</div>
              </div>

              <div className="h-full col-span-1 rounded-md  ">
                <div className="text-lg text-white font-normal"> QUICK LINKS</div>
                <div className="text-white text-base font-light ">Personalize</div>
                <div className="text-white text-base font-light ">Science</div>
                <div className="text-white text-base font-light ">Promotions</div>
              </div>

              <div className="h-full col-span-1 rounded-md  ">
                <div className="text-lg text-white font-normal"> COMPANY</div>
                <div className="text-white text-base font-light ">About us</div>
                <div className="text-white text-base font-light ">News</div>
                <div className="text-white text-base font-light ">Blog</div>
                <div className="text-white text-base font-light ">Contact us</div>
                <div className="text-white text-base font-light ">Store List</div>
              </div>
              <div className="h-full col-span-1 rounded-md  ">
                <div className="text-lg text-white font-normal"> HELP</div>
                <div className="text-white text-base font-light ">Help Center</div>
                <div className="text-white text-base font-light ">Term & Conditions</div>
                <div className="text-white text-base font-light ">Privacy Policy</div>
              </div>

              <div className="h-full col-span-2 rounded-md  ">
                <div className="mb-10"><img className="w-20 h-14 mx-auto" src="data:image/png;base64,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"/> </div>
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
          <div className="py-2 md:flex md:items-center md:justify-center py-auto text-gray-footertext " >
          <p>© 2021 Healthscape. Powered by Techscape</p>
        </div>
        </div>
      </div>
    </>
  )
}
