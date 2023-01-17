import React, {useState, useRef, useEffect, useMemo} from "react";
//import "./scrollAni.css";

export default function ScrollAni (){

    const [isVisible, setIsVisible] = useState(false);
    const target = useRef(null)

    const callbackFunction = entries => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    let options = useMemo( () => {
        return {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }       
    }, [])

    useEffect (() =>{
        const observer = new IntersectionObserver (callbackFunction, options);
        const currentTarget = target.current;
        observer.observe(currentTarget);
        
        return () => {
            observer.unobserve(currentTarget);
        }
    },[target, options]);

      
    return(
        <>

        <section className="h-screen">
            <h1 className={` ${!isVisible? ` text-1-sec3  `:` text-1-sec2 blur -translate-x-80 opacity-0 `} transition-all duration-[0.5s] text-8xl font-extrabold uppercase text-center `}>first heading</h1>
        </section>

        <section  className={` h-screen  `}  >
            <h1 ref={target} className={` ${isVisible? ` text-1-sec3  `:` text-1-sec2 blur -translate-x-80 opacity-0 `} transition-all duration-[0.5s] text-8xl font-extrabold uppercase text-center `}>2nd heading</h1>
        </section>

        <section className="h-screen">
            <h1 className={` ${!isVisible? ` text-1-sec3  `:` text-1-sec2 blur -translate-x-80 opacity-0 `} transition-all duration-[0.5s] text-8xl font-extrabold uppercase text-center `}>3rd heading</h1>
        </section>

        </>
    );
}