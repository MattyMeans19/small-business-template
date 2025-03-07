import { useState } from 'react'
import Navbar from "./NavBar";
import PageCard from "./PageCards";
import Banner from "./Banner";

function App() {

  return(
    <div>
        <Banner />
        <Navbar />
        <p className="place-self-center">☝️You could have a navigation bar with buttons to other pages☝️</p>
       <div className='px-20 mt-50 border-double border-10 lg:mx-100 rounded-3xl bg-linear-to-br from-sky-300 to-cyan-100 mb-30'>
            <p className='sm:place-self-center text-[3em]'>Down here you could have anything you want! A greeting for customers and/or a short summary for your business.</p>
        </div>
        <p className="place-self-center mb-10">👇 Or you could have 'Cards' that link to other pages with a brief description of the page content 👇</p>
        <div className="flex flex-wrap gap-30 justify-evenly mb-25">
        <PageCard 
            title="Products"
            content="Link to product page, an image, and info would go here"
        />
        <PageCard 
            title="About"
            content="Link to About page, an image, and info would go here"
        />
        <PageCard 
            title="Contact"
            content="Link to Contact page, an image, and info would go here"
        />
        </div>
    </div>
    
)
}

export default App
