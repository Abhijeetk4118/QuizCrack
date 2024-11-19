import React from "react";

type FeaturesProps = {
  features: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
};

const Feature: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <h3 className="text-3xl font-bold text-center mb-10">Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
          >
            {feature.icon}
            <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Feature;
