import React from 'react';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/Logo.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const goToProductDetail = () => {
        navigate(`/products`);
      };
      const goToHome = () => {
        navigate(`/`);
      };
    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" onClick={goToHome}> <img
                            src={Logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link onClick={goToProductDetail}>Products</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;

