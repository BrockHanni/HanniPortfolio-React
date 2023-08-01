import React from 'react';
export default function About() {
    return (
        <div>
            <head>
            <link href="/distoutput.css" rel="stylesheet" />
            </head>
            <section id="about">
                <div className="container">
                    <h1 className="text-2xl">Get to know me</h1>
                    <p>I am a 24 year old recent graduate from the University of Utah's full stack coding bootcamp.</p>
                    <p>My wife and I have been married since May, 2021.</p>
                    <p>I've been coding for nearly 2 years now, and I love the way I can express myself through web development and design!</p>
                    <h1>Here are some of my hobbies!</h1>
                    <ul class="max-w-md space-y-1 list-disc list-inside">
                       <li className='jazz text-xl'>
                            <h1 className='text-lg'>Utah Jazz</h1>
                            <img className='h-auto' src='./assets/images/jazzlogo.jpg'></img>
                            <p className='text-sm'>I am a huge fan of the Utah Jazz, I've been watching games with my Dad and older brother since I was a kid, it really helps hold our crazy family together. You can ask my wife, it's all we talk about.</p>
                        </li> 
                        <li className='movies text-xl'>
                            <h1 className='text-lg'>Movies</h1>
                            <img className='h-auto' src='./assets/images/movies.jpg'></img>
                            <p className='text-sm'>There is nothing better than sitting in a cold dim theater with a tub of popcorn, engrossed in whatever film you're watching. I have a passion for film, but when asked for a favorite I will give a list of my top 5 that will change day-by-day. </p>
                        </li>
                        <li className='outdoors text-xl'>
                            <h1 className='text-lg'>Outdoors</h1>
                            <img className='h-auto' src='./assets/images/outdoors.jpg'></img>
                            <p className='text-sm'>Growing up in Eden Utah, we didn't have much to do other than spend our time outside. We went hiking, biking, boating, or camping every weekend, and I loved it! So much so, that I worked as a summer camp counselor & medic to spend as much time as I could outside! </p>
                        </li>
                        <li className='gaming text-xl'>
                            <h1 className='text-lg'>Gaming</h1>
                            <img className='h-auto' src='./assets/images/gaming.jpg'></img>
                            <p className='text-sm'>As a kid, my brothers and I would spend hours around are little gamecube, playing games like Super Mario Sunshine, and SSX3. Since then I've continued to enjoy gaming of all types. My wife and I are seen walking around the neighborhood playing Pokemon Go, and I'm often playing Valorant late into the night when I should be sleeping.</p>
                        </li>                                        
                        <li className='basketball text-xl'>
                            <h1 className='text-lg'>Basketball</h1>
                            <img className='h-auto' src='./assets/images/basketball.jpg'></img>
                            <p className='text-sm'>Not only do I enjoy watching basketball, but I play at least once a week with my local group of guys. I am 6'6, so it feels as if I was born to play.(I'm a great PF if you're looking for a new teammate)</p>
                        </li>
                    </ul>
                    {/* link to resume, and projects, and contact */}
                </div>
            </section>
        </div>
    )
}

