import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Demo() {
    const API_PATH = 'https://myschoolapp.co.ke/PHP/fetch_images.php';
    const [imagesrc, setImageSource] = useState([''])
    const navigate = useNavigate()


    const onLoad = async () => {
        await axios.get(API_PATH)
            .then(response => response.data)
            .then((response) => {
                setImageSource(response)
                console.log(response)
            })

    }
    useEffect(() => {
        onLoad()
    }, [])


    return (
        <div className='Demo' id='demo'>
            <h1>Request Demo</h1>
            <button className='btnRequest'>Request Demo</button>
            <div style={{ marginTop: 30, justifyContent: "center", display: "flex", flexDirection: "column", }}>
                <div className='iframe'>
                    <iframe className='iframe_youtube' src="https://youtube.com/embed/gRn9R_sxywg">
                    </iframe>
                </div>
                <div className='image-container' >
                    <div className='montage'>
                        {imagesrc.map((image, index) => {
                            return (
                                <div style={{ margin: 20 }} onClick={(props) => {
                                    axios.get(`https://myschoolapp.co.ke/PHP/image.php?imgsrc=${imagesrc[index]}`)
                                        .then((response) => {
                                            if (response) {
                                                navigate(`/demo/${imagesrc[index]}`)
                                                console.log(response)
                                            }
                                        })
                                }}>
                                    <img className='imagedemo' src={`https://myschoolapp.co.ke/${image}`} alt="an alernative to the source" />
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>


        </div >
    )
}

export default Demo