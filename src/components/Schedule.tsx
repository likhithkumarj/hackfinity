import React from 'react';
import { Clock, Coffee, Code, Users, Trophy, MapPin, Milestone, Presentation } from 'lucide-react';

const Schedule: React.FC = () => {
  const schedule = [
    {
      time: "3:00 PM",
      duration: "1 hour",
      title: "Registration Begins",
      description: "Check-in, team formation, and welcome session. Get ready to innovate!",
      icon: <Users className="w-5 h-5" />,
      type: "ceremony"
    },
    {
      time: "4:00 PM",
      duration: "30 mins",
      title: "Hackathon Officially Starts",
      description: "Opening ceremony, problem statements revealed, and rules explained.",
      icon: <Trophy className="w-5 h-5" />,
      type: "milestone"
    },
    {
      time: "4:30 PM",
      duration: "2.5 hours",
      title: "Hacking Begins",
      description: "Teams start working on their AI solutions for social good. Mentors available for guidance.",
      icon: <Code className="w-5 h-5" />,
      type: "workshop"
    },
    {
      time: "7:00 PM",
      duration: "30 mins",
      title: "Snacks Break",
      description: "Quick refreshment break to recharge and network with other teams.",
      icon: <Coffee className="w-5 h-5" />,
      type: "ceremony"
    },
    {
      time: "8:30 PM",
      duration: "1 hour",
      title: "Dinner Break",
      description: "Networking dinner and informal mentorship sessions. Connect with industry professionals.",
      icon: <Coffee className="w-5 h-5" />,
      type: "ceremony"
    },
    {
      time: "1:00 AM",
      duration: "30 mins",
      title: "Midnight Coffee/Tea Break",
      description: "Late night fuel! Coffee, tea, and light snacks to keep you energized.",
      icon: <Coffee className="w-5 h-5" />,
      type: "ceremony"
    },
    {
      time: "8:00 AM",
      duration: "1 hour",
      title: "Breakfast",
      description: "Morning breakfast to fuel the final stretch of development.",
      icon: <Coffee className="w-5 h-5" />,
      type: "ceremony"
    },
    {
      time: "9:00 AM",
      duration: "1 hour",
      title: "Final Sprint",
      description: "Last hour to polish your solution and prepare for submission.",
      icon: <Code className="w-5 h-5" />,
      type: "workshop"
    },
    {
      time: "10:00 AM",
      duration: "15 mins",
      title: "Submission Deadline",
      description: "All projects must be submitted. No more coding allowed after this point!",
      icon: <Trophy className="w-5 h-5" />,
      type: "milestone"
    },
    {
      time: "10:15 AM",
      duration: "45 mins",
      title: "PPT Submission Deadline",
      description: "Final presentation slides must be submitted for judging.",
      icon: <Presentation className="w-5 h-5" />,
      type: "milestone"
    },
    {
      time: "11:00 AM",
      duration: "30 mins",
      title: "Top 3 Teams Finalized",
      description: "Judges announce the top 3 teams who will present to the panel.",
      icon: <Trophy className="w-5 h-5" />,
      type: "milestone"
    },
    {
      time: "11:30 AM",
      duration: "30 mins",
      title: "Event Closure",
      description: "Winner announcements, awards ceremony, and closing remarks.",
      icon: <Trophy className="w-5 h-5" />,
      type: "ceremony"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'ceremony': return 'border-purple-500 bg-purple-500/20';
      case 'milestone': return 'border-red-500 bg-red-500/20';
      case 'workshop': return 'border-orange-500 bg-orange-500/20';
      default: return 'border-gray-500 bg-gray-500/20';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            Event <span className="text-orange-500">Schedule</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            A comprehensive 18-hour journey packed with coding, learning, networking, and fun. 
            Here's everything you need to know about the event timeline.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-0">
            <div className="flex items-center justify-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
              <span className="text-gray-700 font-medium text-sm sm:text-base">Duration: 18 Hours</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
              <span className="text-gray-700 font-medium text-sm sm:text-base">Venue: BTI Campus</span>
            </div>
          </div>
        </div>

        {/* Event Schedule */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4 sm:px-0">
            18-Hour Hackathon Timeline <span className="text-orange-500">(August 22-23, 2025)</span>
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0 w-full sm:w-24 text-center sm:text-left">
                    <div className="text-base sm:text-lg font-bold text-gray-900">{item.time}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{item.duration}</div>
                  </div>
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 ${getTypeColor(item.type)} flex items-center justify-center mx-auto sm:mx-0`}>
                    <div className="text-gray-700">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Important Notes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 sm:p-6">
              <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="text-base sm:text-lg font-semibold text-orange-500 mb-2">Meals Provided</h4>
              <p className="text-gray-300 text-xs sm:text-sm">All meals, snacks, and beverages included in entry fee</p>
            </div>
            <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 sm:p-6">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="text-base sm:text-lg font-semibold text-orange-500 mb-2">Mentors Available</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Industry experts available throughout the event</p>
            </div>
            <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 sm:p-6">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="text-base sm:text-lg font-semibold text-orange-500 mb-2">Venue Facilities</h4>
              <p className="text-gray-300 text-xs sm:text-sm">High-speed WiFi, power outlets, comfortable seating</p>
            </div>
            <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 sm:p-6">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="text-base sm:text-lg font-semibold text-orange-500 mb-2">24/7 Support</h4>
              <p className="text-gray-300 text-xs sm:text-sm">Technical and logistical support available round the clock</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;