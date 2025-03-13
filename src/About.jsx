import React from "react";
import Banner from "./Banner";
import Navbar from "./NavBar";
import Footer from "./Footer";

function About(){
    return(
        <div className='relative min-h-[100vh]'>
            <Banner />
            <Navbar />
            <div className="relative border-solid border-5 text-center mt-[10%] mx-[10%] p-5 bg-sky-300">
                <h1 className="text-[2rem]">Here you could display all the information you want about your business/services for potential customers to see.</h1>
                <p className="text-[2rem]">It can be as long or short as you need it to be and have a variety of other things like photos or videos!</p>
            </div>
            <Footer 
                position = "absolute"
            />
        </div>
    )
}

export default About;