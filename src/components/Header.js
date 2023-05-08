import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import './css/header.css';
import Order from './Order';

const showOrders = (props) => {
  return (<div>
    {props.orders.map(el => (
      <Order key={el.id} item={el}/>
    ))}
  </div>

  )
}

const showNothing = () => {
  return(<div className='empty'>
    <h2>Nothing</h2>
  </div>)
}

function Header(props) {  
  let [cartOpen, setCartOpen] = useState(false);
  
  return (
    <header>
      <div>
        <span className='logo'><Link to={'/'}>Skins</Link></span>
        <a href='/login'><FaUser className='user-cart-button'/></a>
        <FaSearch className='search-cart-button'/>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen => !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
        
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
              showOrders(props) : showNothing()}
          </div>
        )}
        <ul className="nav">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/register'}>Man</Link></li>
          <li><Link to={'/'}>Woman</Link></li>
          <li><Link to={'/'}>accessories</Link></li>
          <li><Link to={'/'}>About</Link></li>
          <li><Link to={'/'}>Contact</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
