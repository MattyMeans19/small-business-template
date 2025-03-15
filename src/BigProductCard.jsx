import React from "react";

function BigProductCard(props){
    return(
        <div className="w-full h-full">
            <div className="bg-blue-200 rounded-3xl w-min-auto p-5 border-solid border-1 shadow-xl shadow-gray-700 inset-shadow-sm inset-shadow-gray-600 flex flex-col gap-15 mx-5">
                <button className="text-blue-700 place-self-start border-solid border-2 border-blue-700 p-1 hover:bg-blue-400"
                onClick={() =>(
                    props.onExit()
                )}>
                    X
                </button>
                <p className="lg:text-[2em]">{props.type}</p>
                <h2 className="text-center lg:text-[4rem]">{props.title}</h2>
                <p className="text-center lg:text-[4rem] border-solid border-2">{props.img}</p>
                <p className="text-center lg:text-[3rem] ">{props.description}</p>
                <h3 className="text-center lg:text-[4rem]">{props.price}</h3>  
            </div>
        </div>
    )
}

export default BigProductCard;