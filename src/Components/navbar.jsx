import React, { useState, useEffect } from 'react'

const Navbar = ({ onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(10px)',
      boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : '0 2px 20px rgba(0, 0, 0, 0.05)',
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 5%',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onNavigate('home')}>
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 450 250'%3E%3Cdefs%3E%3ClinearGradient id='sunGrad' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FFB84D;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23FF9A56;stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='blindGrad' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%235F6AC4;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%234A90E2;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2363B3ED;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='310' cy='85' r='65' fill='url(%23sunGrad)'/%3E%3Cg fill='url(%23blindGrad)'%3E%3Crect x='130' y='25' width='45' height='8' rx='2'/%3E%3Crect x='130' y='40' width='50' height='8' rx='2'/%3E%3Crect x='130' y='55' width='55' height='8' rx='2'/%3E%3Crect x='130' y='70' width='60' height='8' rx='2'/%3E%3Crect x='130' y='85' width='65' height='8' rx='2'/%3E%3Crect x='130' y='100' width='70' height='8' rx='2'/%3E%3Crect x='130' y='115' width='75' height='8' rx='2'/%3E%3Crect x='130' y='130' width='70' height='8' rx='2'/%3E%3Crect x='130' y='145' width='65' height='8' rx='2'/%3E%3Crect x='265' y='25' width='45' height='8' rx='2' fill='%23FFB84D' fill-opacity='0.9'/%3E%3Crect x='260' y='40' width='50' height='8' rx='2' fill='%23FFB84D' fill-opacity='0.85'/%3E%3Crect x='255' y='55' width='55' height='8' rx='2' fill='%23FFB84D' fill-opacity='0.8'/%3E%3Crect x='250' y='70' width='60' height='8' rx='2' fill='%23FF9A56' fill-opacity='0.75'/%3E%3Crect x='245' y='85' width='65' height='8' rx='2' fill='%23FF9A56' fill-opacity='0.7'/%3E%3Crect x='250' y='100' width='60' height='8' rx='2' fill='%23FF9A56' fill-opacity='0.75'/%3E%3Crect x='255' y='115' width='55' height='8' rx='2' fill='%23FFB84D' fill-opacity='0.8'/%3E%3Crect x='260' y='130' width='50' height='8' rx='2' fill='%23FFB84D' fill-opacity='0.85'/%3E%3Crect x='265' y='145' width='45' height='8' rx='2' fill='%23FFB84D' fill-opacity='0.9'/%3E%3Crect x='200' y='25' width='3' height='135' rx='1.5' fill='%232D3748'/%3E%3C/g%3E%3Ctext x='225' y='200' font-family='Arial, sans-serif' font-size='42' font-weight='bold' text-anchor='middle' fill='%231A202C'%3ESUN SHINE BLINDS INC%3C/text%3E%3Ctext x='225' y='225' font-family='Arial, sans-serif' font-size='12' text-anchor='middle' fill='%23E53E3E' letter-spacing='2'%3EELEVATE YOUR HOME DECOR WITH OUR BLINDS%3C/text%3E%3C/svg%3E" 
            alt="Sun Shine Blinds Inc" 
            style={{ height: '60px', width: 'auto' }} />
        </div>
        <ul style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          {['home', 'services', 'products', 'gallery', 'contact'].map(item => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home', item);
                }}
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  textTransform: 'capitalize',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.color = '#FF9A56'}
                onMouseLeave={(e) => e.target.style.color = '#333'}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;