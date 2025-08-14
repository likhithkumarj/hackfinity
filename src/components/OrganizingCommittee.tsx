import React from 'react';
import { User, Briefcase, TrendingUp, Cpu, Github, Linkedin } from 'lucide-react';

// Import organizing committee photos
import drPrabhakaraReddyPhoto from '../assets/Logos/Organizing Committe/Dr. A. Prabhakara Reddy.png';
import drManjulaPhoto from '../assets/Logos/Organizing Committe/Dr. N Manjula.png';
import drSujanaReddyPhoto from '../assets/Logos/Organizing Committe/Dr. Sujana P Reddy.png';
import drPrabhakarSekarPhoto from '../assets/Logos/Organizing Committe/Dr. Prabhakar Sekar.png';

// Import hackathon crew photos
import jeelanBashaPhoto from '../assets/Hackathon Crew/Jeelan Basha.png';
import sameerPhoto from '../assets/Hackathon Crew/Sameer.png';
import amanKumarPhoto from '../assets/Hackathon Crew/Aman Kumar.png';
import likhithKumarPhoto from '../assets/Hackathon Crew/Likhith Kumar.png';
import pruthviReddyPhoto from '../assets/Hackathon Crew/Pruthvi Narayana Reddy V.jpg';
import apoliseDiasPhoto from '../assets/Hackathon Crew/Apolise Dias.png';
import hemavathiPhoto from '../assets/Hackathon Crew/Hemavathi.png';
import santhoshPhoto from '../assets/Hackathon Crew/Santhosh.png';
import prajwalPhoto from '../assets/Hackathon Crew/Prajwal.png';

const OrganizingCommittee: React.FC = () => {
  const committee = [
    {
      name: "Dr. A. Prabhakara Reddy",
      position: "Chief Executive Officer (CEO)",
      organization: "BTI IGNITE INCUBATION COUNCIL",
      description: "Visionary leader driving innovation and entrepreneurship through BTI Ignite Incubation Council.",
      photo: drPrabhakaraReddyPhoto,
      icon: <User className="w-12 h-12" />,
      color: "from-blue-400 to-blue-600",
      shadowColor: "shadow-blue-500/30"
    },
    {
      name: "Dr. N. Manjula",
      position: "Chief Financial Officer (CFO)",
      organization: "BTI IGNITE INCUBATION COUNCIL",
      description: "Strategic financial leader ensuring sustainable growth and fiscal excellence at BTI Ignite.",
      photo: drManjulaPhoto,
      icon: <TrendingUp className="w-12 h-12" />,
      color: "from-green-400 to-green-600",
      shadowColor: "shadow-green-500/30"
    },
    {
      name: "Dr. Sujana P Reddy",
      position: "Chief Operating Officer (COO)",
      organization: "BTI IGNITE INCUBATION COUNCIL",
      description: "Operations expert driving efficiency and excellence in incubation programs and initiatives.",
      photo: drSujanaReddyPhoto,
      icon: <Briefcase className="w-12 h-12" />,
      color: "from-purple-400 to-purple-600",
      shadowColor: "shadow-purple-500/30"
    },
    {
      name: "Dr. Prabhakar Sekar",
      position: "Chief Technology Officer (CTO)",
      organization: "BTI IGNITE INCUBATION COUNCIL",
      description: "Technology visionary leading innovation and technical excellence in startup incubation.",
      photo: drPrabhakarSekarPhoto,
      icon: <Cpu className="w-12 h-12" />,
      color: "from-orange-400 to-orange-600",
      shadowColor: "shadow-orange-500/30",
      linkedin: "https://www.linkedin.com/in/dr-prabhakar-sekar-27514544?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  ];

  return (
    <section id="organizing-committee" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            Organizing <span className="text-orange-500">Committee</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
            Meet the dedicated organizing committee behind BTI Ignite Incubation Council, driving innovation 
            and excellence in startup incubation and entrepreneurship development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {committee.map((member, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${member.shadowColor} shadow-2xl group`}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-orange-500/30 shadow-lg"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="text-orange-500 font-semibold text-base sm:text-lg mb-1">{member.position}</div>
                  <div className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 font-medium">{member.organization}</div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{member.description}</p>
                  
                  {/* LinkedIn icon for Dr. Prabhakar Sekar */}
                  {member.linkedin && (
                    <div className="flex items-center justify-center sm:justify-start space-x-2">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm"
                      >
                        <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 bg-gray-900/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Driving Excellence Together</h3>
          <p className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto px-4 sm:px-0">
            Our organizing committee combines decades of experience in technology, finance, operations, and entrepreneurship 
            to create a thriving ecosystem for startups and innovators. Together, they guide BTI Ignite Incubation Council 
            towards its mission of fostering the next generation of successful entrepreneurs.
          </p>
        </div>

        {/* Hackathon Crew Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
              Hackathon <span className="text-orange-500">Crew</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              Meet our dedicated hackathon crew of 9 talented members who make this event possible through their expertise and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                name: "Jeelan Basha",
                role: "Website Designer & Technical Coordinator",
                department: "AI&ML, BTI",
                photo: jeelanBashaPhoto,
                github: "https://github.com/jeelan80",
                linkedin: "https://www.linkedin.com/in/jeelan-basha-508a19314/"
              },
              {
                name: "Sameer",
                role: "Website Designer & Technical Coordinator",
                department: "ROAI, Full Stack Intern(BTI IGNITE)",
                photo: sameerPhoto,
                github: "https://github.com/sameersam648",
                linkedin: "https://www.linkedin.com/in/sameer-83733a2a6/"
              },
              {
                name: "Aman Kumar",
                role: "Technical Coordinator",
                department: "ROAI, BTI",
                photo: amanKumarPhoto,
                github: "https://github.com/Amankumar006/",
                linkedin: "https://www.linkedin.com/in/aman-kumar-8102bb279/"
              },
              {
                name: "Likhith Kumar",
                role: "Website+Poster Designer & Technical Coordinator",
                department: "AI&ML, Full Stack Intern(BTI IGNITE)",
                photo: likhithKumarPhoto,
                github: "https://github.com/likhithkumar",
                linkedin: "https://www.linkedin.com/in/likhithkumarj/"
              },
              {
                name: "Pruthvi Narayana Reddy V",
                role: "Event Manager (Students Secretary BTI)",
                department: "BTI",
                photo: pruthviReddyPhoto,
                github: null,
                linkedin: null
              },
              {
                name: "Apolise Dias",
                role: "HR Intern",
                department: "BTI IGNITE",
                photo: apoliseDiasPhoto,
                github: null,
                linkedin: null
              },
              {
                name: "Hemavathi",
                role: "Finance Intern",
                department: "BTI IGNITE",
                photo: hemavathiPhoto,
                github: null,
                linkedin: null
              },
              {
                name: "Santhosh Kumar K",
                role: "Finance Intern",
                department: "BTI IGNITE",
                photo: santhoshPhoto,
                github: null,
                linkedin: null
              },
              {
                name: "Prajwal",
                role: "Startup Networking Intern",
                department: "BTI IGNITE",
                photo: prajwalPhoto,
                github: null,
                linkedin: null
              }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-orange-500/30 shadow-lg hover:scale-110 transition-transform"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-xs mb-4">{member.department}</p>
                  
                  <div className="flex justify-center space-x-3">
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizingCommittee;