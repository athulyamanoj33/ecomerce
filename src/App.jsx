import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Componets/Home/Home";

import ProductDetailsPage from "./pages/ProductDetailsPage";

import Cartpage from "./pages/Cartpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
