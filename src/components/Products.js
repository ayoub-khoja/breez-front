import React, { useState } from 'react';
import './Products.css';
import ProductDetail from './ProductDetail';

const Products = ({ onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      name: "Fouta Sfaxienne Rouge",
      price: 25.00,
      category: "sfaxienne",
      image: "/fouta-sfaxienne.jpg",
      description: "Fouta Sfaxienne traditionnelle en coton 100% avec motifs géométriques rouges",
      material: "Coton 100%",
      size: "120x180 cm"
    },
    {
      id: 2,
      name: "Fouta Djerbienne Bleue",
      price: 28.00,
      category: "djerbienne",
      image: "/fouta-djerbienne.jpg",
      description: "Fouta Djerbienne avec design contemporain en bleu marine",
      material: "Coton premium",
      size: "120x180 cm"
    },
    {
      id: 3,
      name: "Fouta El-Jebba Verte",
      price: 30.00,
      category: "el-jebba",
      image: "/fouta-el-jebba.jpg",
      description: "Fouta El-Jebba avec broderies dorées sur fond vert",
      material: "Coton et soie",
      size: "120x180 cm"
    },
    {
      id: 4,
      name: "Fouta Hammam Blanche",
      price: 22.00,
      category: "hammam",
      image: "/fouta-hammam.jpg",
      description: "Fouta Hammam blanche avec bordures colorées",
      material: "Coton 100%",
      size: "120x180 cm"
    },
    {
      id: 5,
      name: "Fouta Nid d'Abeille Dorée",
      price: 45.00,
      category: "nid-abeille",
      image: "/fouta-nid-abeille.jpg",
      description: "Fouta Nid d'Abeille avec fil d'or et motifs traditionnels",
      material: "Coton et fil d'or",
      size: "120x180 cm"
    },
    {
      id: 6,
      name: "Fouta Chevron Naturelle",
      price: 35.00,
      category: "chevron",
      image: "/fouta-chevron.jpg",
      description: "Fouta Chevron en coton bio naturel",
      material: "Coton bio 100%",
      size: "120x180 cm"
    },
    {
      id: 7,
      name: "Fouta Jacquard Orange",
      price: 26.00,
      category: "jacquard",
      image: "/fouta-jacquard.jpg",
      description: "Fouta Jacquard avec motifs colorés orange et jaune",
      material: "Coton 100%",
      size: "120x180 cm"
    },
    {
      id: 8,
      name: "Fouta Rayée Violette",
      price: 38.00,
      category: "rayée",
      image: "/fouta-rayee.jpg",
      description: "Fouta Rayée avec broderies délicates violettes",
      material: "Coton et soie",
      size: "120x180 cm"
    }
  ];

  // Removed unused categories array



  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  const handleAddToCartFromDetail = (productWithQuantity) => {
    onAddToCart(productWithQuantity);
    setSelectedProduct(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <section id="produits" className="products">
        <div className="container">
          <div className="products-content">
            {/* Barre de recherche */}
            <div className="search-container">
              <form onSubmit={handleSearch} className="search-form">
                <div className="search-input-wrapper">
                  <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Rechercher une fouta..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                  <button type="submit" className="search-button">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <div className="products-header">
              <h2 className="products-title">Nos Foutas Tunisiennes</h2>
              <p className="products-subtitle">Découvrez notre collection exclusive de foutas artisanales, fabriquées avec passion et tradition</p>
            </div>



            <div className="products-grid">
              {products.map((product, index) => (
                <div key={product.id} className="product-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="product-image" onClick={() => handleProductClick(product)}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      loading="lazy"
                    />
                    <div className="product-image-overlay">
                      <span className="view-product-text">Voir le produit</span>
                    </div>
                  </div>
                  
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-details">
                      <span className="product-detail">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {product.material}
                      </span>
                      <span className="product-detail">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 16V8C21 5.79086 19.2091 4 17 4H7C4.79086 4 3 5.79086 3 8V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M3 10H21" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        {product.size}
                      </span>
                    </div>
                    <div className="product-footer">
                      <span className="product-price">{product.price.toFixed(2)} €</span>
                      <button 
                        className="add-to-cart-btn"
                        onClick={() => onAddToCart(product)}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Ajouter
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onAddToCart={handleAddToCartFromDetail}
          onClose={handleCloseDetail}
        />
      )}
    </>
  );
};

export default Products; 