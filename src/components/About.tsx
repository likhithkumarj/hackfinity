import React from 'react';
import { Lightbulb, Code, Trophy, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Challenge",
      description: "Solve real-world problems with cutting-edge technology and creative solutions."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "18 Hours of Coding",
      description: "Non-stop coding marathon to build, test, and deploy your innovative ideas."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Win Amazing Prizes",
      description: "Compete for a total prize pool of ₹18,000 and recognition from industry experts."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Work with like-minded individuals and build lasting connections in tech."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            About <span className="text-orange-500">HACKFINITY</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            HACKFINITY is more than just a hackathon – it's a platform where innovation meets opportunity. 
            Organized by BTI IGNITE INCUBATION COUNCIL under Bangalore Technological Institute, this 18-hour 
            coding marathon brings together the brightest minds to solve tomorrow's challenges today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-black rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-6">
                Why Join <span className="text-orange-500">HACKFINITY?</span>
              </h3>
              <ul className="space-y-4 text-white">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Network with industry professionals and like-minded developers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Access to mentorship from experienced developers and entrepreneurs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Work on cutting-edge problem statements from industry partners</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Free food, beverages, and swag throughout the event</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Certificate of participation and winner recognition</span>
                </li>
              </ul>
            </div>
            <div className="bg-orange-500/10 rounded-2xl p-8 border border-orange-500/30">
              <div className="text-center">
                <div className="text-6xl font-black text-orange-500 mb-4">₹1,499</div>
                <div className="text-white text-xl font-semibold mb-2">Entry Fee Per Team</div>
                <div className="text-orange-300 mb-6">Includes all meals, swag, and networking opportunities</div>
                <div className="space-y-3 text-white text-left">
                  <div className="flex justify-between">
                    <span>Max Team Size:</span>
                    <span className="text-orange-500 font-semibold">3 Members</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="text-orange-500 font-semibold">18 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Problem Statements:</span>
                    <span className="text-orange-500 font-semibold">4 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;