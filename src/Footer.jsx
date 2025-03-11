import React from "react";

function Footer(props){
    const year = new Date().getFullYear();
    const position = props.position;

    return(
        <div className={`lg:bottom-0 w-[100vw] lg:${position} mt-10 lg:mt-0`}>
             <p className="text-[1em] place-self-center animate-bounce animate-infinite animate-ease-in">👇 Here in the footer you can also have links to different pages that may not need as much attention as others. 👇</p>
            <div className="bg-white flex flex-wrap gap-10 lg:gap-52 justify-center text-[1.5em]">
                <p>Copyright ©️YourBusiness {year}</p>
                <a href="/about" className="text-sky-400">About</a>
                <a href="/contact" className="text-sky-400">Contact</a>
            </div>
        </div>

    )
}

export default Footer;