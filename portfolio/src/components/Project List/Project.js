import React from 'react';
import gitLogo from '../../images/GitHub-Mark-Light-64px.png'

const Project = (props) => {
    if (!(props.project.name)) {
        props.project.name = 'ERROR'
    }
    const { img, description, name, link } = props.project

    return (

        <div className="item">
            <img src={img} />
            <div className="info">
                <h2 className='title'>{name}</h2>
                <p aria-label={'project-description'}>{description}</p>
                <div className='project-links'>
                    <img src={gitLogo} target="_blank" onClick={() => window.open(link)} />
                    {props.project.deployed && <button target="_blank" onClick={() => window.open(props.project.deployed)}>Site</button>}</div>

            </div>

        </div>
    );
}


export default Project;