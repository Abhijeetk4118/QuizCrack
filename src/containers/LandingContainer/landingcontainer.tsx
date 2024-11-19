import React from "react";
import NavBarComponent from "../../components/NavComponent/navbar";
import { BookOpenIcon, BookmarkIcon, ChartBarIcon } from "@heroicons/react/16/solid";
import FooterComponent from "../../components/FooterComponent/footer";
import Hero from "./hero";
import Feature from "./feature";
import TestimonialsSection from "./testimonial";

const LandingContainer: React.FC = () => {

    const features = [
        {
            title: 'Chapter-Based Quizzes',
            description: 'Practice by specific chapters and subjects.',
            icon: <BookOpenIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />,
        },
        {
            title: 'Performance Tracking',
            description: 'Monitor your scores and progress.',
            icon: <ChartBarIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />,
        },
        {
            title: 'Bookmark Questions',
            description: 'Save important questions for revision.',
            icon: <BookmarkIcon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />,
        },
        {
            title: 'Responsive Design',
            description: 'Study anytime, anywhere on any device.',
            icon: <ChartBarIcon className="h-12 w-12 text-purple-500 mx-auto mb-4" />,
        },
    ];
    const testimonials = [
        {
            name: 'Rahul Sharma',
            quote: 'The best platform for JEE prep! The quizzes helped me focus on weak areas.',
        },
        {
            name: 'Anjali Mehta',
            quote: 'Bookmarking questions is a game-changer. Highly recommended!',
        },
        {
            name: 'Amit Gupta',
            quote: 'Simple, effective, and user-friendly. A must for every JEE aspirant.',
        },
    ];

    return (
        <div>
            <NavBarComponent />
            {/* hero section */}
            <Hero/>

            {/* feature section  */}
            <Feature features={features}/>

            {/* testimonials sections  */}
            <TestimonialsSection testimonials={testimonials} />
            {/* footer section  */}
            <FooterComponent />

        </div>
    )
}

export default LandingContainer;