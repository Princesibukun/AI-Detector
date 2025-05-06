import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const validEmail = "test@example.com";
        const validPassword = "Test@1234";

        if (email === validEmail && password === validPassword) {
            setShowError(false);
            alert("Login successful!");
        } else {
            setShowError(true);
        }
    };

    return (
        <div className="bg-gray-100 py-20 px-4 sm:px-6 md:px-8 lg:px-12">
            <form
                onSubmit={handleLogin}
                className="bg-white shadow-2xl max-w-full sm:max-w-xl mx-auto mt-10 p-8 rounded-lg"
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold">Login</h3>
                    <Link to="/signup" className="text-sm text-purple-700 hover:underline">
                        I don't have an account
                    </Link>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email address
                    </label>
                    <input
                        id="email"
                        type="email"
                        aria-label="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4 relative">
                    <div className="flex justify-between items-center mb-1">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <Link to="/reset" className="text-sm text-purple-700 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>
                    <input
                        id="password"
                        type="password"
                        aria-label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <IoEyeOutline className="absolute top-9 right-3 text-gray-500 cursor-pointer" />
                </div>

                {showError && (
                    <div className="bg-red-100 mt-4 mb-4 rounded-2xl p-4">
                        <p className="text-red-800">
                            Username or password is incorrect. Please retry with correct details or reset your password
                        </p>
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-[#512888] text-white py-2 rounded-xl hover:bg-purple-800"
                >
                    Continue
                </button>

                <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-300" />
                    <span className="mx-4 text-gray-700">OR</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

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
            </form>
        </div>
    );
};

export default Login;
