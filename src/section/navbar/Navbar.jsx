import React from 'react'
import './navbar.css'
import logo from "../../assets/images/Logo.png"

const Navbar = () => {
  return (
    <>
     <nav id="navbar">
      <div className="container">
          <div className="nav_wrapper">
            <div className="logo">
                <img src={logo} alt="Not Found" />
            </div>
            <ul className="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">portfolio</a></li>
              <li><a href="#">Blog</a></li>
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
