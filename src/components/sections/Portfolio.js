import React from 'react';
import Project from '../Project';

function Portfolio() {
    const projects = [

    ];

    return (
        <section>
            <h2>Portfolio</h2>
            {projects.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </section>
    );
}

export default Portfolio;
