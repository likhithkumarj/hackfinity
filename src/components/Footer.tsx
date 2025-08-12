import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Challenges", href: "#challenges" },
    { name: "Prizes", href: "#prizes" },
    { name: "Schedule", href: "#schedule" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const supportLinks = [
    { name: "Registration Help", href: "#" },
    { name: "Technical Support", href: "#" },
    { name: "Payment Issues", href: "#" },
    { name: "Team Formation", href: "#" },
    { name: "Mentorship", href: "#" },
    { name: "Venue Information", href: "#" }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">HACKFINITY</h3>
                <p className="text-orange-500 text-sm">18 HOURS HACKATHON</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The ultimate coding marathon organized by BTI IGNITE INCUBATION COUNCIL. 
              Join us for 18 hours of innovation, collaboration, and exciting challenges.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="text-gray-400">BTI Campus</p>
                  <p className="text-gray-400 text-sm">Bangalore Technological Institute</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <div>
                  <p className="text-gray-400">8197973038</p>
                  <p className="text-gray-400 text-sm">Primary Contact</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <div>
                  <p className="text-gray-400">info@hackfinity.com</p>
                  <p className="text-gray-400 text-sm">General Inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Highlights */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-900 rounded-lg p-6">
              <h5 className="text-2xl font-bold text-orange-500 mb-2">₹18,000</h5>
              <p className="text-gray-400">Total Prize Pool</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h5 className="text-2xl font-bold text-orange-500 mb-2">18 Hours</h5>
              <p className="text-gray-400">Non-stop Coding</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h5 className="text-2xl font-bold text-orange-500 mb-2">4</h5>
              <p className="text-gray-400">Problem Statements</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <h5 className="text-2xl font-bold text-orange-500 mb-2">Aug 22</h5>
              <p className="text-gray-400">Event Date 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© 2025 HACKFINITY. All rights reserved.</p>
              <p className="mt-1">Organized by BTI IGNITE INCUBATION COUNCIL under Bangalore Technological Institute</p>
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-orange-500 fill-current" />
              <span>for innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;