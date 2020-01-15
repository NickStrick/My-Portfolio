
import './SkillsSection.scss';
import React, { useState } from 'react';
import ReactLogo from '../../images/skills/logo.svg';
import SkillItem from './SkillItem.js';


const SkillsSection = () => {
    const skillList = [
        { skill: 'HTML5', logo: ReactLogo },
        { skill: 'CSS3', logo: ReactLogo },
        { skill: 'JavaScript', logo: ReactLogo },
        { skill: 'NodeJS', logo: ReactLogo },
        { skill: 'ReactJS', logo: ReactLogo },
        { skill: 'Redux', logo: ReactLogo },
        { skill: 'Python', logo: ReactLogo },
        { skill: 'SQL', logo: ReactLogo },
        { skill: 'Git', logo: ReactLogo },
        { skill: 'Postgres', logo: ReactLogo }
    ]
    console.log(skillList[0])

    return (
        <div className="skills">
            <h1 className='skills-head'>Skills</h1>
            <div className='skill-list'>
                {skillList.map((item) => {
                    return <SkillItem item={item} />
                })}
            </div>



        </div >
    );
}


export default SkillsSection;