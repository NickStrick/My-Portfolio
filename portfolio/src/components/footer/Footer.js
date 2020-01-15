import React, { useState } from 'react';
import './Footer.scss';
import gitLogo from '../../images/GitHub-Mark-Light-64px.png'
import linkedin from '../../images/linkedin-2.svg'
import mail from '../../images/mail-100.png'



const Footer = (props) => {


    return (

        <div className="footer">
            <img src={gitLogo} className='gitLogo git' target="_blank" onClick={() => window.open('https://github.com/NickStrick')} />
            <img src={linkedin} className='gitLogo linkedin' target="_blank" onClick={() => window.open('https://www.linkedin.com/in/nick-stricker-1ba8a7192/')} />
            <img src={mail} className='gitLogo mail' target="_blank" onClick={() => window.open('strickerdev@gmail.com')} />


        </div >
    );
}


export default Footer;