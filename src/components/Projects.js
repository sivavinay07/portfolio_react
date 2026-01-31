import React from 'react';

// --- Step 1: Add the 'sourceCodeLink' to your project data ---
// I've added placeholder GitHub links. You should replace these with your actual repository links.
const projectsData = [
  {
    title: 'Simple Interest Calculator',
    link: 'https://simpleinter.niat.tech/',
    sourceCodeLink: '#', // TODO: Replace with your actual source code link
    description: null
  },
  {
    title: 'Hotel Site',
    link: 'https://hotelproject07.niat.tech/',
    sourceCodeLink: '#', // TODO: Replace with your actual source code link
    description: 'Hotel Site built using HTML and CSS.'
  },
  {
    title: 'Button Maker',
    link: 'https://custombutmaker.niat.tech/',
    sourceCodeLink: '#', // TODO: Replace with your actual source code link
    description: null
  },
  {
    title: 'joke generator',
    link: 'https://joke-generator-pied.vercel.app/',
    sourceCodeLink: 'https://github.com/vinayzxcvb/joke-generator.git', // TODO: Replace with your actual source code link
    description: null
  },
  {
    title: "Mint-clone",
    link: "#",
    sourceCodeLink: "https://github.com/sivavinay07/mint-clone.git",
    description: null,
  },
  {
    title: "Trip-advisor-clone",
    link: "#",
    sourceCodeLink: "https://github.com/sivavinay07/TripAdvisor-clone.git",
    description: null,
  },
  {
    title: "Foody",
    link: "https://foodbuddy-t388.onrender.com/",
    sourceCodeLink: "https://github.com/sivavinay07/FoodBuddy.git",
    description: 'built using MERN',
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article key={index} className="project-card flex flex-col justify-between">
              <div>
                <h3 className="project-title">{project.title}</h3>
                {project.description && <p className="project-desc">{project.description}</p>}
              </div>

              {/* --- Step 2: Add a container for the buttons and the new "Source Code" button --- */}
              <div className="mt-4 flex flex-wrap gap-4">
                <a href={project.link} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
                {/* This button will only show up if you provide a sourceCodeLink */}
                {project.sourceCodeLink && (
                  <a href={project.sourceCodeLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    Source Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
