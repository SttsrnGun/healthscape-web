import Link from "next/link";
import { Icon } from '@iconify/react';
import Image from 'next/image';
import LogoFooter from "../../images/personalization/banner.png";

export default function checkoutsuccess() {
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
            {/* ----------section---------- */}
            <div >
                <div className="relative ">
                    <img className="object-cover w-full md:h-full lg:h-screen xl:h-screen" src="https://www.teahub.io/photos/full/3-37282_download-lovely-blue-sea-wallpaper-4k-resolution-.jpg" />
                    <div className="absolute inset-y-0 w-full mx-auto flex flex-col justify-center ">
                        <div className="w-full text-green-shop text-7xl font-normal text-center mb-7">ACTIVE SILVERS</div>
                        <div className="w-full text-green-shop text-2xl font-normal text-center mb-12 ">Order successfully placed</div>
                        <div className="mb-10">
                            <div className="flex flex-row  mb-4">
                                <div className="w-1/2"></div>
                                <div className="w-1/3 flex flex-row justify-between">
                                    <div className="font-extralight text-2xl text-center text-black leading-loose">ORDER NUMBER :</div>
                                    <div className="font-extralight text-2xl text-center text-black leading-loose italic ">65432187</div>
                                </div>
                                <div className="w-1/2"></div>
                            </div>

                            <div className="flex flex-row  mb-4">
                                <div className="w-1/2"></div>
                                <div className="w-1/3 flex flex-row justify-between">
                                    <div className="font-extralight text-2xl text-center text-black leading-loose">ORDER DATE :</div>
                                    <div className="font-extralight text-2xl text-center text-black leading-loose italic ">08/09/2021</div>
                                </div>
                                <div className="w-1/2"></div>
                            </div>

                            <div className="flex flex-row  mb-4">
                                <div className="w-1/2"></div>
                                <div className="w-1/3 flex flex-row justify-between">
                                    <div className="font-extralight text-2xl text-center text-black leading-loose">TOTAL :</div>
                                    <div className="font-extralight text-2xl text-center text-black leading-loose italic ">16,400.00</div>
                                </div>
                                <div className="w-1/2"></div>
                            </div>

                            <div className="flex flex-row  mb-4">
                                <div className="w-1/2"></div>
                                <div className="w-1/3 flex flex-row justify-between">
                                    <div className="font-extralight text-2xl text-center text-black leading-loose">PAYMENT METHOD :</div>
                                    <div className="font-extralight text-2xl text-center text-black leading-loose italic ">Credit card</div>
                                </div>
                                <div className="w-1/2"></div>
                            </div>

                        </div>

                        <div className="mx-auto">
                            <a href="#"><button className="text-white bg-green-shop text-sm mt-14 leading-4  rounded-3xl px-12 py-1 hover:border-transparent ">
                                <div className="py-2 font-normal text-lg">CONTINUE SHOPPING</div></button></a>
                        </div>

                    </div>
                </div>
                {/* ----------section---------- */}

                












                {/* footer */}
            </div>
        </>
    )
}
