import React, {useState} from "react";
import Banner from "./Banner";
import Navbar from "./NavBar";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

function Products(){
    const [products, addProducts]= useState( [
        {title: "Product 1", description: "product description will go here as well as any images.", extra:""},
        {title: "Product 2", description: "product description will go here as well as any images.", extra:""},
        {title: "Product 3", description: "product description will go here as well as any images.", extra:""},
    ]);

    return(
        <div className="min-h-[100vh] relative">
            <Banner />
            <Navbar />
            <h1 className="border-solid border-5 mx-[20%] my-[5%] text-[2em] text-center bg-blue-200">Here you could have a list of the different products you sell.</h1>
            <p className="text-[1em] text-center animate-bounce animate-infinite animate-ease-in">👇 Item Cards for you prodocuts could be a neat way to sort them out! 👇</p>
            <div className="flex justify-evenly flex-wrap gap-5 mx-[5%] mb-[5%]">
               {products.map((product) => (
                    <ProductCard 
                        title= {product.title}
                        description={product.description}
                        extra={product.extra}
                    />
               )
            )}
            </div>

            <Footer 
                position="xlg:absolute"
            />  
        </div>
    )
}

export default Products;