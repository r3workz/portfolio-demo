import React from "react";
import HR from "../components/HR";

const About = (props) => {
    return (
        <section id="about">
            <h2>About</h2>
            <HR />
            <div className="about-text">
                <div>
                    Freelancer is a free bootstrap theme created by Start
                    Bootstrap. The download includes the complete source files
                    including HTML, CSS, and JavaScript as well as optional SASS
                    stylesheets for easy customization.
                </div>
                <div>
                    You can create your own custom avatar for the masthead,
                    change the icon in the dividers, and add your email address
                    to the contact form to make it fully functional!
                </div>
            </div>
            <button id="download">
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    height="1.5rem"
                    width="1.5rem"
                >
                    <path d="M11.5 7l-4 4-4-4h2.5v-6h3v6zM7.5 11h-7.5v4h15v-4h-7.5zM14 13h-2v-1h2v1z" />
                </svg>
                Free Download!
            </button>
        </section>
    );
};

export default About;
