import React from 'react';
import { Trophy, Medal, Award, Gift } from 'lucide-react';

const Prizes: React.FC = () => {
  const prizes = [
    {
      position: "1st Place",
      amount: "₹10,000",
      icon: <Trophy className="w-16 h-16" />,
      color: "from-yellow-400 to-yellow-600",
      shadowColor: "shadow-yellow-500/30",
      extras: ["Winner Certificate", "Cash Prize", "Internship Opportunities", "Mentorship Program"]
    },
    {
      position: "2nd Place", 
      amount: "₹5,000",
      icon: <Medal className="w-16 h-16" />,
      color: "from-gray-300 to-gray-500",
      shadowColor: "shadow-gray-500/30",
      extras: ["Runner-up Certificate", "Cash Prize", "Industry Recognition", "Networking Opportunities"]
    },
    {
      position: "3rd Place",
      amount: "₹3,000", 
      icon: <Award className="w-16 h-16" />,
      color: "from-orange-400 to-orange-600",
      shadowColor: "shadow-orange-500/30",
      extras: ["3rd Place Certificate", "Cash Prize", "Startup Resources", "Alumni Network Access"]
    }
  ];

  const additionalPrizes = [
    "Best Innovation Award",
    "Best Technical Implementation",
    "Most Impactful Solution", 
    "People's Choice Award",
    "Best Presentation",
    "Best Team Collaboration"
  ];

  return (
    <section id="prizes" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Prize <span className="text-orange-500">Pool</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Compete for amazing prizes worth ₹18,000 in total! Winners will receive cash prizes, 
            certificates, and exclusive opportunities to kickstart their tech careers.
          </p>
          <div className="bg-orange-500/20 border border-orange-500 rounded-lg p-4 inline-block">
            <p className="text-orange-300 font-semibold text-lg">Total Prize Pool: ₹18,000</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div 
              key={index} 
              className={`bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 ${prize.shadowColor} shadow-2xl group`}
            >
              <div className={`bg-gradient-to-r ${prize.color} rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform`}>
                <div className="text-white">
                  {prize.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{prize.position}</h3>
              <div className="text-4xl font-black text-orange-500 mb-6">{prize.amount}</div>
              
              <div className="space-y-3">
                {prize.extras.map((extra, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-2 text-gray-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">{extra}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
            <Gift className="w-8 h-8 text-orange-500 mr-3" />
            Special Recognition Awards
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalPrizes.map((award, index) => (
              <div key={index} className="bg-black/30 rounded-lg p-4 text-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mx-auto mb-2"></div>
                <p className="text-white font-medium">{award}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white mb-6">Beyond Monetary Prizes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-500/30">
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Mentorship</h4>
              <p className="text-gray-300 text-sm">One-on-one guidance from industry experts</p>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-500/30">
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Internships</h4>
              <p className="text-gray-300 text-sm">Exclusive internship opportunities with partner companies</p>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-500/30">
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Networking</h4>
              <p className="text-gray-300 text-sm">Connect with like-minded developers and entrepreneurs</p>
            </div>
            <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-500/30">
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Recognition</h4>
              <p className="text-gray-300 text-sm">Industry recognition and certificate of achievement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;