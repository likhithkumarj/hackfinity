import React from 'react';
import { ExternalLink } from 'lucide-react';

const Registration: React.FC = () => {
  const handleRegistrationClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdPx6epARSpK0Abmhvydi8NO0ahxCKU37HhTlN6Acr9vWJArw/viewform?usp=sharing&ouid=107779677474969353799', '_blank');
  };

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Register for <span className="text-orange-500">HACKFINITY</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to join the ultimate 18-hour coding marathon? Click the button below to register your team
            and secure your spot in HACKFINITY 2025.
          </p>
          <div className="bg-orange-500/20 border border-orange-500 rounded-lg p-4 inline-block mb-8">
            <p className="text-orange-300 font-semibold">Entry Fee: ₹1,499 per participant (Max 3 members per team)</p>
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-12">
          <button
            onClick={handleRegistrationClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-full text-2xl font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center mx-auto group"
          >
            <span>Register Now</span>
            <ExternalLink className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-gray-400 mt-6 text-lg">
            You'll be redirected to our registration form where you can submit your team details
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6 text-center">
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-orange-500 font-semibold mb-2">Quick & Easy</h4>
              <p className="text-gray-300 text-sm">Simple form to get you registered in minutes</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <h4 className="text-orange-500 font-semibold mb-2">Secure Payment</h4>
              <p className="text-gray-300 text-sm">Safe and secure payment through RazorPay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;