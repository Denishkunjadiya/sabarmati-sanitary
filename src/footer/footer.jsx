import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div>
               <div className='footer'>
                <div className='footer-content'>
                    <div className='footer-about'>
                        <h1>ABOUT US</h1>
                        <h4>All brands of tiles,sanitary<br/>items are available here.<br/>wholesale and retail <br/>business is also done.</h4>
                    </div>

                    <div className='footer-contact'>
                        <h1>CONTACT</h1>
                        <a href='' target="_blank" title='Instagram'><i class="fa-brands fa-instagram" id='insta'></i></a>
                        <a href='' target="_blank" title='Email'><i class="fa-regular fa-envelope" id='email'></i></a>
                        <a href='' target="_blank" title='Phone'><i class="fa-solid fa-phone" id='phone'></i></a>                    
                    </div>

                    <div className='footer-openning'>
                        <h1>OPENNING HOURS</h1>
                        <h4>Mon - Thu : 9AM - 10PM <br/>
                            Wedneday : Closed <br/>
                            Thu - Fri : 9AM -10PM<br/>
                            Sat - Sun : 10AM - 10PM</h4>
                    </div>
                </div>

                <div className='developer'>
                    <h3>Design & Developed By : Shiroya Krushil</h3>
                </div>
            </div>
    </div>
  )
}

export default footer
         