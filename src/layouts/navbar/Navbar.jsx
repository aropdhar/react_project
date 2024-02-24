import React from 'react'
import './navbar.css'
import logo from "../../assets/images/Logo.png"
import { FaChevronUp } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
     <nav id="navbar" >
      <div className="container">
          <div className="nav_wrapper">
            <div className="logo">
                <img src={logo} alt="Not Found" />
            </div>
            <ul className="menu">

                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/business'>About</NavLink><FaChevronUp className='about_icon'/></li>
                <li><NavLink to='/customer'>Service</NavLink></li>
                <li><Link to='/#'>portfolio</Link></li>
                <li><Link to='/#'>Blog</Link></li>

            </ul>

            <div className="navbar_btn">
              <a href="#" className='Common_btn'>Contact Us</a>
            </div>
          </div>
      </div>
     </nav>

    </>
  )
}

export default Navbar
