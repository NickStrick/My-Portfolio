import React from 'react';

class Home extends React.Component {

    render() {
        const summary = 'Hi, I\'m Nick. I spent the last couple of years learning and teaching to code. After highschool, curious about coding, i spent free time creating small games, and looking for resources to learn more and finding out what i could create while i worked in retail. I followed small courses on coding through things such as youtube, udemy, or watch and code.  I spent this past year enrolled in lambda school as a student and as a contract worker. During my time as a student, i learned Full Stack web development along with an assortment of librarys and frameworks, and some computer science fundamentals. With that i created some pretty cool projects that im proud of. I was a contract worker for lambda school as well, where i frist worked as a Team lead above students, leading daily meetings, sovling any debugging issues, helping my students in whatever way possible. The times i was working on a project with a team, i was responsible with the relationship between the stakeholder and the team, and managed our planning. i also debugged and filled any gaps in the conribution to the projects where nessesary. I spent most of my time in meetings getting to know my students and solving problems or planning with them. These exerpiences only feed my hunger for learning and solving puzzles, and they fuel me to be where i am today.';
        return (
            <header className="App-header" aria-label={'page-header'}>
                <h1>Nick Stricker</h1>
                <p>Technology in the spirit, puzzles on the mind, code in my veins.</p>
            </header>
        );
    }

};

export default Home;