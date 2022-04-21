// rafce
import React from 'react'
import logo from '../img/airbnb-logo.jpg';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <img className="nav--img" src={logo} alt='logo' />
            <h3>my travel journal</h3>
        </nav>
    </div>
  )
}

export default Navbar