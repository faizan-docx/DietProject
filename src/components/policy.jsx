import React, { useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Policy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-gray-800 animate-fadeIn">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-emerald-600 animate-slideDown">
        Policies - thediet4u
      </h1>

      <div className="space-y-8">
        {/* Privacy Policy */}
        <section className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-slideUp">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800 flex items-center">
            <span className="w-3 h-3 bg-emerald-400 rounded-full mr-2"></span>
            Privacy Policy
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            At <strong className="text-emerald-600">thediet4u</strong>, we are committed to protecting your privacy. We collect only the
            necessary information (name, email, contact) to serve you better. Your data will never be sold
            or shared with third parties without your explicit consent.
          </p>
        </section>

        {/* Terms and Conditions */}
        <section className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-slideUp delay-100">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800 flex items-center">
            <span className="w-3 h-3 bg-emerald-400 rounded-full mr-2"></span>
            Terms & Conditions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            By using our website and services, you agree to follow nutritional advice provided by
            <strong className="text-emerald-600"> Dt. Kaneez Fatima</strong>. Our guidance is wellness-focused and not a replacement for medical treatment.
            Clients are responsible for disclosing any health conditions before starting a program.
          </p>
        </section>

        {/* Cancellation & Refund Policy */}
        <section className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-slideUp delay-200">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800 flex items-center">
            <span className="w-3 h-3 bg-emerald-400 rounded-full mr-2"></span>
            Cancellation & Refund Policy
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Payments made are non-refundable once services have commenced. However, if cancellation
            is requested within 24 hours of payment and no service has been delivered, refunds can be 
            discussed by contacting us at <strong className="text-emerald-600">mail.thediet4u@gmail.com</strong>.
          </p>
        </section>

        {/* Shipping Policy */}
        <section className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-slideUp delay-300">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800 flex items-center">
            <span className="w-3 h-3 bg-emerald-400 rounded-full mr-2"></span>
            Digital Delivery Policy
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            We provide digital diet plans and consultations only. No physical items are shipped. All
            communication and delivery will be via email or WhatsApp within 24-48 hours of payment confirmation.
          </p>
        </section>

        {/* Contact Us */}
        <section className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-slideUp delay-400">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800 flex items-center">
            <span className="w-3 h-3 bg-emerald-400 rounded-full mr-2"></span>
            Contact Us
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
            For any concerns or questions regarding our services or policies:
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-sm sm:text-base hover:translate-x-1 transition-transform duration-200">
              <Mail className="w-4 h-4 mr-2 text-emerald-500" />
              <strong className="text-gray-700 mr-1">Email:</strong>
              <a href="mailto:mail.thediet4u@gmail.com" className="text-emerald-600 hover:underline">
                mail.thediet4u@gmail.com
              </a>
            </li>
            <li className="flex items-center text-sm sm:text-base hover:translate-x-1 transition-transform duration-200">
              <Phone className="w-4 h-4 mr-2 text-emerald-500" />
              <strong className="text-gray-700 mr-1">WhatsApp:</strong>
              <span className="text-gray-600">+91-74610 29189</span>
            </li>
            <li className="flex items-start text-sm sm:text-base hover:translate-x-1 transition-transform duration-200">
              <MapPin className="w-4 h-4 mr-2 text-emerald-500 mt-0.5" />
              <div>
                <strong className="text-gray-700 mr-1">Location:</strong>
                <span className="text-gray-600">Ward no - 45, jail chowk, chandwara
nuzaffarpur, Bihar - 842001</span>
              </div>
            </li>
          </ul>
        </section>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}