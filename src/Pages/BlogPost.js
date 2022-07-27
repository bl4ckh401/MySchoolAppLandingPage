import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';
import axios from 'axios';


function BlogPost() {

    const API_PATH = 'https://myschoolapp.co.ke/PHP/single_post.php';
    const [blogPostData, setBlogPostData] = useState({})
    const [error, setError] = useState("")
    const { id } = useParams()



    const getsinglepost = () => {
        console.log(id)
        axios.get(`https://myschoolapp.co.ke/PHP/single_post.php?id=${id}`)
            .then(result => {
                setBlogPostData(result.data)

            })
            .catch(error => setError({
                error: error.message
            })
            );
    }
    console.log(blogPostData)

    useEffect(() => {
        getsinglepost()
    }, [])

    return (
        <div className='blog_page'>
            <div className='blogpost'>
                <h1 className='blog_title'>{blogPostData.blog_name}</h1>
                <div className='blog_details'>
                    <h5>{blogPostData.blog_author}</h5>
                    <h5>{blogPostData.created_at}</h5>
                </div>
                <div className='blog_text'>
                    {parse(`${blogPostData.blog_content}`)}
                </div>
            </div>
        </div>
    )
}

export default BlogPost