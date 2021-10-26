import Link from "next/link";
import { Icon } from '@iconify/react';
import { FaMale } from 'react-icons/fa';
import { FaFemale } from 'react-icons/fa';
// import Image from 'next/image';
// import LogoFooter from "../../images/quiz/bg-quiz.png";

export default function Quiz() {
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
         
          {/* ----------section---------- */}
        <div className="relative -mb-6">
          <img className="object-cover w-full h-screen" src="https://chiselwood.co.uk/wp-content/uploads/2019/03/Lead-image-DC3754-009-1-e1556187278331.jpg" />
          <div className="absolute inset-x-0 top-36 flex flex-col justify-center ml-44 mb-32">
          <div className="text-black font-light text-2xl ml-16">Question <span className="text-gray-moreinfo font-medium text-4xl">01</span> of 14 
          <div className="h-1 w-40 md:w-48 lg:w-52 xl:w-52 bg-gray-female rounded"></div> <div className="h-0.5 -mt-0.5 ml-40 md:ml-48 lg:ml-52 xl:ml-52 w-1/5 md:w-2/5 lg:w-3/5 xl:w-4/5 bg-gray-300"></div>
          </div>
          </div>
          <div className="absolute inset-x-0 top-80 flex flex-col justify-center">
          <div className="text-black font-normal text-4xl text-center mb-28">Select your gender :</div>
          <div className="flex flex-row justify-center">
              <div className="mr-28"><FaMale className="text-5xl bg-gray-moreinfo rounded-full h-48 w-48 py-8 px-14 "/></div>
              <div className=""><FaFemale className="text-5xl bg-gray-moreinfo rounded-full h-48 w-48 py-8 px-14 "/></div>
          </div>
          </div>
          
        </div>
        {/* ----------section---------- */}

        

        

        

        {/* footer */}
      </div>
    </>
  )
}
