import React from 'react';
import FeaturedProject from './FeaturedProject.js';

const ProjectList = (props) => {

    return (

        <div className="featured-projects" id='featured'>
            {props.featured.map((project, index) =>
                <Project project={project} key={index} />
            )}

        </div>
    );
}


export default ProjectList;