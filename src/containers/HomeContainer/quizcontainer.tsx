import React from "react";
import NavBarComponent from "../../components/NavComponent/navbar";
import FooterComponent from "../../components/FooterComponent/footer";

const QuizContainer:React.FC = () => {

    return (
        <div>
            <NavBarComponent />
            
            <h1>Welcome to quizcrack!</h1>
            <p>This is a simple React app that uses Vite, React Query, and TypeScript.</p>
            <p>Author:</p>

            <FooterComponent />

        </div>
    )
}

export default QuizContainer;