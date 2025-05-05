import { useState, useEffect } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";

const Verify = () => {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (otp.length === 6) {
            navigate("/password"); 
        }
    }, [otp, navigate]);

    return (
        <div className="bg-gray-100 py-20 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="bg-white shadow-2xl max-w-full sm:max-w-xl mx-auto mt-10 p-8 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold">Verify email</h3>
                    <Link to="/login" className="text-sm text-purple-700 hover:underline">
                        Back to login
                    </Link>
                </div>

                <div className="mt-4 mb-4">
                    <p>Enter the verification code sent to <span className="font-medium">usermail@gmail.com</span>. This code expires within 15 minutes.</p>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Verification code
                    </label>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => {
                            const val = e.target.value;
                            if (/^\d*$/.test(val)) setOtp(val); 
                        }}
                        maxLength={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter 6-digit code"
                    />
                </div>

                <div className="mt-4 mb-4 text-center">
                    <p className="text-gray-400">Resend code in (46s)</p>
                </div>

                <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-300" />
                    <span className="mx-4 text-gray-700">OR</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                <div className="mb-4 px-2 flex items-center border border-gray-300 rounded-md">
                    <img src="google.png" alt="Google Logo" className="w-6 h-6 mr-2" />
                    <button type="button" className="w-full text-left px-4 py-2">
                        Log in with Google
                    </button>
                    <LiaAngleRightSolid className="text-gray-500 mx-2" />
                </div>

                <div className="mb-4 px-2 flex items-center border border-gray-300 rounded-md">
                    <img src="/apple.png" alt="Apple Logo" className="w-6 h-6 mr-2" />
                    <button type="button" className="w-full text-left px-4 py-2">
                        Log in with Apple
                    </button>
                    <LiaAngleRightSolid className="text-gray-500 mx-2" />
                </div>
            </div>
        </div>
    );
};

export default Verify;
