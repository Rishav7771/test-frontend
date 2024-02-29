import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div class="container">
                
                <header class="d-flex navbar-light py-3">
                    <ul class="nav nav-pills">
                        <li class="nav-item"><a href="#" class="nav-link active">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                    </ul>
                </header>
            </div>
    );
};

export default Header;

