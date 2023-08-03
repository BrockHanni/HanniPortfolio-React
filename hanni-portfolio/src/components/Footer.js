import React from 'react';
export default function Footer() {
    return(
        <div>
            <section className='text-xl text-center text-lightGreen'>
                <h1>I'm excited to work with you</h1>
            </section>
            <section style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <a href="https://www.linkedin.com/in/brock-hanni-803b37215/" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/images/linkdin.png" alt="LinkedIn" style={{ width: '40px', height: '40px', margin: '5px', borderRadius: '50%' }} />
                </a>
                <a href="https://github.com/BrockHanni/" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/images/Github.png" alt="GitHub" style={{ width: '40px', height: '40px', margin: '5px', borderRadius: '50%' }} />
                </a>
                <a href="https://www.instagram.com/bhanni26/" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/images/instagram.png" alt="Instagram" style={{ width: '40px', height: '40px', margin: '5px', borderRadius: '50%' }} />
                </a>
            </section>
        </div>
    )
}
