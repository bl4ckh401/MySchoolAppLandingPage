import axios from 'axios'
import React, { useState } from 'react'

function CreateBlog() {
    const [state, setState] = useState({
        blog_name: "",
        blog_content: "",
        blog_author: "",
        error: "",
    })


    const API_PATH = 'https://myschoolapp.co.ke/PHP/blog.php';

    const onChange = (event) => {
        const value = event.target.value
        const data = event.target
        event.preventDefault();
        setState({
            ...state,
            [data.name]: value
        })
    }

    const sendMessage = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('blog_name', state.blog_name);
        formData.append('blog_author', state.blog_author);
        formData.append('blog_content', state.blog_content);
        const fD = Object.fromEntries(formData);
        console.log(fD)
        axios.post(API_PATH, fD, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(result => {
                // console.log(result)
            })
            .catch(error => setState({
                error: error.message
            })
            );

    }

    return (
        <div className="postChat">
            <form className="ChatForm" encType='multipart/form-data' method='post'>
                <div>
                    <input type="text" value={state.blog_name} onChange={onChange} placeholder="Blog Name" name='blog_name' className="" />
                    <input type="text" value={state.blog_author} onChange={onChange} placeholder="blog_author" name='blog_author' className="" />
                </div>
                <textarea
                    type="text"
                    className="emailinput"
                    placeholder="Enter Content"
                    name='blog_content'
                    value={state.blog_content}
                    onChange={onChange}
                />
                <button className="SubmitContact">
                    <h4 className="texts" onClick={sendMessage} name='submit' >SUBMIT</h4>
                </button>
            </form>
        </div>
    )
}

export default CreateBlog