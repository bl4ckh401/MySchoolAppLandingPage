import React from 'react'
import { BsDribbble, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'

function Footer() {
    return (
        <div className='Footer'>
            <div className='container'>
                <div className='column'>
                    <p style={{ margin: "10px" }}>Copyright &copy; 2022 Pamatech Global Solutions</p>
                </div>
                <div className='column'>
                    <p style={{ margin: "10px" }}>FOLLOW US </p>
                    <div className='icons'>
                        <a href='https://www.facebook.com/pamatechsolutions/'><BsFacebook style={{ margin: "10px" }} size={24} color="white" /></a>
                        <a href='https://twitter.com/pamatechg_solns'><BsTwitter style={{ margin: "10px" }} size={24} color="white" /></a>
                        <a href='https://www.linkedin.com/company/pamatech-global-solutions/mycompany/'><BsLinkedin style={{ margin: "10px" }} size={24} color="white" /></a>
                        <a href='#'><BsDribbble style={{ margin: "10px" }} size={24} color="white" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer