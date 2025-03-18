import React, {useState} from "react";
import Banner from "./components/Banner";
import Navbar from "./components/NavBar";
import ProductView from "./components/ProductView";
import Footer from "./components/Footer";
import TextBox from "./components/TextBox";

function Products(){


    return(
        <div>
            <Banner />
            <Navbar />
            <TextBox 
                title="The crown jewel: Your Product Page!"
                body="It's important to have a functioning product menu where users can browse products and add them to their cart!"
                ending="Try out the product menu template below 👇"
            />
            <ProductView />
            <Footer />  
        </div>
    )
}

export default Products;