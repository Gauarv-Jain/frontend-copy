import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)
  
    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if(currentScrollPos > prevScrollPos){
            setVisible(false)     
        }else{
            setVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }
  
    useEffect( () => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

  return (
    <>
        <div className={` mt-[62px] `}></div>
        <nav className={`fixed top-0 left-0 w-full
        flex flex-wrap 
        px-2 py-3 
        items-center justify-between 
        bg-1-lightback 
        ${visible ? ' show ' : ' fadee '} `}>
            <div className={` container px-4 mx-auto flex flex-wrap items-center justify-between text-1-sec2  `}>
            
                {/* name and droupdown button */}
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
                    
                    {/* heading or website name or logo */}
                    <Link className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase hover:text-1-sec1"
                    to="/"> HOME </Link>

                    {/* mobel nav button droupdown */}
                    <button
                    className={` ${navbarOpen ? "rotate-90" : ""} transition-all cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none`}
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                    <i className="fas fa-bars">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    </i>
                    </button>

                </div>
                
                {/* reflinks */}
                <div className={ "lg:flex flex-grow items-center  " + (navbarOpen ? " flex " : " hidden ") }>
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                    {/* link to eyes follow cursor */}
                    <li className="px-3 py-2 rounded-lg flex hover:bg-gradient-to-r from-1-sec3 to-orange-600 text-xs uppercase font-bold leading-snug hover:text-1-sec1">
                        <Link onClick={()=>{setNavbarOpen(false)}}  to="/eyes">Eye follow</Link>
                    </li>

                    {/* link to animate on scroll */}
                    <li className="px-3 py-2 rounded-lg flex hover:bg-gradient-to-r from-1-sec3 to-orange-600 text-xs uppercase font-bold leading-snug hover:text-1-sec1">
                        <Link onClick={()=>{setNavbarOpen(false)}}  to="/scroll">Animate on scroll</Link>
                    </li>

                    {/* link to parallax effect */}
                    <li className="px-3 py-2 rounded-lg flex hover:bg-gradient-to-r from-1-sec3 to-orange-600 text-xs uppercase font-bold leading-snug hover:text-1-sec1">
                        <Link onClick={()=>{setNavbarOpen(false)}}  to="/parall">Parallax-Effect</Link>
                    </li>

                    {/* link to the clip_path   */}
                    <li className="px-3 py-2 rounded-lg flex items-center text-xs uppercase font-bold leading-snug hover:text-1-sec1">
                        <Link onClick={()=>{setNavbarOpen(false)}}  to="/clip_path">Clip-Path</Link>
                    </li>

                    {/* Login page */}
                    <li className="px-3 py-2 rounded-lg flex items-center text-xs uppercase font-bold leading-snug hover:text-1-sec1">
                        <Link onClick={()=>{setNavbarOpen(false)}} to="/login">Login</Link>
                    </li>

                    </ul>
                </div>


            </div>
        </nav>
    </>
  );
}