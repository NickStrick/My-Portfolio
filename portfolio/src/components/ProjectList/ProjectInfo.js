import React from 'react';
import gitLogo from '../../images/GitHub-Mark-Light-64px.png'

const Project = (props) => {
    if (!(props.project.name)) {
        props.project.name = 'ERROR'
    }
    const { img, description, name, link } = props.project

    return (

        <div className="ProjectInfo">


        </div>
    );
}


export default Project;