import { FaBolt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineWarning } from "react-icons/md";

export const Color = () => {
    return (
        <div className="bg-gradient-to-r from-[#9078C0] via-purple-400 to-[#FAE6FA] flex justify-center px-4 sm:px-6 md:px-10 py-24">
            <div className="py-10 w-full max-w-5xl">
                <div className="text-center px-2 sm:px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Redefining Authenticity in the Age of AI</h2>
                    <h6 className="mt-4 text-sm sm:text-base">AI text detection made fast, easy, and reliable.</h6>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col lg:flex-row gap-8 mt-10">
                    <div className="flex-2 min-w-0">
                        <p>Evaporate is the process by which a liquid change into a gas, typically</p>
                        <p>due to an increase in temperature. It occurs when molecules at the</p>
                        <p>surface of a liquid gain enough energy to overcome the forces holding</p>
                        <p>them together and escape into the air as vapor. This process is most</p>
                        <p>commonly observed with water, such as when puddles dry up after the </p>
                        <p>sun comes out.</p>

                        <div className="mt-25">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                                    <p className="text-sm sm:text-base">0/10,000 characters</p>
                                    <div className="flex gap-2 bg-white text-green-300 border-2 border-green-300 px-4 py-2 rounded-xl text-sm sm:text-base">
                                        <FaBolt />
                                        Upgrade
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                    <div className="flex items-center gap-2 cursor-pointer text-sm sm:text-base">
                                        <GoDownload />
                                        Upload
                                    </div>
                                    <button className="bg-[#512888] text-white w-40 py-2 rounded-xl text-sm sm:text-base">
                                        Scan content
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block w-px bg-gray-300 mx-4"></div>

                    <div className="flex-1 min-w-0">
                        <p className="mb-4 font-semibold">AI platform result:</p>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 sm:gap-x-8">
                            <div className="flex items-center gap-2">
                                <MdOutlineWarning className="text-yellow-600" />
                                Open AI
                            </div>
                            <div className="flex items-center gap-2">
                                <MdOutlineWarning className="text-red-600" />
                                Writer
                            </div>
                            <div className="flex items-center gap-2">
                                <IoCheckmarkCircle className="text-green-600" />
                                Sapling
                            </div>
                            <div className="flex items-center gap-2">
                                <MdOutlineWarning className="text-red-600" />
                                Zero Gpt
                            </div>
                            <div className="flex items-center gap-2">
                                <MdOutlineWarning className="text-red-600" />
                                Gpt Zero
                            </div>
                            <div className="flex items-center gap-2">
                                <MdOutlineWarning className="text-yellow-600" />
                                Quillbot
                            </div>
                            <div className="flex items-center gap-2">
                                <MdOutlineWarning className="text-red-600" />
                                Copyleaks
                            </div>
                            <div className="flex items-center gap-2">
                                <IoCheckmarkCircle className="text-green-600" />
                                Grammarly
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
