import { useState } from 'react'
import Navbar from "./NavBar";
import PageCard from "./PageCards";
import Banner from "./Banner";
import Footer from "./Footer";

function App() {

  return(
    <div className='relative min-h-[100vh] max-w-[100vw]'>
        <Banner />
        <Navbar />
       <div className='px-10 mt-50 border-double border-10 mx-[5%] xlg:mx-100 rounded-3xl bg-linear-to-br from-sky-300 to-cyan-100 mb-30'>
            <p className='place-self-center text-[1.5rem] lg:text-[3rem]'>Down here you could have anything you want! A greeting for customers and/or a short summary for your business.</p>
        </div>
        <p className="place-self-center mb-10 animate-bounce animate-infinite animate-ease-in">👇 Or you could have 'Cards' that link to other pages with a brief description of the page content 👇</p>
        <div className="flex flex-wrap gap-30 justify-evenly mb-25">
            <PageCard 
                title="Products"
                content="Link to product page, an image, and info would go here"
                link = "products"
            />
            <PageCard 
                title="About"
                content="Link to About page, an image, and info would go here"
                link = "about"
            />
            <PageCard 
                title="Contact"
                content="Link to Contact page, an image, and info would go here"
                link = "contact"
            />
        </div>

        <Footer 
            position = "lg:relative"
        />
    </div>
    
)
}

export default App
