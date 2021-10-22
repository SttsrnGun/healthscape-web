import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <>
      {/* ----------section---------- */}
      <div className="bg-white">
        <div className="relative">
          <img className="object-cover w-full h-screen" src="https://chiselwood.co.uk/wp-content/uploads/2019/03/Lead-image-DC3754-009-1-e1556187278331.jpg" />
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
        {/* ----------section---------- */}

        {/* ----------section---------- */}
        <div className="mb-36">
          <div className="pt-36 pb-7 bg-white text-black text-lg text-center font-light">
            <div>YOE KNOW</div>
            <div>YOUR BODY, WE KNOW THE SCIENCE.</div>
            <div>LET'F WORK TOGETHER.</div>
          </div>
          <div className="bg-white">
            <div className="mx-auto my-2 h-1 w-5 bg-black rounded"></div>
            <div className="mx-auto my-2 h-1 w-4 bg-black rounded"></div>
            <div className="mx-auto my-2 h-1 w-3 bg-black rounded"></div>
            <div className="mx-auto my-2 h-1 w-2 bg-black rounded"></div>
            <div className="mx-auto my-2 h-1 w-1 bg-black rounded"></div>
            <div className="mx-auto my-2 h-1 w-2 bg-black rounded"></div>
            <div className="mx-auto my-2 h-1 w-3 bg-black rounded"></div>
            <div className="mx-auto my-2 h-1 w-4 bg-black rounded"></div>
            <div className="mx-auto my-2 h-1 w-5 bg-black rounded"></div>
          </div>
          <div className="py-10 bg-white flex justify-center ">
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard phone-1 bg-white py-24">
                  <img
                    className=" mx-auto"
                    src="https://techstar-production.s3.amazonaws.com/employer/8a2ce96b-cc7e-4305-a7bd-8c522d432329_11.jpg"
                    alt="Peoplescape"
                  />
                  <div className="text-blue-homephone text-lg font-medium text-center pt-10 my-2">YOUR JOURNEY</div>
                  <div className="text-blue-homephone text-lg font-medium text-center pb-3">TO HEALTH STARTS HERE.</div>
                  <div>
                    <button className="text-white mx-auto bg-gray-moreinfo text-sm flex justify-center my-9  leading-4  rounded-full px-8 py-4 hover:border-transparent ">
                      <div className="py-2 font-medium text-lg">TAKE A QUIZ</div></button>
                  </div>
                  <div className="py-2 text-black text-base font-extralight text-center"><div>vitamins, protein,</div>
                    <div>and now collagen too,</div>
                    <div>personalized just for you.</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------section---------- */}

        {/* ----------section---------- */}
        <div className="mb-36" >
          <div className="text-gray-moreinfo text-center text-lg font-normal mb-3">
            Highlight
          </div>
          <div className="text-center text-4xl text-black font-medium mb-16">
            FEATURED PRODUCTS
          </div>
          <div className="">
            <img className="w-full" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Ffeatured-products%2Ffeatured-product.893bb6121c0c8421a9e8c807ad6b0816.png&w=3840&q=75" />
          </div>
        </div>
        {/* ----------section---------- */}

        {/* ----------section---------- */}
        <div className="flex flex-col lg:flex-row  mb-36">
          <div className="  w-1/4 px-4 ml-16 mr-36">
            <div className="text-gray-moreinfo  text-lg font-normal py-2">
              Highlight
            </div>
            <div className=" text-4xl text-black font-medium ">
              HOT
            </div>
            <div className=" text-4xl text-black font-medium ">
              PROMOTION
            </div>
            <div className="flex mb-4">
              <div className="w-full bg-white h-72"></div>
            </div>
            <div className="w-full">
              <button className="text-white bg-green-shop leading-4  rounded-full px-6 py-1 hover:border-transparent ">
                <div className="py-2 font-normal text-lg">VIEW ALL PRODUCT</div>
              </button>
            </div>
          </div>
          <div className="lg:w-full w-full mt-4 lg:mt-0">
            <img src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fproduct%2Fhot-promotion.cc16c6495dc8ea3d3a31866c14a76321.png&w=1920&q=75" alt="content" className="object-cover w-full h-auto" />



          </div>
        </div>
        {/* ----------section---------- */}

        {/* ----------section---------- */}
        <div className="relative mb-14">
          <img className="object-cover w-full h-auto" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fbackground-3.410a9b51248412a856d1bd33512dbb95.png&w=3840&q=75" alt="coverimg" />
          <div className="absolute inset-0 text-center mb-16 mt-32 justify-center">
            <div className="mb-16">
              <div className="text-gray-moreinfo  text-lg font-normal py-2">
                Multiple benefits
              </div>
              <div className=" text-4xl text-black font-medium py-1">
                COFACTORS INGREDIENTS
              </div>
              <div className=" text-4xl text-black font-medium mb-6">
                PERFORMANCE
              </div>
              <div className="text-lg font-extralight text-black ">
                Ingredients never work alone. When a single ingredient is isolated from a food source,
              </div>
              <div className=" text-lg font-extralight text-black ">
                its no longer surrounded by its native cofactors. These cofactors are often required for "activating" the ingredients.
              </div>
            </div>
            <div className="flex flex-row justify-center mb-8">
              <div className="flex flex-col">
                <img className="mx-auto" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection5%2F1.70d85149f1aab403b80684f9c7a614c8.png&w=384&q=75" />
                <div className="text-lg font-normal">Skin</div>
              </div>
              <div className="flex flex-col my-auto px-7">
                <img className="mx-auto" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection5%2F2.5f9b273b3d7c01aac477c1a54a9b260c.png&w=48&q=75" />
              </div>
              <div className="flex flex-col">
                <img className="mx-auto" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection5%2F3.ef51c4c868b909ef1c5c6e3e8878bbad.png&w=256&q=75" />
                <div className="text-lg font-normal">Passive</div>
              </div>
              <div className="flex flex-col my-auto px-7">
                <img className="mx-auto" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection5%2F4%269.d3865ac46652d3b5d0ef820f68ed9462.png&w=48&q=75" />
              </div>
              <div className="flex flex-col">
                <img className="mx-auto" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection5%2F5.ef539c3c50d97d13d776743d0313b916.png&w=256&q=75" />
                <div className="text-lg font-normal">Socialize</div>
              </div>
            </div>
            <div className="flex flex-row justify-center mb-20">
              <div className="flex flex-col">
                <img className="mx-auto" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection5%2F6.fb5649470b9736c72f9b56dc53be0aa4.png&w=256&q=75" />
                <div className="text-lg font-normal">Go Health</div>
              </div>
              <div className="flex flex-col my-auto px-7">
                <img className="mx-auto" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection5%2F2.5f9b273b3d7c01aac477c1a54a9b260c.png&w=48&q=75" />
              </div>
              <div className="flex flex-col">
                <img className="mx-auto" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection5%2F8.e563480727b7ec18084fb1645d44bc65.png&w=256&q=75" />
                <div className="text-lg font-normal">Excutive</div>
              </div>
              <div className="flex flex-col my-auto px-7">
                <img className="mx-auto" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection5%2F4%269.d3865ac46652d3b5d0ef820f68ed9462.png&w=48&q=75" />
              </div>
              <div className="flex flex-col">
                <img className="mx-auto" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection5%2F10.222f4a29668e2ad1150f0b1ca50d2357.png&w=256&q=75" />
                <div className="text-lg font-normal">Active</div>
              </div>
            </div>
            <div className="w-full">
              <button className="text-white bg-green-shop leading-4  rounded-full px-12 py-1 hover:border-transparent ">
                <div className="py-2 font-normal text-lg">READ MORE</div>
              </button>
            </div>
          </div>
        </div>
        {/* ----------section---------- */}
        {/* ----------section---------- */}
        {/* divรูปbackgroundของsection */}
        <div className="relative mb-28">
          <div className="bg-white mt-16 mb-5">
            <div className="mx-auto my-2 h-1 w-5 bg-black "></div>
            <div className="mx-auto my-2 h-1 w-4 bg-black "></div>
            <div className="mx-auto my-2 h-1 w-3 bg-black "></div>
            <div className="mx-auto my-2 h-1 w-2 bg-black "></div>
            <div className="mx-auto my-2 h-1 w-1 bg-black "></div>
            <div className="mx-auto my-2 h-1 w-2 bg-black "></div>
            <div className="mx-auto my-2 h-1 w-3 bg-black "></div>
            <div className="mx-auto my-2 h-1 w-4 bg-black "></div>
            <div className="mx-auto my-2 h-1 w-5 bg-black "></div>
          </div>
          <div className="text-center mb-16">
            <div className="text-gray-moreinfo text-lg font-normal py-2">
              News
            </div>
            <div className=" text-4xl text-black font-medium">
              WHAT'S NEWS
            </div>
          </div>
          <div className="mb-20 ">
            <div className=" sm:grid grid-cols-5  px-4   space-y-6 md:space-y-0 md:gap-4">

              <div className="h-full col-span-3 xl:col-span-3  rounded-md flex items-center">
                <div className="text-gray-600 body-font">
                  <div className="flex flex-wrap w-full mb-4 p-4">

                  </div>
                  <div className="flex flex-wrap -m-4">
                    <div className="lg:w-full w-full ml-16 ">
                      <div className="bg-white relative  hover:shadow-xl transition duration-500 rounded-lg">
                        <img className=" w-full" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection6%2Fmain-news.8bd84a89f1218c4e302740e0ffc7d5e4.png&w=1920&q=75" alt="" />
                        <div className="py-6 px-8 rounded-lg bg-white">
                          <div className="text-black font-medium text-2xl hover:text-gray-900 hover:cursor-pointer">Protein Shake Recipe: Homemade Sattu Shake To Fuel Up
                            Your Protein...</div>
                          <div className="text-gray-newstime text-base font-light leading-6 my-2">September 20, 2021</div>
                          <div className="text-black text-lg tracking-wide leading-7 font-light">here is much emerging information surrounding the imdivct of sleedivduration and quality on food choice and consumption in both children and adults</div>
                          {/* <button className="mt-6 py-2 px-4 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"><a href="/blog">READ MORE</a></button> */}
                        </div>

                      </div>
                    </div>


                  </div>{/* Pagination */}
                  {/* <div className="flex items-center justify-center space-x-3 py-4">
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
                  </div> */}
                </div>

              </div>

              <div className="h-full col-span-2 xl:col-span-2 px-8 flex items-center">
                <div className="flex flex-wrap -m-4">
                  <div className="bg-white  rounded-md">

                    <div className="flex flex-col w-full mx-8 bg-white">
                      <div className="mb-10">
                        <img className="mb-5" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection6%2Fside-news1.5d7ec589362e4fd416affd65ec7367c8.png&w=828&q=75" />
                        <div className="text-2xl font-medium">Why Do We Need Supplements
                          : Nutritionists' Perspective</div>
                        <div className="text-gray-newstime text-base font-light leading-6 my-2">September 20, 2021</div>
                      </div>
                      <div>
                        <img className="mb-5" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection6%2Fside-news2.f0ded6e9099fec1c26e48a69dbafee56.png&w=828&q=75" />
                        <div className="text-2xl font-medium">Getting Deeper, Higher Quality Sleep with Healthy Fats</div>
                        <div className="text-gray-newstime text-base font-light leading-6 my-2">September 20, 2021</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div className="w-full flex justify-center">
            <button className="text-white bg-gray-moreinfo leading-4  rounded-full px-12 py-1 hover:border-transparent ">
              <div className="py-2 font-normal text-lg">ALL NEWS</div>
            </button>
          </div>
        </div>
        {/* ----------section---------- */}

        {/* ----------section---------- */}
        <div className="relative mb-32">
          <div className="border-b-2 border-gray-200">
            <div className="flex flex-col gap-10  lg:flex-row  mt-8">
              {/* Space1 */}
              <div className="lg:w-1/3 w-full mx-auto my-auto">

                <div className="text-gray-moreinfo  text-lg font-normal py-2">
                  Testimonials
                </div>
                <div className=" text-4xl text-black font-medium py-1">
                  CUSTOMERS STORIES
                </div>
                <div className="mt-4">
                  <Icon icon="ci:double-quotes-l" color="#cacadf" width="58.26" height="57.91" />
                </div>
                <div className=" text-2xl font-extralight italic  w-full text-center text-black  mb-14">
                  <div> The product not only tastes delicious,</div>

                  <div>But it gives me 490% of my daily vitamin B12!</div>
                  <div>Now I start my mornings on a more enthusiastic note</div>
                  <div>and it gives me an extra boost to get going.</div>
                </div>
                <div className="text-lg  text-center lg:w-full  text-black font-normal">
                  Jessica Chastain
                </div>
                <div>
                  <Icon icon="ci:double-quotes-l" className="ml-auto" color="#cacadf" width="58.26" height="57.91" hFlip={true} vFlip={true} />
                </div>

              </div>

              {/* Space2 */}


              <div className="lg:w-1/2 w-full  lg:mt-0">
                <div className=" w-full  px-auto">
                  <img
                    src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection7%2Fcustomers-stories.6cee8db7b8fdaff838c7846011b6bd1f.png&w=1920&q=75"
                    alt="Content1" className="object-cover mx-auto w-auto max-h-full" />
                  {/* <Image
                                src={Section1}
                                alt="Content1" className="object-cover w-full h-auto" /> */}
                </div>
              </div>




            </div>


          </div>
        </div>
        {/* ----------section---------- */}

        {/* ----------section---------- */}
        <div className="relative mb-36">
          <div className="mb-14">
            <div className="bg-white mt-16 mb-5">
              <div className="mx-auto my-2 h-1 w-5 bg-black "></div>
              <div className="mx-auto my-2 h-1 w-4 bg-black "></div>
              <div className="mx-auto my-2 h-1 w-3 bg-black "></div>
              <div className="mx-auto my-2 h-1 w-2 bg-black "></div>
              <div className="mx-auto my-2 h-1 w-1 bg-black "></div>
              <div className="mx-auto my-2 h-1 w-2 bg-black "></div>
              <div className="mx-auto my-2 h-1 w-3 bg-black "></div>
              <div className="mx-auto my-2 h-1 w-4 bg-black "></div>
              <div className="mx-auto my-2 h-1 w-5 bg-black "></div>
            </div>
            <div className="text-center mb-16">
              <div className="text-gray-moreinfo text-lg font-normal py-2 leading-6">
                Blog
              </div>
              <div className="leading-normal">
              <div className=" text-4xl text-black font-medium">
                OUR TEAM OF MEDICAL EXPERTS
              </div>
              <div className=" text-4xl text-black font-medium">
                SHARE THEIR THROUGHS
              </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" sm:grid grid-cols-3  px-4   space-y-6 md:space-y-0 md:gap-4">

              <div className="h-full col-span-3 xl:col-span-3  rounded-md flex items-center">
                <div className="text-gray-600 body-font">
                  <div className="flex flex-wrap w-full mb-4 p-4">
                    {/* <div className="w-full mb-6 lg:mb-0">
                                        <h1 className="sm:text-4xl text-5xl  font-bold title-font mb-2 text-gray-900">BLOG</h1>
                                        <div className="h-1 w-20 bg-gray-500 rounded"></div>
                                    </div> */}
                  </div>
                  <div className="flex flex-wrap -m-4 mb-12">
                    <div className="lg:w-1/3 w-full p-4 h-4/5">
                      <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <img className="w-full mb-6" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection8%2Fsub-1.3ec1e39bd5a611ef07286ef3a22c84d5.png&w=1920&q=75" alt="" />
                        <div className="px-8 rounded-lg bg-white container mx-auto">
                          <div className="text-gray-moreinfo text-center  text-lg font-normal mb-1.5 leading-6">
                            Lifestyle
                          </div>
                          <div className="text-black font-medium text-2xl hover:text-gray-900 hover:cursor-pointer mb-3.5 leading-normal">Different types of protein
                            powder & How to use it</div>
                          <div className="flex flex-row justify-between mb-3.5">
                            <div className="text-gray-newstime font-light text-base leading-6">September 20, 2021</div>
                            <div className="text-gray-moreinfo text-base font-light leading-6">
                              by Trisha Smith
                            </div>
                          </div>

                          <p className="text-black text-lg leading-7 font-light tracking-wide">Protein powder remains a popular topic of discussion amongst the Sweat Community you might have considered a nutritional supplement </p>
                          {/* <button className="mt-6 py-2 px-4 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"><a href="/blog">READ MORE</a></button> */}
                        </div>

                      </div>
                    </div>


                    <div className="lg:w-1/3 w-full  p-4">
                      <div className="relative">
                        <img className="object-cover h-full w-auto" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection8%2Fsub-2.7a514ab7a9d4066ad931feaf025e68a2.png&w=828&q=75" alt="coverimg" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex flex-col">
                        <div className="text-white text-center text-lg font-normal mb-1.5 leading-6">
                            Lifestyle
                          </div>
                          <div className="text-white font-medium text-2xl text-center hover:text-gray-900 hover:cursor-pointer mb-3.5 leading-normal">Different types of protein
                            powder & How to use it</div>
                        </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-1/3 w-full p-4">
                      <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <img className="w-full mb-6" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fhome%2Fsection8%2Fsub-3.18754cde872055f53963101ccc23d7c8.png&w=1920&q=75" alt="" />
                        <div className="px-8 rounded-lg bg-white container mx-auto">
                          <div className="text-gray-moreinfo text-center  text-lg font-normal mb-1.5 leading-6">
                            Lifestyle
                          </div>
                          <div className="text-black font-medium text-2xl hover:text-gray-900 hover:cursor-pointer mb-3.5 leading-normal">Different types of protein
                            powder & How to use it</div>
                          <div className="flex flex-row justify-between mb-3.5">
                            <div className="text-gray-newstime font-light text-base leading-6">September 20, 2021</div>
                            <div className="text-gray-moreinfo text-base font-light leading-6">
                              by Trisha Smith
                            </div>
                          </div>

                          <p className="text-black text-lg leading-7 font-light tracking-wide">Protein powder remains a popular topic of discussion amongst the Sweat Community you might have considered a nutritional supplement </p>
                          {/* <button className="mt-6 py-2 px-4 bg-yellow-400 text-indigo-900 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300"><a href="/blog">READ MORE</a></button> */}
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
            <button className="text-white bg-green-shop leading-4  rounded-full px-12 py-1 hover:border-transparent ">
              <div className="py-2 font-normal text-lg">ALL BLOG</div>
            </button>
          </div>
                </div>

              </div>



            </div>

          </div>
        </div>
        {/* ----------section---------- */}

         {/* ----------section---------- */}
         <div className="relative">
         <div className="w-full flex justify-center">
            <button className="text-white bg-green-shop leading-4  rounded-full px-12 py-1 hover:border-transparent ">
              <div className="py-2 font-normal text-lg">MESSAGE PHONE CONTACT</div>
            </button>
          </div>
        </div>
        {/* ----------section---------- */}

        {/* footer */}
      </div>
    </>
  )
}
