
import React, { useEffect, useState } from 'react';

const BookingCTA = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = document.body.scrollHeight - window.innerHeight - 400;
      
      // Only make sticky on mobile and when not at bottom of page
      if (isMobile && scrollY < triggerPoint) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const handleBookNow = () => {
    // Add your booking action here
    console.log('Book now clicked');
    // For example: window.location.href = '/booking';
    alert('Booking functionality would go here!');
  };

  return (
    <>
      {/* Main CTA Section */}
      <section className="py-16 px-4 bg-[#9b87f5] text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for a Better Pickup Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who never worry about their transportation again.
          </p>
          <button
            onClick={handleBookNow}
            className="bg-white text-[#9b87f5] hover:bg-[#F1F0FB] transition-colors px-8 py-4 rounded-lg text-xl font-bold shadow-lg"
          >
            Book Now
          </button>
        </div>
      </section>
      
      {/* Sticky Mobile Button */}
      {isSticky && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-50 md:hidden">
          <button
            onClick={handleBookNow}
            className="w-full bg-[#9b87f5] text-white hover:bg-[#7E69AB] transition-colors py-3 rounded-lg text-lg font-bold"
          >
            Book Now
          </button>
        </div>
      )}
    </>
  );
};

export default BookingCTA;
