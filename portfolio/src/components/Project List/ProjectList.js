import React from 'react';
import Project from './Project.js';

const ProjectList = (props) => {

    return (

        <div className="projects">
            {props.projects.map((project, index) =>
                <Project project={project} key={index} />
            )}

        </div>
    );
}


export default ProjectList;