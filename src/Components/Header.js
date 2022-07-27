import React, { useState } from 'react'
import { HeaderData } from '../utils/HeaderData'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';


function Header() {
    const [click, setClick] = useState(false)
    const [isHovered, setisHovered] = useState(false)


    const handleClick = (event) => {
        event.preventDefault()
        setClick(!click)
    }
    const handleHover = (event) => {
        event.preventDefault()
        setisHovered(true)
    }

    return (
        <nav className='main_nav'>
            <div className='plogo'>
                <a href='/'>
                    <img src='/Pamatech.png' alt='PamatechLogo' className='logo' />
                </a>
            </div>
            <div className='nav-data'>
                <div className='logo_nav'>
                    <ul className={click ? "nav-options active" : "nav-options"}>
                        {HeaderData.map((item) => {
                            return (

                                <li className='option' onClick={handleClick}>
                                    <Link to={item.path}
                                    // spy={true}
                                    // smooth={true}
                                    // hashSpy={true}
                                    // offset={-100}
                                    // duration={100}
                                    // delay={500}
                                    // isDynamic={true}
                                    // ignoreCancelEvents={false}
                                    // spyThrottle={500}
                                    >
                                        <p className='navlink'>{item.title}</p>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <AiOutlineClose className="menu-icon" />
                ) : (
                    <GiHamburgerMenu className="menu-icon" />
                )}
            </div>
        </nav>
    )
}

export default Header