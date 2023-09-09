import React from "react";
import "./Nav.css";

export default function Nav() {
    return (
        <nav>
            <div className="navLeft">
                <h2>Start BootStrap</h2>
            </div>
            <div className="navRight">
                <a href="#portfolio">Portfolio</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    );
}
