import React, { useEffect, useState } from 'react';

export default function ThankYouPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleGoBack = () => {
    // Simulated navigation back
    console.log('Going back to previous page');
  };

  const handleGoHome = () => {
    // Simulated navigation to home
    console.log('Going to home page');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 px-4 py-8">
      <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center max-w-lg w-full transform transition-all duration-500 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Success Icon with Animation */}
        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in">
          <svg 
            className="w-10 h-10 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-label="Success Icon"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>

        {/* Main Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 animate-fade-in">
          Thank You for Your Submission!
        </h2>
        
        <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed animate-fade-in delay-100">
          We have received your enquiry and appreciate you reaching out to us. 
          Our team will review your information and get back to you soon with all the details you need.
        </p>

        {/* Timeline Indicator */}
        <div className="flex items-center justify-center mb-6 animate-fade-in delay-200">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm mr-2">
              1
            </div>
            <div className="h-1 w-12 bg-emerald-300 mx-1"></div>
            <div className="w-8 h-8 rounded-full bg-emerald-300 flex items-center justify-center text-white font-bold text-sm mx-1">
              2
            </div>
            <div className="h-1 w-12 bg-gray-200 mx-1"></div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm ml-2">
              3
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-emerald-50 rounded-lg p-4 mb-6 border-l-4 border-emerald-500 animate-fade-in delay-300">
          <p className="text-emerald-800 font-medium flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            What happens next?
          </p>
          <ul className="text-left text-emerald-700 text-sm mt-2 space-y-1 pl-6 list-disc">
            <li>Our doctor will review your submission</li>
            <li>You'll receive a confirmation Mail</li>
            <li>Personalized consultation scheduled at your convenience</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in delay-400">
          <button 
            onClick={handleGoBack}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Fill Another Form
          </button>
          <button 
            onClick={handleGoHome}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Return Home
          </button>
        </div>

        {/* Payment Reminder */}
        <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-lg animate-fade-in delay-500">
          <p className="text-amber-800 font-medium flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Payment Reminder
          </p>
          <p className="text-sm text-amber-700 mt-2">
            Please send your payment screenshot to WhatsApp number: +91 74610 29189
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-5 border-t border-gray-200 animate-fade-in delay-600">
          <p className="text-sm text-gray-500 mb-2">
            Need immediate assistance?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="tel:9313924875" className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call: +91 74610 29189
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a href="mailto:mail.thedeit4u@gmail.com" className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes bounceIn {
          0% { 
            opacity: 0;
            transform: scale(0.5);
          }
          60% { 
            opacity: 1;
            transform: scale(1.1);
          }
          100% { 
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </div>
  );
}