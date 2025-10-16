// import React from 'react';

// const SubProducts = ({ product, onBack }) => {
//   const subProducts = {
//     'roman-shades': [
//       { name: 'Classic Roman Shade', price: '$150 - $300', description: 'Traditional flat fold design with clean lines' },
//       { name: 'Relaxed Roman Shade', price: '$180 - $350', description: 'Soft cascading bottom for elegant draping' },
//       { name: 'Hobbled Roman Shade', price: '$200 - $400', description: 'Continuous folds creating a waterfall effect' },
//       { name: 'Balloon Roman Shade', price: '$220 - $450', description: 'Billowy poufs at the bottom for luxury feel' }
//     ],
//     'zebra-blinds': [
//       { name: 'Light Filtering Zebra', price: '$100 - $250', description: 'Semi-transparent for natural light control' },
//       { name: 'Room Darkening Zebra', price: '$130 - $280', description: 'Enhanced privacy with reduced light' },
//       { name: 'Blackout Zebra', price: '$160 - $320', description: 'Complete darkness and privacy' },
//       { name: 'Motorized Zebra', price: '$250 - $500', description: 'Remote controlled for convenience' }
//     ],
//     'roller-shades': [
//       { name: 'Basic Roller Shade', price: '$80 - $200', description: 'Simple, effective light control' },
//       { name: 'Dual Roller Shade', price: '$150 - $350', description: 'Two fabrics for versatile light options' },
//       { name: 'Solar Roller Shade', price: '$120 - $280', description: 'UV protection while maintaining views' },
//       { name: 'Designer Roller Shade', price: '$180 - $400', description: 'Premium fabrics with custom patterns' }
//     ],
//     'sheer-curtains': [
//       { name: 'Voile Curtains', price: '$60 - $150', description: 'Lightweight, translucent fabric' },
//       { name: 'Linen Sheers', price: '$90 - $200', description: 'Natural texture with elegant drape' },
//       { name: 'Embroidered Sheers', price: '$120 - $280', description: 'Decorative patterns for added style' },
//       { name: 'Layered Sheers', price: '$150 - $350', description: 'Multiple layers for dimension' }
//     ],
//     'venetian-blinds': [
//       { name: 'Aluminum Venetian', price: '$70 - $180', description: 'Durable and easy to maintain' },
//       { name: 'Wood Venetian', price: '$150 - $350', description: 'Natural warmth and elegance' },
//       { name: 'Faux Wood Venetian', price: '$100 - $250', description: 'Wood look with enhanced durability' },
//       { name: 'Micro Venetian', price: '$90 - $220', description: 'Slim slats for modern aesthetic' }
//     ],
//     'vertical-blinds': [
//       { name: 'Fabric Vertical', price: '$100 - $250', description: 'Soft material for gentle light filtering' },
//       { name: 'PVC Vertical', price: '$80 - $200', description: 'Moisture-resistant for bathrooms' },
//       { name: 'Wooden Vertical', price: '$180 - $400', description: 'Premium wood for sophistication' },
//       { name: 'Curved Track Vertical', price: '$200 - $450', description: 'For bay and bow windows' }
//     ],
//     'motorized-blinds': [
//       { name: 'WiFi Smart Blinds', price: '$300 - $600', description: 'App-controlled with scheduling' },
//       { name: 'Voice Control Blinds', price: '$350 - $700', description: 'Alexa and Google Assistant compatible' },
//       { name: 'Solar Powered Blinds', price: '$400 - $800', description: 'Eco-friendly rechargeable system' },
//       { name: 'Hub-Based System', price: '$500 - $1000', description: 'Control multiple blinds simultaneously' }
//     ],
//     'blackout-shades': [
//       { name: 'Standard Blackout', price: '$120 - $280', description: '99% light blocking capability' },
//       { name: 'Thermal Blackout', price: '$160 - $350', description: 'Insulated for energy efficiency' },
//       { name: 'Cordless Blackout', price: '$140 - $320', description: 'Safe for children and pets' },
//       { name: 'Motorized Blackout', price: '$280 - $550', description: 'Remote control with timer function' }
//     ]
//   };

