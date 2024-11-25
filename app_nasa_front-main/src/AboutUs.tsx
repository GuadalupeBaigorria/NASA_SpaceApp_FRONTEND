import React from 'react';
import NavBar from './NavBar';
const AboutUs: React.FC = () => {
  return (
    <div style={{display:'flex', flexDirection:"column", height:"100vh"}}>
      <NavBar></NavBar>
    <div className="div-root-about-us">
      <p className='p-about-us'>Happy Travel is an application that promotes the astronaut's resilience and the quality of their relationships with loved ones. As Samantha Cristoforetti states, it enhances the quality of life through physical exercise, while also allowing both parties to share quality moments. It strengthens long-distance bonds through games that engage both the physical and mental aspects.</p>
      <img src="src/assets/samantha-removebg-preview.png" alt="Descripción de la imagen" className='about-us-img'></img>
    </div>
    </div>
  );
};

export default AboutUs;
