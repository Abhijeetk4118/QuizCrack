import React from "react";

interface Testimonial {
    name: string;
    quote: string;
}

interface TestimonialsSectionProps {
    testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => (
    <section className="py-16 px-8 bg-white">
        <h3 className="text-3xl font-bold text-center mb-10">What Students Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                    <p className="italic text-gray-700">"{testimonial.quote}"</p>
                    <h4 className="mt-4 font-semibold text-blue-600">{testimonial.name}</h4>
                </div>
            ))}
        </div>
    </section>
);

export default TestimonialsSection;
