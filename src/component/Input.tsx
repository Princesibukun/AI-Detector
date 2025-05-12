import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";

interface InputProps {
    label: string;
    value?: string;
    onChange?: (value: string) => void;
    type?: string;
    showEyeIcon?: boolean;
    maxLength?: number;
    placeholder?: string;
}

const Input = ({
    label,
    value,
    onChange,
    type = "text",
    showEyeIcon = false,
    maxLength,
    placeholder,
}: InputProps) => {
    const [internalValue, setInternalValue] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        if (onChange) {
            onChange(newValue); 
        } else {
            setInternalValue(newValue); 
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const inputValue = onChange ? value ?? "" : internalValue;

    return (
        <div className="flex flex-col mb-4">
            <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
            <div className="flex items-center border border-gray-300 rounded-md">
                <input
                    type={type === "password" && !isPasswordVisible ? "password" : "text"}
                    aria-label={label}
                    value={inputValue}
                    onChange={handleChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    className="w-full px-4 py-2 focus:outline-none"
                />
                {showEyeIcon && type === "password" && (
                    <div className="px-2 cursor-pointer" onClick={togglePasswordVisibility}>
                        {isPasswordVisible ? (
                            <IoEyeOffOutline className="text-gray-500" />
                        ) : (
                            <IoEyeOutline className="text-gray-500" />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Input;
