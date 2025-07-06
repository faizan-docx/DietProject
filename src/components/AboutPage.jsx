import React, { useEffect } from 'react';
import { MapPin, GraduationCap, Award, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import FatimaImg from '../images/fatima.jpg';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4 flex flex-col">
      <div className="max-w-6xl mx-auto flex-grow">
        {/* Header Section with animation */}
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Dt. Kaneez Fatima</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full animate-growWidth"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-slideUp">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div className="animate-fadeIn delay-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Dt. Kaneez Fatima</h2>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  Dedicated Nutritionist & Dietitian committed to helping individuals achieve optimal health through personalized nutrition guidance and evidence-based dietary interventions.
                </p>
              </div>

              {/* Qualifications with staggered animations */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3 animate-fadeInLeft delay-200">
                  <GraduationCap className="text-green-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Qualification</h3>
                    <p className="text-gray-600">Masters in Nutrition and Dietetics</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 animate-fadeInLeft delay-300">
                  <Award className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800">University</h3>
                    <p className="text-gray-600">Jamia Hamdard University</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 animate-fadeInLeft delay-400">
                  <MapPin className="text-red-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">
                      ward no - 45, Jail chowk, Chandwara <br />
                      Muzaffarpur, Bihar - 842001
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="bg-gray-50 rounded-lg p-6 animate-fadeIn delay-500">
                <h3 className="font-semibold text-gray-800 mb-3">Professional Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  With a strong foundation in nutrition science from Jamia Hamdard University, 
                  Dr. Kaneez Fatima brings a comprehensive understanding of nutritional therapy 
                  and dietary counseling. She specializes in creating personalized nutrition plans 
                  that address individual health needs, lifestyle factors, and dietary preferences.
                </p>
              </div>

              {/* Areas of Expertise */}
              <div className="animate-fadeIn delay-600">
                <h3 className="font-semibold text-gray-800 mb-3">Areas of Expertise</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-medium animate-popIn delay-700">
                    Clinical Nutrition
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium animate-popIn delay-800">
                    Weight Management
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-full text-sm font-medium animate-popIn delay-900">
                    Therapeutic Diets
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm font-medium animate-popIn delay-1000">
                    Lifestyle Nutrition
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center animate-fadeIn delay-100">
              <div className="w-full max-w-sm">
                <div className="bg-gradient-to-br from-green-200 to-blue-200 rounded-2xl p-6 md:p-8 shadow-lg hover:scale-[1.02] transition-transform duration-300">
                  <div className="bg-white rounded-xl p-4 md:p-6 text-center">
                    <div className="w-40 h-56 md:w-48 md:h-64 rounded-lg mx-auto mb-4 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={FatimaImg}
                        alt="Dr. Kaneez Fatima"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Dt. Kaneez Fatima</h4>
                    <p className="text-sm text-gray-600">Nutrition & Dietetics Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-gray-50 px-6 md:px-8 py-6 border-t relative animate-fadeIn delay-1100">
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-3">Get In Touch</h3>
              <p className="text-gray-600 mb-4">
                Ready to start your journey towards better health? Schedule a consultation today.
              </p>
              <div className="flex justify-center space-x-6">
                <Link
                  to="/contact"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out shadow-md hover:shadow-xl transform hover:scale-105 hover:ring-2 hover:ring-green-400 hover:ring-offset-2 text-center inline-block animate-pulse"
                >
                  Book An Appointment Today
                </Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="absolute bottom-4 right-6 flex items-center space-x-4">
              <a
                href="https://www.instagram.com/thediet4u?igsh=MXQ3N21kMjBuM3N4aw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700 transition hover:scale-125 duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="mailto:mail.thediet4u@gmail.com"
                className="text-green-700 hover:text-green-800 transition hover:scale-125 duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInLeft {
          from { 
            opacity: 0;
            transform: translateX(-20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes growWidth {
          from { width: 0; }
          to { width: 6rem; }
        }
        
        @keyframes popIn {
          0% { 
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.7s ease-out forwards;
        }
        
        .animate-growWidth {
          animation: growWidth 0.8s ease-out forwards;
        }
        
        .animate-popIn {
          animation: popIn 0.5s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-800 { animation-delay: 800ms; }
        .delay-900 { animation-delay: 900ms; }
        .delay-1000 { animation-delay: 1000ms; }
        .delay-1100 { animation-delay: 1100ms; }
      `}</style>
    </div>
  );
};

export default AboutPage;