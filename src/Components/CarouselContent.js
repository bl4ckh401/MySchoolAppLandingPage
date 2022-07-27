import React from 'react'
import { CarouselData } from '../utils/CarouselData'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'react-scroll/modules/components/Link';
import Demo from '../Pages/Demo';

function CarouselContent() {
    return (
        <div className='parallaxhome' id='parallax1_image'>
            <div className='overlay'></div>
            <Carousel className='carousel-main'>
                {
                    CarouselData.map((data, index) => {
                        return (
                            <Carousel.Item interval={3000} className='carousel-content' key={index}>
                                <h1>{data.title}</h1>
                                <div className='carousel-description'>
                                    <h3>{data.Description}</h3>
                                </div>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default CarouselContent