import React from "react";

function PageCard(props){
    return(
        <div className="bg-blue-200 rounded-3xl place-items-center w-min p-15 border-solid border-1 shadow-xl shadow-gray-700 inset-shadow-sm inset-shadow-gray-600">
            <h2 className="text-[3em] underline">{props.title}</h2>
            <p className="text-[1.5em] mt-5">{props.content}</p>
        </div>
    )
}

export default PageCard;