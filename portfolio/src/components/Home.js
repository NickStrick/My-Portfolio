import React, { useState } from 'react';
import './Home.scss'
import gitLogo from '../images/GitHub-Mark-Light-64px.png'
import linkedin from '../images/linkedin-2.svg'
import mail from '../images/mail-100.png'

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
    console.log(sumOpen)


    const summary1 = 'Hi, I\'m Nick. I\'m a full stack web developer that loves problem sovling and exploring the world of software.'
    const summary2 = 'I spent the last couple of years learning and teaching to code. After highschool, curious about coding, i spent free time creating small games, and looking for resources to learn more and finding out what i could create while i worked in retail. I followed small courses on coding through things such as youtube, udemy, or watch and code.  I spent this past year enrolled in lambda school as a student and as a contract worker. During my time as a student, i learned Full Stack web development along with an assortment of librarys and frameworks, and some computer science fundamentals. With that i created some pretty cool projects that im proud of. I was a contract worker for lambda school as well, where i frist worked as a Team lead above students, leading daily meetings, sovling any debugging issues, helping my students in whatever way possible. The times i was working on a project with a team, i was responsible with the relationship between the stakeholder and the team, and managed our planning. i also debugged and filled any gaps in the conribution to the projects where nessesary. I spent most of my time in meetings getting to know my students and solving problems or planning with them.';
    const summary3 = 'These exerpiences only feed my hunger for learning and solving puzzles, and they fuel me to be where i am today.';
    return (
        <header className="App-header" aria-label={'page-header'}>
            <div className='header-title'>
                <h1>Nick Stricker</h1>
                <div className='social-icons'>
                    <img src={gitLogo} className='gitLogo git' target="_blank" onClick={() => window.open('https://github.com/NickStrick')} />
                    <img src={linkedin} className='gitLogo linkedin' target="_blank" onClick={() => window.open('https://www.linkedin.com/in/nick-stricker-1ba8a7192/')} />
                    {/* <img src={mail} className='gitLogo mail' target="_blank" onClick={() => window.open('strickerdev@gmail.com')} /> */}
                </div>
            </div>

            <p>Electricity in the spirit, puzzles on the mind, code in my veins.</p>
            <button className={sumBtn} onClick={toggleSum}>{sumOpen ? '⮙' : '⮛'}&nbsp; &nbsp; {sumBtn == 'sumBtn sumBtnClose' && 'read more'}</button>

            <div className={`summary ${sumOpen ? 'open' : ''}`} >
                <p className='summary-item'>{summary1}</p>
                <p className='summary-item'>{summary2}</p>
                <p className='summary-item'>{summary3}</p>
            </div>


        </header>
    );
}


export default Home;