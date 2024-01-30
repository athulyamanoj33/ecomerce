import axios from "axios";
import {  useState } from "react";

import { useNavigate } from "react-router-dom";


function Login() {
    const[userName,setUserName]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState(null)
    const navigate = useNavigate();
   function login(e) {
    e.preventDefault()
    if(password===""||userName===""){
        setError("password or username cannot be empty")
    }else{
        console.log("hellow")
        axios.post('https://dummyjson.com/auth/login',{userName,password})
        .then((res)=>res.json())
        .then((json)=>console.log(json.response.data))
        .catch((error)=>{
            console.log(error.response.data)
            if(error.response.data){
                setError("User not found")
            }
        })

    }
       

   }

    
  return (

    <div className="flex flex-col w-full  items-center pt-16  ">
        {error && <p className="text-red-600">{error}</p>}
    <div className=" h-[50%] border w-[30%] p-5 rounded-lg mt-5">
        <form onSubmit={login}>
            <h1 className="text-4xl pb-6">Sign in</h1>
            <label className="font-bold">Email or mobile phone number</label><br />
            
        <input type="text" placeholder="Username" className="border border-black p-1 w-full"value={userName} onChange={(e)=>setUserName(e.target.value)} /><br /><br />
            
            <label className="font-bold"> Password</label><br />
            <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="border border-black p-1 w-full" />
            <p className="text-sm pt-8 pb-5">By continuing, you agree to shoppers <span className="text-blue-600">Terms of Use </span> and <span className="text-blue-600"> Privacy Policy.</span></p>
            <button type="submit" className="border   pt-1 pl-48 pb-1 pr-48 bg-orange-500 text-white font-bold">Login</button>
            <p className="pt-14 text-center text-blue-700 font-bold text-l">New to Shopper? <span onClick={()=>navigate("/signup")} className="cursor-pointer ">Create an account</span></p>
            
           
        </form>
        
        </div>
       
    </div>
    
  )
}

export default Login
