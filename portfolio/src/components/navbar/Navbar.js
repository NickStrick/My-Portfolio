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
    function linkClick(route) {
        let element = document.getElementById(route)
        element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
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
                        {props.location.pathname === '/' && <React.Fragment>
                            <navbutton className='nav-item' onClick={ () => linkClick('projects')}>Projects</navbutton>
                            <navbutton className='nav-item' onClick={ () => linkClick('skills')}>Skills</navbutton>
                            <navbutton className='nav-item' onClick={ () => linkClick('contact-info-id')}>Contact</navbutton></React.Fragment>}
                        {props.location.pathname !== '/' && <p className='nav-item' onClick={logoClick} >Home</p>}
                    </div>

                </div>
            </div>
        </>
    );
}


export default Navbar;