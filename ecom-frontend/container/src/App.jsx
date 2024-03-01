import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import "./index.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {BrowserRouter,Routes,Route } from "react-router-dom";

const ProductRouter = React.lazy(() => import("ecom/Productrouter"));

const App = () => (
  <div className="container">

    <Suspense fallback={<div>Loading</div>}>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/products/*" element={<ProductRouter/>}> </Route>
      </Routes>
      <Footer/>
    </Suspense>
  </div>
);
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("app"));
