import React from 'react';
import logo from '../../logo.svg';
import './Navbar.scss'

const Navbar = (props) => {
    return (
        <div className='nav-back'>
            <div className="nav-bar">
                <div className='logo'>
                    <img src={logo} />
                    <h3>Nick</h3>
                </div>

                <div className='nav-list'>
                    <a className='nav-item' href='#contact-info'>Portfolio</a>
                    <a className='nav-item'>Contact</a>
                </div>

            </div>
        </div>
    );
}


export default Navbar;