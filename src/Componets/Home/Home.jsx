import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Card from "./Card"

import Header from "../Header/Header"
import Loading from "../loading/Loading"



function Home() {
    
  
   const[loading,setLoading]=useState(false)
    const[products,setProducts]=useState([])
   useEffect(()=>{
    setLoading(true)
     axios.get("https://dummyjson.com/products")
     .then(res=>{ setProducts(res.data.products)
     setLoading(false)}
     )
    
     
     
   },[])
   console.log(products[0])
   

   
   
  return loading?<Loading/>:(


    <div>
        <Header/>

    <div className=" bg-neutral-700  grid grid-cols-4 w-full gap-8 p-5">
        {products.map((product,i)=>{

        
        return <Card key={i} product={product} image={product.images[0]} title={product.title} brand={product.brand} description={product.description} price={product.price} id={product.id} />
                
        
        })}
        
    </div>
    </div>
  )

}

export default Home