import React from "react";
import HR from "../components/HR";
import InputField from "../components/InputField";

const Contact = (props) => {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <HR dark="yes" />
            <form>
                <InputField
                    id="name"
                    label="Full Name"
                    type="text"
                    placeholder="Enter your Full Name"
                />
                <InputField
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="Enter your Email Address"
                />
                <InputField
                    id="phone"
                    label="Phone Number"
                    type="number"
                    placeholder="Enter your Phone Number"
                />
                <InputField
                    id="message"
                    label="Message"
                    type="text"
                    placeholder="Enter your Message"
                />
                <button id="submit" type="submit">
                    Send
                </button>
            </form>
        </section>
    );
};

export default Contact;
