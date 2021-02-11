import React from 'react';

import Home from './Home.js';
import ProjectList from './ProjectList/ProjectList.js';
import Contactinfo from './ContactInfo/Contactinfo.js';
import SkillsSection from './skills/SkillsSection.js';

import Pfp from '../images/pfp.jpg';
import PfpThree from '../images/pfp3.jpg';


const HomePage = (props) => {

    return (
        <React.Fragment>
            <div className='pfp-background'>
                <div className='pfp-overflow'>
                <img id='pfp' src={PfpThree} alt='Nick S profile picture' /></div>

            </div>

            <div className="container home-container">
                <Home />
                <div id='projects'></div>
                <ProjectList projects={props.projects} history={props.history} />
                <div id='skills'></div>
                <SkillsSection />
                <Contactinfo />
            </div>
        </React.Fragment>
    );

};

export default HomePage;