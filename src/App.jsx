import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./Componets/Home/Home"

import ProductDetailsPage from "./pages/ProductDetailsPage"

import LogoutPage from "./pages/LogoutPage"


import Cartpage from "./pages/Cartpage"
import Buynowpage from "./pages/Buynowpage"
import SigninPage from "./pages/SigninPage"
import SignupPage from "./pages/signupPage"


function App() {
 

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}  />
        <Route path="/product/:productId"  element={<ProductDetailsPage/>}  />
        <Route path="/logout"  element={<LogoutPage/>}  />
        <Route path="/login" element={<SigninPage/>}/>
        <Route path="/signup"  element={<SignupPage/>}  />
        <Route path="/cart/:productId"  element={<Cartpage/>}  />
        <Route path="/buynow"  element={<Buynowpage/>}  />
        

        <Route/>
      </Routes>
     
        
      
      
      </BrowserRouter>
      
    </div>
   
    
  )
}

export default App
