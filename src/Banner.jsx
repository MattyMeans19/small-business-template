import React from "react";

function Banner(){
    return(
        <div className='banner-bg flex flex-col lg:flex-row lg:flex-nowrap lg:py-5'>
            <h1 className='text-[5em] text-center lg:basis-1/3'>Business Name</h1>
            <img src='/genericbuisnesslogo.jpg' className='size-[15em] place-self-center lg:basis-1/3'></img>
            <p className="text-[2em] text-center px-5 lg:basis-1/3">You could put some info here, like a motto, business location, and/or telephone number.</p>
      </div>
    )
}

export default Banner;