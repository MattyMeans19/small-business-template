import React from "react";

function ProductOption(props){
    return(
        <div>
            <button className="flex flex-wrap lg:grid grid-rows-2 grid-cols-3 border-b-solid border-b-2 border-r-solid border-r-2 p-5 bg-sky-500 hover:bg-gray-600 size-[100%]"
            onClick={() =>(
                props.onSelect(props.name)
            )}>
                <p className="row-start-1 col-span-full text-[1.5em]">{props.name}</p>
                <p className="row-start-2 col-span-full text-[1em]">{props.description}</p>
            </button> 
        </div>
        
    )
}

export default ProductOption;