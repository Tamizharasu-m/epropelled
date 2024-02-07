import React from 'react';
import './Section2.css';

export default function () {
    return (
        <div className='section2'>
            <div className='section2-video'>
                <video autoPlay muted><source className="video" src='./image/home image/video.mp4' ></source></video>
            </div>
            <div className='bg'>
                <h2>the future <br></br> of electric <br></br>propulsion</h2>
            </div>
        </div>
    )
}
