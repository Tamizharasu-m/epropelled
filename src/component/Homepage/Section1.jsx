import React from 'react';
import './Section1.css';

export default function Section1() {
    return (
        <div className='section1'>
            <div className='section1-mx-w'>
                <div className='section1-img'>
                    <img src="./image/home image/SUSTAINABILITY-SYSTEM-S-04.webp" alt="" />
                </div>
                
                <div className='section-text'>
                    <div className='product-name'>
                        <h2>SUSTAINABILITY-SYSTEM1</h2>
                        <div className='product-btn'>
                            <img src="./image/home image/pic.svg" alt="" />
                            <span>View products</span>
                        </div>
                    </div>
                    <div className='product-img'>
                        <img src="./image/home image/Sustainability-System-min.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
