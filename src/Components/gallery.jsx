import React from 'react';

const Gallery = () => {
  const images = [
    'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=583,fit=crop/Y4LvPqVzw1HlzJB2/roman_shades_zebra_blinds_roller_shades_sheer-1-m2WEqwagbqIEXR54.jpeg',
    'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80',
    'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800&q=80'
  ];

  return (
    <section id="gallery" style={{
      padding: '6rem 5%',
      background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
      position: 'relative'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.8rem',
        marginBottom: '1rem',
        fontWeight: 700,
        color: '#333'
      }}>Our Work</h2>
      <p style={{
        textAlign: 'center',
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '4rem'
      }}>See the quality and craftsmanship in every project</p>
      
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        position: 'relative',
        zIndex: 1
      }}>
        {images.map((image, index) => (
          <div key={index} style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            aspectRatio: '4/3',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.03)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
          }}>
            <img src={image} alt={`Gallery ${index + 1}`} style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease'
            }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;