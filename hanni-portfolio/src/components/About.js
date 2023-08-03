import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './css/About.css';

export default function About() {
  return (
    <section>
    <div className='flow-root mt-40'>
      <section id="about" className=''>
        <div className="mx-auto about-me-section float-left items-center bg-green rounded-2xl h-1/6 ml-16">
          <h1 className="text-2xl text-center">Get to know me</h1>
          <p className='text-md text-center'>Check out some of my hobbies on the right!</p>
          <br></br>
          <p className='text-md text-center'>I am a 24-year-old recent graduate from the University of Utah's full stack coding bootcamp.</p>
          <p className='text-md text-center'>My wife and I have been married since May 2021.</p>
          <p className='text-md text-center'>I've been coding for nearly 2 years now, and I love the way I can express myself through web development and design!</p>
          <p className='text-md text-center'>I am a hard worker, and I love to learn new things.</p>
        </div>
          <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} className=" h-1/6 carousel-section float-right items-center rounded-2xl">
            <div className="carousel-item">
              <div className="carousel-item-content">
                <img
                  className="h-1/6 selection transition-all duration-300 rounded-lg cursor-pointer "
                  src="./assets/images/jazzlogo.jpg"
                  alt="Utah Jazz"
                />
                <section>
                    <h1 className="text-2xl">Utah Jazz</h1>
                    <br></br>
                    <p className="text-md">
                        I am a huge fan of the Utah Jazz. I've been watching games with my Dad and older brother since I was a kid.
                        It really helps hold our crazy family together. You can ask my wife; it's all we talk about.
                    </p>
                </section>
                </div>
                </div>
                <div className="carousel-item">
              <div className="carousel-item-content">
                
                <img
                  className="transition-all duration-300 rounded-lg cursor-pointer"
                  src="./assets/images/movies.jpg"
                  alt="Movies"
                />
                <section>
                    <h1 className="text-2xl">Movies</h1>
                    <br></br>
                    <p className="text-md">
                        There is nothing better than sitting in a cold dim theater with a tub of popcorn, engrossed in whatever film
                        you're watching. I have a passion for film, but when asked for a favorite, I will give a list of my top 5 that
                        will change day-by-day.
                    </p>
                </section>

              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-item-content">
                <img
                  className="transition-all duration-300 rounded-lg cursor-pointer"
                  src="./assets/images/outdoors.jpg"
                  alt="Outdoors"
                />
                <section>
                    <h1 className="text-2xl">Outdoors</h1>
                    <br></br>
                    <p className="text-md">
                        Growing up in Eden Utah, we didn't have much to do other than spend our time outside. We went hiking, biking, boating,
                        or camping every weekend, and I loved it! So much so, that I worked as a summer camp counselor & medic to spend as much
                        time as I could outside!
                    </p>
                </section>

              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-item-content">
                <img
                  className="transition-all duration-300 rounded-lg cursor-pointer"
                  src="./assets/images/gaming.jpg"
                  alt="Gaming"
                />
                <section>
                    <h1 className="text-2xl">Gaming</h1>
                    <br></br>
                    <p className="text-md">
                        As a kid, my brothers and I would spend hours around are little gamecube, playing games like Super Mario Sunshine,
                        and SSX3. Since then I've continued to enjoy gaming of all types. My wife and I are seen walking around the neighborhood
                        playing Pokemon Go, and I'm often playing Valorant late into the night when I should be sleeping. 
                    </p>
                </section>

              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-item-content">
                <img
                  className="transition-all duration-300 rounded-lg cursor-pointer"
                  src="./assets/images/basketball.jpg"
                  alt="Basketball"
                />
                <section>
                    <h1 className="text-2xl">Basketball</h1>
                    <br></br>
                    <p className="text-md">
                        Not only do I enjoy watching basketball, but I play at least once a week with my local group of guys. I am 6'6,
                        so it feels as if I was born to play. (I'm a great PF if you're looking for a new teammate)
                    </p>
                </section>

              </div>
            </div>
          </Carousel>
          {/* link to resume, and projects, and contact */}
      </section>
    </div>
    </section>
  );
}