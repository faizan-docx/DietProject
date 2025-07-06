import React, { useState, useRef, useEffect } from 'react';
import { 
  Target, 
  Dumbbell, 
  Heart, 
  Zap, 
  Users, 
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  Star
} from 'lucide-react';

const FitnessProgramCards = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Sample program data - easily customizable
  const programs = [
    {
      id: 1,
      title: "Weight Loss Program",
      subtitle: "Lose weight the healthy way",
      icon: Target,
       image: "/weightLoss.jpg", // Update this path to your actual image
      durations: ["30 Days", "60 Days", "90 Days"],
      rating: 4.8,
      participants: "2.5k+"
    },
    {
      id: 2,
      title: "Muscle Building",
      subtitle: "Build lean muscle mass",
      icon: Dumbbell,
      image: "/muscleBuild.jpg",
      durations: ["45 Days", "60 Days", "90 Days"],
      rating: 4.9,
      participants: "1.8k+"
    },
    {
      id: 3,
      title: "Heart Healthy Diet",
      subtitle: "Cardiovascular wellness focus",
      icon: Heart,
      image: "/heartHealthy.jpg",
      durations: ["30 Days", "60 Days"],
      rating: 4.7,
      participants: "3.2k+"
    },
    {
      id: 4,
      title: "Energy Boost",
      subtitle: "Increase daily energy levels",
      icon: Zap,
      image: "/energyBoost.png",
      durations: ["21 Days", "45 Days", "60 Days"],
      rating: 4.6,
      participants: "1.5k+"
    },
    {
      id: 5,
      title: "Family Nutrition",
      subtitle: "Healthy eating for the whole family",
      icon: Users,
      image: "/familyNutrition.jpg",
      durations: ["30 Days", "90 Days"],
      rating: 4.8,
      participants: "2.1k+"
    }
  ];

  // Check scroll position to show/hide navigation buttons
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Smooth scroll function
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of one card + gap
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Mouse drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.cursor = 'grab';
  };

  // Touch functionality for mobile
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons(); // Initial check
      
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our Fitness Programs
          </h2>
          <p className="text-gray-600">
            Choose the perfect program for your fitness journey
          </p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex space-x-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full transition-all duration-300 ${
              canScrollLeft 
                ? 'bg-green-100 text-green-600 hover:bg-green-200 hover:scale-110' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-2 rounded-full transition-all duration-300 ${
              canScrollRight 
                ? 'bg-green-100 text-green-600 hover:bg-green-200 hover:scale-110' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Scrollable Cards Container */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide cursor-grab select-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: { display: 'none' }
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.id}
                className="flex-none w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group overflow-hidden"
                style={{ minWidth: '320px' }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable={false}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Circular Icon */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:bg-green-100 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">{program.rating}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Title and Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {program.subtitle}
                    </p>
                  </div>

                  {/* Participants */}
                  <div className="flex items-center space-x-2 mb-4">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{program.participants} participants</span>
                  </div>

                  {/* Duration Section */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-gray-700">Duration Options:</span>
                    </div>
                    
                    {/* Duration Buttons */}
                    <div className="flex flex-wrap gap-2">
                      {program.durations.map((duration, index) => (
                        <button
                          key={index}
                          className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium hover:bg-green-100 hover:text-green-800 transition-all duration-300 transform hover:scale-105 border border-green-200 hover:border-green-300"
                        >
                          {duration}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action */}
                  {/* <button className="w-full mt-6 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Get Started
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Scroll Indicators */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-2">
            {programs.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-gray-300 rounded-full transition-colors duration-300"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default FitnessProgramCards;