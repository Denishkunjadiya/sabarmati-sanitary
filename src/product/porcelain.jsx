import React from 'react'
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Porcelain = () => {

  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/display_porcelain");
    setData(response.data);
  };


  useEffect(() => {
    loadData();
  }, []);

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
              <li><Link to='/product' className='p-menu-link'>Tiles</Link></li>
              <li><Link to='/sanitary' className='p-menu-link'>Sanitary</Link></li>
            </ul>
          </div>
        </div>

        <div className='p-title'>
          <h1>Tiles</h1>
          <h3>All Types of tiles here.</h3>
        </div>

        <div className='product-menu'>
          <ul>
            <li><Link to='/marbel' className='product-menu-link'>MARBEL</Link></li>
            <li><Link to='/glass' className='product-menu-link'>GLASS</Link></li>
            <li><Link to='/balcony' className='product-menu-link'>BALCONY</Link></li>
            <li><Link to='/ceramic' className='product-menu-link'>CERAMIC</Link></li>
            <li><Link to='/porcelain' className='product-menu-link'>PORCELAIN</Link></li>
          </ul>
        </div>

        <div className='p-title'>
          <h1>PORCELAIN</h1>
        </div>


        <div className='gallery'>
          <div className='img'>
            {data.map((item, index) => {
              return (
                <div className='img-1'>
                  <img src={item.img_path}></img>
                </div>
              )
            })}


          </div>
        </div>
      </div>
    </>
  )
}

export default Porcelain
