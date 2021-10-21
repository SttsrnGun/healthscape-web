import React from "react";
import Image from 'next/image'
import LogoFooter from "../../../images/logo/logosec.png";
import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    // <Slider/>
    <div className="bg-blue-footer pt-6">
      <div className="container mx-auto">
        <div className="flex flex-row  py-2 border-b-2 border-blue-section">
          {/* Space1 */}
          <div className="w-full  py-2">

            <div className="mx-auto">
              <Link href="/">
                <a>
                  <Image
                    src={LogoFooter}
                    alt="Peoplescape"
                  />
                </a>
              </Link>
            </div>
            <div className="lg:text-md text-sm text-gray-footertext px-4 py-3">
              This tropic port aboard this tiny ship today still wanted by theam government they survive on up east side to a deluxe as soldiers.
            </div>
            {/* Social */}
            <div className="flex justify-start mt-4">
              <div>
                <button className="px-2 py-2 font-semibold text-gray-1000 hover:text-red-1000  inline-flex items-center space-x-2 rounded">
                  <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </button>
              </div>
              <div>
                <button className="px-2 py-2 font-semibold text-gray-1000 hover:text-red-1000 inline-flex items-center space-x-2 rounded">
                  <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </button>
              </div>
              <div>
                <button className="px-2 py-2 font-semibold text-gray-1000 hover:text-red-1000 inline-flex items-center space-x-2 rounded">
                  <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                  </svg>
                </button>
              </div>
              <div>
                <button className="px-2 py-2 font-semibold text-gray-1000 hover:text-red-1000 inline-flex items-center space-x-2 rounded">
                  <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" /></svg>
                </button>
              </div>
              <div>
                <button className="px-2 py-2 font-semibold text-gray-1000 hover:text-red-1000 inline-flex items-center space-x-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="w-5 h-5 fill-current" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor" /></g></svg>
                </button>
              </div>

            </div>
          </div>

          {/* Space2 */}
          <div className="w-6/12 lg:px-0 px-6  py-3 ">


            <div className="font-bold text-lg text-white">
              EXPLORE
            </div>
            <ul className="mt-2 list-disc text-gray-footertext ">
              <li className="text-base py-2">TERM & CONDITIONS</li>
              <li className="text-base py-2">PRIVACY POLICY</li>
              <li className="text-base py-2">FAQ's</li>
            </ul>
          </div>

          {/* Space3 */}
          <div className="w-6/12 lg:px-4  py-3 hidden lg:block">


            <div className="font-bold text-lg text-white">
              NEWSLETTER
            </div>
            <form name="newsletter" className="flex flex-wrap gap-6">
              <div className="w-full py-2 border-b-2 border-gray-1000 flex justify-between gap-3">
                <input type="name" className="outline-none text-white text-md flex-1 px-2 py-1 bg-transparent" placeholder="Name*" />
              </div>
              <div className="w-full py-2 border-b-2 border-gray-1000 flex justify-between gap-3">
                <input type="email" className="outline-none text-white text-md flex-1 px-2 py-1 bg-transparent" placeholder="Email*" />
              </div>
              <button type="submit" className="text-lg font-semibold text-gray-800 px-4 py-1  
            rounded-lg hover:bg-gray-300 bg-white ml-auto">SUBSCRIBE</button>

            </form>
          </div>

          {/* Space4 */}
          <div className="w-full lg:pl-auto px-4 py-3">


            <div className="font-bold text-lg text-white">
              CONTACT
            </div>
            <ul className="list-disc text-gray-footertext ">
              <li className="py-2 flex flex-row mt-2"><Icon icon="carbon:location-filled" width="22" height="22" />
                <p className="pl-4">23A, MJD Tower, Thonglor 10, Bangkok, Thailand.</p>
              </li>
              <li className="py-2 flex flex-row"><Icon icon="carbon:email" width="22" height="22" />
                <p className="pl-4"><a href="#">contact@peoplescape.co.th</a></p>
              </li>
              <li className="py-2 flex flex-row"><Icon icon="bx:bx-phone" width="22" height="22" />
                <p className="pl-4"><a href="#">(+2) 345 9808 000</a></p>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-2 md:flex md:items-center md:justify-center py-auto text-gray-footertext " >
          <p>© Peoplescape 2021. Powered by Techscape</p>
        </div>
      </div>
    </div>
  )
}
