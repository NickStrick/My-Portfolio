import React from 'react';

import Home from './Home.js';
import ProjectList from './ProjectList/ProjectList.js';
import Contactinfo from './ContactInfo/Contactinfo.js';
import SkillsSection from './skills/SkillsSection.js';

const HomePage = (props) => {

    return (

        <React.Fragment>
            <Home />
            <div id='portfolio'></div>
            <ProjectList projects={props.projects} history={props.history} />
            <div id='skills'></div>
            <SkillsSection />
            <Contactinfo />
        </React.Fragment>
    );

};

export default HomePage;