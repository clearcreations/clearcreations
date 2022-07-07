import './Header.css';
import {Link, NavLink} from 'react-router-dom'
import NavLogo from '../Images/headerlogo.png'
import BtnDroplet from '../Images/btndropletsvg.svg'
import React, {useState} from 'react'

const Header = () => {

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  //Headass
  return (
    <nav className="nav">
      <Link className='nav-logo' to='/'>
        <img src={NavLogo} alt="Home" className="nav-logo-img" />
      </Link>
        <ul className={active}>
          <li className="nav__item">
            <NavLink exact="true" to="/about">
              <div className="nav-link">About</div>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink exact="true" to="/solutions">
              <div className="nav-link">Solutions</div>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink exact="true" to="/casestudies">
              <div className="nav-link">Case Studies</div>
            </NavLink>
          </li>
          <li className="nav__item">
            <Link to="/consultation" className='consult-btn'>
                <img src={BtnDroplet}className="btn-droplet" />
                <h4>Free Consultation</h4>
            </Link>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
    </nav>
  );
}

export default Header;