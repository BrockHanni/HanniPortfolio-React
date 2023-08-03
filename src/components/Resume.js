import React from 'react';
export default function Resume() {
    
    const resumeDownload = "../assets/resumeUpdated.docx"

    return(
        <div>
        <section id="resume" className='text-center'>
            <div className="">
                <br />
                <p className='text-2xl font-bold text-brown'>My Resume</p>
                <br />
                <p className='text-lightGreen text-xl'>Click <a href={resumeDownload} download className='text-brown'>HERE</a> to download my resume</p>
                <br />

                <p className='text-lightGreen text-xl'>Or</p>
                <br />
                <p className='text-lightGreen text-xl'>Fill out the form below to send me an email!</p>
                <br />

                {/*detail */}
            </div>
        </section>
    </div>
    )
}