import React from "react";
import Image from 'next/image'
import MainContent from "../../images/blog/9.jpg";
import Section1 from "../../images/blog/13.jpg";
import Link from "next/link";
import { Icon } from '@iconify/react';


export default function Home() {
    return (

        <div>

            <title>PEOPLESCAPE - HORD Consulting &amp; Services</title>

            <div className="relative">
                <img className="object-cover w-full h-48" src="https://cubixcode.com/demos/peoplescape/images/home/inner-banner.jpg" alt="coverimg" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="w-full text-white text-5xl font-black text-center ">BLOG SINGLE</p>
                </div>
            </div>



            <div className="container mx-auto">
                {/* Section1 */}
                <div className="flex flex-col items-center py-8">
                    <div className="flex mx-auto" >
                        <Image
                            src={MainContent}
                            alt="Peoplescape" />
                        {/* <div className="absolute w-full text-white text-5xl font-black text-center ">BLOG SINGLE</div> */}
                    </div>
                    <div className="w-full my-4 ">

                        <div className=" font-black text-sm lg:text-xl my-2 ">
                            Its like a kind of torture to have to watch the show.
                        </div>
                        <div className=" text-sm w-full py-3 ">

                            A tale of a fateful trip that started from this tropic
                            port aboard this tiny ship today still wanted by the
                            government apartment in the sky moving on up to the east
                            side a family to explore strange new worlds to seek out
                            new life and new civilizations to boldly go where no man
                            has gone before you would see the biggest gift would be
                            from me and the card attached would say thank you for
                            being a friend.

                        </div>
                        <div className="text-sm w-full py-3">
                            That this group would somehow form a family that's the way
                            we all became the Brady Bunch apartment in the sky moving
                            on up to the east side a family to explore strange new
                            worlds.
                        </div>
                        <div className="text-sm w-full py-3">
                            This tropic port aboard this tiny ship today still wanted
                            by the government apartment in the sky moving on up to the
                            east side a family to explore strange new worlds to seek
                            out new life and new civilizations to boldly go where no
                            man has gone before you would see the biggest gift would
                            be from me and the card.

                        </div>



                    </div>
                </div>
                {/* Section2 */}
                <div className="border-b-2 border-gray-200">
                    <div className="flex flex-col lg:flex-row justify-center py-8 border-b-2 border-gray-900">
                        {/* Space1 */}
                        <div className="lg:w-1/3 w-full  px-auto">
                            <img
                                src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fblog%2F13.aac230b473bb9d416b00231907a0b6eb.jpg&w=640&q=75"
                                alt="Content1" className="object-cover mx-auto w-auto max-h-full" />
                            {/* <Image
                                src={Section1}
                                alt="Content1" className="object-cover w-full h-auto" /> */}
                        </div>

                        {/* Space2 */}


                        <div className="lg:w-1/3 w-full mt-4 lg:mt-0">

                            <div>
                                <Icon icon="ci:double-quotes-l" className="mx-auto" color="#eee" width="85" height="107" />
                            </div>
                            <div className=" text-sm  w-full  text-gray-about ">

                                Somehow form a family that's the way we all became
                                the Brady Bunch apartment in the sky moving on up
                                to the family tools explore strange new worlds us
                                here each week my friends you're sure to get a
                                smile.

                            </div>
                            <div className="my-4 text-base text-center lg:w-full  text-gray-about">
                                - San Johnson -
                            </div>
                        </div>




                    </div>
                    <div className=" text-sm my-2  w-full  text-gray-about ">


                        A tale of a fateful trip that started from this tropic
                        port aboard this tiny ship today still wanted by the
                        government apartment in the sky moving on up to the east
                        side a family to explore strange new worlds to seek out
                        new life and new civilizations to boldly go where no man
                        has gone before you would see the biggest gift would be
                        from me and the card attached would say thank you for
                        being a friend.


                    </div>


                    <div className="text-sm lg:w-full my-8  text-gray-about">

                        To seek out new life and new civilizations to boldly go
                        where no man has gone before you would see the biggest
                        gift would be from me and the card attached would say
                        thank you for new civilizations

                    </div>

                </div>

                {/* Shared */}
                <div className="flex justify-end py-1">
                    <Icon className="mt-1 mx-1" icon="ci:share" width="12.86" height="15" />
                    <div className="text-sm mx-1">Share :</div>
                    <div>
                        <button className="mx-1  font-semibold text-gray-1000 hover:text-black  inline-flex items-center space-x-2 rounded">
                            <svg className="w-3.5 h-4 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </button>
                    </div>
                    <div>
                        <button className="mx-1  font-semibold text-gray-1000 hover:text-black inline-flex items-center space-x-2 rounded">
                            <svg className="w-3.5 h-4 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                        </button>
                    </div>
                    <div>
                        <button className="mx-1  font-semibold text-gray-1000 hover:text-black inline-flex items-center space-x-2 rounded">
                            <svg className="w-3.5 h-4 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button className="mx-1  font-semibold text-gray-1000 hover:text-black inline-flex items-center space-x-2 rounded">
                            <svg className="w-3.5 h-4 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" /></svg>
                        </button>
                    </div>
                </div>

                {/* Related */}
                <div>
                    <div className="font-black text-lg lg:text-4xl my-2 ">
                        RELATED POSTS
                        <div className="w-1/12 border-b-4 border-gray-300"></div>
                    </div>
                    <div className="flex flex-row mx-10 py-8 ">
                        {/* Space1 */}
                        <div className="w-1/2">

                            <div className="mx-4">
                                <img
                                    src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fblog%2F13.aac230b473bb9d416b00231907a0b6eb.jpg&w=640&q=75"
                                    alt="Content1" className="w-48" />
                                <div className="my-3 text-lg font-bold">Trouble with the law since to eastern side of
                                    yellow mint</div>
                                <a href="#" className="font-bold text-blue-1000">READ MORE</a>
                            </div>

                        </div>

                        {/* Space2 */}
                        <div className="w-1/2">

                            <div className="mx-4">
                                <img
                                    src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fblog%2F13.aac230b473bb9d416b00231907a0b6eb.jpg&w=640&q=75"
                                    alt="Content1" className="w-48" />
                                <div className="my-3 text-lg font-bold">Make the best of things its an uphill climb long
                                    time</div>
                                <a href="#" className="font-bold text-blue-1000">READ MORE</a>
                            </div>

                        </div>


                    </div>
                </div>


            </div>

        </div>
    )
}
