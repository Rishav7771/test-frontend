import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Rating from './Rating';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const goToProductDetail = () => {
    navigate(`/products/${product.id}`);
  };
  const formattedPrice = product.price.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  return (
    <Card
      style={{ height: '370px', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
      onClick={goToProductDetail}
    >
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}className='card-img'>
        <Card.Img variant="top" src={product.image[0]} style={{ height: '150px', width: '150px', objectFit: 'cover', borderRadius: '8px' }} className='img' />
      </div>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
        <hr style={{ margin: '15px 0' }} />
        <Button variant="success" className='catalogButton'>
          <Rating product={product}></Rating>
        </Button>
        <Card.Title style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}className='cardTitle'>{product.name}</Card.Title>
        <div style={{height:"40px", width: '100%', display: 'flex'}} className='price'>
          <span style={{paddingTop:"4px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></span>&nbsp;<span style={{paddingTop:"5px"}}>From</span>&nbsp;<span style={{paddingTop:"5px"}}>{formattedPrice}</span>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;