import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './components/Home.js';
import ProjectList from './components/Project List/ProjectList.js';

function App() {
  const [projects] = useState([
    {
      name: "Project one",
      description: 'now this was a project that was really fun to do! i worked on it with a team of a few people , go take a look!',
      img: logo
    },
    {
      name: "Project two",
      description: 'now this was a project that was really fun to do! i worked on it with a team of a few people , go take a look!',
      img: logo
    },
    {
      name: "Project three",
      description: 'now this was a project that was really fun to do! i worked on it with a team of a few people , go take a look!',
      img: logo
    },
    {
      name: "Project four",
      description: 'now this was a project that was really fun to do! i worked on it with a team of a few people , go take a look!',
      img: logo
    },
  ])

  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
