import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Image() {
    const { imgsrc } = useParams()


    return (
        <div className='ImagePage'>
            <img style={{ width: "100%" }} src={`https://myschoolapp.co.ke/uploads/${imgsrc}`} alt='This is the complete image' />
        </div>
    )
}

export default Image