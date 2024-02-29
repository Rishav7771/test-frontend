import React from "react";
import ReactDOM from "react-dom";
import ProductCatalog from './ProductCatalog';
import ProductDetails from './ProductDetails';
import { BrowserRouter,Routes,Route } from "react-router-dom";

// import "./index.css";

const Productrouter = () => (
  <div>
        <BrowserRouter>
        <Routes>
          <Route path="/products" element={<ProductCatalog/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
        </BrowserRouter>
  </div>
);
export default Productrouter;