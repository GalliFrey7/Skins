import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";




export default class Header extends Component {
  
  
  render() {

    return (
      <>
      <header>
          <span className='logo'>Skins</span>
                <FaUser className='user-cart-button'/>
                <FaSearch className='search-cart-button'/>
                <FaShoppingCart className='shop-cart-button'/>
              
              <ul className="nav">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/register'}>Man</Link></li>
                <li><Link to={'/'}>Woman</Link></li>
                <li><Link to={'/'}>accessories</Link></li>
                <li><Link to={'/'}>About</Link></li>
                <li><Link to={'/'}>Contact</Link></li>
              </ul>

      </header>
      </>
    );
    
  }
}
