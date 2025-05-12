import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../component/Button";
import Input from "../component/Input";

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
                <Input
                    label="Email"
                    value={email}
                    onChange={(value: string) => setEmail(value)}
                    type="email"
                />
                <div className="flex justify-between items-center">
                    <label className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <Link to="/reset" className="text-sm text-purple-700 hover:underline">
                        Forgot Password?
                    </Link>
                </div>
                    <Input
                        label=""
                        value={password}
                        onChange={(value: string) => setPassword(value)}
                        type="password"
                        showEyeIcon={true}
                    />
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

                <Button />
            </form>
        </div>
    );
};

export default Login;
