import React, { useState } from 'react';
import './Home.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import gitLogo from '../images/GitHub-Mark-Light-64px.png';
import linkedin from '../images/linkedin-2.svg';
import mail from '../images/mail-100.png';

const Home = () => {
    const [sumBtn, setBtn] = useState(`sumBtn sumBtnClose`)
    const [sumOpen, setOpen] = useState(false)
    function toggleSum() {

        if (sumOpen) {
            setOpen(false)
            setTimeout(() => setBtn('sumBtn sumBtnClose'), 200)

            setTimeout(() => 
                document.querySelector('.header-title').scrollIntoView({
                top: 500,
                behavior : "smooth"
                }), 250)
        } else {
            setOpen(true)
            setTimeout(() => setBtn('sumBtn'), 200)
            setTimeout(() => 
                document.querySelector('#intro').scrollIntoView({
                top: 500,
                behavior : "smooth"
                }), 250)
            
    }
    }


    const summary1 = 'Hi, I\'m Nick. I\'m a full stack web developer that loves making creative solutions to complex problems, and connecting with people who are on a mission. I have experience in many areas of software development, and currently my main Tech stack is Javascript, React.js, and Node.js'
    const summary2 = `I spent the last couple of years learning and teaching to code. After highschool, curious about coding, I completed some credits toward a computer science degree
    while i worked in retail. I spent free time creating small games, 
    and looking for resources to learn more and find out what I could make. I followed small courses on coding through things such as Youtube,
     Udemy, or Watch and Code. I spent these past two years enrolled in Lambda School as a student and as a contract teaching assistant. 
     `
     const summary3 = `During my time as a student, I learned Full Stack web development 
      and computer science fundamentals, along with an assortment of librarys, frameworks and algorithms. With that I created some pretty cool projects that I’m proud of. 
     I was a contract worker for Lambda School as well, where I frist worked as a Team lead above students, leading daily meetings, solving any debugging issues, 
     helping my students learn the cirriculum in javscript, java, and python. The times I was working on a project with a team, I was responsible with the relationship between the stakeholder and the team,
      and managed our planning. I also debugged and filled any gaps in the conribution to the project where nessesary. I spent most of my time in meetings getting to know my students 
      and solving problems or planning with them and creating documentation.`;
    const summary4 = 'These exerpiences only feed my hunger for learning and solving puzzles, and they fuel the drive to expand my knowledge and experience.';
    return (
        <header className="App-header" aria-label={'page-header'}>

            <div className='header-title'>

                <h1>Nick Stricker</h1>
                <div className='social-icons'>
                    <img src={gitLogo} className='gitLogo git' target="_blank" onClick={() => window.open('https://github.com/NickStrick')} />
                    <img src={linkedin} className='gitLogo linkedin' target="_blank" onClick={() => window.open('https://www.linkedin.com/in/nick-stricker/')} />
                </div>
            </div>
            
            
            <p id='intro'>{summary1}</p>
            <button className={sumBtn} onClick={toggleSum}><span>{sumOpen ? <FontAwesomeIcon icon='chevron-up'/>: <FontAwesomeIcon icon='chevron-down'/>}</span><span id='read-more'>{sumBtn == 'sumBtn sumBtnClose' && 'read more'}</span></button>

            <div className={`summary ${sumOpen ? 'open' : ''}`} >
                <p className='summary-item'>{summary2}</p>
                <p className='summary-item'>{summary3}</p>
                <p className='summary-item'>{summary4}</p>
            </div>
            <p id='moto'>Electricity in the spirit, puzzles on the mind, code in my veins.</p>

        </header >
    );
}


export default Home;