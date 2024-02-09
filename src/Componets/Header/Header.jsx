

import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();
  const[input,setInput]=useState("");
  

  const handleChange=(value)=>{
    setInput(value)
  }
  console.log(input);
  
  
  return (
    <div className="bg-blue-500 p-6 flex justify-between items-center sticky top-0">
      <div>
        <h1
          className="text-4xl p-3 font-extrabold uppercase cursor-pointer "
         
        >
          Shop Now
        </h1>
      </div>
      <div>
        <input
          type="search"
          className="border-2 mt-2 border-gray-300 bg-white h-10 px-5 pr-16 w-96 rounded-lg text-sm focus:outline-none"
          name="search"
          placeholder="Search your favorite products"
          value={input}
          onChange={(e)=>handleChange(e.target.value)}
        />


        <i className="fa fa-search text-gray-600 z-20 hover:text-gray-500  p-3  "></i>
      </div>
     

      <div className="flex gap-2">
      <h1  onClick={() => navigate("/")} className="text-white text-xl border cursor-pointer p-1 ">Home</h1>
        
       
        <button className="text-white font-bold pr-4 pl-3 border pt-1 pb-1 " onClick={()=>navigate("/cart")}>
          
        <i className="fa-solid fa-cart-shopping object-contain h-5 w-5 text-white"></i></button>
        
      

      
        
       
         
         
         
      </div>
      
      
      
     
    </div>
  );
}

export default Header;
