import { HiOutlineMinus, HiPlus } from "react-icons/hi"

const Frequently = () => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-2 md:p-4 flex flex-col md:flex-row gap-6 md:gap-8  max-w-2xl mx-auto mt-20">
            <div className="w-full md:w-2/5">
            <div className="py-15">
                <h3 className="font-bold text-2xl">Frequently Asked <br></br>Question</h3>
                <p>Lorem ipusm dolor sit amet consectetur. Nulla </p>
                <p>venenals risus amet mass.</p>
                </div>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg w-full md:w-4/5">
            <div className="flex items-center justify-between gap-4">
                    <p className="font-bold">Frequently asked question 1?</p>
                    <HiOutlineMinus className="text-xl" />
                </div>
                <div className="flex mt-2 flex-wrap text-sm text-gray-700">
                <p>Lorem ipsum dolor sit amet consectetur. Dignusim placerat</p>
                <p>Lectus etiam elementum elit sed.Ante facilsis urna lorem</p>
                <p>Semper amet imperdiet mauris</p>
                </div>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                    <p>Frequently asked question 1?</p>
                    <HiPlus className="text-xl" />
                </div>
                <div className="flex items-center justify-between">
                    <p>Frequently asked question 1?</p>
                    <HiPlus className="text-xl" />
                </div>
                <div className="flex items-center justify-between">
                    <p>Frequently asked question 1?</p>
                    <HiPlus className="text-xl" />
                </div>
                <div className="flex items-center justify-between">
                    <p>Frequently asked question 1?</p>
                    <HiPlus className="text-xl" />
                </div>
                </div>
            </div>
            </div>
        
    )
}

export default Frequently