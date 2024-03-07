// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";
// import "../style/ProductCatalog.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const ProductCatalog = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [allProducts, setAllProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:8081/all/products");
//         setProducts(response.data);
//         setAllProducts([...response.data]);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "../style/ProductCatalog.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ErrorComponent from './ErrorComponent'

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8081/all/products");
        setProducts(response.data);
        setAllProducts([...response.data]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
        if (!error.response) { 
          setError("maintenance"); 
        } else if (error.response.status !== 500) { 
          setError(error.response.status); 
        } else {
          setError(true); 
        }
      }
    };

    fetchProducts();
  }, []);
  const categoryMenu = [
    ...new Set(allProducts.map((product) => product.category)),
  ];
  const filterItems = (cat) => {
    const newItems = allProducts.filter((newval) => newval.category === cat);
    setProducts(newItems);
  };
  function sortProducts(e) {
    e.stopPropagation();
    if (e.target.value === "LowToHigh") {
      setProducts([
        ...products.sort((a, b) => {
          return a.price - b.price;
        }),
      ]);
    }
    if (e.target.value === "HighToLow") {
      setProducts([
        ...products.sort((a, b) => {
          return b.price - a.price;
        }),
      ]);
    }
    if (e.target.value === "All") {
      setProducts([...allProducts]);
    }
  }
  return (
    <div style={{ margin: "20px" }}>
      {loading ? (
        <p className="loading">Loading...</p>
      )  : error ? (
        <ErrorComponent message={ 
          error === "maintenance" ? "Site Under Maintenance" : 
            error === true ? "Internal Server Error" : 
              `Error: ${error}` 
        } />
      ): (
        <div style={{ display: "flex", height: "calc(100vh - 130px)" }}>
          <div style={{ flex: "1" }}>
            <br></br>
            <div style={{ height: "50px"}}>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                id="myInput"
                onkeyup="myFunction()"
                placeholder="Search products"
                title="Type in a name"
                style={{padding: "0.25rem 0.5rem" }}
              ></input>
            </div>
            <b>Category</b>
            <div onClick={() => setProducts(allProducts)} className="all">
              All
            </div>
            {categoryMenu.map((category) => (
              <div onClick={() => filterItems(category)} className="category">
                {category}
              </div>
            ))}
            <hr />
            <div className="product-cards-header">
              <b>Filter By Price</b>

              <div className="product-cards_price-filter">
                <span>Price: &nbsp;</span>
                <select
                  class="form-select form-select-sm"
                  data-bs-theme="light"
                  aria-label=".form-select-sm"
                  name="price"
                  id="test-price"
                  onChange={(e) => sortProducts(e)}
                  style={{ cursor: "pointer" }}
                >
                  <option value="All">All</option>
                  <option value="LowToHigh">LowToHigh</option>
                  <option value="HighToLow">HighToLow</option>
                </select>
              </div>
            </div>
            <hr />
          </div>
          <Container
            className="product-list"
            style={{ flex: "4", height: "100%", overflow: "scroll" }}
          >
            <Row style={{ rowGap: "20px" }}>
              {products
                .filter((product) => {
                  return search.toLowerCase === ""
                    ? product
                    : product.name.toLowerCase().includes(search);
                })
                .map((product) => (
                  <Col sm={4}>
                    <ProductCard key={product.id} product={product} />
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
