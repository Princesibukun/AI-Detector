
import { Link } from "react-router-dom";
import { Button } from "../../component/Button";
import Input from "../../component/Input";
import { useState } from "react";

const Reset = () => {
     const [email, setEmail] = useState("");
    return (
        <div className="bg-gray-100 py-20 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="bg-white shadow-2xl max-w-full sm:max-w-xl mx-auto mt-10 p-8 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold">Sign Up</h3>
                    <Link to="/login" className="text-sm text-purple-700 hover:underline">
                        Back to login
                    </Link>
                </div>

                <Input
                    label="Email"
                    value={email}
                    onChange={(value: string) => setEmail(value)}
                    type="email"
                />

                <Link to="/verify">
                    <button className="w-full bg-[#512888] text-white py-2 rounded-xl hover:bg-purple-800">
                        Continue
                    </button>
                </Link>
                <Button/>
            </div>
        </div>
    );
};

export default Reset;
