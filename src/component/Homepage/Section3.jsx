"use client"

import React from 'react';
import './Section3.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function () {
    const textRef = useRef(null);
    const fontRef = useRef(null);
    

    useEffect(() => {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
              end: 'bottom 30%',
              scrub: true,
            },
          }
        );
      }, []);

      useEffect(() => {
        const text = fontRef.current;
        const letters = text.innerText.split('');
        text.innerHTML = letters.map(letter => `<span>${letter}</span>`).join('');
    
        gsap.fromTo(
          text.children,
          { opacity: 0.5, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.05,
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          }
        );
      }, []);
    
    

    return (
        <div className='section3'>
            <div className='section3-mx-w'>
                <div className='text-left'>
                    <h2 ref={fontRef} >EPROPELLED DESIGNS <img className="text-img" src='./image/home image/ph1.webp' /> STATE OF THE ART  MOTORS, <img className='text-img1' src='./image/home image/ph3.webp' /> GENERATORS, AND POWERMANAGEMENT SYSTEMS.</h2>
                </div>
                <div className='w100'>
                    <div className='w40'>
                        <img className='circle' src='./image/home image/circle.svg' />
                    </div>
                    <div className='w60'>
                        <p ref={textRef} >Our technology helps reduce energy consumption and improve system efficiency at a lower cost in the aerospace, manned
                            and unmanned aerial vehicles, electric vehicles, and pump motor markets. We are a leader in magnetics engineering, and
                            our patented technology innovations are used in the air, land, and water, defining the future of electric propulsion.</p>
                    </div>
                </div>
                <div className='product-btn1'>
                    <img src="./image/home image/pic.svg" alt="" />
                    <span>Learn More</span>
                </div>
            </div>
            <div className='section3-mx-w1'>
                <div>
                    <img className='map' src="./image/home image/home-map.webp" alt="" />
                    <img className="map1" src="./image/home image/home-map-mob.webp" alt="" />
                </div>
                <div className='map-text'>
                    <h2>OUR GLOBAL PRESENCE SPANS ACROSS <span>4 LOCATIONS</span></h2>
                </div>
            </div>
        </div>
    )
}
