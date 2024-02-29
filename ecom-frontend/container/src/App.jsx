import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import "./index.css";
import Footer from "./components/Footer";

const ProductRouter = React.lazy(() => import("ecom/Productrouter"));

const App = () => (
  <div className="container">
    <Header />

    <Suspense fallback={<div>Loading</div>}>
      <ProductRouter />
    </Suspense>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
