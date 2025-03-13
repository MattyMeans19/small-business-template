import React from 'react'
import Navbar from "./NavBar";
import Banner from "./Banner";
import Footer from "./Footer";

function Contact(){
    return(
        <div className='min-h-[100vh] relative'>
            <Banner />
            <Navbar />
            <div className='text-center border-solid border-5 p-5 mx-[5%] lg:mx-[10%] my-[5%] text-[1.5em] bg-sky-300'>
              <p className='text-[1.5rem] lg:text-[2rem]'>
                This is where your contact info goes. You could have a telephone number, email, and address. You could even have google maps integrated right here!
                The email can even be set up so that when it is clicked it will open the relevant application to send an email. Give it a try <a href="mailto: matt_means.dev@outlook.com" className='text-blue-700'> matt_means.dev@outlook.com</a>
            </p>
            <p className='text-[1.5rem] lg:text-[2rem]'>Same for the telephone number for mobile devices! <a href='tel: +15555555555' className='text-blue-700' >555-555-5555</a></p>  
            </div>
            
            <Footer
                position = "xlg:absolute"
            />
        </div>
    )
}

export default Contact;