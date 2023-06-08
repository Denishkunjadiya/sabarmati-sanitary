import React, { useState } from 'react'
import axios from 'axios';

function Image() {
const[content,setContent] = useState()
const[image,setImage] = useState()

    const handleNameChange = (event) => {

        const content = event.target.value;
        setContent(content);
    };

    

    const handleSubmit = (event) => {

        alert('uplload');
        event.preventDefault();

        const formData = new FormData();
        formData.append('content', content);
        formData.append('image', image);

        console.log(formData);
        axios.post('http://localhost:5000/api/upload-image', formData)
            .then((response) => {
                console.log(response.data);
                setImage(response.data.filePath);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={content} onChange={handleNameChange} />
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                <button type="submit">Upload Image</button>
            </form>
        </div>
    )
}

export default Image
