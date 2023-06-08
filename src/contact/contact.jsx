import React from 'react'
import './contact.css';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
  
    const submitPost = () => {
      axios.post('http://localhost:5000/api/contact', { name:name,email:email,message:message })
    }
    

  return (
    <>
      <div className='main'>
          <slide className="back">
              <img src={require('../img/slider.png')}></img>
          </slide>

          <div className='page-title'>
            <h1>CONTACT</h1>
          </div>

          <div className='contactus'>
              <div className='title'>
                <h1>Contact</h1>
                <h3>Send Your Message</h3>
              </div>

              <div className='map'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14856.718821418743!2d70.609782!3d21.4221804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1671706549215!5m2!1sen!2sin" 
                        width="100%" 
                        height="500" 
                        style={{border:"0" }}
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
              </div>

              <div className='contact-box'>
                  <div className='icon-img'>
                      <img src={require('../img/send.png')}></img>
                  </div>

                  <div className='form'>
                      <form method='POST'>
                        <div className='container'>
                          <div className='f1'>
                              <label>Name</label>
                              <input type='text' name='nm' pattern='[a-z,A-Z]*' placeholder='Enter Your Name' autoFocus onChange={(e) => { setname(e.target.value) }}></input>
                          </div>

                          <div className='f2'>
                              <label>Email</label>
                              <input type='email' name='email' placeholder='Enter Your Email' onChange={(e) => { setemail(e.target.value) }}></input>
                          </div>

                          <div className='f3'>
                              <label>Message</label>
                              <textarea name='' placeholder='Type Your Message...' onChange={(e) => { setmessage(e.target.value) }}></textarea>
                          </div>
                          
                        </div>
                          <div className='send-btn'>
                                <input type='submit' name=''  value='SEND' onClick={submitPost}></input>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          <div className='contact'>
                <div className='phone'>
                    <div className='phone-icon'>
                        <i class="fa-solid fa-phone"></i>
                    </div>

                    <div className='phone-info'>
                        <span>Phone <br/>8320066228</span>
                    </div>
                </div>
                
                <div className='email'>
                    <div className='email-icon'>
                        <i class="fa-regular fa-envelope"></i>
                    </div>
                    
                    <div className='email-info'>
                        <span>Email <br/>shiroyakrushil683@gmail.com</span>
                    </div>
                </div>
                
                <div className='Address'>
                    <div className='address-icon'>
                        <i class="fa-solid fa-location-dot"></i>
                    </div>

                    <div className='address-info'>
                        <span>Address <br/>Mohan Bigha, dehri,Bihar,India 821307</span>
                    </div>
                </div>

            </div>
      </div>
    </>
  )
}

export default Contact
