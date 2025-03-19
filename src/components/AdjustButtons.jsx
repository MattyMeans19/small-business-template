import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function AdjustButtons(props){
    const [amount, adjustAmount] = useState(1)

    function Increase(){
        if(amount < props.max){
            const addAmount = amount + 1
            adjustAmount(addAmount)
            props.cost(addAmount)
        }
        
    }

    function Decrease(){
        if(amount > 1){
            const minusAmount = amount - 1
            adjustAmount(minusAmount)
            props.cost(minusAmount)
        }
    }

    return(
        <div className="place-items-center flex flex-nowrap gap-5 justify-center flex-1/3">
            <button className="border-solid border-2 p-2 bg-gray-300 hover:bg-gray-700"
            onClick={Decrease}
            ><RemoveIcon /></button>
            <p className="border-solid border-2 p-5 bg-white">{amount}</p>
            <button className="border-solid border-2 p-2  bg-gray-300 hover:bg-gray-700"
            onClick={Increase}
            ><AddIcon /></button>
        </div>
    )
}

export default AdjustButtons;