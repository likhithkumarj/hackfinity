import React from 'react';
import { Brain, Leaf, CreditCard, Heart } from 'lucide-react';

const Challenges: React.FC = () => {
  const challenges = [
    {
      id: 1,
      icon: <Brain className="w-12 h-12" />,
      title: "AI/ML Innovation Challenge",
      description: "Develop intelligent solutions using artificial intelligence and machine learning to solve everyday problems.",
      details: [
        "Computer Vision Applications",
        "Natural Language Processing",
        "Predictive Analytics",
        "Recommendation Systems"
      ],
      difficulty: "Advanced",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      icon: <Leaf className="w-12 h-12" />,
      title: "Sustainable Technology Solutions",
      description: "Create eco-friendly tech solutions that contribute to environmental sustainability and climate change mitigation.",
      details: [
        "Clean Energy Solutions",
        "Waste Management Systems",
        "Carbon Footprint Tracking",
        "Smart Agriculture Technology"
      ],
      difficulty: "Intermediate",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      icon: <CreditCard className="w-12 h-12" />,
      title: "FinTech & Blockchain Applications",
      description: "Build innovative financial technology solutions using blockchain, cryptocurrencies, and modern payment systems.",
      details: [
        "Digital Payment Solutions",
        "Cryptocurrency Applications",
        "Smart Contracts",
        "Personal Finance Management"
      ],
      difficulty: "Advanced",
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 4,
      icon: <Heart className="w-12 h-12" />,
      title: "Healthcare Technology Revolution",
      description: "Develop digital health solutions to improve patient care, medical diagnostics, and healthcare accessibility.",
      details: [
        "Telemedicine Platforms",
        "Health Monitoring Apps",
        "Medical Data Analytics",
        "Emergency Response Systems"
      ],
      difficulty: "Intermediate",
      color: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section id="challenges" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Problem <span className="text-orange-500">Statements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from four exciting problem statements designed to challenge your creativity, 
            technical skills, and problem-solving abilities. Each challenge offers unique opportunities 
            to make a real-world impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className={`bg-gradient-to-r ${challenge.color} p-8 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 rounded-full p-3 group-hover:scale-110 transition-transform">
                    {challenge.icon}
                  </div>
                  <div className="bg-white/20 rounded-full px-4 py-2 text-sm font-semibold">
                    {challenge.difficulty}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{challenge.title}</h3>
                <p className="text-white/90 leading-relaxed">{challenge.description}</p>
              </div>
              
              <div className="p-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Focus Areas:</h4>
                <ul className="space-y-3 mb-6">
                  {challenge.details.map((detail, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gray-900 hover:bg-orange-500 text-white py-3 rounded-lg font-semibold transition-colors">
                  Choose This Challenge
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Evaluation Criteria</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-500/30">
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Innovation</h4>
              <p className="text-gray-300 text-sm">Creativity and uniqueness of the solution</p>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-500/30">
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Technical Implementation</h4>
              <p className="text-gray-300 text-sm">Code quality and technical excellence</p>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-500/30">
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Impact</h4>
              <p className="text-gray-300 text-sm">Real-world applicability and potential impact</p>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-500/30">
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Presentation</h4>
              <p className="text-gray-300 text-sm">Clear demonstration and pitch quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;