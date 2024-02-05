"use client"

import React from 'react';
import './Section6.css';


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

export default function Section6() {

    
    return (
        <div className='section6'>
            <div className='section6-mx-w'>
                <div className='footer-logo'>
                    <img className='img1' src="./image/home image/logo2.webp" alt="" />
                    <img className='img2' src="./image/home image/logo6.webp" alt="" />
                    <img className='img3' src="./image/home image/logo1.webp" alt="" />
                    <img className='img4' src="./image/home image/logo4.webp" alt="" />
                    <img className='img5' src="./image/home image/logo5.webp" alt="" />
                </div>
            </div>
            <div className='section6-mx-w1'>
                <div className='df'>
                    <div>
                        <img className='footer-img' src="./image/home image/footer-img1.webp" alt="" />
                    </div>
                    <div>
                        <div><h3 className='footer-h3'>LET'S</h3></div>
                        <div className='df1'>
                            <h2>CONNECT</h2>
                            <img className='footer-icon' src="./image/home image/footer.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='section6-mx-w2'>
                <div className='footer'>
                    <div className='footer-df'>
                        <div className='footer-con' >
                            <h5 class="accordion" >PRODUCTS</h5>
                            <div class="panel">
                                <p>Air vehicles</p>
                                <p>Light Electric Vehicle</p>
                                <p>Sustainability System</p>
                                <p>Electric Vehicle</p>
                                <p>Marine</p>
                            </div>
                        </div>
                        <div className='footer-con' >
                            <h5 class="accordion" >USEFUL LINKS</h5>
                            <div class="panel">
                                <p>Company</p>
                                <p>Contact</p>
                                <p>Blog</p>
                                <p>Privacy</p>
                            </div>
                        </div>
                        <div className='footer-con' >
                            <h5 class="accordion" >LOCATE US</h5>
                            <div class="panel" >
                                <p>116 John Street STE 205Lowell, MA 01852</p>
                                <p>MON - FRI: 9:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className='w50'>
                        <img src="./image/home image/logo.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className='section6mx-w3'>

                <div className='footer-para'>
                    <p>© 2023 ePROPELLED all rights reserved.</p>
                </div>
                <div className='img-icon1'>
                    <img src="./image/home image/in.svg" alt="" />
                    <img src="./image/home image/insta.svg" alt="" />
                    <img src="./image/home image/twiter.svg" alt="" />
                    <img src="./image/home image/youtube.svg" alt="" />
                </div>
                <div className='w501'>
                    <img src="./image/home image/logo.svg" alt="" />
                </div>
                <div className='footer-para1'>
                    <p>© 2023 ePROPELLED all rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
