import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = ({ isMenuOpen, toggleMenu, cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Removed unused searchQuery state
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const foutaCategories = [
    { id: 'sfaxienne', name: 'Fouta Sfaxienne' },
    { id: 'djerbienne', name: 'Fouta Djerbienne' },
    { id: 'el-jebba', name: 'Fouta El-Jebba' },
    { id: 'hammam', name: 'Fouta Hammam' },
    { id: 'nid-abeille', name: 'Fouta Nid d\'Abeille' },
    { id: 'chevron', name: 'Fouta Chevron' },
    { id: 'jacquard', name: 'Fouta Jacquard' },
    { id: 'rayée', name: 'Fouta Rayée' }
  ];

  const handleCategoryClick = (categoryId) => {
    // Scroll to products section and trigger category filter
    const productsSection = document.getElementById('produits');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu(); // Close menu after selection
  };

          // Removed unused handleSearch function

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    setIsLanguageDropdownOpen(false);
    // Add language change functionality here
    console.log('Language changed to:', language);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/logo-breez.jpg" alt="Breez Logo" className="logo-image" />
          </div>

          <div className="header-actions">
            <button className="cart-button" onClick={onCartClick}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>

            {/* Sélecteur de langue */}
            <div className="language-selector">
              <button className="language-toggle" onClick={toggleLanguageDropdown}>
                <div className="language-flag">
                  {currentLanguage === 'fr' ? (
                    <span className="flag-icon">🇫🇷</span>
                  ) : currentLanguage === 'en' ? (
                    <span className="flag-icon">🇬🇧</span>
                  ) : (
                    <span className="flag-icon">🇸🇦</span>
                  )}
                </div>
                <span className="language-code">
                  {currentLanguage === 'fr' ? 'FR' : currentLanguage === 'en' ? 'EN' : 'AR'}
                </span>
                <svg className={`language-arrow ${isLanguageDropdownOpen ? 'active' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="language-dropdown">
                  <button 
                    className={`language-option ${currentLanguage === 'fr' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('fr')}
                  >
                    <span className="flag-icon">🇫🇷</span>
                    <span className="language-name">Français</span>
                    {currentLanguage === 'fr' && <span className="selected-dot"></span>}
                  </button>
                  <button 
                    className={`language-option ${currentLanguage === 'en' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    <span className="flag-icon">🇬🇧</span>
                    <span className="language-name">English</span>
                    {currentLanguage === 'en' && <span className="selected-dot"></span>}
                  </button>
                  <button 
                    className={`language-option ${currentLanguage === 'ar' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('ar')}
                  >
                    <span className="flag-icon">🇸🇦</span>
                    <span className="language-name">العربية</span>
                    {currentLanguage === 'ar' && <span className="selected-dot"></span>}
                  </button>
                </div>
              )}
            </div>
            
            <button className="menu-toggle" onClick={toggleMenu}>
              <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile avec catégories */}
      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        {/* Sélecteur de langue mobile */}
        <div className="mobile-language-selector">
          <h4>Langue / Language / اللغة</h4>
          <div className="mobile-language-options">
            <button 
              className={`mobile-language-option ${currentLanguage === 'fr' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('fr')}
            >
              <span className="flag-icon">🇫🇷</span>
              <span className="language-name">Français</span>
              {currentLanguage === 'fr' && <span className="selected-dot"></span>}
            </button>
            <button 
              className={`mobile-language-option ${currentLanguage === 'en' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('en')}
            >
              <span className="flag-icon">🇬🇧</span>
              <span className="language-name">English</span>
              {currentLanguage === 'en' && <span className="selected-dot"></span>}
            </button>
            <button 
              className={`mobile-language-option ${currentLanguage === 'ar' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('ar')}
            >
              <span className="flag-icon">🇸🇦</span>
              <span className="language-name">العربية</span>
              {currentLanguage === 'ar' && <span className="selected-dot"></span>}
            </button>
          </div>
        </div>
        
        <div className="mobile-categories">
          <h4>Nos Catégories</h4>
          <div className="mobile-categories-grid">
            {foutaCategories.map(category => (
              <button 
                key={category.id}
                className="mobile-category-btn"
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 