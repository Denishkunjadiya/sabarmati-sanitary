import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <>
      <div className='main'>
           <div className='header'>
              <h1>Admin Panel</h1>
                <div className='navbar'>
                    <ul>
                        <li><Link to='/'>Slider</Link></li>
                        <li><Link to='/tiles'>Tiles</Link></li>
                        <li><Link to='/sanitary'>Sanitary</Link></li>
                        <li><Link to='/gallery'>Gallery</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/login'>Logout</Link></li>


                    </ul>
                </div>
                
           </div>
      </div>
    </>
  )
}

export default Menu
