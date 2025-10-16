import React, { useState } from 'react';

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" style={{
      padding: '6rem 5%',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'start'
      }}>
        <div style={{ padding: '2rem 0' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#333',
            marginBottom: '1rem'
          }}>Reach Out to Us</h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            lineHeight: 1.8,
            marginBottom: '2rem'
          }}>
            Feel free to contact us for questions or to arrange your complimentary consultation.
          </p>
          
          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#333' }}>
            About Sunshine Blinds Inc.
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            lineHeight: 1.8,
            marginBottom: '2rem'
          }}>
            We specialize in custom window treatments, providing exceptional service and professional installation for homes and businesses. Experience our free consultations and on-site measurements tailored to your needs.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #63B3ED 0%, #FF9A56 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem'
              }}>150+</div>
              <div style={{
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: 1.4
              }}>Projects Completed</div>
            </div>
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{
                fontSize: '3rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #63B3ED 0%, #FF9A56 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem'
              }}>15</div>
              <div style={{
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: 1.4
              }}>Years of Experience</div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} style={{
          background: 'white',
          padding: '3rem',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#333',
              fontWeight: 500
            }}>Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#333',
              fontWeight: 500
            }}>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#333',
              fontWeight: 500
            }}>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(555) 123-4567"
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#333',
              fontWeight: 500
            }}>Service Interest</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit'
              }}
            >
              <option value="">Select a service</option>
              <option value="consultation">Free Consultation</option>
              <option value="roman-shades">Roman Shades</option>
              <option value="zebra-blinds">Zebra Blinds</option>
              <option value="roller-shades">Roller Shades</option>
              <option value="sheer-curtains">Sheer Curtains</option>
              <option value="venetian-blinds">Venetian Blinds</option>
              <option value="vertical-blinds">Vertical Blinds</option>
              <option value="motorized">Motorized Blinds</option>
              <option value="blackout">Blackout Shades</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#333',
              fontWeight: 500
            }}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              style={{
                width: '100%',
                padding: '0.9rem 1.2rem',
                border: '2px solid #e2e8f0',
                borderRadius: '10px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit',
                resize: 'vertical',
                minHeight: '120px'
              }}
            />
          </div>
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #63B3ED 0%, #FF9A56 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(99, 179, 237, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 15px 40px rgba(99, 179, 237, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(99, 179, 237, 0.3)';
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};


export default ContactDetails;