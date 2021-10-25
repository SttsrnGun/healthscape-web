import React, { useEffect, useState } from "react";
import Promotion from "./Promotion";
import Policy from "./Policy";
import Menubar from "./Menubar";


const header = () => {

  const [isAwayFromTop, setIsAwayFromTop] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 250) {
        setIsAwayFromTop(true);
      } else {
        setIsAwayFromTop(false);
      }
    })
  })

  return (
    <>
      <div className={isAwayFromTop ? "sticky top-0 z-50" : ""}>
        <Policy />
        <Promotion />
        <Menubar isAwayFromTop={isAwayFromTop} />
      </div>
    </>
  )
}

export default header;