import React from 'react'
import { useState, useEffect } from 'react';
import './gallery.css'
import axios from 'axios';

const Gallery = () => {

    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/display_gallery");
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
                    <h1>GALLERY</h1>
                </div>

                <div className='gallery'>
                    <div className='g-title'>
                        <h1>Gallery</h1>
                        <h3>All types of tiles and sanitory here.</h3>
                    </div>

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

export default Gallery
