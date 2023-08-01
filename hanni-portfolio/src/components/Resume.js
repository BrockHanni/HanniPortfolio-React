import React from 'react';
export default function Resume() {
    
    // const resumeDownload = {path to resume}
    return(
        <div>
        <section id="resume">
            <div className="container">
                <h1>Resume</h1>
                <p className="section-title">Download my Resume<span><a href={resumeFilePath} download>Here</a></span></p>
                {/*detail */}
            </div>
        </section>
    </div>
    )
}