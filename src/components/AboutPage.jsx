import React from 'react';
import { MapPin, GraduationCap, Award } from 'lucide-react';
import FatimaImg from '../images/fatima.jpg'; // ✅ Import your image here

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Dr. Kaneez Fatima</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Dr. Kaneez Fatima</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Dedicated Nutritionist & Dietitian committed to helping individuals achieve optimal health through personalized nutrition guidance and evidence-based dietary interventions.
                </p>
              </div>

              {/* Qualifications */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="text-green-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Qualification</h3>
                    <p className="text-gray-600">Masters in Nutrition and Dietetics</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Award className="text-blue-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800">University</h3>
                    <p className="text-gray-600">Jamia Hamdard University</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="text-red-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">
                      G782+55X, Mehrauli - Badarpur Rd,<br />
                      Near Batra Hospital, Block D,<br />
                      Hamdard Nagar, New Delhi, Delhi 110062
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Professional Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  With a strong foundation in nutrition science from Jamia Hamdard University, 
                  Dr. Kaneez Fatima brings a comprehensive understanding of nutritional therapy 
                  and dietary counseling. She specializes in creating personalized nutrition plans 
                  that address individual health needs, lifestyle factors, and dietary preferences.
                </p>
              </div>

              {/* Areas of Expertise */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Areas of Expertise</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-medium">
                    Clinical Nutrition
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium">
                    Weight Management
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-full text-sm font-medium">
                    Therapeutic Diets
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-sm font-medium">
                    Lifestyle Nutrition
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm">
                <div className="bg-gradient-to-br from-green-200 to-blue-200 rounded-2xl p-8 shadow-lg">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <div className="w-48 h-64 rounded-lg mx-auto mb-4 overflow-hidden shadow-md">
                      <img
                        src={FatimaImg}
                        alt="Dr. Kaneez Fatima"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Dr. Kaneez Fatima</h4>
                    <p className="text-sm text-gray-600">Nutrition & Dietetics Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-gray-50 px-8 py-6 border-t">
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 mb-3">Get In Touch</h3>
              <p className="text-gray-600 mb-4">
                Ready to start your journey towards better health? Schedule a consultation today.
              </p>
              <div className="flex justify-center space-x-6">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                  Book Appointment
                </button>
                <button className="border border-green-500 text-green-500 hover:bg-green-50 px-6 py-2 rounded-full font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
