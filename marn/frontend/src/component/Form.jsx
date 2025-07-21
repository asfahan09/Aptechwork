import axios from 'axios';
import React, { useState } from 'react'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, toast } from 'react-toastify';
export default function Form() {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [pswd, setPswd] = useState("");
 

  async function SubmitFun(){
    try {

      let u_r = /^(?!_)[a-zA-Z]{3,20}(?<!_)$/
      let p_r = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


      if (!name || !email || !pswd  ){
        toast.error("all required")
        return;
      }
      if (!u_r.test(name)){
        toast.error("invalid username")
        return;
      }
      if (!p_r.test(pswd)){
        toast.error("invalid password")
        return;
      }

      axios.post("http://localhost:4001/lala/",{
        n : name,
        e : email,
        p : pswd,
       
      }).then(()=>{
        alert("Data Saved")
      }).catch((e)=>{
        console.log(e.message)
      })
    } 
    
    catch (error) {
      if(error.status === 409){
      toast.error("email exist")
      }
      else{
        console.log(error)

      }
    }
  }



  return (

<div>
 <ToastContainer/>
<div class="form-container">
  <h2>Register</h2>

    <label for="name">Name*</label>
    <input type="text" id="name" name="name" value={name} onChange={(e)=> setName(e.target.value)} required/>

    <label for="email">Email*</label>
    <input type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>

    <label for="password">Password*</label>
    <input type="password" id="password" name="password" value={pswd} onChange={(e)=> setPswd(e.target.value)} required/>


    <button type="Button" class="submit-btn" onClick={SubmitFun}>Submit</button>

</div>

    </div>
  )
}