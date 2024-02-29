import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
const ProductRouter = React.lazy(()=>(import("ecom/Productrouter")));
import "./index.css";

const App = () => (
  <div className="container">
    <Header/>

    <Suspense fallback={<div>Loading</div>}><ProductRouter/></Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
