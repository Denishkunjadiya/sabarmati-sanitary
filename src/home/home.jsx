import React from 'react'
import { useState , useEffect } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
    const [data, setData] = useState([]);


    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/display_slider");
        setData(response.data);
    };


    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <div className='main'>
                <div className='slider'>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* <!-- Wrapper for slides --> */}
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={require('../img/tiles1.jpg')}></img>
                                <h1>Tiles 1</h1>
                            </div>

                            {data.map((item, index) => {
                                return (
                                    <div className="item ">
                                        <img src={item.img_path}></img>
                                        <h1>{item.content}</h1>
                                    </div>
                                )
                            })}

                        </div>

                        {/* // <!-- Left and right controls --> */}
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>




                <div className='about'>
                    <div className='content'>
                        <h1>Welcome to <span className='span1'>Sabarmati Stone Enterprice</span> </h1>
                        <h3>All brands of tiles,sanitary items are available here. <br />wholesale and retail business is also done.Feel free to come to<br /> our showroom to get the tiles...</h3>
                        <div className='about-img'>
                            <img src={require('../img/tiles3.jpg')}></img>
                        </div>
                    </div>
                    <div className='btn'><h2><Link to='/contact' className='contact-link'>CONTACT</Link></h2></div>

                </div>

                <div className='product'>
                    <div className='title'>
                        <h1>OUR PRODUCT</h1>
                        <h3>There are two types of product</h3>
                    </div>
                    <div className='types-product'>
                        <div className='prod-1'>
                            <img src={require('../img/tiles.jpg')}></img>
                            <h1>Tiles</h1>
                        </div>
                        <div className='prod-2'>
                            <img src={require('../img/sanitory.jpg')}></img>
                            <h1>Sanitory</h1>
                        </div>
                    </div>
                </div>

                <div className='gallery'>
                    <div className='title'>
                        <h1>GALLERY</h1>
                        <h3>All types of tiles and sanitory here.</h3>
                    </div>

                    <div className='img'>
                        <div className='img-1'>
                            <img src={require('../img/gallery/img1.jpg')}></img>
                        </div>
                        <div className='img-2'>
                            <img src={require('../img/gallery/img2.jpg')}></img>
                        </div>
                        <div className='img-3'>
                            <img src={require('../img/gallery/img3.jpg')}></img>
                        </div>
                        <div className='img-4'>
                            <img src={require('../img/gallery/img4.jpg')}></img>
                        </div>
                        <div className='img-5'>
                            <img src={require('../img/gallery/img5.jpg')}></img>
                        </div>
                        <div className='img-6'>
                            <img src={require('../img/gallery/img6.jpg')}></img>
                        </div>
                        <div className='img-7'>
                            <img src={require('../img/gallery/img7.jpg')}></img>
                        </div>
                        <div className='img-8'>
                            <img src={require('../img/gallery/img8.jpg')}></img>
                        </div>
                    </div>
                    <center>
                        <div className='btn2'>
                            <h1><Link to='/gallery' className='loadmore-link'>Load More</Link></h1>
                        </div>
                    </center>
                </div>

                <div className='contact'>
                    <div className='phone'>
                        <div className='phone-icon'>
                            <i class="fa-solid fa-phone"></i>
                        </div>

                        <div className='phone-info'>
                            <span>Phone <br />8320066228</span>
                        </div>
                    </div>

                    <div className='email'>
                        <div className='email-icon'>
                            <i class="fa-regular fa-envelope"></i>
                        </div>

                        <div className='email-info'>
                            <span>Email <br />shiroyakrushil683@gmail.com</span>
                        </div>
                    </div>

                    <div className='Address'>
                        <div className='address-icon'>
                            <i class="fa-solid fa-location-dot"></i>
                        </div>

                        <div className='address-info'>
                            <span>Address <br />Mohan Bigha, dehri,Bihar,India 821307</span>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Home
