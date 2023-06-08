import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

const about = () => {
  return (
    <>
        <div className='main'>
          <slide className="back">
              <img src={require('../img/slider.png')}></img>
          </slide>

          
          <div className='page-title'>
            <h1>ABOUT US</h1>
          </div>

          <div className='about-us'>
              <div className='title'>
                <h1>About Us</h1>
              </div>

              <div className='content'>
                    <h1>Welcome to <span className='span1'>Sabarmati Stone Enterprice</span> </h1>
                    <h3>All brands of tiles,sanitary items are available here. <br/>wholesale and retail business is also done.Feel free to come to<br/> our showroom to get the tiles...</h3>
                    <div className='about-img'>
                        <img src={require('../img/tiles3.jpg')}></img>
                    </div>

              </div>

              <div className='content2'>
                    <div className='about-img2'>
                        <img src={require('../img/tiles3.jpg')}></img>
                    </div>

                    <div className='about-content2'>
                      <h3>Our product range also features Porcelain Tiles, Ceramic Tiles, <br/>Mosaics, Stone Basins and Pool tiles to help you meet your project <br/>needs in the most cost-effective and timely manner. Our interior <br/>designers are ready to assist you in selecting the best options <br/>for your project, whether a renovation or new build.</h3>
                    </div>
                    
                    <div className='btn'><h2><Link to='/contact' className='contact-link'>Contact</Link></h2></div>

              </div>

             
          </div>
        
        </div>
    </>
  )
}

export default about
