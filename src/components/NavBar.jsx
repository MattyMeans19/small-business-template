import React from "react";
import { NavLink } from "react-router";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar(){

    return(
        <div>
           <div className="flex flex-wrap lg:flex-nowrap place-content-center lg:gap-30 bg-sky-500 sm:px-25 rounded-b-lg w-[75%] place-self-center">
                <button className="border-double border-5 border-t-0 border-black rounded-b-lg text-[1.5em] text-white xlg:w-[10%] hover:bg-blue-400 bg-sky-600"><NavLink to="/">Home</NavLink></button>
                <button className="border-double border-5 border-t-0 border-black rounded-b-lg text-[1.5em] text-white xlg:w-[10%] hover:bg-blue-400 bg-sky-600"><NavLink to="/products">Products</NavLink></button>
                <button className="border-double border-5 border-t-0 border-black rounded-b-lg text-[1.5em] text-white xlg:w-[10%] hover:bg-blue-400 bg-sky-600"><NavLink to="/about">About</NavLink></button>
                <button className="border-double border-5 border-t-0 border-black rounded-b-lg text-[1.5em] text-white xlg:w-[10%] hover:bg-blue-400 bg-sky-600"><NavLink to="/contact">Contact</NavLink></button>
                <button className="hover:bg-sky-400 px-5"><ShoppingCartIcon /></button>
            </div> 
            <p className="place-self-center animate-bounce animate-infinite animate-ease-in animate-reverse mt-2">☝️You could have a navigation bar with buttons to other pages☝️</p>
        </div>
        
    )
}

export default Navbar;