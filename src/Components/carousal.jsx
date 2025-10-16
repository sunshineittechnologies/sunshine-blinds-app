import React, { useState, useEffect } from 'react';

const Carousel = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80',
      title: 'Transform Your Space',
      description: 'Premium custom window treatments for homes and businesses',
      cta: 'Book Free Consultation',
      ctaAction: 'contact'
    },
    {
      image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1920&q=80',
      title: 'Elevate Your Home Decor',
      description: 'Custom blinds, shades, and curtains designed for you',
      cta: 'Explore Products',
      ctaAction: 'products'
    },
    {
      image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=1920&q=80',
      title: 'Expert Installation',
      description: 'Professional service with perfect results every time',
      cta: 'Contact Us Today',
      ctaAction: 'contact'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section style={{
      marginTop: '80px',
      height: '90vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        transition: 'transform 0.6s ease-in-out',
        height: '100%',
        transform: `translateX(-${currentSlide * 100}%)`
      }}>
        {slides.map((slide, index) => (
          <div key={index} style={{
            minWidth: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src={slide.image} alt={slide.title} style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.7)'
            }} />
            <div style={{
              position: 'relative',
              zIndex: 1,
              textAlign: 'center',
              color: 'white',
              padding: '2rem',
              animation: 'fadeInUp 0.8s ease'
            }}>
              <h1 style={{
                fontSize: '4rem',
                marginBottom: '1rem',
                fontWeight: 700,
                letterSpacing: '-1px',
                textShadow: '2px 2px 10px rgba(0,0,0,0.3)'
              }}>{slide.title}</h1>
              <p style={{
                fontSize: '1.3rem',
                marginBottom: '2rem',
                textShadow: '1px 1px 5px rgba(0,0,0,0.3)'
              }}>{slide.description}</p>
              <button
                onClick={() => onNavigate('home', slide.ctaAction)}
                style={{
                  padding: '1rem 3rem',
                  background: 'linear-gradient(135deg, #FF9A56 0%, #FFB84D 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(255, 154, 86, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 15px 40px rgba(255, 154, 86, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 30px rgba(255, 154, 86, 0.3)';
                }}
              >
                {slide.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button onClick={prevSlide} style={{
        position: 'absolute',
        top: '50%',
        left: '30px',
        transform: 'translateY(-50%)',
        background: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        border: 'none',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '1.5rem',
        color: 'white',
        zIndex: 2
      }}>❮</button>
      
      <button onClick={nextSlide} style={{
        position: 'absolute',
        top: '50%',
        right: '30px',
        transform: 'translateY(-50%)',
        background: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        border: 'none',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '1.5rem',
        color: 'white',
        zIndex: 2
      }}>❯</button>
      
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '15px',
        zIndex: 2
      }}>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: currentSlide === index ? '35px' : '12px',
              height: '12px',
              borderRadius: currentSlide === index ? '6px' : '50%',
              background: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;