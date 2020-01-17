import React from 'react';
import gitLogo from '../../images/GitHub-Mark-Light-64px.png'
import './ProjectInfo.scss';

const Project = (props) => {
    const project = props.projects[props.match.params.id]
    if (!(project.name)) {
        project.name = 'ERROR'
    }
    const { img, description, name, link, techUsed, teamMemebers, weeksCompleted, contribution, role } = project

    return (

        <div className="ProjectInfo">
            <img className='projectPic' src={img} alt={`${name} pic`} />
            <div className='project-links'>
                <img src={gitLogo} target="_blank" onClick={() => window.open(link)} />
                {project.deployed && <button target="_blank" onClick={() => window.open(project.deployed)}>Site</button>}
            </div>
            <h1 className='title'>{name}</h1>
            <p aria-label={'project-description'}>{description}</p>
            <p className='contribution'>{contribution}</p>
            <div className='tech'>
                <h2>Technologies</h2>
                <ul>
                    {techUsed.map((tech, index) => <li key={index}>{tech}</li>)}
                </ul>
            </div>
            <div className='short-info'>
                <div className='info-item'>
                    <label>Time completed</label>
                    <p>{weeksCompleted} Weeks</p>
                </div>
                <div className='info-item'>
                    <label>Team Size</label>
                    <p>{teamMemebers}</p>
                </div>
                <div className='info-item'>
                    <label>Role</label>
                    <p>{role}</p>
                </div>



            </div>


        </div>
    );
}


export default Project;