import React, { useState } from 'react'
import axios from 'axios';

function CreateImage() {
    const API_PATH = 'https://myschoolapp.co.ke/PHP/upload.php';
    const [image, setImage] = useState([])
    const [error, setError] = useState([])

    const onFileChange = (event) => {
        event.preventDefault();
        setImage(
            event.target.files[0]
        )
        console.log(image)
    }

    const headers = {
        'Content-Type': '*',
        "Access-Control-Allow-Origin": "*"
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append('file', image)
        axios.post(API_PATH, formData, headers)
            .then(result => {
                console.log(result.data)
            })
            .catch(error => setError({
                error: error.message
            }));
    }

    return (
        <div>
            <form method="post" encType="multipart/form-data">
                <input type="file" name='file' onChange={onFileChange} />
                <input type='submit' name='submit' value="Upload" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default CreateImage