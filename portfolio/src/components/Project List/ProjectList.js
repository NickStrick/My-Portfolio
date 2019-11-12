import React from 'react';
import Project from './Project.js';

const ProjectList = (props) => {

    return (
        <>


            <div className="projects" id='portfolio'>
                <h1 className='port-head'>Portfolio</h1>
                <div className='project-list'>
                    {props.projects.map((project, index) =>
                        <Project project={project} key={index} />
                    )}</div>

            </div></>
    );
}


export default ProjectList;