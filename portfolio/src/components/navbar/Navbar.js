import React, { useState, useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import logo from '../../logo.svg';
import './Navbar.scss'

const Navbar = (props) => {
    const [pinText, setPinText] = useState('OpacityOn');
    const [navClass, setNavClass] = useState('top');
    const [scrollNum, setScroll] = useState(window.scrollY);

    function updateScroll() {
        if (window.scrolly !== scrollNum) {
            setScroll(window.scrollY)
        }

    }
    window.addEventListener('scroll', () => updateScroll());

    useEffect(() => {
        // console.log(window.scrollY)
        if (window.scrollY < 100) {
            if (pinText != 'OpacityOn') {
                setPinText('OpacityOn');
                setNavClass('top')
            }
        } else {
            if (pinText != 'OpacityOff') {
                setPinText('OpacityOff');
                setNavClass('below')
            }
        }
    });

    return (
        <>
            <div className={`nav-background ${pinText}`}><h3>Nick</h3></div>
            <div className={`nav-back ${pinText}`}>
                <div className={`nav-bar ${navClass}`}>
                    <div className='logo' onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                        <img src={logo} />
                        <h3>Nick</h3>
                    </div>

                    <div className='nav-list'>
                        <a className='nav-item' href='#portfolio'>Portfolio</a>
                        <a className='nav-item' href='#contact-info'>Contact</a>
                    </div>

                </div>
            </div>
        </>
    );
}


export default Navbar;