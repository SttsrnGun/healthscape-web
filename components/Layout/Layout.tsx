import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


export default function Layout({children}){
    return(
        <>
        <div className="sticky top-0 z-40">
            <Header />
        </div>
        {children}
        <Footer />
    </>
    )
}