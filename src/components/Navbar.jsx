import React from "react";
import { Link } from "react-router-dom";
import SistLogo from "../img/sistLogo.png";
import Acm1Logo from "../img/acmLogo.png";
import Acm2Logo from "../img/acmWLogo.png";
function Navbar(){
    return(
      <nav>
			<div className="left">
				<div className="logoDes"><img src={SistLogo} alt="SIST" /></div>
				<div className="nav-links"><Link to="/" style={linkStyle}>HOME</Link></div>
				<div className="nav-links"><Link to="/events" style={linkStyle}>EVENT</Link></div>
				<div className="nav-links"><Link to="/about" style={linkStyle}>ABOUT</Link></div>
				<div className="nav-links"><Link to="contact" style={linkStyle}>CONTACT</Link></div>
			</div>
			<div className="right">
				<div className="logoDes acmLogoDes"><img src={Acm1Logo} alt="acm" /></div>
				<div className="logoLine"></div>
				<div className="logoDes acmLogoDes"><img src={Acm2Logo} alt="SIST" /></div>
			</div>
		</nav>
    );
}
const linkStyle = {
	textDecoration: 'none', 
	color: 'white',
  };
export default Navbar;