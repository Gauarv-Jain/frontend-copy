import React, { useState } from "react";
import video from "./Assets/video-bg.mp4"

function App() {
  
  const [yo, setYo] = useState(false);

  const SS = ()=>{setYo(!yo)}

  return (
    <div className="App">

        <div className="dede w-full h-[100vh] p-6">

            <button onClick={SS} className="bg-white m-6">click me bro</button>

            <div className="videobg w-[70%]
            grid grid-cols-1 grid-rows-1">

                <video className="ontop " src={video} autoPlay loop muted />

                <div className={` ${yo? "toclip":""} anotherone ontop z-[1] flex bg-orange-700/60  place-content-center `}>
                    <div className="text-4xl font-bold my-auto">Hellow</div>
                </div>

                <div className={`ontop ${yo? "tonoclip":""} anothertwo flex z-[1] place-content-center`}>
                    <div className="text-4xl font-bold my-auto text-center">This  is at the bottom can u see this stuff ?</div>
                </div>

            </div>
            
        </div>
    </div>
  );
}

export default App;

