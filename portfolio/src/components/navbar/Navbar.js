import React, { useState, useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import logo from '../../logo.svg';
import './Navbar.scss'

const Navbar = (props) => {
    const [navController, setController] = useState(new ScrollMagic.Controller());
    const [pinText, setPinText] = useState('OpacityOff');
    const [scrollNum, setScroll] = useState(window.scrollY);

    function updateScroll() {
        if (window.scrolly !== scrollNum) {
            setScroll(window.scrollY)
        }

    }
    window.addEventListener('scroll', () => updateScroll());

    useEffect(() => {
        console.log(window.scrollY)
        if (window.scrollY === 0) {
            if (pinText != 'OpacityOn') {
                setPinText('OpacityOn');
            }
        } else {
            if (pinText != 'OpacityOff') {
                setPinText('OpacityOff');
            }
        }
    });

    return (
        <div className={`nav-back ${pinText}`}>
            <div className="nav-bar">
                <div className='logo'>
                    <img src={logo} />
                    <h3>Nick</h3>
                </div>

                <div className='nav-list'>
                    <a className='nav-item' href='#portfolio'>Portfolio</a>
                    <a className='nav-item' href='#contact-info'>Contact</a>
                </div>

            </div>
        </div>
    );
}


export default Navbar;