import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/Logo.svg';
import user from '../assets/images/user.png';
import boy from '../assets/images/boy.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyModal from './Modal';
import DropdownUser from './DropdownUser';
import ErrorComponent from './ErrorComponent';

const Header = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchProducts = async (category) => {
    try {
      setIsLoading(true); 
      const response = await axios.get(`http://localhost:8081/products/category/${category}`);
      setProducts(response.data);
      console.log(products);
      setModalShow(true); 
    } catch (error) {
      console.error("Error fetching products:", error);
      if (!error.response) { 
        setError("maintenance"); 
      } else if (error.response.status !== 500) { 
        setError(error.response.status); 
      } else {
        setError(true); 
      }
    }finally {
      setIsLoading(false);
    }
  };

  const goToProductDetail = () => {
    navigate(`/products`);
  };

  const goToHome = () => {
    navigate(`/`);
  };

  const handleNavClick = (category) => {
    setSelectedCategory(category);
    fetchProducts(category);
  };

  return ( error ? (
    <ErrorComponent message={ 
      error === "maintenance" ? "Site Under Maintenance" : 
        error === true ? "Internal Server Error" : 
          `Error: ${error}` 
    } />
  ) :
    <div style={{backgroundColor:"white"}}>
      <Navbar   data-bs-theme="light" className="custom-navbar">
        <div className="logo">
          <Navbar.Brand  onClick={goToHome}>
            <img
              src={Logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </div>
        <div className="nav-links text-uppercase">
          <Nav.Link onClick={() => handleNavClick('SmartPhone')} className="nav-cat">
            SmartPhone
          </Nav.Link>
          <Nav.Link onClick={() => handleNavClick('TV&AV')} className="nav-cat">
            TV&AV
          </Nav.Link>
          <Nav.Link onClick={() => handleNavClick('Watch')} className="nav-cat">
            Watch
          </Nav.Link>
          <Nav.Link onClick={() => handleNavClick('HeadPhones')} className="nav-cat">
            HeadPhones
          </Nav.Link>
          <Nav.Link onClick={goToProductDetail} className="nav-cat">
            Products
          </Nav.Link>
        </div>
        <Navbar.Brand  onClick={() => setProfile((prev) => !prev)}>
          <img
            src={user}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        {profile && <DropdownUser setProfile={setProfile} />}
      </Navbar>
      <MyModal show={modalShow} onHide={() => setModalShow(false)} products={products} isLoading={isLoading} />
    </div>
  );
};

export default Header;