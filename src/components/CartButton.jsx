import React from "react";
import cart from "./Cart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function CartButton(){
    const itemAmount = cart.length;

    return(
        <div>
            <button className="hover:bg-sky-400 px-5 flex gap-3 pt-[1%]">
                <ShoppingCartIcon /> 
                {itemAmount > 0 && 
                <span className="grid grid-cols-1 place-items-center">
                    <span className="absolute col-start-1 col-row-1 bg-white rounded-full p-2 opacity-50 animate-ping"></span>
                    <span className="absolute col-start-1 col-row-1 bg-white rounded-full text-[0.5rem] p-1">{itemAmount}</span>
                </span>}
            </button> 
        </div>
    )


}

export default CartButton;