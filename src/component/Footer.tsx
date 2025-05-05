import { BiLogoTelegram } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaTh } from "react-icons/fa";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";

export const Footer = () => {
    return (
        <div className="py-10">
            <div className="bg-purple-100 w-full sm:w-[900px] mx-auto rounded-2xl">
                <div className="px-4 py-6 flex flex-col md:flex-row justify-between items-start gap-8 text-violet-950">
                    <div className="flex flex-col gap-2 max-w-full sm:max-w-sm">
                        <div className="flex items-center gap-4">
                            <FaTh className="text-violet-900" />
                            <p className="text-lg font-semibold">AI Detector</p>
                        </div>
                        <p className="text-sm sm:text-base">
                            Lorem ipsum dolor sit amet consectetur. Habitant cursus odio fringilla id tellus faucibus fermentum felis risus.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <ul className="flex gap-6 list-none text-sm sm:text-base">
                            <li>Pricing</li>
                            <li>Privacy policy</li>
                            <li>Terms of use</li>
                        </ul>
                        <ul className="flex gap-6">
                            <li className="bg-purple-700 rounded-full p-2 text-white">
                                <FaFacebookF />
                            </li>
                            <li className="bg-purple-700 rounded-full p-2 text-white">
                                <IoLogoInstagram />
                            </li>
                            <li className="bg-purple-700 rounded-full p-2 text-white">
                                <FaLinkedinIn />
                            </li>
                            <li className="bg-purple-700 rounded-full p-2 text-white">
                                <BiLogoTelegram />
                            </li>
                            <li className="bg-purple-700 rounded-full p-2 text-white">
                                <IoLogoTwitter />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-5 w-full sm:w-[900px] mx-auto">
                <hr className="text-gray-200" />
            </div>
            <p className="text-center text-sm sm:text-base">@ 2025 AI Detector - All Rights Reserved</p>
        </div>
    );
};
