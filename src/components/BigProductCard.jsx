import React, {useState} from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AdjustButtons from "./AdjustButtons";

function BigProductCard(props){
    const [cost, changeCost] = useState(props.price);
    const [amount, changeAmount] = useState(1)

    function calculateCost(units){
        var newCost = props.price * units;
        changeCost(newCost.toFixed(2));
        changeAmount(units)
    }



    return(
        <div className="w-full h-full">
            <div className="bg-blue-200 rounded-3xl w-min-auto p-5 border-solid border-1 shadow-xl shadow-gray-700 inset-shadow-sm inset-shadow-gray-600 flex flex-wrap gap-15 mx-5">
                <button className="text-blue-700 place-self-start border-solid border-2 border-blue-700 p-1 hover:bg-blue-400"
                onClick={() =>(
                    props.onExit()
                )}>
                    X
                </button>
                <p className="lg:text-[2em] flex-1/2 text-end underline underline-offset-8">In Stock: {props.stock}</p>
                <h2 className="text-center text-[2em] lg:text-[4em] flex-1/1">{props.title}</h2>
                <p className="text-center text-[2em] lg:text-[4em] border-solid border-2 flex-1/1">{props.img}</p>
                <p className="text-center text-[1.5em] lg:text-[3em] flex-1/1">{props.description}</p>
                {props.stock > 0 ?
                <div className="flex flex-col gap-3 lg:flex-row flex-nowrap justify-evenly w-full">
                    <AdjustButtons 
                    max={props.stock}
                    cost={calculateCost}
                    />
                    <div className="flex-1/3 flex flex-nowrap gap-10">
                        <h3 className="text-start text-[2em] lg:text-[3em]">${cost}</h3>
                        <button className="place-self-center border-solid border-2 p-2 bg-gray-200 hover:bg-gray-700"
                        onClick={() =>(
                            props.itemAdded(props.sku, amount)
                        )}
                        ><AddShoppingCartIcon /></button>
                    </div>
                </div> : 
                <h3 className="text-[3rem] w-full text-center text-red-700">Out of Stock</h3>}
                
            </div>
        </div>
    )
}

export default BigProductCard;