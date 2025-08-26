import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";


const Home:React.FC = () =>{
    return (
        <>
        <Navbar/>
        <Hero/>
        <Features/>
        <Footer/>
        </>
    );
};

export default Home;