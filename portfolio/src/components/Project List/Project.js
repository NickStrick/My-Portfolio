import React from 'react';

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
                    <button target="_blank" onClick={() => window.open(link)}>Github</button>
                    {props.project.deployed && <button target="_blank" onClick={() => window.open(props.project.deployed)}>Site</button>}</div>

            </div>

        </div>
    );
}


export default Project;