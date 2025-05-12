import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button } from "../component/Button";
import Input from "../component/Input";

const SignUp = () => {
    const email = "";
    const password = "";
    return (
        <div className="bg-gray-100 py-20 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="bg-white shadow-2xl max-w-full sm:max-w-xl mx-auto mt-10 p-8 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold">Sign Up</h3>
                    <Link to="/login" className="text-sm text-purple-700 hover:underline">
                        I have an account
                    </Link>
                </div>

                <Input
                    label="Email"
                    value={email}
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
                        type="password"
                        showEyeIcon={true}
                    />

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
                {/* Button placed correctly below */}
                <Button />
            </div>
        </div>
    );
};

export default SignUp;
