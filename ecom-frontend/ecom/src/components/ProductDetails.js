import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/ProductCatalog.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleProductCard from './SingleProductCard';
import SingleProductDescription from './SingleProductDescription';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

  const params= useParams();

  const [singleproduct, setSingleProduct] = useState([]);
  const [primeImage , setPrimeImage] = useState();
  const [loading, setLoading] = useState(true);

  const fetchSingleProduct = async () => {
    try {
      const id = params.id;
      const response = await axios.get(`http://localhost:8081/products/${id}`);
      setSingleProduct(response.data);
      setLoading(false);
      setPrimeImage(response.data.image[0]);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }};
  
    const handleChangePrimeImage = (imageUrl) => {
      setPrimeImage(imageUrl);
    }

  useEffect(() => {
    fetchSingleProduct();
  }, []);


  return (
    <div>
      {singleproduct && singleproduct.image && 
      <Container>
        <Row>
          <Col sm={7}>
          <div style={{display:"flex" , justifyContent:"center"}}>
          <img src={primeImage} width="500px" style={{height:"70vh"}}></img>
          </div>
          <br /><br/>
          <div style={{width:"100%" , display:"flex" , justifyContent:"space-evenly"}}>
          <img src = {singleproduct.image[1]} width="100px" height="100px" onMouseEnter={() => handleChangePrimeImage(singleproduct.image[1])} onMouseLeave={()=> handleChangePrimeImage(singleproduct.image[0])}></img>
          <img src = {singleproduct.image[2]} width="100px" height="100px" onMouseEnter={() => handleChangePrimeImage(singleproduct.image[2])} onMouseLeave={()=> handleChangePrimeImage(singleproduct.image[0])}></img>
          <img src = {singleproduct.image[3]} width="100px" height="100px" onMouseEnter={() => handleChangePrimeImage(singleproduct.image[3])} onMouseLeave={()=> handleChangePrimeImage(singleproduct.image[0])}></img>
          </div>
          </Col>
          <Col sm={5}> <SingleProductDescription details = {singleproduct}/> </Col>
      </Row>
      </Container> }
    </div>
  );
};

export default ProductDetails;
    