import React from "react";
import { useNavigate } from "react-router-dom";

const NavBarComponent: React.FC = () => {
    const navigate = useNavigate();


    return (
        <nav className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold">
                <div
                    className="text-2xl font-bold cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    QuizCrack
                </div>
            </h1>
            <button className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-300">
                Login with Gmail
            </button>
        </nav>
    );

}

export default NavBarComponent;