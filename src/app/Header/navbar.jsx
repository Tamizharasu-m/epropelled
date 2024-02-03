import React from "react";
import './navbar.css';
import Link from "next/link";

const Navbar = () =>{
return(
    <div className="container">
        <div className="mx-w">
            <div className="header-logo">
                <Link href="/" ><img src="./image/home image/logo.svg"/></Link>
                
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
                <button><Link style={{textDecoration:"none",color:"black" } } href="/contact">Contact Us</Link></button>
            </div>
            <div className="header-icon">
                <img src="./image/home image/name.svg" alt="" />
            </div>
        </div>
    </div>
)
}

export default Navbar;