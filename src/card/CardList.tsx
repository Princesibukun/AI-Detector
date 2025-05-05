import React from "react";
import CardItem from "./CardItem";
import { cardData } from "./CardData";

const CardList: React.FC = () => {
    return (
        <div className="px-4 mt-10 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {cardData.map((card, index) => (
                    <CardItem
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardList;
