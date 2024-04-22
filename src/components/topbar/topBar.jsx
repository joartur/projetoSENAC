import React from 'react';
import './topBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import logo from "../../image/logo_senac.png"

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
        <FontAwesomeIcon icon={faBell} className='notification-icon'/>  
      <div className="menu-icon-topo">
        {/* Adicione aqui o ícone do seu menu sanduíche */}
        ☰
      </div>
    </div>
  );
};

export default TopBar;

