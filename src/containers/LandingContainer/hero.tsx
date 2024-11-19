import React from "react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <h2 className="text-4xl font-extrabold mb-4">
        Ace Your JEE Mains Preparation
      </h2>
      <p className="text-lg mb-6">
        Interactive quizzes, performance tracking, and everything you need to
        excel.
      </p>
      <button
        className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-gray-200"
        onClick={() => navigate("/quiz")}
      >
        Start Practicing Now
      </button>
    </section>
  );
};

export default Hero;
