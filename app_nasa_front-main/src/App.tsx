import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Content from './Content';
import Activities from './Activities';
import Room from './Room';

import Landing from './Landing.tsx'; // Importa el componente de la landing

import AboutUs from './AboutUs';

import Login from './Login';
const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<Landing />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/content" element={<Content />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
