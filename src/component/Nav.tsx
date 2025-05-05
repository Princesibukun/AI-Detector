import { FaTh } from "react-icons/fa";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white py-5 px-4 sm:px-8 md:px-16 lg:px-32 gap-4 md:gap-0">
            <div className="flex items-center gap-2 text-[#663399]">
                <FaTh className="text-xl" />
                <p className="text-lg">AI Detector</p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <div className="flex items-center gap-2 bg-purple-200 text-black px-4 py-2 rounded text-sm sm:text-base">
                    <PiCurrencyDollarSimpleFill />
                    <span>View pricing plans</span>
                </div>

                <div className="hidden md:block w-px h-6 bg-gray-300" />

                <div className="flex gap-4 w-full justify-center md:justify-start md:w-auto">
                    <Link to="/login" className="w-full md:w-auto">
                        <button className="w-full md:w-auto border-2 border-[#512888] text-[#512888] px-6 py-2 rounded-2xl text-sm sm:text-base">
                            Login
                        </button>
                    </Link>
                    <Link to="/signup" className="w-full md:w-auto">
                        <button className="w-full md:w-auto bg-[#512888] text-white px-6 py-2 rounded-2xl text-sm sm:text-base">
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
