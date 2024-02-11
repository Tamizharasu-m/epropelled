"use client"

import React from "react";
import './navbar.css';
import Link from "next/link";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';



export default function ({ name, ...props }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (


        <div className="container1-sec">
            <div className="mx-w">
                <div className="header-logo">
                    <Link href="/" ><img src="./image/home image/logo.svg" /></Link>

                </div>
                <div className="header-links">
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Industries</a></li>
                        <li><a href="#">Company</a></li>
                    </ul>
                </div>
                <div className="header-btn">
                    <button><Link style={{ textDecoration: "none", color: "black" }} href="/contact">Contact Us</Link></button>
                </div>
                <div className="header-icon">
                    
                    <img variant="primary" onClick={handleShow} src="./image/home image/name.svg" alt="" className="me-2" >{name}</img>




                    <Offcanvas show={show} onHide={handleClose} {...props}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>ePROPELLED</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <h5 className="canva-h5">products</h5>
                            <h5 className="canva-h5">technology</h5>
                            <h5 className="canva-h5">industries</h5>
                            <h5 className="canva-h5"><Link style={{ textDecoration: "none", color: "black" }} href="/contact">Contact Us</Link></h5>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div>
        </div>
    )
}

function Example() {
    return (
        <div>
            {['img'].map((placement, idx) => (
                <navbar key={idx} placement={placement} name={placement} />
            ))}
        </div>
    );
}

Example();





