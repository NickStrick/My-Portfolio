import React from 'react';

const Project = (props) => {
    const { img, description, name } = props.project
    return (

        <div className="item">
            <img src={img} />
            <div className="info">
                <h2>{name}</h2>
                <p>{description}</p>
                <button>> &nbsp; &nbsp;Learn More</button>
            </div>

        </div>
    );
}


export default Project;