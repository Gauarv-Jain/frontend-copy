import React, { useState } from "react";
import video from "../../Assets/video-bg.mp4";
import "./clip-path.css"

function Clip_path(){

    const [yo, setYo] = useState(false);

    const SS = ()=>{setYo(!yo)}

    return(
        <div className="dede p-6 flex gap-12 place-content-evenly">

            <div className="videobg w-[70%]
            grid grid-cols-1 grid-rows-1">

                <video className="ontop " src={video} autoPlay loop muted />

                <div className={` ${yo? "toclip":""} anotherone ontop z-[1] flex bg-1-sec3/60  place-content-center `}>
                    <div className="text-4xl text-1-sec2 font-bold my-auto">Hellow</div>
                </div>

                <div className={`ontop ${yo? "tonoclip":""} anothertwo flex z-[1] place-content-center`}>
                    <div className="text-4xl font-bold my-auto text-center text-1-lightback">This  is at the bottom can u see it ?</div>
                </div>

            </div>

            <button onClick={SS} className="bg-1-lightback text-1-sec1 items-center rounded-full">click me bro</button>
            
        </div>
    )
}

export default Clip_path;
