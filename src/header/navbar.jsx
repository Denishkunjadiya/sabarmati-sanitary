import React from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';


const navbar = () => {
  return (
    <div>
       <nav className='header'>
                <div className='logo'>
                    <img src={require('../img/logo.png')}/>
                </div>
                <ul className='navbar'>
                  <li><NavLink to="./">Home</NavLink></li>
                  <li><NavLink to="./product" >Product</NavLink></li>
                  <li><NavLink to="./gallery">Gallery</NavLink></li>
                  <li><NavLink to="./about">About Us</NavLink></li>
                  <li><NavLink to="./contact">Contact</NavLink></li>
                </ul>
        </nav>
    </div>
  )
}

export default navbar
