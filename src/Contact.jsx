import React from 'react'
import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import TextBox from './components/TextBox';

function Contact(){
    const email = <a href='mailto: matt_means.dev@outlook.com' className='text-blue-700'> matt_means.dev@outlook.com</a>;
    const tele =  <a href='tel: +15555555555' className='text-blue-700' >555-555-5555</a>;
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