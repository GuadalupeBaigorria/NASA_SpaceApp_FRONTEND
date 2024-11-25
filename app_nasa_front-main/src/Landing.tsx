import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Link } from 'react-router-dom';
import './Landing.css';

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const [earthTexture, setEarthTexture] = useState<THREE.Texture | null>(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      'http://localhost:5173/assets/3_no_ice_clouds_8k.jpg', // Asegúrate de que esta ruta sea correcta
      (texture) => {
        setEarthTexture(texture);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error("An error occurred loading the Earth texture:", error);
        setLoading(false);
        // Podrías cargar una textura de marcador si es necesario
      }
    );
  }, []);

  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  if (loading) {
    return <mesh><sphereGeometry args={[1, 64, 64]} /><meshStandardMaterial color="gray" /></mesh>; // Indicador de carga
  }

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial 
        map={earthTexture} 
        metalness={0.4}
        roughness={0.7}
      />
    </mesh>
  );
}

export default function Landing() {
  return (
    <div>
      <h1 className='landing-h1'>Bienvenido</h1>
      <h2 className='landing-h2'>Esta es tu vuelta número 3 por la tierra</h2>
      <Canvas style={{ backgroundColor: 'black', height: '70vh', width: '100vw', boxSizing: 'border-box' ,padding: '0', margin: '0'}} camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Stars radius={300} depth={60} count={5000} factor={7} saturation={0} fade />
        <Earth />
        <OrbitControls enablePan={true} enableZoom={true} />
      </Canvas>
      <li className='landing-link'><Link to="/Login" className="landing-link">Login</Link></li>
    </div>
  );
}
