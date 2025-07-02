
import React from 'react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-lg w-full">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Main Message */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Thank You for Your Submission!
        </h2>
        
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          We have received your enquiry and appreciate you taking the time to reach out to us. 
          We will get back to you soon with all the information you need.
        </p>

        {/* Additional Info */}
        <div className="bg-green-50 rounded-lg p-4 mb-6">
          <p className="text-green-800 font-medium">
            ✨ What happens next?
          </p>
          <p className="text-green-700 text-sm mt-2">
            Our team will review your submission and contact you within 24 hours with a personalized response.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          
          <button 
            onClick={() => window.history.back()}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            Go Back
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need immediate assistance? 
            <span className="text-green-600 font-medium ml-1">
              Call us at 9313924875
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}