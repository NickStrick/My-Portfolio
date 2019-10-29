import React from 'react';
import logo from '../../logo.svg';
import './Navbar.scss'

const Project = (props) => {
    return (
        <div className='nav-back'>
            <div className="nav-bar">
                <img src={logo} />
                <div className='nav-list'>
                    <a className='nav-item'>Portfolio</a>
                    <a className='nav-item'>Contact</a>
                </div>

            </div>
        </div>
    );
}


export default Project;