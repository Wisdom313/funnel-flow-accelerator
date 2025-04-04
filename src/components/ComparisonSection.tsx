
import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonSection = () => {
  const competitorIssues = [
    "Late pickups with no communication",
    "Unprofessional drivers with poor attitudes",
    "Hidden fees added after booking",
    "Uncomfortable, poorly maintained vehicles",
    "No flexibility for last-minute changes"
  ];

  const ourSolutions = [
    "Always on time with real-time tracking",
    "Professional, courteous chauffeurs",
    "Transparent pricing, no surprise fees",
    "Luxury, well-maintained fleet",
    "24/7 support for schedule changes"
  ];

  return (
    <section id="comparison-section" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-[#9b87f5]">Our Service</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Competitor Issues */}
          <div className="bg-[#FFF1F1] p-6 md:p-8 rounded-lg border-t-4 border-[#ea384c]">
            <h3 className="text-2xl font-bold mb-6 text-[#ea384c] flex items-center">
              <X className="mr-2" size={24} />
              Competitor Issues
            </h3>
            
            <ul className="space-y-4">
              {competitorIssues.map((issue, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-[#ea384c] rounded-full p-1 mr-3 mt-1">
                    <X className="text-white" size={12} />
                  </div>
                  <span className="text-[#1A1F2C]">{issue}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Our Solution */}
          <div className="bg-[#F1F0FB] p-6 md:p-8 rounded-lg border-t-4 border-[#9b87f5]">
            <h3 className="text-2xl font-bold mb-6 text-[#9b87f5] flex items-center">
              <Check className="mr-2" size={24} />
              Our Solution
            </h3>
            
            <ul className="space-y-4">
              {ourSolutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-[#9b87f5] rounded-full p-1 mr-3 mt-1">
                    <Check className="text-white" size={12} />
                  </div>
                  <span className="text-[#1A1F2C]">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
