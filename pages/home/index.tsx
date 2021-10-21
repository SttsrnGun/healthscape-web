import Link from "next/link";

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
          </div><div className="bg-white">
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
        <div >
          <div className="text-gray-moreinfo text-center text-lg font-normal mb-3">
            Highlight
          </div>
          <div className="text-center text-4xl text-black font-medium">
            FEATURED PRODUCTS
          </div>
        </div>
        {/* ----------section---------- */}

        {/* ----------section---------- */}
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
      </div>
    </>
  )
}
