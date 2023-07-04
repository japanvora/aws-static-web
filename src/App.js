import logo from './logo.svg';
import './App.css';
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'AWS Static Website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'project1.jpg',
  },
  {
    id: 2,
    title: 'AWS AMPLIFY',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'project2.jpg',
  },
  // Add more projects as needed
];
function App() {
  return (
    <div className="App">
      <header>
        <h1>Multi Cloud Engineer</h1>
      </header>
      <main>
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.imageUrl} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Japan Vora </p>
      </footer>
    </div>
  );
}

export default App;