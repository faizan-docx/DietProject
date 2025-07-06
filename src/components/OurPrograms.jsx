import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import { 
  Heart, 
  Users, 
  Leaf,
  CheckCircle, 
  Phone, 
  Mail, 
  Star, 
  ArrowRight, 
  Menu, 
  X,
  Target,
  Shield,
  Award,
  MessageCircle
} from 'lucide-react';

export default function TheDiet4U() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      emoji: "🔥",
      title: "Weight Loss Program",
      description: "Shed those extra kilos with a sustainable and holistic approach.",
      features: ["Calorie-optimized & nutrient-rich meals", "Weekly progress reviews", "Metabolism-boosting snacks", "Exercise guidance included"],
      color: "from-red-500 to-orange-500"
    },
    {
      emoji: "🏋️‍♂️",
      title: "Weight Gain Program",
      description: "Struggling to gain healthy weight or muscle?? This plan is for you.",
      features: ["High-protein, high-calorie meal plans", "Muscle-gain support", "Gut-friendly food combinations", "Fitness-focused nutrition"],
      color: "from-blue-500 to-purple-500"
    },
    {
      emoji: "🧘",
      title: "Detox & Cleanse",
      description: "A gentle reset for your body and mind.",
      features: ["Gut health restoration", "Anti-inflammatory foods", "Debloating recipes", "Natural detox drinks"],
      color: "from-green-500 to-teal-500"
    }
  ];

  const specializedPlans = [
    {
      emoji: "💟",
      title: "PCOS/PCOD Diet Plan",
      description: "Designed for hormonal harmony and symptom relief.",
      features: ["Low-GI, anti-inflammatory foods", "Period cycle regulation", "Acne & bloating control", "Weight management support"]
    },
    {
      emoji: "🩸",
      title: "Diabetes Management",
      description: "Balance your blood sugar and live confidently.",
      features: ["Low-carb, high-fiber meals", "Sugar swaps and smart snacking", "Lifestyle coaching", "Regular glucose check reminders"]
    },
    {
      emoji: "🦋",
      title: "Thyroid Nutrition",
      description: "Support your thyroid naturally.",
      features: ["Iodine, selenium & zinc-rich foods", "Anti-fatigue meal patterns", "Weight gain prevention", "Mindful eating techniques"]
    },
    {
      emoji: "🤰",
      title: "Pregnancy & Postpartum Nutrition",
      description: "Healthy meals for mama and baby, every step of the way.",
      features: ["Trimester-specific plans", "Nutrient-packed lactation meals", "Recovery-focused postpartum meals", "Morning sickness & cravings tips"]
    },
    {
      emoji: "👶",
      title: "Child Nutrition Program",
      description: "Build strong foundations from the start.",
      features: ["Brain-boosting recipes", "Fussy-eater solutions", "Immune-support meals", "Growth tracking tips"]
    }
  ];

  const lifestylePlans = [
    {
      emoji: "🧑‍💼",
      title: "Corporate Wellness Plans",
      description: "Stay productive, energized, and nourished at work.",
      features: ["Desk-friendly snacks & meals", "Stress management through food", "Hydration strategies", "Virtual wellness sessions for teams"]
    },
    {
      emoji: "🏃‍♀️",
      title: "Sports & Fitness Diet",
      description: "For athletes, gym-goers, and active souls.",
      features: ["Pre/post workout meals", "High-protein nutrition", "Endurance support", "Supplement guidance"]
    }
  ];

  const whyChooseUs = [
    { icon: Target, text: "Personalized plans based on your goals, health history, and preferences" },
    { icon: Award, text: "Backed by Dt. Kaneez Fatima, M.Sc. Nutrition & Dietetics,From Jamia Hamdard" },
    { icon: MessageCircle, text: "One-on-one support via WhatsApp & email" },
    { icon: Shield, text: "Visual guides, shopping lists & lifestyle coaching" },
    { icon: Users, text: "300+ happy clients and real transformations" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🌿</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                TheDiet4U
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                Consult Now
              </Link>
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
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 py-2 space-y-2">
              <Link 
              to="/contact" 
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Consult Now
            </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              300+ Happy Clients Transformed
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Journey to{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Better Health
              </span>{' '}
              Starts Here
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Personalized, goal-oriented nutrition programs based on evidence-backed science. 
              Transform your health, appearance, and lifestyle with our expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Programs */}
      <section id="programs" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              💪 Transformation Programs
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
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Diet Plans */}
      <section id="specialized" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🥗 Specialized Diet Plans
            </h2>
            <p className="text-xl text-gray-600">
              Targeted nutrition to manage health conditions and improve wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-1">
                <div className="text-3xl mb-3">{plan.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>
                <ul className="space-y-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle & Wellness Plans */}
      <section id="lifestyle" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📋 Lifestyle & Wellness Plans
            </h2>
            <p className="text-xl text-gray-600">
              Because good health fits into your routine, not the other way around
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {lifestylePlans.map((plan, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{plan.emoji}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.title}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🌟 Why Choose TheDiet4U?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-lg p-3 mr-4">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Your Expert</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  DK
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-900">Dt. Kaneez Fatima</p>
              <p className="text-emerald-600 font-medium">M.Sc. Nutrition & Dietetics, Jamia Hamdard</p>
              <p className="text-gray-600 mt-2">Your trusted partner in achieving optimal health through personalized nutrition</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            📞 Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Choose health. Choose YOU. ✨
          </p>
          
          <div className="text-emerald-100">
            <p>Join 300+ satisfied clients who transformed their lives with us</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🌿</span>
                </div>
                <span className="text-2xl font-bold">TheDiet4U</span>
              </div>
              <p className="text-gray-400 mb-4">
                Personalized nutrition programs designed to transform your health, appearance, and lifestyle. 
                Expert guidance backed by science.
              </p>
              {/* <div className="flex space-x-4">
                <div className="bg-emerald-600 w-10 h-10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="bg-emerald-600 w-10 h-10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="bg-emerald-600 w-10 h-10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div> */}
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
            <p>&copy; 2025 TheDiet4U. All rights reserved. | Designed for your wellness journey</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
