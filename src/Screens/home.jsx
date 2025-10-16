import React, { useState } from 'react';
import Navbar from '../Components/navbar';
import Carousel from '../Components/carousal';
import Services from '../Components/services';
import Products from '../Components/products';
import Gallery from '../Components/gallery';
import Testimonials from '../Components/testimonial';
import ContactDetails from '../Components/contact';
import Footer from '../Components/footer';

const Home = () => {

const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleNavigation = (view, section = null) => {
    setCurrentView(view);
    setSelectedProduct(null);
    
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      lineHeight: 1.6,
      color: '#333',
      overflowX: 'hidden'
    }}>
      <Navbar onNavigate={handleNavigation} currentView={currentView} />
      
      {currentView === 'home' && (
        <>
          <Carousel onNavigate={handleNavigation} />
          <Services />
          <Products onProductClick={handleProductClick} />
          <Gallery />
          <Testimonials />
          <ContactDetails />
        </>
      )}
      
      {currentView === 'product-detail' && selectedProduct && (
        <SubProductComponent product={selectedProduct} onBack={handleBackToHome} />
      )}
      
      <Footer />
    </div>
  );    
}

export default Home;
