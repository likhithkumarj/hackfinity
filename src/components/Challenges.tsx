import React, { useState } from 'react';
import { GraduationCap, Store, Users, Zap, Rocket, ChevronDown, ChevronUp } from 'lucide-react';

const Challenges: React.FC = () => {
  const [expandedTheme, setExpandedTheme] = useState<number | null>(null);

  const toggleTheme = (id: number) => {
    setExpandedTheme(expandedTheme === id ? null : id);
  };

  const challenges = [
    {
      id: 1,
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Campus & College Life Solutions",
      description: "Innovate for your own campus — solve the daily challenges students, faculty, and events face.",
      examples: [
        "Smart Canteen Ordering System with live queue tracking",
        "Classroom Resource Booking App for labs and projectors",
        "Event Photo Sharing Hub using AI-based face grouping"
      ],
      realImpact: [
        "Makes everyday campus life smoother and more efficient",
        "Builds tools you and your peers can immediately start using"
      ],
      whyChosen: [
        "Every participant understands campus problems firsthand",
        "Perfect testing ground for real-world deployment in a controlled environment"
      ],
      emoji: "🎓",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      icon: <Store className="w-12 h-12" />,
      title: "Local Small Business Helpers",
      description: "Empower neighborhood shops, cafes, and freelancers with smart yet simple tech.",
      examples: [
        "Offline-first POS system for rural areas",
        "Automated Menu Translator for restaurants",
        "Smart Shelf Restocking Tracker using low-cost sensors"
      ],
      realImpact: [
        "Directly supports small entrepreneurs and local economy",
        "Bridges the tech gap for non-digital businesses"
      ],
      whyChosen: [
        "Students can create something useful for real customers",
        "Impact can be seen and measured right after the hackathon"
      ],
      emoji: "🏪",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      icon: <Users className="w-12 h-12" />,
      title: "Community Service & NGO Tools",
      description: "Design tools that make it easier for communities and NGOs to help people.",
      examples: [
        "Real-Time Food Surplus Map for NGOs",
        "Micro-donation Round-Up App",
        "Volunteer Skill Matcher for community projects"
      ],
      realImpact: [
        "Improves how charities and community groups operate",
        "Enables efficient use of limited resources"
      ],
      whyChosen: [
        "Inspires participants by giving a social purpose to their skills",
        "Creates solutions that can be adopted by local NGOs quickly"
      ],
      emoji: "🤝",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      icon: <Zap className="w-12 h-12" />,
      title: "Daily Life Automation Tools",
      description: "Automate repetitive daily tasks to save time and make life simpler.",
      examples: [
        "Shared Grocery List with auto-categorization",
        "Appliance Energy Tracker with cost estimation",
        "Neighborhood Carpool Matchmaker"
      ],
      realImpact: [
        "Helps individuals and families reduce wasted time and effort",
        "Makes technology part of everyday convenience"
      ],
      whyChosen: [
        "Direct personal benefit — creators can use what they build",
        "Great space for IoT, mobile, and AI-lite solutions"
      ],
      emoji: "🤖",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      icon: <Rocket className="w-12 h-12" />,
      title: "Open Innovation",
      description: "Think beyond boundaries — create groundbreaking solutions for any challenge you're passionate about.",
      examples: [
        "AI-powered Mental Health Companion for students",
        "Blockchain-based Skill Verification System",
        "AR/VR Learning Platform for remote education",
        "Sustainable Energy Management Dashboard",
        "Cross-platform Accessibility Tools"
      ],
      realImpact: [
        "Encourages breakthrough thinking and disruptive innovation",
        "Allows exploration of cutting-edge technologies and methodologies",
        "Creates solutions that could reshape entire industries"
      ],
      whyChosen: [
        "Provides freedom for truly innovative and experimental ideas",
        "Attracts participants with unique visions and advanced technical skills",
        "Enables exploration of emerging technologies like AI, blockchain, AR/VR",
        "Perfect for interdisciplinary solutions combining multiple domains"
      ],
      emoji: "🚀",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="challenges" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            Challenge <span className="text-orange-500">Themes</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Choose from five exciting themes designed to challenge your creativity, 
            technical skills, and problem-solving abilities. Each theme offers unique opportunities 
            to make a real-world impact in areas you care about.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="group">
              {/* Compact Title Card */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${challenge.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 rounded-full p-3 group-hover:scale-110 transition-transform">
                      {challenge.icon}
                    </div>
                    <div className="text-3xl">{challenge.emoji}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                  <p className="text-white/90 leading-relaxed text-sm">{challenge.description}</p>
                </div>
                
                <div className="p-4">
                  <button 
                    onClick={() => toggleTheme(challenge.id)}
                    className="w-full bg-gray-900 hover:bg-orange-500 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    {expandedTheme === challenge.id ? 
                      <ChevronUp className="w-4 h-4" /> : 
                      <ChevronDown className="w-4 h-4" />
                    }
                  </button>
                </div>
              </div>

              {/* Expandable Details */}
              {expandedTheme === challenge.id && (
                <div className="mt-4 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-lg">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Examples:</h4>
                      <ul className="space-y-2">
                        {challenge.examples.map((example, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Real Impact:</h4>
                      <ul className="space-y-1">
                        {challenge.realImpact.map((impact, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-green-600 text-sm">✓</span>
                            <span className="text-gray-700 text-sm">{impact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Why We Chose This Theme:</h4>
                      <ul className="space-y-2">
                        {challenge.whyChosen.map((reason, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-orange-500 text-sm">→</span>
                            <span className="text-gray-700 text-sm">{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Evaluation Criteria</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-orange-500/20 rounded-lg p-4 sm:p-6 border border-orange-500/30">
              <h4 className="text-base sm:text-lg font-semibold text-orange-500 mb-2">Innovation</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Creativity and uniqueness of the solution</p>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-4 sm:p-6 border border-orange-500/30">
              <h4 className="text-base sm:text-lg font-semibold text-orange-500 mb-2">Technical Implementation</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Code quality and technical excellence</p>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-4 sm:p-6 border border-orange-500/30">
              <h4 className="text-base sm:text-lg font-semibold text-orange-500 mb-2">Impact</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Real-world applicability and potential impact</p>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-4 sm:p-6 border border-orange-500/30">
              <h4 className="text-base sm:text-lg font-semibold text-orange-500 mb-2">Presentation</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Clear demonstration and pitch quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;