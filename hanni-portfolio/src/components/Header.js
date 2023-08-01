import React from 'react';
export default function Header() {
    return(
        // navbar
        <div className=''>
            <div className='container'>
                <a className=''>
                    <a href='#' className=''>
                        Hanni
                    </a>
                </a>
                <nav className='flex justify-between items-center h-16'>
                    <a href='#About' className='text-3xl font-bold'>
                        About Me
                    </a>                    
                    <a href='#Skills' className='text-3xl font-bold'>
                        My Skills
                    </a>
                    <a href='#Projects' className='text-3xl font-bold'>
                        Some of my past work
                    </a>
                    <a href='#Resume' className='text-3xl font-bold'>
                        Check out my resume
                    </a>
                    <a href='#Contact' className='text-3xl font-bold'>
                        Contact Me
                    </a>
                </nav>
            </div>
        </div>

    )
}