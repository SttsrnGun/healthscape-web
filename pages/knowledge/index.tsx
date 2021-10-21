// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Slider from '../../components/Slider/Slider';
import Podcast from '../../components/podcast';
import Blog from '../../components/blog';
import Image from 'next/image'


export default function knowledge() {
  return (
    // <Slider/> 
    <div >
      <div className="relative">
        <img className="object-cover w-full h-48" src="https://cubixcode.com/demos/peoplescape/images/home/inner-banner.jpg" alt="coverimg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="w-full text-white text-5xl font-black text-center ">KNOWLEDGE</p>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="w-full my-6 lg:mb-0">
          <h1 className="sm:text-4xl text-5xl  font-bold title-font  text-gray-900">PODCAST</h1>
          <div className="h-1 w-20 bg-gray-500 rounded"></div>
        </div>
        <Podcast />
        <div className="w-full my-6 lg:mb-0">
          <h1 className="sm:text-4xl text-5xl  font-bold title-font  text-gray-900">BLOGS</h1>
          <div className="h-1 w-20 bg-gray-500 rounded"></div>
        </div>
        <Blog />
      </div>

    </div>

  )
}
