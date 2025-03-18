import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import TextBox from "./components/TextBox";

function About(){
    return(
        <div className='min-h-[100vh] flex flex-col'>
            <Banner />
            <Navbar />
            <TextBox 
                title="Tell your customers about yourself/your business!"
                body="Here you could display all the information you want about your business/services for potential customers to see."
                ending="It can be as long or short as you need it to be and have a variety of other things like photos or videos!"
            />
            <Footer />
        </div>
    )
}

export default About;