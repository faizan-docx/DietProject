import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 text-center max-w-lg w-full">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Success Icon">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Main Message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Thank You for Your Submission!
        </h2>
        
        <p className="text-base text-gray-600 mb-4 leading-relaxed">
          We have received your enquiry and appreciate you reaching out to us. 
          We will get back to you soon with all the information you need.
        </p>

        {/* Additional Info */}
        <div className="bg-green-50 rounded-lg p-3 mb-5">
          <p className="text-green-800 font-medium">
            ✨ What happens next?
          </p>
          <p className="text-green-700 text-sm mt-1">
            Our Doctor will review your submission and contact you within 24 hours 
          </p>
        </div>

        {/* Action Buttons */}
        <button 
          onClick={() => navigate(-1)}
          className="w-full bg-gray-100 hover:bg-gray-200 text-white-700 font-semibold py-2.5 px-6 rounded-lg transition-all duration-200"
        >
          Go Back
        </button>

        {/* Contact Info */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? 
            <span className="text-green-600 font-medium ml-1">
              Call us at 9313924875
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
