import React, { useState, useEffect, useRef } from "react";
import "./aniEyes.css";
import face from "../../Assets/Eyes/saitama.png";
import lefteye from "../../Assets/Eyes/left_eye.png";
import righteye from "../../Assets/Eyes/left_eye.png";

export default function AniEyes() {
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

    const eyeLeft = useRef();
    const eyeRight = useRef();
//405.5 244.5   405 306
//618.5 296.5   619 358
    function calcAngle(element) {
        if (!element.current) return;
        
        let elX = element.current.offsetLeft + element.current.clientWidth / 2;
        let elY = 61.5 + element.current.offsetTop + element.current.clientHeight / 2;

        //console.log(elX, elY);

        var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
        var rot = (rad * (180 / Math.PI) * -1 )+ 180 ;
        if(element.current.id=="righteye"){
            return rot+50;
        }
        if(element.current.id=="lefteye"){
            return rot+50;
        }
        return rot;
    }

    const handleMouseMove = (event) => {
        setMouseCoordinates({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        console.log(mouseCoordinates);
    }, [mouseCoordinates]);

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };

    }, []);

    return (
        <div className="flex ">
            <div  className="relative m-auto">

                <img className="relative" src={face} alt="face"/>

                <img 
                ref={eyeLeft} 
                id="lefteye"
                style={{
                    transform: `rotate(${calcAngle(eyeLeft)}deg)`,
                }} 
                className=" absolute top-[228px] left-[389px]  transition-all duration-[0s] " src={lefteye} alt="lefteye"/>

                <img 
                ref={eyeRight} 
                id="righteye" 
                style={{
                    transform: `rotate(${calcAngle(eyeRight)}deg)`,
                }}
                className=" absolute top-[279.6px] left-[595px] transition-all duration-[0ms] " src={righteye} alt="righteye"/>

            </div>
        </div>
    );
}