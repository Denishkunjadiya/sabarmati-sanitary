import { useState, useEffect } from 'react';

import React from 'react'
import './contact.css'
import axios from 'axios';

const Contact = () => {

  const [data, setData] = useState([]);


  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/display_contact");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deletecontact = (id) => {
    if (window.confirm("are You Syour You Want To Delete That contact ? ")) {
      axios.delete(`http://localhost:5000/api/delete_contact/${id}`);
    }
  }




  return (
    <div>
      <div className='main'>
        <div className='title'>
          <h1>Contact</h1>
        </div>

        <div className='contact-table'>
          <table border={1}>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Messages</th>
              <th>Action</th>
            </tr>


            {data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope='row'>{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>
                  <td>
                    <i class="fa-regular fa-trash-can" onClick={() => deletecontact(item.id)}></i>
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

export default Contact
