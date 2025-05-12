import { LiaAngleRightSolid } from "react-icons/lia"

export const Button = () => {
    return (
        <div>
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
        </div>
    )
}
