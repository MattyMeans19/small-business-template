import React from 'react'
import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import TextBox from './components/TextBox';

function Contact(){
    const email = <p>email: <a href='mailto: matt_means.dev@outlook.com' className='text-blue-700 break-words text-[2rem]'> matt_means.dev@outlook.com</a></p>;
    const tele =  <p>Phone: <a href='tel: +15555555555' className='text-blue-700 lg:text-[2rem]' >555-555-5555</a></p>;
    return(
        <div className='min-h-[100vh] flex flex-col'>
            <Banner />
            <Navbar />
            <TextBox
                title="This is where your contact info goes (with clickable links)!"
                body={email}
                ending={tele}
            />
            <Footer/>
        </div>
    )
}

export default Contact;