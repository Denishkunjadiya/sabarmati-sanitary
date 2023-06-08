import { useState, useEffect } from 'react';

import React from 'react'
import './gallery.css'
import axios from 'axios';

const Gallery = () => {

  const [image, setImage] = useState()
  const [category, setCategory] = useState()
  const [product, setProduct] = useState()


  const handlecategoryChange = (event) => {

    const category = event.target.value;
    setCategory(category);
  };

  const handleproductChange = (event) => {

    const product = event.target.value;
    setProduct(product);
  };



  const handleSubmit = (event) => {

    alert('uplload');
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('category', category);
    formData.append('product', product);



    console.log(formData);
    axios.post('http://localhost:5000/api/gallery', formData)
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
    const response = await axios.get("http://localhost:5000/api/display_gallery");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);


  const deletegallery = (id) => {
    if (window.confirm("are You Syour You Want To Delete That Contact? ")) {
      axios.delete(`http://localhost:5000/api/delete_gallery/${id}`);
    }
  }



  return (
    <div>
      <div className='main'>
        <div className='title'>
          <h1>Gallery</h1>
        </div>

        <div className='gallery-form-box'>
          <form onSubmit={handleSubmit}>
            <div className='frm-field'>
              <div className='f1'>
                <label>Image</label>
                <input type="file" name='' onChange={(e) => setImage(e.target.files[0])}></input>
              </div>
              <div className='f2'>
                <label>Category</label>
                <select onChange={handlecategoryChange}>
                  <option>Tiles</option>
                  <option>Sanitory</option>
                </select>
              </div>
              <div className='f3'>
                <label>Product</label>
                <select onChange={handleproductChange}>
                  <option></option>
                  <option>Marbel</option>
                  <option>Glass</option>
                  <option>Balcony</option>
                  <option>Ceramic</option>
                  <option>Porcelain</option>
                </select>
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
              <th>Category</th>
              <th>Product</th>
              <th>Action</th>
            </tr>

            {data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope='row'>{index + 1}</th>
                  <td><img src={item.img_path} alt="no image" style={{ height: '150px' }}></img></td>
                  <td>{item.category}</td>
                  <td>{item.product}</td>

                  <td className='action'>
                    <i class="fa-regular fa-trash-can" onClick={() => deletegallery(item.id)}></i>
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

export default Gallery
