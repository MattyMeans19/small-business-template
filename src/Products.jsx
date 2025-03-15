import React, {useState} from "react";
import Banner from "./Banner";
import Navbar from "./NavBar";
import ProductView from "./ProductView";
import Footer from "./Footer";

function Products(){


    return(
        <div className="min-h-[100vh] relative">
            <Banner />
            <Navbar />
            <h1 className="border-solid border-5 mx-[20%] my-[5%] text-[2em] text-center bg-blue-200">Here you could have a list of the different products you sell.</h1>
            <ProductView />
            <Footer 
                position="xlg:absolute"
            />  
        </div>
    )
}

export default Products;