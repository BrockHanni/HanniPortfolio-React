import React from 'react';
import { ProjectsData } from '../Projectdata.js';
export default function Projects() {
    // Take data from ProjectsData.js and map it to the DOM
    return (
        <section id="projects">
            <div className="container">
                <h1 className="section-title">Check out my work</h1>
            </div>
            <div className="">
                {ProjectsData.map((project) => (
                    <a 
                        href= {project.link}>
                            <img
                            src={project.image}
                            alt={project.title}
                            className=""
                            ></img>
                    </a>
                ))}
                {ProjectsData.map((project) => (
                    <h1>{project.title}</h1>
                ))}
            </div>


        </section>
    )
}