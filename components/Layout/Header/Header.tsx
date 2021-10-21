import React, { useState } from "react";
import Image from 'next/image'
import LogoHeader from "../../../images/home/home-banner.png";
import Link from "next/link";
import { useSelector } from "react-redux";


export default function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div>
      {/* <Link href="/">
            <a>
              <Image
                src={LogoHeader}
                alt="Peoplescape"
              />
            </a>
          </Link> */}

      <div className="bg-black h-14 py-3">

        <div className="text-center">
          <div className="text-white">This website uses cookies to ensure you get the best experience on our website. <span className="text-gray-moreinfo pl-1 pr-3"><a href="#">More Info.</a></span>
            <button className="text-blue-1000 bg-white text-sm   leading-4  rounded-md px-4  hover:border-transparent ">
              <div className="py-2">Accept</div></button></div>

        </div>


        {/* <div className="h-0 mt-2">
          <button className="text-blue-1000 text-sm border-2 border-blue-1000 leading-4  rounded-lg px-4  hover:border-transparent hover:bg-blue-1000 hover:text-white hidden lg:block mr-4">
            <div className="py-2">LEARNSCAPE</div></button>
        </div> */}


      </div>

      <div className="flex ">
        <div className="w-full bg-white h-16 text-center">
          <span className="font-semibold text-xl">ADD US ON LINE TO ENJOY  </span><span className="text-4xl text-gray-moreinfo">150฿ OFF  </span><span className="font-bold underline text-xl"><a href="#">CLICK</a></span>
        </div>
      </div>

      <div className="relative">
        <img className="object-cover w-full h-screen" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fhome-banner.2610970e35b3d8cfb56f582d08384312.png&w=1920&q=75" alt="coverimg" />
        <div className="absolute inset-0 flex ">
          <section className="relative mx-auto">
            {/* <!-- navbar --> */}
            <nav className="flex justify-between  text-white w-screen">
              <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                <Link href="/">
                  <a>
                    <img
                      className="h-16 py-1"
                      src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Flogo%2Flogo.8e3dd90f5d4b2222d5149f8eac0c0a04.png&w=256&q=75"
                      alt="Peoplescape"
                    />
                  </a>
                </Link>
                {/* <!-- Nav Links --> */}
                <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                  <li><a className="hover:text-gray-200 text-lg font-normal" href="#">PERSONALIZATION</a></li>
                  <li><a className="hover:text-gray-200 text-lg font-normal" href="#">PRODUCT</a></li>
                  <li><a className="hover:text-gray-200 text-lg font-normal" href="#">SCIENCE</a></li>
                </ul>
                {/* <!-- Header Icons --> */}
                <div className="hidden xl:flex items-center space-x-5 items-center">
                  <a className="hover:text-gray-200" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </a>
                  <a className="flex items-center hover:text-gray-200" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="flex absolute -mt-5 ml-4">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                      </span>
                    </span>
                  </a>
                  {/* <!-- Sign In / Register      --> */}
                  <a className="flex items-center hover:text-gray-200" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>

                </div>
              </div>
              {/* <!-- Responsive navbar --> */}
              <a className="xl:hidden flex mr-6 items-center" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                  </span>
                </span>
              </a>
              <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </a>
            </nav>

          </section>

          {/* <!-- Does this resource worth a follow? --> */}
          <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
              <a title="Follow me on twitter" href="https://www.twitter.com/asad_codes" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                <img className="object-cover object-center w-full h-full rounded-full" src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-center ml-44">
          <div className="w-full text-white text-6.125xl font-medium  ">BE</div>
          <div className="w-full text-white text-6.125xl font-medium  ">THE LIVELY</div>
          <div className="w-full text-white text-6.125xl font-medium  ">SILVERS</div>
          <div className="text-lg text-white w-3/12">A personalised health subscription that puts you first.
            Your daily dose of health & happiness delivered to
            your door with Vitally.</div>
            <div><button className="text-white bg-green-shop text-sm mt-14 leading-4  rounded-3xl px-8 py-1 hover:border-transparent ">
              <div className="py-2 font-normal text-lg">SHOP NOW</div></button></div>
        </div>

      </div>
      <div className="container mx-auto">

        <nav className='flex items-center flex-wrap bg-blue-1000  p-3 '>
          <Link href="/">
            <a>
              <img
                className="h-16 py-1"
                src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Flogo%2Flogo.8e3dd90f5d4b2222d5149f8eac0c0a04.png&w=256&q=75"
                alt="Peoplescape"
              />
            </a>
          </Link>
          <button
            className=' inline-flex p-3  rounded lg:hidden text-white ml-auto hover:text-white outline-none'
            onClick={handleClick}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
          <div
            className={`${active ? '' : 'hidden'
              }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className='lg:inline-flex lg:flex-row  lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <Link href='/'>
                <a className='lg:inline-block lg:w-auto w-full px-4 py-2 lg:py-0 text-gray-1000 text-lg items-center justify-center hover:text-red-1000 '>
                  HOME
                </a>
              </Link>
              <Link href="/about">
                <a className='lg:inline-block lg:w-auto w-full px-4 py-2 lg:py-0 text-gray-1000 text-lg items-center justify-center hover:text-red-1000 '>
                  ABOUT US
                </a>
              </Link>
              <Link href='/services'>
                <a className='lg:inline-block lg:w-auto w-full px-4 py-2 lg:py-0 text-gray-1000 text-lg items-center justify-center hover:text-red-1000 '>
                  OUR SERVICES
                </a>
              </Link>
              <Link href='/academy'>
                <a className='lg:inline-block lg:w-auto w-full px-4 py-2 lg:py-0 text-gray-1000 text-lg items-center justify-center hover:text-red-1000 '>
                  ACADEMY
                </a>
              </Link>
              <Link href='/knowledge'>
                <a className='lg:inline-block lg:w-auto w-full px-4 py-2 lg:py-0 text-gray-1000 text-lg items-center justify-center hover:text-red-1000 '>
                  KNOWLEDGE
                </a>
              </Link>
              <Link href='/contact'>
                <a className='lg:inline-block lg:w-auto w-full px-4 py-2 lg:py-0 text-gray-1000 text-lg items-center justify-center hover:text-red-1000 '>
                  CONTACT
                </a>
              </Link>
            </div>
            <div className="hidden lg:flex flex-row ml-auto ">
              <div>
                <button className="px-4 py-2 font-semibold text-gray-1000 hover:text-red-1000  inline-flex items-center space-x-2 rounded">
                  <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </button>
              </div>
              <div>
                <button className="px-4 py-2 font-semibold text-gray-1000 hover:text-red-1000 inline-flex items-center space-x-2 rounded">
                  <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </button>
              </div>
              <div>
                <button className="px-4 py-2 font-semibold text-gray-1000 hover:text-red-1000 inline-flex items-center space-x-2 rounded">
                  <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                  </svg>
                </button>
              </div>
              <div>
                <button className="px-4 py-2 font-semibold text-gray-1000 hover:text-red-1000 inline-flex items-center space-x-2 rounded">
                  <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" /></svg>
                </button>
              </div>

              {/*Ref:search https://tailwindcomponents.com/component/search-input-with-integrated-icon-and-button */}
              {/* <div>
              <button type="submit" className="text-gray-1000 hover:text-red-1000 p-1 focus:outline-none focus:shadow-outline ">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
              <input type="search" name="q" className="py-2 text-sm text-white bg-gray-900 rounded-md pl-4 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off"></input>
            </div> */}

              {/* why input tag error T^T
      <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" class="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autocomplete="off">
    </div> */}
            </div>
          </div>
        </nav>
      </div>
      <div className="bg-gradient-to-b from-blue-1000 to-blue-900 py-2"> </div>



    </div>


  )
}

