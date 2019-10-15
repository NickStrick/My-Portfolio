import React from 'react';
import Project from './Project.js';

const ProjectList = (props) => {

    return (

        <div classname="projects">
            {props.projects.map(project =>
                <Project project={project} />
            )}

        </div>
    );
}


export default ProjectList;