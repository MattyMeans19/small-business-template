import React from "react";

function Navbar(){
    return(
        <div className="flex flex-wrap lg:flex-nowrap place-content-center lg:gap-30 bg-sky-500 sm:px-25">
        <button className="border-double border-5 border-t-0 border-black rounded-b-lg px-10 text-[1.5em] text-white w-[100%] hover:bg-blue-400 bg-sky-600">Home</button>
        <button className="border-double border-5 border-t-0 border-black rounded-b-lg px-10 text-[1.5em] text-white w-[100%] hover:bg-blue-400 bg-sky-600">Products</button>
        <button className="border-double border-5 border-t-0 border-black rounded-b-lg px-10 text-[1.5em] text-white w-[100%] hover:bg-blue-400 bg-sky-600">About</button>
        <button className="border-double border-5 border-t-0 border-black rounded-b-lg px-10 text-[1.5em] text-white w-[100%] hover:bg-blue-400 bg-sky-600">Contact</button>
    </div>
    )
}

export default Navbar;