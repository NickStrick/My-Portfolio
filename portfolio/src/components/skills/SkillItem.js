import React, { useState } from 'react';

const SkillItem = (props) => {
    const { skill, logo } = props.item;

    return (
        <div className="item">
            <img src={logo} alt={skill} />
            <p>{skill}</p>

        </div >
    );
}


export default SkillItem;