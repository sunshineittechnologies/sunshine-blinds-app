import React from 'react';

const Products = ({ onProductClick }) => {
  const products = [
    {
      id: 'roman-shades',
      name: 'Roman Shades',
      image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&q=80',
      description: 'Elegant fabric shades that fold into pleats when raised, offering a sophisticated look.'
    },
    {
      id: 'zebra-blinds',
      name: 'Zebra Blinds',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&q=80',
      description: 'Innovative dual-layer blinds that alternate between sheer and solid fabric for light control.'
    },
    {
      id: 'roller-shades',
      name: 'Roller Shades',
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=600&q=80',
      description: 'Modern and sleek, these shades roll up and down smoothly for easy operation and clean lines.'
    },
    {
      id: 'Honeycomb-curtains',
      name: 'Sheer Curtains',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80',
      description: 'Light, airy curtains that filter natural light while maintaining privacy and elegance.'
    },
    // {
    //   id: 'venetian-blinds',
    //   name: 'Venetian Blinds',
    //   image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&q=80',
    //   description: 'Classic horizontal slat blinds offering precise light control and timeless style.'
    // },
    // {
    //   id: 'vertical-blinds',
    //   name: 'Vertical Blinds',
    //   image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
    //   description: 'Perfect for large windows and sliding doors, with vertical slats that rotate for light control.'
    // },
    // {
    //   id: 'motorized-blinds',
    //   name: 'Motorized Blinds',
    //   image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80',
    //   description: 'Smart home integration with remote-controlled blinds for ultimate convenience.'
    // },
    // {
    //   id: 'blackout-shades',
    //   name: 'Blackout Shades',
    //   image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80',
    //   description: 'Complete darkness and privacy with light-blocking fabric, ideal for bedrooms.'
    // }
  ];

  return (
    <section id="products" style={{
      padding: '6rem 5%',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.8rem',
        marginBottom: '1rem',
        fontWeight: 700,
        color: '#333'
      }}>Our Products</h2>
      <p style={{
        textAlign: 'center',
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '4rem'
      }}>Discover our extensive range of window treatment options</p>
      
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => onProductClick(product)}
            style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
            }}
          >
            <img src={product.image} alt={product.name} style={{
              width: '100%',
              height: '220px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }} />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{
                fontSize: '1.4rem',
                marginBottom: '0.5rem',
                color: '#333'
              }}>{product.name}</h3>
              <p style={{
                color: '#666',
                fontSize: '0.95rem',
                lineHeight: 1.5
              }}>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;