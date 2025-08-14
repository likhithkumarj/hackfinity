import React from 'react';
import { User, Briefcase, TrendingUp, Cpu } from 'lucide-react';

const OrganizingCommittee: React.FC = () => {
  const committee = [
    {
      name: "Dr. A. Prabhakara Reddy",
      position: "Chief Executive Officer (CEO)",
      organization: "BTI IGNITE INCUBATION COUNCIL",
      description: "Visionary leader driving innovation and entrepreneurship through BTI Ignite Incubation Council.",
      icon: <User className="w-12 h-12" />,
      color: "from-blue-400 to-blue-600",
      shadowColor: "shadow-blue-500/30"
    },
    {
      name: "Dr. N. Manjula",
      position: "Chief Financial Officer (CFO)",
      organization: "BTI IGNITE INCUBATION COUNCIL",
      description: "Strategic financial leader ensuring sustainable growth and fiscal excellence at BTI Ignite.",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "from-green-400 to-green-600",
      shadowColor: "shadow-green-500/30"
    },
    {
      name: "Dr. Sujana P Reddy",
      position: "Chief Operating Officer (COO)",
      organization: "BTI IGNITE INCUBATION COUNCIL",
      description: "Operations expert driving efficiency and excellence in incubation programs and initiatives.",
      icon: <Briefcase className="w-12 h-12" />,
      color: "from-purple-400 to-purple-600",
      shadowColor: "shadow-purple-500/30"
    },
    {
      name: "Dr. Prabhakar Sekar",
      position: "Chief Technology Officer (CTO)",
      organization: "BTI IGNITE INCUBATION COUNCIL",
      description: "Technology visionary leading innovation and technical excellence in startup incubation.",
      icon: <Cpu className="w-12 h-12" />,
      color: "from-orange-400 to-orange-600",
      shadowColor: "shadow-orange-500/30"
    }
  ];

  return (
    <section id="organizing-committee" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Organizing <span className="text-orange-500">Committee</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Meet the dedicated organizing committee behind BTI Ignite Incubation Council, driving innovation 
            and excellence in startup incubation and entrepreneurship development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {committee.map((member, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${member.shadowColor} shadow-2xl group`}
            >
              <div className="flex items-start space-x-6">
                <div className={`bg-gradient-to-r ${member.color} rounded-full w-20 h-20 flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform`}>
                  <div className="text-white">
                    {member.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="text-orange-500 font-semibold text-lg mb-1">{member.position}</div>
                  <div className="text-gray-400 text-sm mb-4 font-medium">{member.organization}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-gray-900/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white mb-6">Driving Excellence Together</h3>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            Our organizing committee combines decades of experience in technology, finance, operations, and entrepreneurship 
            to create a thriving ecosystem for startups and innovators. Together, they guide BTI Ignite Incubation Council 
            towards its mission of fostering the next generation of successful entrepreneurs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrganizingCommittee;