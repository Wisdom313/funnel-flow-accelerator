
import React from 'react';
import { ChevronDown } from 'lucide-react';

const reviews = [
  { 
    text: "They showed up 2 hours late and didn't even call!", 
    author: "- Sarah M." 
  },
  { 
    text: "The driver was rude and refused to help with my bags.", 
    author: "- James K." 
  },
  { 
    text: "I missed my flight because the pickup never showed up!", 
    author: "- Michael T." 
  },
  { 
    text: "They canceled on me last minute with no explanation.", 
    author: "- Lisa R." 
  }
];

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('comparison-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#F1F0FB] py-16 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1A1F2C]">
            Tired of poor pickup service?
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#9b87f5]">
            We are too!
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md transform rotate-1 hover:rotate-0 transition-transform border-l-4 border-[#ea384c]"
            >
              <p className="text-[#1A1F2C] font-medium mb-3">{review.text}</p>
              <p className="text-gray-600 text-sm italic">{review.author}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={scrollToNextSection}
            className="bg-[#9b87f5] rounded-full p-3 hover:bg-[#7E69AB] transition-colors animate-bounce"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="text-white" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
