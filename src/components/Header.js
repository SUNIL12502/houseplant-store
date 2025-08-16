import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>Green Haven</h1>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
        </nav>
        
        <div className="cart-icon">
          <Link to="/cart">
            <span className="cart-icon-text">🛒</span>
            <span className="cart-count">{totalItems}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
