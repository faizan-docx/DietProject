import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    whatsappNumber: '',
    email: '',
    gender: '',
    dateOfBirth: '',
    height: '',
    weight: '',
    remarks: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.whatsappNumber && !/^\d{10}$/.test(formData.whatsappNumber)) {
      newErrors.whatsappNumber = 'Please enter a valid 10-digit WhatsApp number';
    }

    if (formData.height && !/^\d{2,3}(\.\d{1,2})?$/.test(formData.height)) {
      newErrors.height = 'Please enter a valid height (e.g. 165 or 165.5)';
    }

    if (formData.weight && !/^\d{2,3}(\.\d{1,2})?$/.test(formData.weight)) {
      newErrors.weight = 'Please enter a valid weight (e.g. 65 or 65.5)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      navigate('/thankyou');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className={`w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-500 ease-in-out transform ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-8 animate-fadeIn">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Let's Get to Know You!</h1>
          <p className="text-base md:text-lg text-gray-600">
            Please fill out this quick form so we can understand your health goals and guide you with the best personalized diet plan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Phone Number */}
          <div className="animate-fadeInUp delay-100">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
                <span className="text-gray-700 font-medium">+91</span>
              </div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter your Phone Number"
                className={`flex-1 px-4 py-3 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 ${
                  errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.phoneNumber}</p>}
          </div>

          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeInUp delay-200">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your First Name"
                className={`w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.firstName}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your Last Name"
                className="w-full px-4 py-3 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Address */}
          <div className="animate-fadeInUp delay-300">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your Address"
              className="w-full px-4 py-3 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* City */}
          <div className="animate-fadeInUp delay-400">
            <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter your City"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* WhatsApp Number */}
          <div className="animate-fadeInUp delay-500">
            <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number</label>
            <div className="flex">
              <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
                <span className="text-gray-700 font-medium">+91</span>
              </div>
              <input
                type="tel"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleInputChange}
                placeholder="Enter your WhatsApp Number"
                className={`flex-1 px-4 py-3 text-gray-800 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.whatsappNumber ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.whatsappNumber && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.whatsappNumber}</p>}
          </div>

          {/* Email */}
          <div className="animate-fadeInUp delay-600">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your Email"
              className={`w-full px-4 py-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.email}</p>}
          </div>

          {/* Gender & DOB */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeInUp delay-700">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Height & Weight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeInUp delay-750">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Height (cm)</label>
              <input
                type="text"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                placeholder="Enter your height in cm"
                className={`w-full px-4 py-3 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.height ? 'border-red-500' : ''
                }`}
              />
              {errors.height && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.height}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Weight (kg)</label>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder="Enter your weight in kg"
                className={`w-full px-4 py-3 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.weight ? 'border-red-500' : ''
                }`}
              />
              {errors.weight && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.weight}</p>}
            </div>
          </div>

          {/* Remarks */}
          <div className="animate-fadeInUp delay-800">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Remarks</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              placeholder="Any additional information or specific requirements"
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-2 animate-fadeInUp delay-900">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-6 rounded-lg hover:from-green-600 hover:to-blue-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
            >
              Submit Enquiry
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center animate-fadeIn delay-1000">
            Fields marked with <span className="text-red-500">*</span> are required
          </p>
        </form>
      </div>

      {/* Add CSS for animations in the head or a global CSS file */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-5px); }
          40%, 80% { transform: translateX(5px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-750 { animation-delay: 0.75s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
}