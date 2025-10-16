import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Custom Window Treatments',
      description: 'Explore our custom window treatments for homes and businesses, including blinds, shades, and curtains designed to match your style perfectly.'
    },
    {
      icon: '💬',
      title: 'Free Consultation',
      description: 'Schedule a free consultation to discuss your window treatment needs and preferences with our experts who understand your vision.'
    },
    {
      icon: '🔧',
      title: 'Professional Installation',
      description: 'Enjoy hassle-free installation by our skilled team, ensuring perfect fit and functionality for your treatments with precision and care.'
    }
  ];

  return (
    <section id="services" style={{
      padding: '6rem 5%',
      maxWidth: '1400px',
      margin: '0 auto',
      backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(99, 179, 237, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 154, 86, 0.03) 0%, transparent 50%)'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.8rem',
        marginBottom: '1rem',
        fontWeight: 700,
        color: '#333'
      }}>Our Services</h2>
      <p style={{
        textAlign: 'center',
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '4rem'
      }}>Expert window treatment solutions tailored to your needs</p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem'
      }}>
        {services.map((service, index) => (
          <div key={index} style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, #63B3ED, #FF9A56, #FFB84D)'
            }} />
            <div style={{
              width: '70px',
              height: '70px',
              background: 'linear-gradient(135deg, #63B3ED 0%, #FF9A56 100%)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              fontSize: '2rem'
            }}>{service.icon}</div>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#333'
            }}>{service.title}</h3>
            <p style={{
              color: '#666',
              lineHeight: 1.7
            }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;