import React from 'react';
import gitLogo from '../../images/GitHub-Mark-Light-64px.png'

const Project = (props) => {
    if (!(props.project.name)) {
        props.project.name = 'ERROR'
    }
    const { img, description, name, link } = props.project

    function projectPage() {
        window.scrollTo({ top: 0, left: 0 })
        props.history.push(`/project/${props.index}`)
    }

    return (

        <div className="item">
            <h2 className='title'>{name}</h2>
            <div className='img-overflow'>
            <img src={img} alt={`${name} smol pic`} />
            </div>
            <div className="info">

                <p aria-label={'project-description'}>{description}</p>
                <button target="_blank" onClick={projectPage}>Learn More</button>
                {/* <div className='project-links'>

                    <img src={gitLogo} target="_blank" onClick={() => window.open(link)} />
                    {props.project.deployed && <button target="_blank" onClick={() => window.open(props.project.deployed)}>Site</button>}</div> */}

            </div>

        </div >
    );
}


export default Project;