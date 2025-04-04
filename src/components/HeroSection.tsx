
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
        {/* Header with Logo and CTA placeholder */}
        <div className="flex justify-between items-center mb-16">
          <div className="border border-gray-300 p-2 rounded">LOGO</div>
          <button className="bg-[#9b87f5] text-white px-4 py-2 rounded-lg hover:bg-[#7E69AB] transition-colors">
            Book Now
          </button>
        </div>
        
        {/* Central headline with reviews positioned around it */}
        <div className="relative min-h-[500px] md:min-h-[600px]">
          {/* Central headline */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 bg-white/80 rounded-lg p-4 md:p-8 shadow-lg w-[80%] md:w-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1A1F2C]">
              Tired of poor pickup service?
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#9b87f5]">
              We are too!
            </h2>
          </div>
          
          {/* Review boxes positioned around the headline */}
          {reviews.map((review, index) => {
            // Calculate positions for each review card
            const positions = [
              'top-0 left-0 md:left-10', // Top left
              'top-0 right-0 md:right-10', // Top right
              'bottom-0 left-0 md:left-10', // Bottom left
              'bottom-0 right-0 md:right-10' // Bottom right
            ];
            
            return (
              <div 
                key={index}
                className={`absolute w-[250px] ${positions[index]} bg-white p-4 md:p-6 rounded-lg shadow-md transform rotate-1 hover:rotate-0 transition-transform border-l-4 border-[#ea384c] z-0`}
              >
                <p className="text-[#1A1F2C] font-medium mb-3">{review.text}</p>
                <p className="text-gray-600 text-sm italic">{review.author}</p>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center mt-8">
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
