import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import TextTruncate from 'react-text-truncate';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BlogCard(props) {

    const navigate = useNavigate()

    return (
        <div className='blog_container'>
            <div className='blog_post'>
                <div className='blog_post' style={{ lineHeight: 0.5 }}>
                    <h6 style={{ padding: 20, paddingBottom: 0 }}>{props.created_at}</h6>
                    <h1 style={{ padding: 20, paddingTop: 0 }}>{props.blog_title}</h1>
                </div>
                <div>
                    <p style={{ padding: 20, }}>
                        <TextTruncate
                            line={3}
                            element="span"
                            truncateText="....."
                            text={parse(`${props.blog_post}`)}
                            textTruncateChild={<button className='read-on' onClick={() => {
                                axios.get(`http://localhost:3301/Pamatech/myschoolapp/src/PHP/single_post.php/?id=${props.id}`)
                                    .then((response) => {
                                        if (response) {
                                            navigate(`/blog/${props.id}`)
                                            console.log(response)
                                        }
                                    })
                            }}>Read on</button>}
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard