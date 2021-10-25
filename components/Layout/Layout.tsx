import React from "react";
import Header from "../header";
import Footer from "./Footer/Footer";
import Navbar from "../header/navbar";


export default function Layout({ children }) {
    return (
        <>
            <Header />
            {/* <Navbar/> */}
            {children}
            <Footer />
        </>
    )
}