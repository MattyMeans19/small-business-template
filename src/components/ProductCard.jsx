import React, {useState} from "react";

function ProductCard(props){

    return(
        <div>
            <div className="hover:bg-blue-600 bg-blue-200 rounded-3xl w-min-auto p-5 border-solid border-1 shadow-xl shadow-gray-700 inset-shadow-sm inset-shadow-gray-600 grid grid-cols-4"
            onClick={() =>(
                props.onSelect(props.sku)
            )}>
                <p className="text-[0.75em] col-start-1">In Stock: {props.stock}</p>
                <h2 className="text-center text-[2rem] row-start-1 col-start-2 col-span-2">{props.title}</h2>
                <p className="text-center text-[2rem] row-start-2 col-span-full border-solid border-2">{props.img}</p>
                <p className="text-[1.5rem] text-center row-start-3 col-span-full">{props.description}</p>
                <h3 className="text-center text-[2rem] row-start-4 col-start-3 col-span-2">{props.price}</h3>  
            </div>
        </div>
    )
}

export default ProductCard;