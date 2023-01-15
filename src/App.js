import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ClipPath from "./Page/Clip-Path/clip-path";
import Login from "./Page/Login/login";
import Parallaxeffect from "./Page/ParallaxEffect/parallaxeffect";

export default function App() {
  
  return (
    <div className="App bg-1">
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<div className="m-16 mb-[100rem] text-1-sec4 text-8xl "> <p>samxma as</p> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <p>samxma as</p> </div>}/>
            <Route path="/clip_path" element={<ClipPath />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/parall" element={<Parallaxeffect />}/>
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}


