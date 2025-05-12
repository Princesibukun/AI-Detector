import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../component/Button";
import Input from "../../component/Input";

const Verify = () => {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const isValidOtp = /^\d{6}$/.test(otp); 
        if (isValidOtp) {
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
                    <p>
                        Enter the verification code sent to{" "}
                        <span className="font-medium">usermail@gmail.com</span>. This code
                        expires within 15 minutes.
                    </p>
                </div>

                <div className="mb-4">
                    <Input
                        label="Verification code"
                        value={otp}
                        onChange={(value: string) => setOtp(value)}
                        type="text"
                        maxLength={6}
                        placeholder="Enter 6-digit code"
                    />
                </div>

                {/* Resend info */}
                <div className="mt-4 mb-4 text-center">
                    <p className="text-gray-400">Resend code in (46s)</p>
                </div>

                {/* Submit Button */}
                <Button />
            </div>
        </div>
    );
};

export default Verify;
