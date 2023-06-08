import React from 'react'
import './product.css'
import { NavLink } from 'react-router-dom'


const Product = () => {
  return (
    <>
      <div className='main'>
          <slide className="back">
              <img src={require('../img/slider.png')}></img>
          </slide>

          <div className='page-title'>
            <h1>PRODUCT</h1>
          </div>

          <div className='p-type'>
            <div className='p-menu'>
                <ul>
                    <li><NavLink to='/product' className='p-menu-link'>Tiles</NavLink></li>
                    <li><NavLink to='/sanitary' className='p-menu-link'>Sanitary</NavLink></li>
                </ul>
            </div>
          </div>

          <div className='p-title'>
            <h1>Tiles</h1>
            <h3>All Types of tiles here.</h3>
          </div>

          <div className='product-menu'>
              <ul>
                <li><NavLink to='/marbel' >MARBEL</NavLink></li>
                <li><NavLink to='/glass' >GLASS</NavLink></li>
                <li><NavLink to='/balcony' >BALCONY</NavLink></li>
                <li><NavLink to='/ceramic' >CERAMIC</NavLink></li>
                <li><NavLink to='/porcelain' >PORCELAIN</NavLink></li>
              </ul>
          </div>
          
      </div>
    </>
  )
}

export default Product
