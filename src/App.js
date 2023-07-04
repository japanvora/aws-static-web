import logo from './logo.svg';
import './App.css';
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'AWS Static Website',
    description: 'Developed a static website using AWS services for seamless hosting and deployment, optimizing performance and scalability.',
    imageUrl: 'project1.jpg',
  },
  {
    id: 2,
    title: 'AWS AMPLIFY',
    description: 'Utilized AWS Amplify to build and deploy a serverless application, leveraging various AWS services for seamless development and scaling.',
    imageUrl: 'project2.jpg',
  },
  // Add more projects as needed
];
function App() {
  return (
    <div className="App">
      <header>
        <h1>Japan Vora</h1>
      </header>
      <main>
        <h2>AWS Portfolio</h2>
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