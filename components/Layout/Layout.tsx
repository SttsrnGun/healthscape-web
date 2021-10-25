import React from "react";
import Header from "../header";
import Footer from "./Footer/Footer";


export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}