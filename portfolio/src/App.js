import React, { useState } from 'react';

import logo from './logo.svg';
import riyLogo from './images/RIY.png'
import mympyLogo from './images/Mympy.png'
import luncherLogo from './images/luncherApp.png'
import sandjLogo from './images/sandj.png'
import notesLogo from './images/lambdaNotes.png'

import './App.scss';
import Home from './components/Home.js';
import ProjectList from './components/Project List/ProjectList.js';
import Navbar from './components/navbar/Navbar.js';
import Contactinfo from './components/ContactInfo/Contactinfo.js';

const pData = [
  {
    name: "Review It Yourself",
    description: 'now this was a project that was really fun to do! i worked on it with a team of a few people , go take a look!',
    img: riyLogo,
    link: 'https://github.com/labs13-how-to',
    deployed: 'https://how-tutor.netlify.com/'
  },
  {
    name: "Mympy Dreams",
    description: 'now this was a project that was really fun to do! i worked on it with a team of a few people , go take a look!',
    img: mympyLogo,
    link: 'https://github.com/mympy-dreamers',
    deployed: 'https://mympydreamers.netlify.com/'
  },
  {
    name: "Luncher App",
    description: 'now this was a project that was really fun to do! i worked on it with a team of a few people , go take a look!',
    img: luncherLogo,
    link: 'https://github.com/luncher-team/LA-Backend-Nick-Stricker',
    deployed: 'https://luncherappltrii.netlify.com/'
  },
  {
    name: "Lambda Notes",
    description: 'now this was a project that was really fun to do! i worked on it with a team of a few people , go take a look!',
    img: notesLogo,
    link: 'https://github.com/NickStrick/front-end-project-week',
    deployed: 'https://nstrick-lambda-notes.netlify.com/'
  },
  {
    name: "Smith and Jones Architects",
    description: 'now this was a project that was really fun to do! i worked on it with a team of a few people , go take a look!',
    img: sandjLogo,
    link: 'https://github.com/NickStrick/User-Interface-Project-Week',
  },
  {
    name: "Jango Rango Dungeon",
    description: 'now this was a project that was really fun to do! i worked on it with a team of a few people , go take a look!',
    img: logo,
    link: 'https://github.com/NickStrick/User-Interface-Project-Week',
  },
  {
    name: "CS build week 2",
    description: 'now this was a project that was really fun to do! i worked on it with a team of a few people , go take a look!',
    img: logo,
    link: 'https://github.com/NickStrick/User-Interface-Project-Week',
  },
]

function App() {
  const [projects] = useState(pData)

  return (
    <div className="App">
      <Navbar />
      <div className="container">

        <header className="App-header" aria-label={'page-header'}>
          <Home />
        </header>
        <ProjectList projects={projects} />
        <Contactinfo />
      </div>
    </div>
  );
}

export default App;
