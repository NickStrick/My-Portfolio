import React, { useState } from 'react';
import './Home.scss';
import gitLogo from '../images/GitHub-Mark-Light-64px.png';
import linkedin from '../images/linkedin-2.svg';
import mail from '../images/mail-100.png';
import Pfp from '../images/pfp.jpg';

const Home = () => {
    const [sumBtn, setBtn] = useState(`sumBtn sumBtnClose`)
    const [sumOpen, setOpen] = useState(false)
    function toggleSum() {
        if (sumOpen) {
            setOpen(false)
            setTimeout(() => setBtn('sumBtn sumBtnClose'), 200)
        } else {
            setOpen(true)
            setTimeout(() => setBtn('sumBtn'), 200)
        }

    }


    const summary1 = 'Hi, I\'m Nick. I\'m a full stack web developer that loves problem sovling and exploring the world of software.'
    const summary2 = 'I spent the last couple of years learning and teaching to code. After highschool, curious about coding, I spent free time creating small games, and looking for resources to learn more and finding out what I could create while I worked in retail. I followed small courses on coding through things such as Youtube, Udemy, or Watch and Code. I spent this past year enrolled in Lambda School as a student and as a contract worker. During my time as a student, I learned Full Stack web development along with an assortment of librarys and frameworks, and some computer science fundamentals. With that I created some pretty cool projects that I’m proud of. I was a contract worker for Lambda School as well, where I frist worked as a Team lead above students, leading daily meetings, sovling any debugging issues, helping my students in whatever way possible. The times I was working on a project with a team, I was responsible with the relationship between the stakeholder and the team, and managed our planning. I also debugged and filled any gaps in the conribution to the projects where nessesary. I spent most of my time in meetings getting to know my students and solving problems or planning with them.';
    const summary3 = 'These exerpiences only feed my hunger for learning and solving puzzles, and they fuel me to be where I am today.';
    return (
        <header className="App-header" aria-label={'page-header'}>

            <div className='header-title'>

                <h1>Nick Stricker</h1>
                <div className='social-icons'>
                    <img src={gitLogo} className='gitLogo git' target="_blank" onClick={() => window.open('https://github.com/NickStrick')} />
                    <img src={linkedin} className='gitLogo linkedin' target="_blank" onClick={() => window.open('https://www.linkedin.com/in/nick-stricker-1ba8a7192/')} />
                </div>
            </div>

            <p id='moto'>Electricity in the spirit, puzzles on the mind, code in my veins.</p>
            <button className={sumBtn} onClick={toggleSum}>{sumOpen ? '⮙' : '⮛'}&nbsp; &nbsp; <span>{sumBtn == 'sumBtn sumBtnClose' && 'read more'}</span></button>

            <div className={`summary ${sumOpen ? 'open' : ''}`} >
                <p className='summary-item'>{summary1}</p>
                <p className='summary-item'>{summary2}</p>
                <p className='summary-item'>{summary3}</p>
            </div>


        </header >
    );
}


export default Home;