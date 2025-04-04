
import React from 'react';
import { Calendar, Car, ThumbsUp } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <Calendar className="text-[#9b87f5]" size={42} />,
      title: "Book Your Ride",
      description: "Select your pickup time and location through our simple booking system."
    },
    {
      icon: <Car className="text-[#9b87f5]" size={42} />,
      title: "Meet Your Driver",
      description: "Your professional driver arrives on time in a luxury vehicle."
    },
    {
      icon: <ThumbsUp className="text-[#9b87f5]" size={42} />,
      title: "Enjoy The Journey",
      description: "Relax and enjoy a comfortable, stress-free ride to your destination."
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#F1F0FB]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How It Works
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Getting a reliable pickup service is simple with our 3-step process
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-[#F1F0FB] rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">
                {`${index + 1}. ${step.title}`}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
