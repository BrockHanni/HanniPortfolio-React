import React from 'react';
import { ProjectsData } from '../Projectdata.js';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/Projects.css';
export default function Projects() {
    // Take data from ProjectsData.js and map it to the DOM
    return (
        <section className='w-screen mt-20'>
         <section id="projects">
            <div className="text-center mb-10">
                <h1 className="text-2xl font-bold text-brown">Check out my work</h1>
                <p className='text-xl text-lightGreen'>Click on the images to see the app</p>
            </div>
            <div className="">
            <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} className="project-section items-center rounded-2xl">
                {/* item 1 */}
                <div className="project-item">
                    <div className="project-item-content">
                        <section className="w-2/3">
                            <h1 className="text-2xl">{ProjectsData[2].title}</h1>
                            <br />
                            <p className="text-md">{ProjectsData[2].description}</p>
                            <br />
                            < a href={ProjectsData[2].link} className='text-lightGreen'> See the code </a>
                        </section>
                        <a href={ProjectsData[2].link} className=''>
                            <img src={ProjectsData[2].image} alt={ProjectsData[2].title} className="w-1/3" />
                        </a>

                    </div>
                </div>
            {/* item 2 */}
                <div className="project-item">
                    <div className="project-item-content">
                        <a href={ProjectsData[1].link}>
                            <img src={ProjectsData[1].image} alt={ProjectsData[1].title} className="w-1/3" />
                        </a>
                        <section>
                            <h1 className="text-2xl">{ProjectsData[1].title}</h1>
                            <br />
                            <p className="text-md">{ProjectsData[1].description}</p>
                            <br />
                            < a href={ProjectsData[1].link} className='text-lightGreen'> See the code </a>
                        </section>
                    </div>
                </div>
                {/* item 1 */}
                <div className="project-item">
                    <div className="project-item-content">
                        <section className="w-2/3 mt-20">
                            <h1 className="text-2xl">{ProjectsData[0].title}</h1>
                            <br />
                            <p className="text-md">{ProjectsData[0].description}</p>
                            <br />
                            < a href={ProjectsData[0].link} className='text-lightGreen'> See the code </a>
                        </section>
                        <a href={ProjectsData[0].link}>
                            <img src={ProjectsData[0].image} alt={ProjectsData[0].title} className="w-1/3 mt-20" />
                        </a>                        
                    </div>
                </div>
                {/* item 4 */}
                <div className="project-item">
                    <div className="project-item-content">
                        <a href={ProjectsData[3].link}>
                            <img src={ProjectsData[3].image} alt={ProjectsData[3].title} />
                        </a>
                        <section className="w-2/3">
                            <h1 className="text-2xl">{ProjectsData[3].title}</h1>
                            <br />
                            <p className="text-md">{ProjectsData[3].description}</p>
                            <br />
                            < a href={ProjectsData[3].link} className='text-lightGreen'> See the code </a>
                        </section>
                    </div>
                </div>
                {/* item 5 */}
                <div className="project-item">
                    <div className="project-item-content">
                        <section className="w-2/3">
                            <h1 className="text-2xl">{ProjectsData[4].title}</h1>
                            <br />
                            <p className="text-md">{ProjectsData[4].description}</p>
                            <br />
                            < a href='{ProjectsData[4].link}' className='text-lightGreen'> See the code </a>
                        </section>
                        <a href={ProjectsData[4].link}>
                            <img src={ProjectsData[4].image} alt={ProjectsData[4].title} className="w-1/3" />
                        </a>
                    </div>
                </div>
                {/* item 6 */}
                <div className="project-item">
                    <div className="project-item-content">
                        <a href={ProjectsData[5].link}>
                            <img src={ProjectsData[5].image} alt={ProjectsData[5].title} className="w-1/3" />
                        </a>
                        <section className='w-1/3'>
                            <h1 className="text-2xl">{ProjectsData[5].title}</h1>
                            <br />
                            <p className="text-md">{ProjectsData[5].description}</p>
                            <br />
                            < a href='{ProjectsData[5].link}' className='text-lightGreen'> See the code </a>
                        </section>
                    </div>
                </div>
          </Carousel>
            </div>
        </section>
    </section>
    )
}