import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, Heart, MessageCircle, Youtube, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  // Function to handle support actions
  const handleSupportClick = (supportType: string) => {
    const supportActions: { [key: string]: () => void } = {
      'Registration Help': () => {
        // Scroll to registration section
        document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
      },
      'Technical Support': () => {
        // Open email client for technical support
        window.location.href = 'mailto:director@btibangalore.com?subject=Technical Support - HACKFINITY 2025&body=Hi, I need technical support regarding...';
      },
      'Payment Issues': () => {
        // Open email client for payment issues
        window.location.href = 'mailto:director@btibangalore.com?subject=Payment Issues - HACKFINITY 2025&body=Hi, I am facing payment issues...';
      },
      'Team Formation': () => {
        // Scroll to FAQ section where team formation is explained
        document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
      },
      'Mentorship': () => {
        // Open email client for mentorship inquiries
        window.location.href = 'mailto:director@btibangalore.com?subject=Mentorship Inquiry - HACKFINITY 2025&body=Hi, I would like to know more about mentorship...';
      },
      'Venue Information': () => {
        // Scroll to contact section where venue info is displayed
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const action = supportActions[supportType];
    if (action) {
      action();
    }
  };

  const socialLinks = [
    { 
      icon: <MessageCircle className="w-5 h-5" />, 
      href: "https://whatsapp.com/channel/0029VaxGy7HHLHQdxrN0mb1p", 
      label: "WhatsApp Channel" 
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: "https://www.instagram.com/bti_ignite_incubation_council?igsh=MWlhNGhjeTQxZ2dmbg%3D%3D&utm_source=qr", 
      label: "Instagram" 
    },
    { 
      icon: <Youtube className="w-5 h-5" />, 
      href: "https://youtube.com/@btibangaloreincubationcentre?si=ibLeA9mFNUsZ-DhZ", 
      label: "YouTube" 
    },
    { 
      icon: <Facebook className="w-5 h-5" />, 
      href: "https://www.facebook.com/profile.php?id=61568704182165&mibextid=LQQJ4d", 
      label: "Facebook" 
    },
    { 
      icon: <Globe className="w-5 h-5" />, 
      href: "http://btibangalore.com", 
      label: "Website" 
    }
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
    { name: "Registration Help", action: () => handleSupportClick("Registration Help") },
    { name: "Technical Support", action: () => handleSupportClick("Technical Support") },
    { name: "Payment Issues", action: () => handleSupportClick("Payment Issues") },
    { name: "Team Formation", action: () => handleSupportClick("Team Formation") },
    { name: "Mentorship", action: () => handleSupportClick("Mentorship") },
    { name: "Venue Information", action: () => handleSupportClick("Venue Information") }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">H</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">HACKFINITY</h3>
                <p className="text-orange-500 text-xs sm:text-sm">18 HOURS HACKATHON</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              The ultimate coding marathon organized by BTI IGNITE INCUBATION COUNCIL. 
              Join us for 18 hours of innovation, collaboration, and exciting challenges.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-orange-500 p-2 sm:p-3 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center justify-center sm:justify-start space-x-2 text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Support</h4>
            <ul className="space-y-2 sm:space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index} className="flex justify-center sm:justify-start">
                  <button
                    onClick={link.action}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center space-x-2 text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contact Info</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="text-gray-400 text-sm sm:text-base">BTI Campus</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Bangalore Technological Institute</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="text-gray-400 text-sm sm:text-base">8197973038</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Primary Contact</p>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <p className="text-gray-400 text-sm sm:text-base">director@btibangalore.com</p>
                  <p className="text-gray-400 text-xs sm:text-sm">General Inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Highlights */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="bg-gray-900 rounded-lg p-4 sm:p-6">
              <h5 className="text-lg sm:text-2xl font-bold text-orange-500 mb-1 sm:mb-2">₹18,000</h5>
              <p className="text-gray-400 text-xs sm:text-base">Total Prize Pool</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 sm:p-6">
              <h5 className="text-lg sm:text-2xl font-bold text-orange-500 mb-1 sm:mb-2">18 Hours</h5>
              <p className="text-gray-400 text-xs sm:text-base">Non-stop Coding</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 sm:p-6">
              <h5 className="text-lg sm:text-2xl font-bold text-orange-500 mb-1 sm:mb-2">5</h5>
              <p className="text-gray-400 text-xs sm:text-base">Problem Statements</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 sm:p-6">
              <h5 className="text-lg sm:text-2xl font-bold text-orange-500 mb-1 sm:mb-2">Aug 22</h5>
              <p className="text-gray-400 text-xs sm:text-base">Event Date 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              <p>© 2025 HACKFINITY. All rights reserved.</p>
              <p className="mt-1">Organized by BTI IGNITE INCUBATION COUNCIL under Bangalore Technological Institute</p>
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 fill-current" />
              <span>for innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;