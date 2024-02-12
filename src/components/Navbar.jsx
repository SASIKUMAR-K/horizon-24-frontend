import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import SistLogo from "../img/sistLogo.png";
import Acm1Logo from "../img/acmLogo.png";
import Acm2Logo from "../img/acmWLogo.png";
import { useState } from "react";
import './navBar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${!isOpen ? 'noOpen' : 'open'} `}>
      {/* <div className="logoDes"><img src={SistLogo} alt="SIST" /></div> */}
      <div className="left">
        <div className="desLogoHide logoDes sistlogo"><img src={SistLogo} alt="SIST" /></div>
        <div className={`nav-links ${isOpen ? 'show' : 'noShow'} `}>
          <Link to="/" style={linkStyle} className="navLink">HOME</Link>
          <Link to="/events" style={linkStyle} className="navLink">EVENT</Link>
          <Link to="/about" style={linkStyle} className="navLink">ABOUT</Link>
          <Link to="/contact" style={linkStyle} className="navLink">CONTACT</Link>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div ><FontAwesomeIcon icon={faBars} /></div>
        </div>
      </div>
      <div className="right">
        <div className="desLogoHide logoDes acmLogoDes"><img src={Acm1Logo} alt="acm" /></div>
        <div className="logoLine"></div>
        <div className="desLogoHide acmLogoDes"><img src={Acm2Logo} alt="SIST" /></div>
		<div className="phoneNavLogo">
		<div className="logoDes sistlogo"><img src={SistLogo} alt="SIST" /></div><div className="logoDes acmLogoDes"><img src={Acm1Logo} alt="acm" /></div> <div className="logoDes acmLogoDes"><img src={Acm2Logo} alt="SIST" /></div></div>

      </div>
	  
    </nav>
  );
}

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  paddingLeft: '20px',
  paddingRight: '20px'
};

export default Navbar;
