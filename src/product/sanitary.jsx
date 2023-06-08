import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';


const Sanitory = () => {


    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/display_sanitary");
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
                    <h1>Sanitary</h1>
                    <h3>All Types of Sanitary here.</h3>
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

export default Sanitory
