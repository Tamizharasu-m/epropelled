import React from 'react';
import './Section5.css';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


export default function Section5() {

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     scrub: 1,
  //     pin: true,
  //     trigger: "#pin-windmill",
  //     start: "50% 50%",
  //     endTrigger: "#pin-windmill-wrap",
  //     end: "bottom 50%",
  //   },
  // });

  // tl.to("#pin-windmill-svg", {
  //   rotateZ: 900,
  // });


  return (
    <div className='section5'>
      <div className='section5-mx-w'>
        <div className='large-logo'>
          <img src="./image/home image/logo-large.png" alt="" />
        </div>
        <div className='center1'>
          <div className='box'>
            <h1>15%</h1>
            <p>Our products can deliver improvements to efficiency that reduce the amount of electricity used by EVs.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
