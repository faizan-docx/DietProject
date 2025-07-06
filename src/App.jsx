import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import { Menu, X, Leaf, Heart, Target, Users, Star, CheckCircle, ArrowRight, Download, ArrowDown, Sparkles, Award, Zap, Phone, Mail } from 'lucide-react';

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

  const downloadBrochure = () => {
  const link = document.createElement('a');
  link.href = '/Brochure.pdf'; 
  link.download = 'Brochure.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const programs = [
  {
    emoji: "₹200💰",
    title: "General Enquiry",
    description: "Ask diet or health-related questions and get expert advice.",
    color: "from-yellow-400 to-orange-400"
  },
  {
    emoji: "₹500💰",
    title: "1-Month Diet Plan",
    description: "Customized diet chart + unlimited queries for one month.",
    color: "from-green-500 to-emerald-500"
  },
  {
    emoji: "₹1000💰",
    title: "3-Month Diet Plan",
    description: "Comprehensive plan with support and reviews for 3 months.",
    color: "from-purple-500 to-pink-500"
  }
];



  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex flex-col justify-between overflow-x-hidden relative">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <Leaf className="h-8 w-8 text-emerald-500 group-hover:animate-spin transition-transform duration-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                thediet4u
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Home</Link>
              <Link to="/programs" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Programs</Link>
              <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">About Dt</Link>
              <button
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-medium"
              >
                Contact Us
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t animate-slideDown">
            <div className="px-4 py-2 space-y-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-emerald-600">Home</Link>
              <Link to="/programs" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-emerald-600">Programs</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-emerald-600">About</Link>
              <button onClick={() => { setIsMenuOpen(false); navigate("/contact"); }} className="w-full text-left bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all font-medium mt-2">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeInLeft">
              {/* Trust Indicators */}
              <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                1000+ Happy Clients Transformed
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Journey to{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Better Health
                  </span>{' '}
                  Starts Here
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
              </div>
              
              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                Personalized, goal-oriented nutrition programs based on evidence-backed science. 
                Transform your health, appearance, and lifestyle with our expert guidance.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/programs")}
                  className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>View Programs</span>
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button
                  onClick={downloadBrochure}
                  className="group border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>Download Brochure</span>
                  <Download className="h-5 w-5" />
                </button>
              </div>
              
              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <div className="text-2xl font-bold text-emerald-600 group-hover:animate-bounce">
                    <StatsCounter end={1000} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                  <div className="text-2xl font-bold text-teal-600 group-hover:animate-bounce">
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
            </div>

            {/* Right Visual Section */}
           {/* Right Visual Section */}
              <div className="relative animate-fadeInRight">
                <FloatingElement delay={0} duration={4}>
                  <div className="bg-gradient-to-br from-emerald-100 via-white to-teal-100 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                    <div className="bg-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
                      <div className="relative mb-6">
                        <div className="w-full h-64 bg-gradient-to-br from-emerald-200 via-teal-300 to-teal-400 rounded-2xl flex items-center justify-center overflow-hidden relative">
                          {/* Replace the text with an image */}
                          <img 
                            src="/logo.jpg" // Update this path to your actual image
                            alt="Healthy diet food"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </FloatingElement>
              </div>
          </div>
        </div>
      </section>

      {/* Fitness Program Cards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FitnessProgramCards />
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Featured Programs
            </h2>
            <p className="text-xl text-gray-600">
              Goal-based programs to transform your health, appearance, and lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <div className="p-8 relative">
                  <div className="text-4xl mb-4">{program.emoji}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Choose health. Choose YOU. ✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={downloadBrochure}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Brochure
            </button>
            <button 
              onClick={() => navigate("/programs")}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all flex items-center"
            >
              <ArrowRight className="mr-2 w-5 h-5" />
              View All Programs
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-emerald-500" />
                <span className="text-2xl font-bold">thediet4u</span>
              </div>
              <p className="text-gray-400 mb-4">
                Personalized nutrition programs designed to transform your health, 
                appearance, and lifestyle. Expert guidance backed by science.
              </p>
              </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Weight Loss</li>
                <li>Weight Gain</li>
                <li>Detox & Cleanse</li>
                <li>PCOS/PCOD</li>
                <li>Diabetes Management</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-emerald-400">Home</Link></li>
                <li><Link to="/programs" className="hover:text-emerald-400">Programs</Link></li>
                <li><Link to="/about" className="hover:text-emerald-400">About</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-400">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 thediet4u. All rights reserved. | Designed for your wellness journey</p>
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
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out 0.2s both;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

// App Component with Routing
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TheDiet4ULanding />} />
        <Route path="/programs" element={<OurPrograms />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
       

      </Routes>
    </Router>
  );
}