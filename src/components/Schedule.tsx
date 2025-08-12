import React from 'react';
import { Clock, Coffee, Code, Users, Trophy, MapPin } from 'lucide-react';

const Schedule: React.FC = () => {
  const scheduleDay1 = [
    {
      time: "8:00 AM",
      title: "Registration & Check-in",
      description: "Welcome participants, distribute swag, breakfast",
      icon: <Users className="w-5 h-5" />,
      type: "registration"
    },
    {
      time: "9:30 AM",
      title: "Opening Ceremony",
      description: "Welcome address, event overview, problem statements reveal",
      icon: <Trophy className="w-5 h-5" />,
      type: "ceremony"
    },
    {
      time: "10:30 AM",
      title: "Team Formation & Networking",
      description: "Final team registration, networking session",
      icon: <Users className="w-5 h-5" />,
      type: "networking"
    },
    {
      time: "11:00 AM",
      title: "Hackathon Begins!",
      description: "Coding starts, mentors available for guidance",
      icon: <Code className="w-5 h-5" />,
      type: "coding"
    },
    {
      time: "1:00 PM",
      title: "Lunch Break",
      description: "Nutritious lunch provided for all participants",
      icon: <Coffee className="w-5 h-5" />,
      type: "break"
    },
    {
      time: "2:00 PM",
      title: "Coding Continues",
      description: "Intense development phase, mentor support available",
      icon: <Code className="w-5 h-5" />,
      type: "coding"
    },
    {
      time: "4:00 PM",
      title: "Snacks & Refreshments",
      description: "Energy boost with snacks and beverages",
      icon: <Coffee className="w-5 h-5" />,
      type: "break"
    },
    {
      time: "6:00 PM",
      title: "Dinner Time",
      description: "Delicious dinner and socializing",
      icon: <Coffee className="w-5 h-5" />,
      type: "break"
    },
    {
      time: "7:00 PM",
      title: "Night Coding Session",
      description: "Late night development, 24/7 support available",
      icon: <Code className="w-5 h-5" />,
      type: "coding"
    },
    {
      time: "10:00 PM",
      title: "Midnight Snacks",
      description: "Late night fuel for developers",
      icon: <Coffee className="w-5 h-5" />,
      type: "break"
    }
  ];

  const scheduleDay2 = [
    {
      time: "6:00 AM",
      title: "Early Morning Breakfast",
      description: "Fresh start with healthy breakfast",
      icon: <Coffee className="w-5 h-5" />,
      type: "break"
    },
    {
      time: "7:00 AM",
      title: "Final Development Phase",
      description: "Last push for implementation and testing",
      icon: <Code className="w-5 h-5" />,
      type: "coding"
    },
    {
      time: "11:00 AM",
      title: "Submission Deadline",
      description: "Code freeze! Time to submit your projects",
      icon: <Trophy className="w-5 h-5" />,
      type: "deadline"
    },
    {
      time: "11:30 AM",
      title: "Presentation Preparation",
      description: "Prepare your pitches and demonstrations",
      icon: <Users className="w-5 h-5" />,
      type: "preparation"
    },
    {
      time: "12:00 PM",
      title: "Team Presentations",
      description: "Each team presents their solution (5 min + Q&A)",
      icon: <Trophy className="w-5 h-5" />,
      type: "presentation"
    },
    {
      time: "1:30 PM",
      title: "Judging & Lunch",
      description: "Judges evaluate while participants enjoy lunch",
      icon: <Coffee className="w-5 h-5" />,
      type: "judging"
    },
    {
      time: "2:30 PM",
      title: "Results & Prize Distribution",
      description: "Winner announcement and prize ceremony",
      icon: <Trophy className="w-5 h-5" />,
      type: "ceremony"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'registration': return 'border-blue-500 bg-blue-500/20';
      case 'ceremony': return 'border-purple-500 bg-purple-500/20';
      case 'networking': return 'border-green-500 bg-green-500/20';
      case 'coding': return 'border-orange-500 bg-orange-500/20';
      case 'break': return 'border-yellow-500 bg-yellow-500/20';
      case 'deadline': return 'border-red-500 bg-red-500/20';
      case 'preparation': return 'border-indigo-500 bg-indigo-500/20';
      case 'presentation': return 'border-pink-500 bg-pink-500/20';
      case 'judging': return 'border-gray-500 bg-gray-500/20';
      default: return 'border-gray-500 bg-gray-500/20';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Event <span className="text-orange-500">Schedule</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A comprehensive 18-hour journey packed with coding, learning, networking, and fun. 
            Here's everything you need to know about the event timeline.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <Clock className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700 font-medium">Duration: 18 Hours</span>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700 font-medium">Venue: BTI Campus</span>
            </div>
          </div>
        </div>

        {/* Day 1 Schedule */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Day 1 - August 22, 2025 <span className="text-orange-500">(Friday)</span>
          </h3>
          <div className="space-y-4">
            {scheduleDay1.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6 flex items-center space-x-6">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="text-lg font-bold text-gray-900">{item.time}</div>
                  </div>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 ${getTypeColor(item.type)} flex items-center justify-center`}>
                    <div className="text-gray-700">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Day 2 Schedule */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Day 2 - August 23, 2025 <span className="text-orange-500">(Saturday)</span>
          </h3>
          <div className="space-y-4">
            {scheduleDay2.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6 flex items-center space-x-6">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="text-lg font-bold text-gray-900">{item.time}</div>
                  </div>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 ${getTypeColor(item.type)} flex items-center justify-center`}>
                    <div className="text-gray-700">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-black rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">Important Notes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-6">
              <Coffee className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Meals Provided</h4>
              <p className="text-gray-300 text-sm">All meals, snacks, and beverages included in entry fee</p>
            </div>
            <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-6">
              <Users className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Mentors Available</h4>
              <p className="text-gray-300 text-sm">Industry experts available throughout the event</p>
            </div>
            <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-6">
              <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Venue Facilities</h4>
              <p className="text-gray-300 text-sm">High-speed WiFi, power outlets, comfortable seating</p>
            </div>
            <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-6">
              <Clock className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-orange-500 mb-2">24/7 Support</h4>
              <p className="text-gray-300 text-sm">Technical and logistical support available round the clock</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;