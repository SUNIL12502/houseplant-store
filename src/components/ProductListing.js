import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { plants, categories } from '../data/plants';
import './ProductListing.css';

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleAddToCart = (plant) => {
    dispatch(addToCart({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image
    }));
  };

  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  return (
    <div className="product-listing">
      <div className="container">
        <h1 className="page-title">Our Houseplants</h1>
        
        <div className="category-filter">
          <button 
            className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            All Plants
          </button>
          {categories.map(category => (
            <button 
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredPlants.map(plant => (
            <div key={plant.id} className="product-card">
              <div className="product-image">
                <img src={plant.image} alt={plant.name} />
                <div className="category-badge">{plant.category}</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{plant.name}</h3>
                <p className="product-description">{plant.description}</p>
                <div className="product-price">${plant.price.toFixed(2)}</div>
                <button 
                  className={`add-to-cart-btn ${isInCart(plant.id) ? 'disabled' : ''}`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
