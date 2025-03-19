import { useState } from 'react'
import Navbar from "./components/NavBar";
import PageCard from "./components/PageCards";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import TextBox from './components/TextBox';

function App() {

  return(
    <div className='flex flex-col flex-grow'>
        <Banner />
        <Navbar />
        <TextBox 
            title="Introduction"
            body="This would be the main page of your site. Here you could have a quick greeting for your customers or a brief summary of your business."
            ending="Text can be any size or style you want, and be as long as you need it. Add photos or videos for extra flair!"
        />
        <p className="place-self-center mb-10 animate-bounce animate-infinite animate-ease-in">👇 Or you could have 'Cards' that link to other pages with a brief description of the page content 👇</p>
        <div className="flex flex-wrap gap-30 justify-evenly mb-25">
            <PageCard 
                title="Products"
                content="Link to product page, an image, and info would go here"
                link = "/products"
            />
            <PageCard 
                title="About"
                content="Link to About page, an image, and info would go here"
                link = "/about"
            />
            <PageCard 
                title="Contact"
                content="Link to Contact page, an image, and info would go here"
                link = "/contact"
            />
        </div>

        <Footer />
    </div>
    
)
}

export default App
