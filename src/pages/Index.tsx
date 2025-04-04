
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ComparisonSection from '@/components/ComparisonSection';
import ProcessSection from '@/components/ProcessSection';
import BookingCTA from '@/components/BookingCTA';

const Index = () => {
  return (
    <div className="relative">
      <HeroSection />
      <ComparisonSection />
      <ProcessSection />
      <BookingCTA />
    </div>
  );
};

export default Index;
