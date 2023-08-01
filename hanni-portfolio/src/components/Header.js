import React from 'react';
export default function Header() {
    return(
  
        <div className=''>
        <head>
          <link href="/distoutput.css" rel="stylesheet" />
        </head>
         
            <div className='container'>
                <a className=''>
                    <h1 class = "text-3xl font-bold">I'm Brock Hanni</h1>
                    <h2 class = "text-2xl font-bold">Your next Front-End Web Developer</h2>

                </a>
                   {/* navbar */}
                   {/* add a dropdown menu? */}
                <nav className='flex justify-between items-center h-16'>
                    <a href='#About' className='text-xl font-bold'>
                        About Me
                    </a>                    
                    <a href='#Skills' className='text-xl font-bold'>
                        My Skills
                    </a>
                    <a href='#Projects' className='text-xl font-bold'>
                        Some of my past work
                    </a>
                    <a href='#Resume' className='text-xl font-bold'>
                        Check out my resume
                    </a>
                    <a href='#Contact' className='text-xl font-bold'>
                        Contact Me
                    </a>
                    {/* toggle darkmode here */}
                </nav>
            </div>
        </div>

    )
}