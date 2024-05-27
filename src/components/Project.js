import React from 'react';
import './App.css';

function Project({ title, imageUrl, deployedUrl, repoUrl }) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={imageUrl} alt={title} />
            <p>
                <a href={deployedUrl}>Deployed Application</a> | <a href={repoUrl}>GitHub Repository</a>
            </p>
        </div>
    );
}

export default Project;
