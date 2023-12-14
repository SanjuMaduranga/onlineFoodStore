import React from 'react'
import './Navbar.css'

import logo from '../Assests/cover/log.png'
import cart from '../Assests/icon/cart.svg' 

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="D&S Foods" />
        <p>D&S FOOD PRODUCTS</p>
      </div>
      <ul className='nav-menu'>
        <li>Home<hr/></li>
        <li>Catagaries</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart} alt=''/>
      </div>
      
    </div>
  )
}
