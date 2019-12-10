import React from 'react';
import gitLogo from '../../images/GitHub-Mark-Light-64px.png'

const Project = (props) => {
    const project = props.projects[0]
    if (!(project.name)) {
        project.name = 'ERROR'
    }
    const { img, description, name, link, techUsed, teamMemebers, weeksCompleted, contribution, role } = project

    return (

        <div className="ProjectInfo">
            <img src={img} alt={`${name} pic`} />
            <h1 className='title'>{name}</h1>
            <p aria-label={'project-description'}>{description}</p>
            <p className='contribution'>{contribution}</p>
            <ul>
                {techUsed.map((tech, index) => <li key={index}>{tech}</li>)}
            </ul>
            <div>
                <p>weeks worked on project: {weeksCompleted}</p>
                <p>Team Size: {teamMemebers}</p>

            </div>
            <div className='project-links'>
                <img src={gitLogo} target="_blank" onClick={() => window.open(link)} />
                {project.deployed && <button target="_blank" onClick={() => window.open(project.deployed)}>Site</button>}</div>

        </div>
    );
}


export default Project;