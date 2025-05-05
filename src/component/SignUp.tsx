import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="bg-gray-100 py-20 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="bg-white shadow-2xl max-w-full sm:max-w-xl mx-auto mt-10 p-8 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold">Sign Up</h3>
                    <Link to="/login" className="text-sm text-purple-700 hover:underline">
                        I have an account
                    </Link>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email address
                    </label>
                    <input
                        id="email"
                        type="email"
                        aria-label="Email address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4 relative">
                    <div className="flex justify-between items-center mb-1">
                        <label className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <Link to="/reset" className="text-sm text-purple-700 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>
                    <input
                        type="password"
                        aria-label="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <IoEyeOutline className="absolute top-9 right-3 text-gray-500 cursor-pointer" />
                </div>

                <div className="mb-6">
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                            <IoIosCheckmarkCircleOutline />
                            Number
                        </li>
                        <li className="flex items-center gap-2">
                            <IoIosCheckmarkCircleOutline />
                            Minimum of 12 characters
                        </li>
                        <li className="flex items-center gap-2">
                            <IoIosCheckmarkCircleOutline />
                            Uppercase and lowercase letters
                        </li>
                        <li className="flex items-center gap-2">
                            <IoIosCheckmarkCircleOutline />
                            Special characters like !, @, $
                        </li>
                    </ul>
                </div>

                <button className="w-full bg-[#512888] text-white py-2 rounded-xl hover:bg-purple-800">
                    Continue
                </button>

                <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-300" />
                    <span className="mx-4 text-gray-700">OR</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                {/* Google Login Button */}
                <div className="mb-4 px-2 flex items-center border border-gray-300 rounded-md">
                    <img src="google.png" alt="Google Logo" className="w-6 h-6 mr-2" />
                    <button
                        type="button"
                        className="w-full text-left px-4 py-2"
                    >
                        Log in with Google
                    </button>
                    <LiaAngleRightSolid className="text-gray-500 mx-2" />
                </div>

                {/* Apple Login Button */}
                <div className="mb-4 px-2 flex items-center border border-gray-300 rounded-md">
                    <img src="/apple.png" alt="Apple Logo" className="w-6 h-6 mr-2" />
                    <button
                        type="button"
                        className="w-full text-left px-4 py-2"
                    >
                        Log in with Apple
                    </button>
                    <LiaAngleRightSolid className="text-gray-500 mx-2" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
