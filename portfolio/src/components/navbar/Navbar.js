import React, { useState, useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import logo from '../../logo.svg';
import './Navbar.scss'

const Navbar = (props) => {
    const [pinText, setPinText] = useState('OpacityOn');
    const [navClass, setNavClass] = useState('top');
    const [scrollNum, setScroll] = useState(window.scrollY);
    const [mouseIn, setMouseIn] = useState(false);

    function updateScroll() {
        if (window.scrolly !== scrollNum) {
            setScroll(window.scrollY)
        }

    }
    function navMouseover(dir) {
        console.log('enter', pinText)
        if (dir === 'in') {
            setMouseIn(true)
        } else {
            setMouseIn(false)
        }

    }
    window.addEventListener('scroll', () => updateScroll());


    useEffect(() => {
        document.getElementById('navHover').addEventListener('mouseenter', () => navMouseover('in'));
        document.getElementById('navHover').addEventListener('mouseleave', () => navMouseover('out'));
    }, [])
    useEffect(() => {
        if (window.scrollY < 100 || mouseIn) {
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

    function logoClick() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        if (props.location.pathname !== '/') {
            props.history.push('/');
        }

    }

    return (
        <>
            <div className={`nav-background ${pinText}`}><h3>Nick</h3></div>
            <div className={`nav-back ${pinText}`} id='navHover'>
                <div className={`nav-bar ${navClass}`} >
                    <div className='logo' onClick={logoClick}>
                        <img src={logo} />
                        <h3>Nick</h3>
                    </div>

                    <div className='nav-list'>
                        <a className='nav-item' href='#portfolio'>Portfolio</a>
                        <a className='nav-item' href='#skills'>Skills</a>
                        <a className='nav-item' href='#contact-info'>Contact</a>
                    </div>

                </div>
            </div>
        </>
    );
}


export default Navbar;