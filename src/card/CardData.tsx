
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { IconType } from "react-icons";
import { FaBoltLightning, FaCloudArrowUp } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";

export interface CardItem {
    icon: IconType;
    title: string;
    description: string;
}

export const cardData: CardItem[] = [
    {
        icon: FaBoltLightning,
        title: "Fast, accurate detection",
        description: "Quickly analyze content with reliable, research grade precision",
    },
    {
        icon: FaCloudArrowUp,
        title: "Upload support for .text and .docx",
        description: "Easily upload documents for streamlined analysis.",
    },
    {
        icon: IoIosLock,
        title: "Private and secure by design",
        description: "Your text stays confidential—we never store or share your data.",
    },
    {
        icon: PiCurrencyDollarSimpleFill,
        title: "Flexible, transparent pricing",
        description: "Only pay for what you need, with clear usage-based billing.",
    },
];
