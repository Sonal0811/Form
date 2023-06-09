import React, { useState } from 'react'
import './Front.css';
import  { useNavigate } from'react-router-dom';
import 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export const Frontpg = () => {
   const [email , setEmail] = useState("");
   const [ name , setName] = useState("");
   const [occupation , setOccupation] = useState("");
   const [error , setError] = useState();
   const navigate = useNavigate();

   const handelClick = () => {
    if(email.includes("@")&& name!== ""&& occupation!== ""){
        navigate("/info",{state:{email:email,name:name,occupation:occupation}});
        }
        else if (!email.includes("@")){
          setError("Please enter a valid Email")
        }
        else if(name=== "" || occupation=== ""){
            setError("Credential can't be blank")
        }
   }
  return (
    <>
    <div style={{context : "center"}} className='form'>
        <br/>
        <input className='input_form'
        type='email' placeholder='Enter your mail ID' value ={email}
            onChange ={e => setEmail(e.target.value)}/>
        <input className='input_form' type='text' placeholder='Enter your name' value ={name}
            onChange ={e => setName(e.target.value)}/>
        <input className='input_form' type='text' placeholder='Enter your occupation' value ={occupation}
            onChange ={e => setOccupation(e.target.value)}/>
            <input class="btn btn-primary" type="submit" value="Submit" onClick={handelClick}></input>
            <br/>
        <span className='span'>{error}</span>
    </div>

</>
)
}