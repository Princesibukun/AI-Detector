import React from "react";
import { IconType } from "react-icons";

type Props = {
    icon: IconType;
    title: string;
    description: string;
};

const CardItem: React.FC<Props> = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-white shadow-md border-2 border-purple-200 rounded-2xl p-4 text-center">
            <Icon className="text-5xl text-[#512888] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default CardItem;
