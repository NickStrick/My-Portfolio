import React from 'react';

const Project = (props) => {
    if (!(props.project.name)) {
        props.project.name = 'ERROR'
    }
    const { img, description, name } = props.project

    return (

        <div className="item">
            <img src={img} />
            <div className="info">
                <h2 className='title'>{name}</h2>
                <p aria-label={'project-description'}>{description}</p>
                <button> &nbsp; &nbsp;Learn More</button>
            </div>

        </div>
    );
}


export default Project;