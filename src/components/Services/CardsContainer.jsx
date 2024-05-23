import React from "react";
import Cards from "./Cards";
import { ServiceCardData } from "../../utils/Constants";
import "./CardsContainer.css"

const CardsContainer = () => {
    return (
        <div className="card-container">
            {ServiceCardData.map((card, index) => (
                <Cards
                    key={index}
                    title={card.title}
                    iconPath={card.iconPath}
                    description={card.description}
                    iconColor={card.iconColor}
                />
            ))}
        </div>
    );
};

export default CardsContainer;
