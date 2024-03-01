import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
    MDBContainer,
    MDBCol,
    MDBRow,
  } from 'mdb-react-ui-kit';

const Grid = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search , setSearch] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('http://localhost:8081/all/products');
            setProducts(response.data);
            setAllProducts([...response.data]);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
          }
        };
    
        fetchProducts();
      }, []);

      const navigate = useNavigate();

      const goToProductDetail = () => {
        navigate(`/products/${product.id}`);
      };
    
  return (
    <MDBRow className='grid'>
    <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
    <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
   
    </MDBCol>

    <MDBCol lg={4} className='mb-4 mb-lg-0'>
      <img
        src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
        className='w-100 shadow-1-strong rounded mb-4 img-grid'
        alt='Mountains in the Clouds'
      />

      <img
        src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
        className='w-100 shadow-1-strong rounded mb-4 img-grid'
        alt='Boat on Calm Water'
      />
    </MDBCol>

    <MDBCol lg={4} className='mb-4 mb-lg-0'>
      <img
        src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
        className='w-100 shadow-1-strong rounded mb-4 img-grid'
        alt='Waves at Sea'
      />

      <img
        src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
        className='w-100 shadow-1-strong rounded mb-4 img-grid'
        alt='Yosemite National Park'
      />
    </MDBCol>
  </MDBRow>
  )
}

export default Grid