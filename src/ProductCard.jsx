import React from "react";

function ProductCard(props){
    return(
        <div className="bg-blue-200 rounded-3xl place-items-center w-min-auto p-15 border-solid border-1 shadow-xl shadow-gray-700 inset-shadow-sm inset-shadow-gray-600">
            <h2 className="text-center text-[2rem]">{props.title}</h2>
            <p className="text-[1.5rem]">{props.description}</p>
            <h3>{props.extra}</h3>
        </div>
    )
}

export default ProductCard;