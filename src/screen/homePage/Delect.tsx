import { BsArrowRight } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaPaste } from "react-icons/fa";
import { MdOutlineEmergency } from "react-icons/md";
import CardList from "../../card/CardList";


const Delect = () => {
    return (
        <div className="bg-gray-100">
            <div className="py-20 max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <button className="bg-white text-black border-2 border-gray-300 px-4 py-2 rounded-4xl">How it works</button>
                    <p className="font-bold text-4xl py-4">Detect AI-Generated Content In Seconds</p>
                    
                    <div  className="flex justify-center mt-10">
                    <div className="flex flex-wrap items-center justify-center gap-20 py-10">
                        
                        <div className="flex flex-col items-center text-center">
                            <FaPaste className="bg-red-400 text-white p-6 rounded-full text-8xl" />
                            <p className="mt-4 font-semibold">Paste or Upload text</p>
                        </div>

                        <BsArrowRight className="text-4xl text-gray-700" />

                        <div className="flex flex-col items-center text-center">
                            <MdOutlineEmergency className="bg-yellow-400 text-white p-6 rounded-full text-8xl" />
                            <p className="mt-4 font-semibold">Get AI Detection</p>
                        </div>

                        <BsArrowRight className="text-4xl text-gray-700" />

                        <div className="flex flex-col items-center text-center">
                            <CgNotes className="bg-blue-400 text-white p-6 rounded-full text-8xl" />
                            <p className="mt-4 font-semibold">View Result</p>
                        </div>

                        <BsArrowRight className="text-4xl text-gray-700" />

                        <div className="flex flex-col items-center text-center">
                            <CgNotes className="bg-[#512888] text-white p-6 rounded-full text-8xl" />
                            <p className="mt-4 font-semibold">Save History</p>
                        </div>
                    </div>
                </div>
                </div>

                <div className="text-center mt-20">
                    <button className="bg-white text-black border-2 border-gray-300 px-4 py-2 rounded-4xl">Key Features</button>
                    <p className="font-bold text-4xl py-4">What You Get Using AI Detector Tool</p>
                    <CardList/>
                </div>
            </div>
        </div>
    );
};

export default Delect;
