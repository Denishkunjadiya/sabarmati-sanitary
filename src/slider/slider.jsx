import React from 'react'
import { useState, useEffect } from 'react'
import './slider.css'
import axios from 'axios'

const Slider = () => {

    const [content, setContent] = useState()
    const [image, setImage] = useState()

    const handleNameChange = (event) => {

        const name = event.target.value;
        setContent(name);
    };



    const handleSubmit = (event) => {

        alert('uplload');
        event.preventDefault();

        const formData = new FormData();
        formData.append('content', content);
        formData.append('image', image);

        console.log(formData);
        axios.post('http://localhost:5000/api/slider', formData)
            .then((response) => {
                console.log(response.data);
                setImage(response.data.filePath);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const [data, setData] = useState([]);


    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/display_slider");
        setData(response.data);
    };

  
    useEffect(() => {
        loadData();
    }, []);


    const deleteslider = (id) => {
        if (window.confirm("are You Syour You Want To Delete That slider ? ")) {
          axios.delete(`http://localhost:5000/api/delete_slider/${id}`);
        }
      }
    


    return (
        <>
            <div className='main'>
                <div className='title'>
                    <h1>Slider</h1>
                </div>

                <div className='form-box'>
                    <form onSubmit={handleSubmit}>
                        <div className='frm-field'>
                            <div className='f1'>
                                <label>Image</label>
                                <input type="file" name='photo' onChange={(e) => setImage(e.target.files[0])}></input>
                            </div>
                            <div className='f2'>
                                <label>Content</label>
                                <input type="text" name='content' onChange={handleNameChange}></input>
                            </div>
                        </div>
                        <div className='up-btn'>
                            <input type='submit' value='Upload' nm=' '></input>
                        </div>
                    </form>
                </div>

                <div className='table'>
                    <table border={1}>
                        <tr>
                            <th>No</th>
                            <th>Images</th>
                            <th>Content</th>
                            <th>Action</th>
                        </tr>

                        {data.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td><img src={item.img_path} alt="no image" style={{height:'150px'}}></img></td>
                                    <td>{item.content}</td>
                                    <td className='action'>
                                        <i class="fa-regular fa-trash-can" onClick={() => deleteslider(item.id)}></i>
                                    </td>
                                </tr>
                            )
                        })}

                    </table>
                </div>
            </div>
        </>
    )
}

export default Slider
