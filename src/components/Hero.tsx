import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Award, Zap } from 'lucide-react';
import btiCollegeLogo from '../assets/Logos/Bti College Logo.png';
import btiIgniteLogo from '../assets/Logos/BTIIGNITE LOGO.png';
import ceoLogo from '../assets/Logos/CEO - BTIINGINE.png';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-22T08:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden py-16 sm:py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-2 sm:left-6 w-8 h-8 sm:w-12 sm:h-12 bg-orange-500/15 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-2 sm:right-8 w-10 h-10 sm:w-16 sm:h-16 bg-orange-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-8 sm:left-16 w-6 h-6 sm:w-10 sm:h-10 bg-orange-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-6 sm:right-12 w-8 h-8 sm:w-14 sm:h-14 bg-orange-500/15 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1 sm:left-4 w-4 h-4 sm:w-8 sm:h-8 bg-orange-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1 sm:right-4 w-6 h-6 sm:w-10 sm:h-10 bg-orange-500/15 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-8 pb-8 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          <div className="text-center lg:text-left order-2 lg:order-2">
            <div className="mb-6">
              <div className="inline-block bg-orange-500/20 text-orange-500 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
                BTI IGNITE INCUBATION COUNCIL
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white mb-4 leading-none">
                HACK<span className="text-orange-500">FINITY</span>
              </h1>
              <div className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 inline-block rounded-lg transform -rotate-2 shadow-lg">
                <span className="text-lg sm:text-2xl font-bold">FOR 18 HOURS</span>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Join the ultimate 18-hour coding marathon at BTI Campus. Compete with the best minds, 
              solve real-world problems, and win exciting prizes worth ₹18,000!
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8 justify-center lg:justify-start">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-white">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                <span className="text-sm sm:text-base">August 22, 2025</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-white">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                <span className="text-sm sm:text-base">8:00 AM Start</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-white">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                <span className="text-sm sm:text-base">BTI Campus</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Register Your Team
              </button>
              <button 
                onClick={() => document.getElementById('challenges')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all"
              >
                View Challenges
              </button>
            </div>
          </div>

          <div className="space-y-4 order-1 lg:order-1">
            {/* Sponsor Logos */}
            <div className="bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-4">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 text-center">Powered By</h3>
              <div className="flex justify-center items-center space-x-4 sm:space-x-8">
                <img 
                  src={btiCollegeLogo} 
                  alt="BTI College" 
                  className="h-8 sm:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                <img 
                  src={btiIgniteLogo} 
                  alt="BTI Ignite" 
                  className="h-8 sm:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                <img 
                  src={ceoLogo} 
                  alt="CEO BTI Engine" 
                  className="h-8 sm:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Event Countdown</h3>
              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                <div className="bg-orange-500 rounded-lg p-2 sm:p-4">
                  <div className="text-xl sm:text-3xl font-bold text-white">{timeLeft.days}</div>
                  <div className="text-orange-100 text-xs sm:text-sm">DAYS</div>
                </div>
                <div className="bg-orange-500 rounded-lg p-2 sm:p-4">
                  <div className="text-xl sm:text-3xl font-bold text-white">{timeLeft.hours}</div>
                  <div className="text-orange-100 text-xs sm:text-sm">HOURS</div>
                </div>
                <div className="bg-orange-500 rounded-lg p-2 sm:p-4">
                  <div className="text-xl sm:text-3xl font-bold text-white">{timeLeft.minutes}</div>
                  <div className="text-orange-100 text-xs sm:text-sm">MINUTES</div>
                </div>
                <div className="bg-orange-500 rounded-lg p-2 sm:p-4">
                  <div className="text-xl sm:text-3xl font-bold text-white">{timeLeft.seconds}</div>
                  <div className="text-orange-100 text-xs sm:text-sm">SECONDS</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-lg p-3 sm:p-4 text-center">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-lg sm:text-2xl font-bold text-white">3</div>
                <div className="text-gray-400 text-xs sm:text-sm">Max Team Size</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-lg p-3 sm:p-4 text-center">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-lg sm:text-2xl font-bold text-white">5</div>
                <div className="text-gray-400 text-xs sm:text-sm">Themes</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-lg p-3 sm:p-4 text-center">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-lg sm:text-2xl font-bold text-white">₹18K</div>
                <div className="text-gray-400 text-xs sm:text-sm">Prize Pool</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;