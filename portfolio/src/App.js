import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";

import logo from './logo.svg';
import riyLogo from './images/RIY.png'
import mympyLogo from './images/Mympy.png'
import luncherLogo from './images/luncherApp.png'
import sandjLogo from './images/sandj.png'
import notesLogo from './images/lambdaNotes.png'
import rangoLogo from './images/rangoDjango.png'

import './App.scss';
import Navbar from './components/navbar/Navbar.js';
import HomePage from './components/HomePage.js';
import ProjectInfo from './components/ProjectList/ProjectInfo.js';

const pData = [
  // name
  // description
  // logo image
  // github link
  // deployed link
  // role in project

  // technologies used
  // time project was completed -- # of weeks
  // summary of contribution to project -- what you worked on front end/backend -- what you contributed
  {
    name: "Review It Yourself",
    description: 'Review It Yourself will target people who want to get up and get productive and learn different skills to do projects themselves. There will be a rating system on which one is better. This will lead to the tutorials that are accurate and precise to be on top.',
    img: riyLogo,
    link: 'https://github.com/labs13-how-to',
    deployed: 'https://how-tutor.netlify.com/',
    role: 'Wed Developer',
    techUsed: ['ReactJs', 'Express', 'Postgres', 'Cloudinary', 'PassportJS'],
    teamMemebers: 6,
    weeksCompleted: 5,
    contribution: 'I primary worked with the frontend on this project. i used auth0 and passportJS to create the authentication for our users database. I set up the projects routes on the database and used knex to template and seed our database.'
  },
  {
    name: "Jango Rango Dungeon",
    description: 'This project randomly Generates a map of 100 or more rooms. I used my knowledege of serach algorithms and data structures to generate a dungeon and be able to traverse it. We used django to send information of the dungeon to the frontend.',
    img: rangoLogo,
    link: 'https://github.com/CS-multiplayer',
    deployed: 'https://jango-rango-dungeon.netlify.com/',
    role: 'Wed Developer',
    techUsed: ['ReactJs', 'Express', 'Postgres', 'Cloudinary', 'PassportJS'],
    teamMemebers: 6,
    weeksCompleted: 5,
    contribution: 'I primary worked with the frontend on this project. i used auth0 and passportJS to create the authentication for our users database. I set up the projects routes on the database and used knex to template and seed our database.'

  },
  {
    name: "Smith and Jones Architects",
    description: 'My first project after starting lambda school showcases what i could build after 1 month of programming in javascript, html, and css.',
    img: sandjLogo,
    link: 'https://github.com/NickStrick/User-Interface-Project-Week',
    role: 'Wed Developer',
    techUsed: ['ReactJs', 'Express', 'Postgres', 'Cloudinary', 'PassportJS'],
    teamMemebers: 6,
    weeksCompleted: 5,
    contribution: 'I primary worked with the frontend on this project. i used auth0 and passportJS to create the authentication for our users database. I set up the projects routes on the database and used knex to template and seed our database.'

  },
  {
    name: "Lambda Notes",
    description: 'This project allowed me to showcase my progress when i frist learned react. With this app you can view your list of notes as well as create, edit and delete any particular note.',
    img: notesLogo,
    link: 'https://github.com/NickStrick/front-end-project-week',
    deployed: 'https://nstrick-lambda-notes.netlify.com/',
    role: 'Wed Developer',
    techUsed: ['ReactJs', 'Express', 'Postgres', 'Cloudinary', 'PassportJS'],
    teamMemebers: 6,
    weeksCompleted: 5,
    contribution: 'I primary worked with the frontend on this project. i used auth0 and passportJS to create the authentication for our users database. I set up the projects routes on the database and used knex to template and seed our database.'

  },
  {
    name: "Mympy Dreams",
    description: 'Mympy is on a mission to close the poverty gap in VR technology by creating a low barrier entry into the field of VR development for low-income individuals. Mympy Dreams is a marketplace where individuals can create a profile and post their project and needs and find funding from the Mympy Dreams community.',
    img: mympyLogo,
    link: 'https://github.com/mympy-dreamers',
    deployed: 'https://mympydreamers.netlify.com/',
    role: 'Team Lead/Web Developer',
    techUsed: ['ReactJs', 'Express', 'Postgres', 'Cloudinary', 'PassportJS'],
    teamMemebers: 6,
    weeksCompleted: 5,
    contribution: 'I primary worked with the frontend on this project. i used auth0 and passportJS to create the authentication for our users database. I set up the projects routes on the database and used knex to template and seed our database.'

  },
  {
    name: "Luncher App",
    description: 'There are kids today in this country who go without student lunches. This app allows schools to broadcast the needs of their students by declaring an amount of donations that they would need to be fullfilled in order to provide lunches for those that go without.',
    img: luncherLogo,
    link: 'https://github.com/luncher-team/LA-Backend-Nick-Stricker',
    deployed: 'https://luncherappltrii.netlify.com/',
    role: 'Wed Developer',
    techUsed: ['ReactJs', 'Express', 'Postgres', 'Cloudinary', 'PassportJS'],
    teamMemebers: 6,
    weeksCompleted: 5,
    contribution: 'I primary worked with the frontend on this project. i used auth0 and passportJS to create the authentication for our users database. I set up the projects routes on the database and used knex to template and seed our database.'

  },
  {
    name: "CS build week 2",
    description: 'In this project i tested my algorithm skills and traversed a 500 room dungeon, followed clues and mined a blockchain coin. I used my knowledge of search algorithms and graphs in order to mine a coin in the right location in the graph.',
    img: logo,
    link: 'https://github.com/TBN-CS-build-week-2/CS-Build-Week-2',
    role: 'Wed Developer',
    techUsed: ['ReactJs', 'Express', 'Postgres', 'Cloudinary', 'PassportJS'],
    teamMemebers: 6,
    weeksCompleted: 5,
    contribution: 'I primary worked with the frontend on this project. i used auth0 and passportJS to create the authentication for our users database. I set up the projects routes on the database and used knex to template and seed our database.'

  },
  // {
  //   name: "Stash.It",
  //   description: 'This project allowed me to showcase my progress when i frist learned react. With this app you can view your list of notes as well as create, edit and delete any particular note.',
  //   img: logo,
  //   link: 'https://github.com/tabless-thursday-4-15-2019',
  //   role: 'Team Lead'
  // },
  // {
  //   name: "Design Your Life",
  //   description: 'In this project i tested my algorithm skills and traversed a 500 room dungeon, followed clues and mined a blockchain coin. I used my knowledge of search algorithms and graphs in order to mine a coin in the right location in the graph.',
  //   img: logo,
  //   link: 'https://github.com/designyourlife-bw-3-11',
  //   role: 'Team Lead'
  // },
  // {
  //   name: "devdesk-queue",
  //   description: 'My first project after starting lambda school showcases what i could build after 1 month of programming in javascript, html, and css.',
  //   img: logo,
  //   link: 'https://github.com/devdesk-queue',
  //   role: 'Team Lead',
  // },

]

function App() {
  const [projects] = useState(pData)


  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Route exact path='/' render={props => <HomePage {...props} projects={projects} />} />
        <Route path='/project/:id' render={props => <ProjectInfo {...props} projects={projects} />} />

      </div>
    </div>
  );
}

export default App;
