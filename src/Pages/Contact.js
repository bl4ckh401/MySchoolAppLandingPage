import axios from 'axios'
import React, { useState } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'


function Contact() {
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        error: "",
    })


    const API_PATH = 'https://myschoolapp.co.ke/PHP/contact.php';
    const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
    }

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
        formData.append('name', state.name);
        formData.append('phone', state.phone);
        formData.append('email', state.email);
        formData.append('subject', state.subject);
        formData.append('message', state.message);
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
            <div className='parallax' id='parallax1_image'>
                <div className='overlay'></div>
                <div className='aboutTitlePage'>
                    <div className='carousel-description'>
                        <h5 style={{ fontSize: 48, lineHeight: 1 }}>Contact us</h5>
                    </div>
                </div>
            </div>
            <h3 style={{ marginTop: 30 }}>Get In Touch with Us.</h3>
            <h4>We love hearing from you!</h4>
            <p>Your Messages keep us motivated. Feel free to send us an Email on your experience and suggestions on how to improve our product.</p>
            <div className='destination'>
                <div className='location'>
                    <p>
                        Pamatech Global Solutions.<br />
                        P.O. BOX 26342-00100 Nairobi, Kenya<br />
                        Nellea Plaza 2nd Floor suit F2.5, Ngara, Next Equity Bank Ngara<br />
                    </p>
                    <div className="CardPhone">
                        <div className="contactIcon">
                            <BsFillTelephoneFill color="white" />
                        </div>
                        <div className="contactInfo">
                            <p>+254 707 793 251</p>
                        </div>
                    </div>
                    <div className="CardPhone">
                        <div className="contactIcon">
                            <AiOutlineMail color="white" />
                        </div>
                        <div className="contactInfo">
                            <p>info@pamatech.co.ke</p>
                        </div>
                    </div>
                </div>
                <form className="ChatForm" encType='multipart/form-data' method='post'>
                    <div className='input_content'>
                        <input type="text" value={state.name} onChange={onChange} placeholder="Your Name" name='name' className="input" />
                        <input type="text" value={state.phone} onChange={onChange} placeholder="Your Phone Number" name='phone' className="input" />
                    </div>
                    <div className='input_content'>
                        <input type="email" value={state.email} onChange={onChange} placeholder="Your Email" name='email' className="input" />
                        <input type="text" value={state.subject} onChange={onChange} placeholder="Subject" name='subject' className="input" />
                    </div>
                    <textarea
                        type="text"
                        className="email_input"
                        placeholder="Enter Message"
                        name='message'
                        value={state.message}
                        onChange={onChange}
                    />
                    <button className="SubmitContact">
                        <h4 className="texts" onClick={sendMessage} name='submit' >SUBMIT</h4>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact