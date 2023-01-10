import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
        <div className="mt-[55px]"></div>
        <nav className="fixed top-0 left-0 w-full
        flex flex-wrap 
        items-center justify-between 
        px-2 py-3 
        bg-1-lightback">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between text-1-sec2 ">
            
                {/* name and droupdown button */}
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
                    
                    {/* heading or website name or logo */}
                    <Link className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase hover:text-1-sec1"
                    to="/"> HOME </Link>

                    {/* mobel nav button droupdown */}
                    <button
                    className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                    <i className="fas fa-bars"></i>
                    </button>

                </div>
                
                {/* reflinks */}
                <div className={ "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden") }>
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                    {/* link to the clip_path   */}
                    <li className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:text-1-sec1">
                        <Link to="/clip_path">Clip-Path</Link>
                    </li>

                    {/* Login page */}
                    <li className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:text-1-sec1">
                        <Link to="/login">Login</Link>
                    </li>

                    </ul>
                </div>


            </div>
        </nav>
    </>
  );
}