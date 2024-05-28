import React from 'react';
import profileImage from '../../assets/img.jpeg';

function AboutMe() {
    return (
        <section>
            <h2>About Me</h2>
            <img src={profileImage} alt="Mi Foto" />
            <p>Hello! I'm currently a Manager of Innovation and Transformation at Banorte, where I focus on developing new and exciting products. I graduated from Tec, where I honed my skills and passion for technology and innovation. Outside of work, I have a deep love for football and Padel, both of which keep me active and energized. I'm also enrolled in a development bootcamp to enhance my skills and explore new career opportunities. I'm eager to leverage my experience and education to make a significant impact in my next role.</p>
        </section>
    );
}

export default AboutMe;
