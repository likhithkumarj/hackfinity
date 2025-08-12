import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Award, Zap } from 'lucide-react';

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
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-orange-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-orange-500/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-orange-500/20 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-block bg-orange-500/20 text-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
                BTI IGNITE INCUBATION COUNCIL
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-white mb-4 leading-none">
                HACK<span className="text-orange-500">FINITY</span>
              </h1>
              <div className="bg-black text-white px-6 py-3 inline-block rounded-lg transform -rotate-2 shadow-lg">
                <span className="text-2xl font-bold">FOR 18 HOURS</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Join the ultimate 18-hour coding marathon at BTI Campus. Compete with the best minds, 
              solve real-world problems, and win exciting prizes worth ₹18,000!
            </p>

            <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 text-white">
                <Calendar className="w-5 h-5 text-orange-500" />
                <span>August 22, 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>8:00 AM Start</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <MapPin className="w-5 h-5 text-orange-500" />
                <span>BTI Campus</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Register Your Team
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
                View Challenges
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {/* Countdown Timer */}
            <div className="bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Event Countdown</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-orange-500 rounded-lg p-4">
                  <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
                  <div className="text-orange-100 text-sm">DAYS</div>
                </div>
                <div className="bg-orange-500 rounded-lg p-4">
                  <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
                  <div className="text-orange-100 text-sm">HOURS</div>
                </div>
                <div className="bg-orange-500 rounded-lg p-4">
                  <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
                  <div className="text-orange-100 text-sm">MINUTES</div>
                </div>
                <div className="bg-orange-500 rounded-lg p-4">
                  <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
                  <div className="text-orange-100 text-sm">SECONDS</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-lg p-6 text-center">
                <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-gray-400 text-sm">Max Team Size</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-lg p-6 text-center">
                <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-gray-400 text-sm">Problem Statements</div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-lg p-6 text-center">
                <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">₹18K</div>
                <div className="text-gray-400 text-sm">Prize Pool</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;