import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #2D3748 0%, #1A202C 100%)',
      color: 'white',
      padding: '3rem 5%',
      textAlign: 'center'
    }}>
      <p style={{ opacity: 0.8, margin: '0.5rem 0' }}>
        &copy; 2025 Sun Shine Blinds Inc. All rights reserved.
      </p>
      <p style={{ opacity: 0.8, margin: '0.5rem 0' }}>
        Elevate your home decor with our blinds
      </p>
      <p style={{ opacity: 0.8, marginTop: '1rem' }}>
        Trusted by homeowners and designers
      </p>
    </footer>
  );
};

export default Footer;