//   const items = subProducts[product.id] || [];

//   return (
//     <div style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
//       <section style={{
//         padding: '4rem 5%',
//         background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)'
//       }}>
//         <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//           <button
//             onClick={onBack}
//             style={{
//               padding: '0.8rem 2rem',
//               background: 'linear-gradient(135deg, #63B3ED 0%, #FF9A56 100%)',
//               color: 'white',
//               border: 'none',
//               borderRadius: '50px',
//               fontSize: '1rem',
//               fontWeight: 600,
//               cursor: 'pointer',
//               marginBottom: '2rem',
//               boxShadow: '0 5px 20px rgba(99, 179, 237, 0.3)',
//               transition: 'all 0.3s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'translateY(-2px)';
//               e.target.style.boxShadow = '0 8px 25px rgba(99, 179, 237, 0.4)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'translateY(0)';
//               e.target.style.boxShadow = '0 5px 20px rgba(99, 179, 237, 0.3)';
//             }}
//           >
//             ← Back to Products
//           </button>
          
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '3rem',
//             marginBottom: '4rem',
//             alignItems: 'center'
//           }}>
//             <img
//               src={product.image}
//               alt={product.name}
//               style={{
//                 width: '100%',
//                 height: '400px',
//                 objectFit: 'cover',
//                 borderRadius: '20px',
//                 boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
//               }}
//             />
//             <div>
//               <h1 style={{
//                 fontSize: '3rem',
//                 fontWeight: 700,
//                 color: '#333',
//                 marginBottom: '1rem'
//               }}>{product.name}</h1>
//               <p style={{
//                 fontSize: '1.2rem',
//                 color: '#666',
//                 lineHeight: 1.8
//               }}>{product.description}</p>
//             </div>
//           </div>
          
//           <h2 style={{
//             fontSize: '2.5rem',
//             fontWeight: 700,
//             color: '#333',
//             marginBottom: '2rem',
//             textAlign: 'center'
//           }}>Available Options</h2>
          
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//             gap: '2rem'
//           }}>
//             {items.map((item, index) => (
//               <div
//                 key={index}
//                 style={{
//                   background: 'white',
//                   padding: '2rem',
//                   borderRadius: '20px',
//                   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
//                   transition: 'all 0.3s ease',
//                   border: '1px solid rgba(0, 0, 0, 0.05)'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-5px)';
//                   e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
//                 }}
//               >
//                 <h3 style={{
//                   fontSize: '1.5rem',
//                   fontWeight: 600,
//                   color: '#333',
//                   marginBottom: '0.8rem'
//                 }}>{item.name}</h3>
//                 <p style={{
//                   fontSize: '1.3rem',
//                   fontWeight: 700,
//                   background: 'linear-gradient(135deg, #63B3ED 0%, #FF9A56 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                   marginBottom: '1rem'
//                 }}>{item.price}</p>
//                 <p style={{
//                   color: '#666',
//                   lineHeight: 1.6,
//                   marginBottom: '1.5rem'
//                 }}>{item.description}</p>
//                 <button
//                   style={{
//                     width: '100%',
//                     padding: '0.8rem',
//                     background: 'linear-gradient(135deg, #FF9A56 0%, #FFB84D 100%)',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '50px',
//                     fontSize: '1rem',
//                     fontWeight: 600,
//                     cursor: 'pointer',
//                     transition: 'all 0.3s ease',
//                     boxShadow: '0 5px 20px rgba(255, 154, 86, 0.3)'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.transform = 'translateY(-2px)';
//                     e.target.style.boxShadow = '0 8px 25px rgba(255, 154, 86, 0.4)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.transform = 'translateY(0)';
//                     e.target.style.boxShadow = '0 5px 20px rgba(255, 154, 86, 0.3)';
//                   }}
//                 >
//                   Request Quote
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SubProducts;