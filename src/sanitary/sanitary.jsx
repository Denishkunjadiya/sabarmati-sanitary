import React from 'react'
import { useState, useEffect } from 'react'
import './sanitory.css'
import axios from 'axios'

const Sanitary = () => {

    const [image, setImage] = useState()

    const handleSubmit = (event) => {

        alert('uplload');
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', image);

        console.log(formData);
        axios.post('http://localhost:5000/api/sanitary', formData)
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
        const response = await axios.get("http://localhost:5000/api/display_sanitary");
        setData(response.data);
    };


    useEffect(() => {
        loadData();
    }, []);

    const deletesanitary = (id) => {
        if (window.confirm("are You Syour You Want To Delete That  ? ")) {
          axios.delete(`http://localhost:5000/api/delete_sanitary/${id}`);
        }
      }

    return (
        <div>
            <div className='main'>
                <div className='title'>
                    <h1>Sanitary</h1>
                </div>

                <div className='sanitary-form-box'>
                    <form onSubmit={handleSubmit}>
                        <div className='frm-field'>
                            <div className='f1'>
                                <label>Image</label>
                                <input type="file" name='' onChange={(e) => setImage(e.target.files[0])}></input>
                            </div>
                        </div>
                        <div className='up-btn'>
                            <input type='submit' value='Upload' nm=''></input>
                        </div>
                    </form>
                </div>

                <div className='table'>
                    <table border={1}>
                        <tr>
                            <th>No</th>
                            <th>Images</th>
                            <th>Action</th>
                        </tr>


                        {data.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td><img src={item.img_path} alt="no image" style={{ height: '150px' }}></img></td>
                                    <td className='action'>
                                        <i class="fa-regular fa-trash-can" onClick={() => deletesanitary(item.id)}></i>
                                    </td>
                                </tr>
                            )
                        })}


                    </table>
                </div>
            </div>
        </div>
    )
}

export default Sanitary
