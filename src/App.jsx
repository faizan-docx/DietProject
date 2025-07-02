import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import { Menu, X, Leaf, Heart, Target, Users, Star, CheckCircle, ArrowRight, Sparkles, Award, Zap } from 'lucide-react';

import OurPrograms from './components/OurPrograms'; 
import ContactPage from "./components/ContactPage";
import ThankYouPage from './components/ThankYouPage';
import AboutPage from './components/AboutPage';
import FitnessProgramCards from './components/FitnessProgramCards';






// Floating Animation Component
function FloatingElement({ children, delay = 0, duration = 3 }) {
  return (
    <div 
      className="animate-bounce"
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

// Stats Counter Component
function StatsCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);
  
  return <span>{count}{suffix}</span>;
}

// Enhanced Landing Page Component
function TheDiet4ULanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-green-50 via-white to-orange-50 flex flex-col justify-between overflow-x-hidden relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-yellow-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'py-2 shadow-xl' : 'py-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <Sparkles className="h-6 w-6 text-[#C3BE6E] group-hover:animate-spin transition-transform duration-300" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#C3BE6E] to-green-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                thediet4u
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-800 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-[#C3BE6E] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/programs" className="text-gray-800 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105 relative group">
                Our Programs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-[#C3BE6E] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-green-600 font-medium transition-all duration-300 hover:scale-105 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-[#C3BE6E] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <button
                onClick={() => navigate("/contact")}
                className="group relative inline-block overflow-hidden rounded-xl bg-gradient-to-r from-[#EBEBEB] to-gray-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105"
              >
                <span className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-[#C3BE6E] to-green-500 transition-all duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Reach us</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-gray-700 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition-all duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 animate-slideDown">
              <div className="px-2 pt-2 pb-3 space-y-2">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-all duration-300">Home</Link>
                <Link to="/programs" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-all duration-300">Our Programs</Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-all duration-300">About</Link>
                <button onClick={() => { setIsMenuOpen(false); navigate("/contact"); }} className="w-full text-left bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium mt-2 transform hover:scale-105">Reach us</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInLeft">
            {/* Trust Indicators */}
            <div className="flex items-center space-x-4 flex-wrap gap-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <span className="text-sm text-gray-600 font-medium flex items-center space-x-1">
                <Award className="h-4 w-4 text-green-600" />
                <span>Trusted by 1000+ clients</span>
              </span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-800 via-green-600 to-green-500 bg-clip-text text-transparent leading-tight">
                Welcome to thediet4u
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#C3BE6E] to-green-500 rounded-full animate-pulse"></div>
            </div>
            
            {/* Subtitle */}
            <h2 className="text-2xl lg:text-4xl font-semibold bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Your Path to a Healthier You
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Whether you're looking to lose weight, gain muscle, manage a condition, or simply eat healthier — we've got the right plan for you.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="group bg-gradient-to-r from-black via-gray-900 to-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Contact us</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </button>
              
              <button
                onClick={() => navigate("/programs")}
                className="group border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>View Programs</span>
                <Target className="h-5 w-5 group-hover:animate-pulse" />
              </button>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <div className="text-2xl font-bold text-green-600 group-hover:animate-bounce">
                  <StatsCounter end={1000} suffix="+" />
                </div>
                <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <div className="text-2xl font-bold text-orange-600 group-hover:animate-bounce">
                  <StatsCounter end={50} suffix="+" />
                </div>
                <div className="text-sm text-gray-600 font-medium">Programs</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <div className="text-2xl font-bold text-blue-600 group-hover:animate-bounce">
                  <StatsCounter end={95} suffix="%" />
                </div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3 p-4 bg-white/40 backdrop-blur-sm rounded-xl hover:bg-white/60 transition-all duration-300 group transform hover:scale-105">
                <Heart className="h-6 w-6 text-red-500 group-hover:animate-pulse" />
                <span className="text-gray-700 font-medium">Heart Healthy</span>
                <CheckCircle className="h-4 w-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/40 backdrop-blur-sm rounded-xl hover:bg-white/60 transition-all duration-300 group transform hover:scale-105">
                <Target className="h-6 w-6 text-green-500 group-hover:animate-pulse" />
                <span className="text-gray-700 font-medium">Goal Focused</span>
                <CheckCircle className="h-4 w-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/40 backdrop-blur-sm rounded-xl hover:bg-white/60 transition-all duration-300 group transform hover:scale-105">
                <Users className="h-6 w-6 text-blue-500 group-hover:animate-pulse" />
                <span className="text-gray-700 font-medium">Expert Support</span>
                <CheckCircle className="h-4 w-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          {/* Right Visual Section */}
          <div className="relative animate-fadeInRight">
            <FloatingElement delay={0} duration={4}>
              <div className="bg-gradient-to-br from-green-100 via-white to-orange-100 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                {/* Animated shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                
                <div className="bg-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
                  <div className="relative mb-6">
                    <div className="w-full h-64 bg-gradient-to-br from-green-200 via-green-300 to-green-400 rounded-2xl flex items-center justify-center overflow-hidden relative">
                      {/* Animated background dots */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 left-4 w-6 h-6 bg-white rounded-full animate-bounce"></div>
                        <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute bottom-6 left-12 w-5 h-5 bg-white rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute bottom-12 right-6 w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                      </div>
                      
                      <div className="w-48 h-48 bg-white rounded-full shadow-inner flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-green-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="text-center relative z-10">
                          <div className="text-6xl mb-2 animate-pulse">🥗</div>
                          <p className="text-sm text-gray-600 font-medium">Fresh & Nutritious</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { emoji: '🥑', name: 'Avocado', color: 'green' },
                      { emoji: '🍅', name: 'Tomato', color: 'red' },
                      { emoji: '🥒', name: 'Cucumber', color: 'green' },
                      { emoji: '🥕', name: 'Carrot', color: 'orange' }
                    ].map((item, index) => (
                      <div key={index} className="text-center group cursor-pointer">
                        <div className="text-3xl mb-1 transform group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce">
                          {item.emoji}
                        </div>
                        <p className="text-xs text-gray-600 group-hover:font-semibold transition-all duration-300">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FloatingElement>
            
            {/* Enhanced floating elements */}
            <FloatingElement delay={1} duration={3}>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-70 shadow-lg"></div>
            </FloatingElement>
            
            <FloatingElement delay={2} duration={5}>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-70 shadow-lg"></div>
            </FloatingElement>
            
            <FloatingElement delay={0.5} duration={4}>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-60 shadow-lg"></div>
            </FloatingElement>
            
            <FloatingElement delay={1.5} duration={3.5}>
              <div className="absolute top-1/4 -right-6 w-8 h-8 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-50 shadow-lg"></div>
            </FloatingElement>
          </div>
        </div>
      </section>
   
     <div><FitnessProgramCards /> </div>
      

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-orange-900/10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-500/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0 group">
              <Leaf className="h-8 w-8 text-green-400 group-hover:animate-spin transition-transform duration-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 via-[#C3BE6E] to-orange-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                thediet4u
              </span>
            </div>
            <div className="text-center md:text-right space-y-2">
              <p className="text-gray-400 hover:text-white transition-colors duration-300">
                © 2025 TheDiet4U. All rights reserved.
              </p>
              <p className="text-transparent bg-gradient-to-r from-green-400 via-[#C3BE6E] to-orange-400 bg-clip-text font-medium animate-pulse">
                Eat Better. Feel Better. Live Better.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out 0.2s both;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}

// App Component with Routing (unchanged)
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TheDiet4ULanding />} />
        <Route path="/programs" element={<OurPrograms />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/programs" element={<FitnessProgramCards />} />


      </Routes>
    </Router>
  );
}