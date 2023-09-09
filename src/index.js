import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav";
import userAvatar from "./assets/img/avataaars.svg";
import Profile from "./sections/Profile";
import Portfolio from "./sections/Portfolio";
import About from "./sections/About";
import Contact from "./sections/contact";
import Footer from "./sections/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <header>
            <Nav />
        </header>
        <main>
            <Profile
                userAvatar={userAvatar}
                title="Start BootStrap"
                li1="Graphic Artist"
                li2="Web Designer"
                li3="Illustrator"
            />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </main>
        <footer>Copyright © 2023 All rights reserved</footer>
    </React.StrictMode>
);
