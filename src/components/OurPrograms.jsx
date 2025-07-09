import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
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

// Utility function for delayed actions
const delayedAction = (action, delay = 230) => {
  return (e) => {
    if (e) {
      e.preventDefault();
      e.currentTarget.classList.add('button-pressed');
    }
    
    setTimeout(() => {
      action();
      if (e) {
        e.currentTarget.classList.remove('button-pressed');
      }
    }, delay);
  };
};

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

export default function TheDiet4U() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle logo click
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      scrollToTop();
    } else {
      navigate('/');
    }
  };

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
            <div 
              className="flex items-center space-x-2 group cursor-pointer"
              onClick={delayedAction(handleLogoClick)}
            >
              <Leaf className="h-8 w-8 text-emerald-500 animate-spin-continuous" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                thediet4u
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/contact" 
                onClick={delayedAction(() => navigate("/contact"))}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                Consult Now
              </Link>
            </div>

            <button 
              className="md:hidden"
              onClick={delayedAction(() => setIsMenuOpen(!isMenuOpen))}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t animate-slideDown">
            <div className="px-4 py-2 space-y-2">
              <Link 
                to="/contact" 
                onClick={delayedAction(() => { 
                  setIsMenuOpen(false); 
                  navigate("/contact"); 
                })} 
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
          <div className="text-center animate-fadeIn">
            <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              <StatsCounter end={300} suffix="+" /> Happy Clients Transformed
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Nutrition Programs</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive range of personalized nutrition programs designed for your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Programs */}
      <section id="programs" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              💪 Transformation Programs
            </h2>
            <p className="text-xl text-gray-600">
              Goal-based programs to transform your health, appearance, and lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <FloatingElement key={index} delay={index * 0.2}>
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
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
              </FloatingElement>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Diet Plans */}
      <section id="specialized" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🥗 Specialized Diet Plans
            </h2>
            <p className="text-xl text-gray-600">
              Targeted nutrition to manage health conditions and improve wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedPlans.map((plan, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-1 animate-fadeInUp" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📋 Lifestyle & Wellness Plans
            </h2>
            <p className="text-xl text-gray-600">
              Because good health fits into your routine, not the other way around
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {lifestylePlans.map((plan, index) => (
              <FloatingElement key={index} delay={index * 0.3}>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-lg transition-all animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
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
              </FloatingElement>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🌟 Why to Choose theDiet4U?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all animate-fadeInUp" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-lg p-3 mr-4">
                    <item.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fadeIn">
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
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            📞 Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Choose health. Choose YOU. 
          </p>
          
          <div className="text-emerald-100">
            <p>Join <StatsCounter end={300} suffix="+" /> satisfied clients who transformed their lives with us</p>
          </div>

          <button
            onClick={delayedAction(() => navigate("/contact"))}
            className="mt-8 bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center mx-auto"
          >
            <ArrowRight className="mr-2 w-5 h-5" />
            Get Your Personalized Plan
          </button>
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
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-emerald-400" onClick={delayedAction(scrollToTop)}>Home</Link></li>
                <li><Link to="/programs" className="hover:text-emerald-400">Programs</Link></li>
                <li><Link to="/about" className="hover:text-emerald-400">About</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-400">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 theDiet4U. All rights reserved. | Designed for your wellness journey</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-spin-continuous {
          animation: spin 4s linear infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .button-pressed {
          transform: scale(0.98);
          opacity: 0.9;
          transition: transform 50ms, opacity 50ms;
        }
      `}</style>
    </div>
  );
}