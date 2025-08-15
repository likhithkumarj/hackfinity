import React from 'react';
import { Award, Crown } from 'lucide-react';

// Import sponsor logos
import profentialLogo from '../assets/Sponsors/Platinum Sponsor/PROFENTIAL.jpg';
import empowerVillageLogo from '../assets/Sponsors/Gold Sponsors/Empower Village CIC.jpg';
import topEngineersLogo from '../assets/Sponsors/Gold Sponsors/Top Engineers.jpg';

const Sponsors: React.FC = () => {
  const platinumSponsor = {
    name: "PROFENTIAL",
    logo: profentialLogo,
    tier: "Platinum",
    description: "Our premier platinum sponsor supporting innovation in technology and professional development"
  };

  const goldSponsors = [
    {
      name: "Empower Village CIC",
      logo: empowerVillageLogo,
      tier: "Gold",
      description: "Empowering communities through technology and innovation"
    },
    {
      name: "Top Engineers", 
      logo: topEngineersLogo,
      tier: "Gold",
      description: "Supporting the next generation of engineering talent"
    }
  ];

  const handleSponsorshipInquiry = () => {
    const email = "director@btibangalore.com"; // Replace with your preferred email
    const subject = "HACKFINITY 2025 - Sponsorship Inquiry";
    const body = `Dear HACKFINITY Team,

I am interested in becoming a sponsor for HACKFINITY 2025. Please find my details below:

COMPANY INFORMATION:
Company Name: [Please enter your company name]
Industry: [Please enter your industry]
Website: [Please enter your website URL]
Company Size: [Please enter number of employees]

PERSONAL INFORMATION:
Name: [Please enter your full name]
Position: [Please enter your job title]
Email: [Please enter your email address]
Phone: [Please enter your phone number]

SPONSORSHIP INTEREST:
Preferred Sponsorship Tier: [Platinum/Gold/Silver - Please specify]
Specific Areas of Interest: [Please specify any particular aspects you'd like to sponsor]
Budget Range: [Please provide your budget range if comfortable]

ADDITIONAL INFORMATION:
[Please add any additional information or questions you may have]

I look forward to hearing from you about the sponsorship opportunities available for HACKFINITY 2025.

Best regards,
[Your Name]
[Your Company]`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <section id="sponsors" className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            Our <span className="text-orange-500">Sponsors</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
            We're grateful to our amazing sponsors who make HACKFINITY possible and support 
            the next generation of innovators and developers.
          </p>
        </div>

        {/* Platinum Sponsor */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <Crown className="w-4 h-4" />
              <span>Platinum Sponsor</span>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm border-2 border-purple-500/40 rounded-3xl p-8 sm:p-12 text-center shadow-2xl shadow-purple-500/20">
              <div className="bg-white rounded-2xl p-6 sm:p-8 mb-6 shadow-lg">
                <img
                  src={platinumSponsor.logo}
                  alt={platinumSponsor.name}
                  className="h-20 sm:h-24 w-auto max-w-full mx-auto object-contain"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{platinumSponsor.name}</h3>
              <p className="text-purple-200 text-base sm:text-lg">{platinumSponsor.description}</p>
            </div>
          </div>
        </div>

        {/* Gold Sponsors */}
        <div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold">
              <Award className="w-4 h-4" />
              <span>Gold Sponsors</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {goldSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 backdrop-blur-sm border-2 border-yellow-500/40 rounded-2xl p-6 sm:p-8 text-center shadow-xl shadow-yellow-500/10 hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white rounded-xl p-6 sm:p-8 mb-4 shadow-md">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-24 sm:h-32 w-auto max-w-full mx-auto object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{sponsor.name}</h3>
                <p className="text-yellow-200 text-sm sm:text-base">{sponsor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action for Potential Sponsors */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Interested in Sponsoring?</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Join our amazing sponsors and support the next generation of innovators. 
              Contact us to learn about sponsorship opportunities.
            </p>
            <button 
              onClick={handleSponsorshipInquiry}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;