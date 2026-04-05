import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { TiArrowSortedDown } from "react-icons/ti";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import './Navbar.css'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="navbar">

        <ul className='left-nav'>

          <NavLink to='/' className='left-nav-logo'>
            <span className='school-name-logo'>Swami SharadhaNand </span> <span>School</span>
          </NavLink>

          <div className="menu-bar" onClick={handleToggle}>
            <div className="first-line"></div>
            <div className="second-line"></div>
            <div className="third-line"></div>
          </div>

        </ul>

        
        <ul className={`right-nav ${menuOpen ? "active" : ""}`}>

          <div className="first-line">

            <li >
              <NavLink to="/" onClick={handleLinkClick}
                className={({ isActive }) => `Navlink ${isActive ? "active-link" : ""}`}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/booklist" onClick={handleLinkClick}
                className={({ isActive }) => `Navlink ${isActive ? "active-link" : ""}`}>
                Booklist 26-27 <TiArrowSortedDown style={{ fontSize: '17px' }} />
              </NavLink>
            </li>

            <li>
              <NavLink to="/affiliation" onClick={handleLinkClick}
                className={({ isActive }) => `Navlink ${isActive ? "active-link" : ""}`}>
                CBSE Affiliation <TiArrowSortedDown style={{ fontSize: '17px' }} />
              </NavLink>
            </li>

            <li>
              <NavLink to="/teacherlist" onClick={handleLinkClick}
                className={({ isActive }) => `Navlink ${isActive ? "active-link" : ""}`}>
                Teacher list <TiArrowSortedDown style={{ fontSize: '17px' }} />
              </NavLink>
            </li>

          </div>

          <div className="second-line">

            <li>
              <NavLink to="/studentsTC" onClick={handleLinkClick}
                className={({ isActive }) => `Navlink ${isActive ? "active-link" : ""}`}>
                Student's TC <TiArrowSortedDown style={{ fontSize: '17px' }} />
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={handleLinkClick}
                className={({ isActive }) => `Navlink ${isActive ? "active-link" : ""}`}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" onClick={handleLinkClick}
                className={({ isActive }) => `Navlink ${isActive ? "active-link" : ""}`}>
                Contact Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/moredetail" onClick={handleLinkClick}
                className={({ isActive }) => `Navlink ${isActive ? "active-link" : ""}`}>
                More Details <TiArrowSortedDown style={{ fontSize: '17px' }} />
              </NavLink>
            </li>

          </div>

        </ul>

        <ul className='social-media-nav'>
          <li className='fb icon'><FaFacebookF /></li>
          <li className='ig icon'><FaInstagram /></li>
          <li className='tw icon'><FaTwitter /></li>
        </ul>

      </div>
    </>
  )
}

export default Navbar