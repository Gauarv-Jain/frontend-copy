import { useState, useEffect} from "react";
import "./login.css";
import validator from 'validator';

export default function Login(){

    const [eactive, setEactive] = useState(false);
    const [evalid, setEvalid] = useState(false);
    const[subbut, setSubbut] = useState(false);

    const [pactive, setPactive] = useState(null);
    const [pvalid, setPvalid] = useState(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [estate, setEstate] = useState("");
    const [pstate, setPstate] = useState("");

    useEffect(() => {

        if(email === ""){
            setEstate("-white/90")
        }
        else if(evalid){
            setEstate("-green-500")
        }
        else if(eactive && !evalid){
            setEstate("-yellow-500")
        }else if(!eactive && !evalid){
            setEstate("-rose-500")
        }
        

        if(password === ""){
            setPstate("-white/90")
        }
        else if(pvalid){
            setPstate("-green-500")
        }
        else if(pactive && !pvalid){
            setPstate("-yellow-500")
        }
        else if(!pactive && !pvalid){
            setPstate("-rose-500")
        }

        if(evalid && pvalid){
            setSubbut(true);
        }else{
            setSubbut(false);
        }
    
    }, [eactive, evalid, pactive, pvalid]) 
   
    // to check if the pass and email are valid
    const handler = (e) => {
        e.preventDefault();
        
        if(e.target.name==="email"){
            setEmail(e.target.value);
            if(email === ""){
                setEstate("-white/90")
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
                setPstate("-white/90")
            }
            else if(password.length<8){
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
        <div className="flex place-items-center place-content-center h-[90vh]">
        <form className="flex flex-col h-fit items-end gap-3">

            {/* email */}
            <div className= {`flex items-center ${estate==="-rose-500" ? "wrong" : ""}`} > 

                <label className={`font-sans font-bold text-2xl w-fit pr-4 text${estate} ${estate==="-rose-500" ? "pb-4" : ""}`}>              
                    <span className={`${estate==="-green-500" ? "correct" : ""}`} style={{ "--char-index": 0 }}>E</span>
                    <span className={`${estate==="-green-500" ? "correct" : ""}`} style={{ "--char-index": 1 }}>m</span>
                    <span className={`${estate==="-green-500" ? "correct" : ""}`} style={{ "--char-index": 2 }}>a</span>
                    <span className={`${estate==="-green-500" ? "correct" : ""}`} style={{ "--char-index": 3 }}>i</span>
                    <span className={`${estate==="-green-500" ? "correct" : ""}`} style={{ "--char-index": 4 }}>l</span>                                   
                </label>
                
                {/* email input and error */}
                <div>

                    {/* email input */}
                    <input type="email" 
                    className={`bg-1-lightback highlight-white/5 caret-teal-50 text-1-sec3 
                    focus:outline focus:outline-2 focus:outline-offset-4 
                    border-4 rounded  
                    ${estate === "-yellow-500" ? "border-yellow-500 outline-yellow-700 ":""}  
                    ${estate === "-green-500" ? "border-green-500 outline-green-700 ":""}  
                    ${estate==="-rose-500" ? "wrong border-red-500" : ""} 
                    px-[1rem] py-[1rem] font-normal `}
                    name="email"
                    onChange={handler} onFocus={onFocus} onBlur={onBlur}
                    title="Enter valid email address" placeholder="Enter valid email address" />

                    {/* email error message */}
                    <div className={`text-center text-xs text-rose-500 ${estate==="-rose-500" ? "block" : "hidden"}`}>Enter a valid email address</div>

                </div>
            </div>

            {/* password */}
            <div className= {`flex items-center ${pstate==="-rose-500" ? "wrong" : ""}`} >

                <label className={`font-sans font-bold text-2xl w-fit pr-4 text${pstate} ${pstate==="-rose-500" ? "pb-4" : ""}`}>              
                    <span className={`${pstate==="-green-500" ? "correct" : ""}`} style={{ "--char-index": 0 }}>P</span>
                    <span className={`${pstate==="-green-500" ? "correct" : ""}`} style={{ "--char-index": 1 }}>a</span>
                    <span className={`${pstate==="-green-500" ? "correct" : ""}`} style={{ "--char-index": 2 }}>s</span>
                    <span className={`${pstate==="-green-500" ? "correct" : ""}`} style={{ "--char-index": 3 }}>s</span>
                    <span className={`${pstate==="-green-500" ? "correct" : ""}`} style={{ "--char-index": 4 }}>w</span>
                    <span className={`${pstate==="-green-500" ? "correct" : ""}`} style={{ "--char-index": 5 }}>o</span>
                    <span className={`${pstate==="-green-500" ? "correct" : ""}`} style={{ "--char-index": 6 }}>r</span>
                    <span className={`${pstate==="-green-500" ? "correct" : ""}`} style={{ "--char-index": 7 }}>d</span>              
                </label>
                
                
                {/* password input and error */}
                <div>

                    {/* password input */}
                    <input  type="password" 
                    className={`bg-1-lightback highlight-white/5 caret-teal-50 text-1-sec3  
                    focus:outline focus:outline-2 focus:outline-offset-4  
                    border-4 rounded  
                    ${pstate === "-yellow-500" ? "border-yellow-500 outline-yellow-700 ":""}  
                    ${pstate === "-green-500" ? "border-green-500 outline-green-700 ":""}  
                    ${pstate==="-rose-500" ? "wrong border-red-500 " : ""}  
                    px-[1rem] py-[1rem] font-normal  `}
                    name="password"
                    onChange={handler} onFocus={onFocus} onBlur={onBlur}
                    placeholder="Password" />


                    {/* password error message */}
                    <div className={`text-center text-xs text-rose-500 ${pstate==="-rose-500" ? "block" : "hidden"}`}>Password must be at least 8 characters</div>


                </div>
            </div>

            {/* subbmit buttor */}
            <span className={`w-fit col-span-2 px-[5.2rem] active:scale-90 py-4 rounded font-bold  ${subbut ? "bg-green-500 text-1-sec3 cursor-pointer":"bg-1-lightback text-gray-500 cursor-not-allowed"} `}>Submit</span>

        </form>
        </div>
    );
}