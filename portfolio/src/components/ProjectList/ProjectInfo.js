import React from 'react';
import gitLogo from '../../images/GitHub-Mark-Light-64px.png'

const Project = (props) => {
    const project = props.projects[0]
    if (!(project.name)) {
        project.name = 'ERROR'
    }
    const { img, description, name, link } = project

    return (

        <div className="ProjectInfo">
            <h1>{name}</h1>

        </div>
    );
}


export default Project;