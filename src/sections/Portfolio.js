import React from "react";
import Card from "../components/card";
import cardData from "../constants/constants";
import HR from "../components/HR";
import "./Portfolio.css";

const Portfolio = (props) => {
    console.log(cardData);
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <HR dark="yes" />
            <div className="cards">
                {cardData.map((card) => (
                    <Card src={card.src[card.alt]} alt={card.alt} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
