import React, {useCallback, useEffect, useState} from "react";
import ReactDom from "react-dom/client"

function PasswordGenerator(){

    const [Password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [numberChanged, setnumberChanged] = useState(false);
    const [charChanged, setcharChanged] = useState(false);

    const generatePassword = useCallback(()=>{
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged){
            str+="0123456789"
        }
        if(charChanged){
            str+="!@#$%^&*()_-+=:'/?><";
        }
        let pass = "";
        for(let i = 0; i<length; i++){
            pass+= str[Math.floor(Math.random()*str.length)];
        }
        setPassword(pass); 
    },[length,numberChanged,charChanged])
    

    
    useEffect(()=>{
        generatePassword();
    },[length,numberChanged,charChanged])


    return(
        <>
            <h1>{Password}</h1>
            <div className="second">
                <input type="range" min={4} max={24} value={length} onChange={(e)=>setLength(e.target.value)}></input>
                <label>Length({length})</label>

                <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>
                <label>Number</label>

                <input type="checkbox" defaultChecked={charChanged} onChange={()=>setcharChanged(!charChanged)}></input>
                <label>Character</label>
            </div>
        </>
    )
}


ReactDom.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);