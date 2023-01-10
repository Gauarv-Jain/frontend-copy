import { useState, useEffect } from "react";
import "./login.css";
import validator from 'validator';

export default function Login(){

    const [eactive, setEactive] = useState(false);
    const [evalid, setEvalid] = useState(false);
    const [pactive, setPactive] = useState(null);
    const [pvalid, setPvalid] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [estate, setEstate] = useState("text-1-lightback");
    const [pstate, setPstate] = useState("text-1-lightback");

    useEffect(() => {

        if(email === ""){
            setEstate("text-1-lightback")
        }
        else if(evalid){
            setEstate("text-green-500")
        }
        else if(eactive && !evalid){
            setEstate("text-yellow-500")
        }else if(!eactive && !evalid){
            setEstate("text-rose-500")
        }
        

        if(password === ""){
            setPstate("text-1-lightback")
        }
        else if(pvalid){
            setPstate("text-green-500")
        }
        else if(pactive && !pvalid){
            setPstate("text-yellow-500")
        }
        else if(!pactive && !pvalid){
            setPstate("text-rose-500")
        }
    
    }, [eactive, evalid, pactive, pvalid])
    
   
    // to check if the pass and email are valid
    const handler = (e) => {
        e.preventDefault();
        
        if(e.target.name==="email"){
            setEmail(e.target.value);
            if(email === ""){
                setEstate("text-1-lightback")
            }
            else if(!validator.isEmail(email)){
                setEvalid(false);
            }else{
                setEvalid(true);
            }    
        }
        else if(e.target.name==="password"){
            setPassword(e.target.value); 
            if(password === ""){
                setPstate("text-1-lightback")
            }
            else if(!validator.isStrongPassword(password)){
                setPvalid(false);
            }else{
                setPvalid(true);
            }
        }

    }

    const onFocus = (e) => {
        e.preventDefault();
        if(e.target.name==="email"){
            setEactive(true);           
        }
        else if(e.target.name==="password"){
            setPactive(true);            
        }
    }

    const onBlur = (e) => {
        e.preventDefault();
        if(e.target.name==="email"){
            setEactive(false);             
        }
        else if(e.target.name==="password"){
            setPactive(false); 
        }
    }
    
    
    return(
        <div className="flex place-content-center mt-40">
        <form className="grid grid-cols-2 grid-rows-2  ">

            {/* email */}
            <div className= {`justify-self-end ${estate}`} > 
            <label >              
                <span >E</span>
                <span >m</span>
                <span >a</span>
                <span >i</span>
                <span >l</span>                                   
            </label>
            </div>

            <div>
                <input type="email" 
                name="email"
                onChange={handler} onFocus={onFocus} onBlur={onBlur}
                title="Enter valid email address" placeholder="Enter valid email address" />
                <div>Enter a valid email address</div>
            </div>
                   

            {/* password */}
            
            <div className= {`justify-self-end ${pstate}`} >
            <label >              
                <span >P</span>
                <span >a</span>
                <span >s</span>
                <span >s</span>
                <span >w</span>
                <span >o</span>
                <span >r</span>
                <span >d</span>              
            </label>
            </div>

            <div>
                <input  type="password" 
                name="password"
                onChange={handler} onFocus={onFocus} onBlur={onBlur}
                placeholder="Password" />
                <div >Password must be at least 8 characters</div>
            </div>


            {/* subbmit buttor */}
            <span className="w-fit col-span-2 px-8 py-4 cursor-pointer m-auto">Submit</span>


        </form>
        </div>
    );
}