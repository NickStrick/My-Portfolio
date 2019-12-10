import React from 'react';
import Project from './Project.js';

const ProjectList = (props) => {
    let middle = props.projects.length % 2 !== 0 ? ((props.projects.length + 1) / 2) : props.projects.length / 2;
    return (
        <>


            <div className="projects" id='portfolio'>
                <h1 className='port-head'>Portfolio</h1>
                <div className='projects-columns'>
                    <div className='project-list'>
                        {props.projects.map((project, index) => {

                            if (middle > index) {
                                return <Project project={project} key={index} />
                            }
                        }
                        )}</div>
                    <div className='project-list'>
                        {props.projects.map((project, index) => {
                            if (middle <= index) {
                                return <Project project={project} key={index} />
                            }
                        }
                        )}</div>
                </div>

            </div></>
    );
}


export default ProjectList;