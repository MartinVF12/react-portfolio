import React from 'react';


import project1Image from '../../assets/project1.png';
import project2Image from '../../assets/project2.png';

function Portfolio() {
    const projects = [
        {
            title: "Express E-commerce Backend",
            img: project1Image,
            repoLink: "https://github.com/MartinVF12/express-ecommerce-backend"
        },
        {
            title: "Express Note Taker App",
            img: project2Image,
            deployedLink: "https://sleepy-forest-71375.herokuapp.com", // Reemplaza con la URL del despliegue si tienes
            repoLink: "https://github.com/MartinVF12/-ExpressNoteTakerApp"
        }
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-item">
                        <h3>{project.title}</h3>
                        <img src={project.img} alt={project.title} />
                        <p>
                            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed</a> | <a href={project.repoLink} target="_blank" rel="noopener noreferrer">View Code</a>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;
