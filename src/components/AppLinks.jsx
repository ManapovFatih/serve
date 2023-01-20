import React from 'react'
import appstore from '../assets/imgs/icons/appstore.png'
import googleplay from '../assets/imgs/icons/googleplay.png'
import appgallery from '../assets/imgs/icons/appgallery.png'

const AppLinks = () => {
    return (
        <ul className='apps-links'>
            <li>
                <a href="/">
                    <img src={appstore} alt="appstore" />
                </a>
            </li>
            <li>
                <a href="/">
                    <img src={googleplay} alt="googleplay" />
                </a>
            </li>
            <li>
                <a href="/">
                    <img src={appgallery} alt="appgallery" />
                </a>
            </li>
        </ul>
    )
}

export default AppLinks