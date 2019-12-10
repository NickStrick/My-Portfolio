import React from 'react';

import Home from './Home.js';
import ProjectList from './ProjectList/ProjectList.js';
import Contactinfo from './ContactInfo/Contactinfo.js';

const HomePage = (props) => {

    return (

        <React.Fragment>
            <Home />
            <ProjectList projects={props.projects} />
            <Contactinfo />
        </React.Fragment>
    );

};

export default HomePage;