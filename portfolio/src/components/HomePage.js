import React from 'react';

import Home from './Home.js';
import ProjectList from './ProjectList/ProjectList.js';
import Contactinfo from './ContactInfo/Contactinfo.js';
import SkillsSection from './skills/SkillsSection.js';

import Pfp from '../images/pfp.jpg';

const HomePage = (props) => {

    return (
        <React.Fragment>
            <div className='pfp-background'>
                <img id='pfp' src={Pfp} alt='Nick S profile picture' />
            </div>

            <div className="container home-container">
                <Home />
                <div id='portfolio'></div>
                <ProjectList projects={props.projects} history={props.history} />
                <div id='skills'></div>
                <SkillsSection />
                <Contactinfo />
            </div>
        </React.Fragment>
    );

};

export default HomePage;