import React from "react";

const Policy = () => {
    return (
        <>
            <div className={"bg-black h-14 py-3 mx-auto "}>
                <div className="text-center text-white">
                    This website uses cookies to ensure you get the best experience on our website.
                    <span className="text-gray-moreinfo pl-1 pr-3">
                        <a href="#">More Info.</a>
                    </span>
                    <button className="py-2 text-blue-1000 bg-white text-sm   leading-4  rounded-md px-4  hover:border-transparent ">
                        Accept
                    </button>
                </div>
            </div>
        </>
    )
}

export default Policy;