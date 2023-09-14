import React from 'react';
export default function Resume() {
    
    const resumeDownload = "../assets/BrockHanni(8-23).pdf"

    return(
        <div>
        <section id="resume" className='text-center'>
            <div className="">
                <br />
                <br />
                <p className='text-4xl font-bold text-brown'>My Resume</p>
                <br />
                <p className='text-lightGreen text-2xl'> <a href={resumeDownload} download className='text-green'>Click the logo to download my resume!</a></p>
                <br />
                <a href={resumeDownload} download>
                    <img src={require ("./images/LogoBH.jpg")} alt="Resume" className="w-1/5s  mx-auto items-center justify-center"/>
                </a>
                


            </div>
        </section>
    </div>
    )
}