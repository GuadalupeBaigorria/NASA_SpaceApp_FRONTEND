import React from 'react';
import NavBar from './NavBar';

const Content: React.FC = () => {
  return (
    <div>
      <NavBar></NavBar>
    <div className="content">
      <h2>Contenido Cargado</h2>
      <p>Aquí se mostrará el contenido cargado.</p>
      <img 
        src="src/assets/rocket_796800.png"
        alt="Descripción de la imagen" 
        style={{ width: '20%', height: 'auto', borderRadius: '10px', marginTop: '20px' }} 
        />
    </div>
    </div>
  );
};

export default Content;
