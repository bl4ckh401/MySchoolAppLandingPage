import axios from 'axios';
import BlogCard from '../Components/BlogCard'
import React, { useEffect, useState } from 'react'

function Blog() {
    const API_PATH = 'https://myschoolapp.co.ke/PHP/fetch_blogposts.php';
    const [blogPosts, setBlogPosts] = useState([])

    const onLoad = async () => {
        await axios.get(API_PATH)
            .then(response => response.data)
            .then((response) => {
                setBlogPosts(response)
            })
    }

    useEffect(() => {
        onLoad()
    }, [])
    return (
        <div className='blog_page' id='blog'>
            <div className='parallax' id='parallax1_image'>
                <div className='overlay'></div>
                <div className='aboutTitlePage'>
                    <div className='carousel-description'>
                        <h5 style={{ fontSize: 48, lineHeight: 1 }}>Blog Page</h5>
                    </div>
                </div>
            </div>
            <div className='blog_content'>
                {
                    blogPosts.map((post) => {
                        return (
                            <BlogCard key={post.id} id={post.id} created_at={post.created_at} blog_title={post.blog_name} blog_post={post.blog_content} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog