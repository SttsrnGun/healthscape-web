// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Slider from '../../components/Slider/Slider';
// import Header from '../../components/Layout/Header/Header';
import Banner from "../../../images/banner/inner-banner.jpg";
import { Icon } from '@iconify/react';
import LogoFooter from "../../../images/logo/logosec.png";


export default function About() {
  return (

    <div>

      <title>PEOPLESCAPE - HORD Consulting &amp; Services</title>

      <div className="relative">
        <img className="object-cover w-full h-48" src="https://cubixcode.com/demos/peoplescape/images/home/inner-banner.jpg" alt="coverimg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="w-full text-white text-5xl font-black text-center ">ABOUT</p>
        </div>
      </div>


      <div className="container mx-auto">
        {/* Section1 */}
        <div className="flex flex-col lg:flex-row items-center py-8">
          <div className="flex  w-full px-4">
            <img src="https://cubixcode.com/demos/peoplescape/images/home/why.jpg" alt="content" className="object-cover w-full h-auto" />
          </div>
          <div className="lg:w-full w-full mt-4 lg:mt-0">

            <div className=" font-black text-lg lg:text-4xl mb-2 ">
              WHY PEOPLESCAPE?
            </div>
            <div className=" text-sm  w-full  text-gray-about ">
              PeopleScape
              ที่ปรึกษาด้านการพัฒนาองค์กรและบริหารทรัพยากรบุคคลที่พร้อมตอบทุกข้อสงสัยและแก้ไขปัญหาต่างๆ
              ให้กับองค์กร นำทีมโดยทีมงานที่ปรึกษาและวิทยากรที่มีประสบการณ์
              จากเมเจอร์ ดีเวลลอปเม้นท์ เจ้าของรางวัล
              “สถานประกอบกิจการดีเด่นด้านแรงงานสัมพันธ์และสวัสดิการแรงงาน
              ประจำปี 2563” จากงาน Thailand Labour Management Excellence
              Award 2020
            </div>
            <div className="flex justify-start my-2">

              <div className=" text-sm lg:w-full  text-gray-about">
                เรามีบริการที่ครอบคลุมการพัฒนาองค์กรและการบริหารทรัพยากรบุคคลรวมถึงการเป็นที่ปรึกษาในการปรับปรุงกระบวนการทางธุรกิจและวางระบบควบคุมการทำงาน
              </div>
            </div>


          </div>
        </div>
        {/* Section2 */}

        <div className="flex flex-col lg:flex-row items-center  py-8 border-b-2 border-gray-900">
          <div className="lg:w-1/3 w-1/2 my-4 lg:my-0 px-4 lg:border-r-2 border-gray-500">

            <div className=" font-bold text-center lg:text-right text-lg lg:text-4xl my-2 lg:mx-4">
              High-Quality
            </div>
            <div className=" font-bold text-center lg:text-right text-lg lg:text-4xl my-2 lg:mx-4">
              Market Experinces
            </div>
          </div>
          <div className="lg:w-1/3 w-full my-4 lg:mt-0 px-4  ">

            <div className="text-sm text-gray-about my-2">
              PeopleScape เราเข้าถึงทุกกระบวนการทางธุรกิจตั้งแต่ต้นน้ำถึงปลายน้ำ
              เชื่อหรือไม่ว่า หลายๆ ธุรกิจที่เติบโตขึ้น มีการวางแผน
              ออกแบบมาอย่างละเอียดและมีแบบแผนมากๆ
              ที่จะสามารถดูแลธุรกิจหรือองค์กรนั้นให้สำเร็จและก้าวหน้าทุกกระบวนการที่มีได้อย่างมีประสิทธิภาพ
            </div>

          </div>
          <div className="  mx-auto">

            <button className="text-white bg-blue-1000 text-sm border-2 border-blue-1000 leading-none  
          rounded-lg px-4 py-2 hover:border-transparent  hover:text-white    ">CONTACT US</button>


          </div>
        </div>





        {/* Section3 */}
        <div className="flex flex-row mx-10 py-8 border-b-2 border-gray-900">
          {/* Space1 */}
          <div className="w-1/3  px-4 border-r-2 border-dashed border-gray-500">

            <div className="mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div className="text-center text-lg">
              Vision
            </div>
            <div className="text-center text-sm my-4 px-1">
              ที่ปรึกษาด้านการพัฒนาองค์กรและบริหารทรัพยากรบุคคลที่พร้อมตอบทุกข้อสงสัยและแก้ไขปัญหาต่างๆ
              ให้กับองค์กร
            </div>
          </div>

          {/* Space2 */}
          <div className="w-1/3 px-4 border-r-2 border-dashed border-gray-500">

            <div className="mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div className="text-center text-lg ">
              Missions
            </div>
            <div className="text-center text-sm my-4 mx-1">
              ที่ปรึกษาด้านการพัฒนาองค์กรและบริหารทรัพยากรบุคคลที่พร้อมตอบทุกข้อสงสัยและแก้ไขปัญหาต่างๆ
              ให้กับองค์กร
            </div>
          </div>

          {/* Space3 */}
          <div className="w-1/3 px-4">

            <div className="mx-auto">
              <Icon className="mx-auto" icon="flat-ui:goal" width="55" height="55" />
            </div>
            <div className="text-center text-lg ">
              Goals
            </div>
            <div className="text-center text-sm my-4 mx-1">
              ที่ปรึกษาด้านการพัฒนาองค์กรและบริหารทรัพยากรบุคคลที่พร้อมตอบทุกข้อสงสัยและแก้ไขปัญหาต่างๆ
              ให้กับองค์กร
            </div>
          </div>
        </div>

        {/* Section4 */}
        <div className="my-12  bg-blue-section">
          {/* Title */}
          <div className="py-4">
            <div className="text-center font-black text-4xl text-white">PEOPLESCAPER</div>
            <div className="my-5 text-md text-white text-center">
              A tale of a fateful trip that started from this tropic port
              aboard this tiny ship today stillers.
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col-reverse lg:flex-row justify-around items-center bg-gray-100">
            <div className="lg:w-full full my-4 lg:mt-0 px-2">
              <div className="flex flex-row lg:w-full  my-4">
                <Icon className="mt-1" icon="mdi:strategy" width="60" height="61" />
                <div className="mt-0 mx-4 lg:mx-8 text-md">
                  <div className="text-lg font-semibold">Best Strategy</div>
                  The Love Boat soon will be making another run plore
                  strange tools enter new worlds.</div>
              </div>

              <div className="flex lg:w-full my-4">
                <Icon className="mt-1" icon="ic:outline-high-quality" width="60" height="61" />
                <div className="mt-2 mx-8 text-md">
                  <div className="text-lg font-semibold">High-Quality Services</div>
                  The Love Boat soon will be making another run plore
                  strange tools enter new worlds.</div>
              </div>

              <div className="flex lg:w-full my-4">
                <Icon className="mt-1" icon="ic:round-support-agent" width="60" height="61" />
                <div className="mt-2 mx-8 text-md">
                  <div className="text-lg font-semibold">Friendly Support</div>
                  The Love Boat soon will be making another run plore
                  strange tools enter new worlds.</div>
              </div>


            </div>

            <div className="flex w-full mx-auto">
              <img src="https://cubixcode.com/demos/peoplescape/images/home/16.jpg" alt="section-cover" className="object-cover w-full h-full" />
            </div>

          </div>
        </div>

        {/* Section5 */}
        <div className="flex flex-row mx-10 py-8">
          {/* Space1 */}
          <div className="w-1/4  pl-4">
            <div className="mx-auto text-center text-6xl font-light text-blue-1000">
              30+
            </div>
            <div className="text-center text-lg">
              Years of Excellence
            </div>
          </div>

          {/* Space2 */}
          <div className="w-1/4  pl-4">
            <div className="mx-auto text-center text-6xl font-light text-blue-1000">
              100%
            </div>
            <div className="text-center text-lg">
              Client Satisfaction
            </div>
          </div>

          {/* Space3 */}
          <div className="w-1/4 pl-4">
            <div className="mx-auto text-center text-6xl font-light text-blue-1000">
              53k
            </div>
            <div className="text-center text-lg">
              Cases Complete
            </div>
          </div>

          {/* Space4 */}
          <div className="w-1/4 pl-4">
            <div className="mx-auto text-center text-6xl font-light text-blue-1000">
              24
            </div>
            <div className="text-center text-lg">
              Consultants
            </div>
          </div>
        </div>

        {/* Section6 */}
        <div className="flex flex-row mx-10 py-16">
          {/* Space1 */}
          <div className="w-1/3 mt-6  pl-4">
            <div className=" text-3xl font-light">
              OUR COSTOMERS
            </div>
          </div>

          {/* Space2 */}
          <div className="w-2/3 pl-4 ">
            <div className="flex mt-1">
              <div className="px-10">
                <img src="https://www.siamphone.com/spec/apple/images/logo/thumb_logo_apple.png" alt="Apple" className="w-20 h-20" />
              </div>
              <div className="px-10">
                <img src="data:image/png;base64,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" alt="MDE" className="w-20 h-20 " />
              </div>
              <div className="px-10">
                <img src="https://pbs.twimg.com/profile_images/1369197741419749383/ixujPfwe_400x400.jpg" alt="ICM" className="w-20 h-20 " />
              </div>
              <div className="px-10">
                <img src="https://media-exp1.licdn.com/dms/image/C560BAQFzOBvs42yLdQ/company-logo_200_200/0/1631072570001?e=2159024400&v=beta&t=uXV6iOxmXTIV28keJdVcBTgAzf2qui9ueR4jBqClGgw" alt="ANZ" className="w-20 h-20 " />
              </div>
              <div className="px-10">
                <img src="data:image/jpeg;base64,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" alt="LS" className="w-20 h-20 " />
              </div>
            </div>



          </div>




        </div>



      </div>

    </div>
  )
}
