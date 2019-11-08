import React, { useState } from 'react';
import logo from './logo.svg';
import riyLogo from './images/RIY.png'
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
    link: 'https://how-tutor.netlify.com/'
  },
  {
    name: "Project two",
    description: 'now this was a project that was really fun to do! i worked on it with a team of a few people , go take a look!',
    img: logo,
    link: 'https://github.com/NickStrick?tab=repositories'
  },
  {
    name: "Project three",
    description: 'now this was a project that was really fun to do! i worked on it with a team of a few people , go take a look!',
    img: logo,
    link: 'https://github.com/NickStrick?tab=repositories'
  },
  {
    name: "Project four",
    description: 'now this was a project that was really fun to do! i worked on it with a team of a few people , go take a look!',
    img: logo,
    link: 'https://github.com/NickStrick?tab=repositories'
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
