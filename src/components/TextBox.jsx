import React from "react";


function TextBox(props){
    return(
        <div className='px-10 mt-50 border-double border-10 mx-[5%] xlg:mx-100 rounded-3xl bg-linear-to-br from-sky-300 to-cyan-100 mb-30 flex-grow'>
            <h1 className="text-center text-[3rem] font-bold">{props.title}</h1>
            <h2 className="text-[2rem]">{props.body}</h2>
            <h2 className="italic text-[1.5em]">{props.ending}</h2>
        </div>
    )
}

export default TextBox;