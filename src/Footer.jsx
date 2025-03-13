import React from "react";
import { Link } from "react-router";

function Footer(props){
    const year = new Date().getFullYear();
    const position = props.position;

    return(
        <div className={`bottom-0 w-[100vw] ${position} mt-10 lg:mt-0`}>
             <p className="text-[1em] place-self-center animate-bounce animate-infinite animate-ease-in">👇 Here in the footer you can also have links to different pages that may not need as much attention as others. 👇</p>
            <div className="bg-white flex flex-wrap gap-10 lg:gap-52 justify-center text-[1.5em]">
                <p>Copyright ©️YourBusiness {year}</p>
                <h2 className="text-sky-400"><Link to="/about">About</Link></h2>
                <h2 className="text-sky-400"><Link to="/contact">Contact</Link></h2>
            </div>
        </div>

    )
}

export default Footer;