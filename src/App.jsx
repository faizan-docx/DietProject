import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Menu, X, Leaf, Heart, Target, Users } from 'lucide-react';

import ContactPage from "./components/ContactPage";
import ThankYouPage from './components/ThankYouPage';
import AboutPage from './components/AboutPage'; // ✅ Imported AboutPage

// Landing Page Component
function TheDiet4ULanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold" style={{ color: "#C3BE6E" }}>thediet4u</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => navigate("/")}
                className="text-black hover:text-green-600 font-medium transition-colors"
              >
                Home
              </button>

              <button
                onClick={() => navigate("/programs")}
                className="text-black hover:text-green-600 font-medium transition-colors"
              >
                Our Programs
              </button>

              <button
                onClick={() => navigate("/about")}
                className="text-black hover:text-green-600 font-medium transition-colors"
              >
                About
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Reach us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/");
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 font-medium"
                >
                  Home
                </button>

                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/programs");
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 font-medium"
                >
                  Our Programs
                </button>

                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/about");
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 font-medium"
                >
                  About
                </button>

                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/contact");
                  }}
                  className="w-full text-left bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium mt-2"
                >
                  Reach us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <Leaf className="h-10 w-10 text-green-600" />
              <h1 className="text-4xl lg:text-5xl font-bold text-green-800 leading-tight">
                Welcome to thediet4u
              </h1>
            </div>

            <h2 className="text-2xl lg:text-3xl font-semibold text-orange-600">
              Your Path to a Healthier You
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're looking to lose weight, gain muscle, manage a condition,
              or simply eat healthier — we've got the right plan for you.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact us
            </button>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Heart className="h-6 w-6 text-red-500" />
                <span className="text-gray-700 font-medium">Heart Healthy</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-6 w-6 text-green-500" />
                <span className="text-gray-700 font-medium">Goal Focused</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-blue-500" />
                <span className="text-gray-700 font-medium">Expert Support</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="relative mb-6">
                  <div className="w-full h-64 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl flex items-center justify-center overflow-hidden">
                    <div className="w-48 h-48 bg-white rounded-full shadow-inner flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">🥗</div>
                        <p className="text-sm text-gray-600 font-medium">Fresh & Nutritious</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center"><div className="text-3xl mb-1">🥑</div><p className="text-xs text-gray-600">Avocado</p></div>
                  <div className="text-center"><div className="text-3xl mb-1">🍅</div><p className="text-xs text-gray-600">Tomato</p></div>
                  <div className="text-center"><div className="text-3xl mb-1">🥒</div><p className="text-xs text-gray-600">Cucumber</p></div>
                  <div className="text-center"><div className="text-3xl mb-1">🥕</div><p className="text-xs text-gray-600">Carrot</p></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200 rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full opacity-70"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">thediet4u</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2025 TheDiet4U. All rights reserved.</p>
              <p className="text-gray-400">Eat Better. Feel Better. Live Better.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Main App Component with Routing
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TheDiet4ULanding />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/about" element={<AboutPage />} /> {/* ✅ About Route */}
      </Routes>
    </Router>
  );
}
