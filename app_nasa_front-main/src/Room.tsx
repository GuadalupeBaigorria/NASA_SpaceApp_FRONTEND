import React from 'react';
import NavBar from './NavBar';

const Room: React.FC = () => {
  return (
    <div>
    <NavBar></NavBar>
    <div className="div-root">
      <div className='room-box'>
        <div className='room-title'>Listado de juegos</div>
        <div className='room-mods'>Modos</div>
        <div className='room-games'>
            <div className='game-box'></div>
            <div className='game-box'></div>
            <div className='game-box'></div>
            <div className='game-box'></div>
            <div className='game-box'></div>
            <div className='game-box'></div>
            <div className='game-box'></div>
            <div className='game-box'></div>
            <div className='game-box'></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Room;
