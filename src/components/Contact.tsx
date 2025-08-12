import React from 'react';
import { Phone, Mail, MapPin, Users, User, Briefcase } from 'lucide-react';

const Contact: React.FC = () => {
  const contactNumbers = [
    { number: "8197973038", name: "Primary Contact" },
    { number: "7829701625", name: "Secondary Contact" },
    { number: "9632724212", name: "Emergency Contact" }
  ];

  const officials = [
    {
      name: "Dr. Sujana P Reddy",
      position: "Chief Operating Officer (COO)",
      role: "Event Supervisor",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      name: "Dr. N. Manjula",
      position: "Chief Financial Officer (CFO)",
      role: "Finance & Operations",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      name: "Dr. Prabhakar Sekar",
      position: "Chief Technology Officer (CTO)",
      role: "Technical Oversight",
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  const eventCoordinators = [
    "Sameer",
    "Jeelan Basha",
    "Pruthvi Reddy",
    "Likhith Kumar J",
    "Santhosh Kumar K",
    "Hemavathi M",
    "Apalise Dias",
    "Prajwal V"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about HACKFINITY 2025? Need help with registration or event details? 
            Our team is here to assist you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Phone className="w-6 h-6 text-orange-500 mr-3" />
                Contact Numbers
              </h3>
              <div className="space-y-4">
                {contactNumbers.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                    <div>
                      <p className="text-lg font-semibold text-gray-900">{contact.number}</p>
                      <p className="text-gray-600">{contact.name}</p>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
                      Call Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-orange-500 mr-3" />
                Event Location
              </h3>
              <div className="space-y-4">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">BTI Campus</h4>
                  <p className="text-gray-600 mb-4">
                    Bangalore Technological Institute<br />
                    Under Companies Act 2013
                  </p>
                  <p className="text-orange-500 font-medium">
                    Detailed location and directions will be shared with registered participants
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </button>
                  <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg transition-all">
                    View on Maps
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-black rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Mail className="w-6 h-6 text-orange-500 mr-3" />
              Quick Inquiry
            </h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Officials and Coordinators */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Event Officials */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Briefcase className="w-6 h-6 text-orange-500 mr-3" />
              Event Officials
            </h3>
            <div className="space-y-6">
              {officials.map((official, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                  <div className="bg-orange-500 rounded-full p-2 text-white">
                    {official.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{official.name}</h4>
                    <p className="text-orange-600 font-medium">{official.position}</p>
                    <p className="text-gray-600 text-sm">{official.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Coordinators */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-6 h-6 text-orange-500 mr-3" />
              Event Coordinators
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {eventCoordinators.map((coordinator, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="bg-orange-500 rounded-full p-2">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-900 font-medium">{coordinator}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Information */}
        <div className="mt-16 bg-orange-500 rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Need Immediate Help?</h3>
          <p className="text-orange-100 mb-8 text-lg max-w-2xl mx-auto">
            For urgent inquiries or emergency situations during the event, contact our 24/7 support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors">
              Call Emergency Line: 9632724212
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-full font-semibold transition-all">
              Join WhatsApp Group
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;