import React from 'react';

const Testimonials = () => {
  return (
    <section style={{
      padding: '6rem 5%',
      backgroundImage: 'url(https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(10px)'
      }} />
      
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px)',
        padding: '4rem 3rem',
        borderRadius: '30px',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          fontSize: '1.5rem',
          marginBottom: '1rem',
          color: '#FFB84D'
        }}>★★★★★</div>
        <p style={{
          fontSize: '1.8rem',
          fontStyle: 'italic',
          marginBottom: '2rem',
          lineHeight: 1.6,
          color: '#2D3748'
        }}>
          "Sunshine Blinds transformed my home with beautiful window treatments. Highly recommend their professional service and expertise!"
        </p>
        <p style={{
          fontSize: '1.2rem',
          fontWeight: 600,
          color: '#4A5568'
        }}>— Emily R.</p>
      </div>
    </section>
  );
};

export default Testimonials;