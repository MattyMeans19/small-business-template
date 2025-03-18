import React from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function BigProductCard(props){
    return(
        <div className="w-full h-full">
            <div className="bg-blue-200 rounded-3xl w-min-auto p-5 border-solid border-1 shadow-xl shadow-gray-700 inset-shadow-sm inset-shadow-gray-600 flex flex-wrap gap-15 mx-5">
                <button className="text-blue-700 place-self-start border-solid border-2 border-blue-700 p-1 hover:bg-blue-400"
                onClick={() =>(
                    props.onExit()
                )}>
                    X
                </button>
                <p className="lg:text-[2em] flex-1/2 text-end underline underline-offset-8">{props.type}</p>
                <h2 className="text-center text-[2em] lg:text-[4em] flex-1/1">{props.title}</h2>
                <p className="text-center text-[2em] lg:text-[4em] border-solid border-2 flex-1/1">{props.img}</p>
                <p className="text-center text-[1.5em] lg:text-[3em] flex-1/1 ">{props.description}</p>
                <div className="place-items-center flex flex-nowrap gap-5 justify-center flex-1/3">
                    <button className="border-solid border-2 p-2 bg-gray-300 hover:bg-gray-700"><RemoveIcon /></button>
                    <p className="border-solid border-2 p-5 bg-white">0</p>
                    <button className="border-solid border-2 p-2  bg-gray-300 hover:bg-gray-700"><AddIcon /></button>
                </div>
                <div className="flex-1/3 flex flex-nowrap gap-10">
                <h3 className="text-start text-[2em] lg:text-[3em]">{props.price}</h3>
                <button className="place-self-center border-solid border-2 p-2 bg-gray-200"><AddShoppingCartIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default BigProductCard;