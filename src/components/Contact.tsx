import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactNumbers = [
    { number: "8197973038", name: "Primary Contact" },
    { number: "7829701625", name: "Secondary Contact" },
    { number: "9632724212", name: "Emergency Contact" }
  ];

  // Location coordinates and address for BTI Ignite Incubation Council
  const locationData = {
    address: "BTI Ignite Incubation Council, Third Floor, #66/5 Kodathi Village, Varthoor, Hobli, Bangaluru (Urban), Karnataka - 560035",
    coordinates: "12.884801516777316,77.69670997410155"
  };

  // Function to handle getting directions
  const handleGetDirections = () => {
    const directionsUrl = `https://maps.app.goo.gl/UPKUebikXydGUipN7`;
    window.open(directionsUrl, '_blank');
  };

  // Function to handle viewing on maps
  const handleViewOnMaps = () => {
    const mapsUrl = `https://maps.app.goo.gl/UPKUebikXydGUipN7`;
    window.open(mapsUrl, '_blank');
  };

  // Function to handle phone calls
  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };



  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Have questions about HACKFINITY 2025? Need help with registration or event details? 
            Our team is here to assist you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center justify-center sm:justify-start">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mr-2 sm:mr-3" />
                Contact Numbers
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {contactNumbers.map((contact, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center sm:justify-between p-3 sm:p-4 bg-orange-50 rounded-lg space-y-2 sm:space-y-0">
                    <div className="text-center sm:text-left">
                      <p className="text-base sm:text-lg font-semibold text-gray-900">{contact.number}</p>
                      <p className="text-gray-600 text-sm sm:text-base">{contact.name}</p>
                    </div>
                    <button 
                      onClick={() => handleCall(contact.number)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto"
                    >
                      Call Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center justify-center sm:justify-start">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mr-2 sm:mr-3" />
                Event Location
              </h3>
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Address Information */}
                <div className="space-y-4 order-2 lg:order-1">
                  <div className="p-4 sm:p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-center sm:text-left">BTI Ignite Incubation Council</h4>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-center sm:text-left text-sm sm:text-base">
                      Third Floor, #66/5 Kodathi Village,<br />
                      Varthoor, Hobli, Bangaluru (Urban),<br />
                      Karnataka - 560035
                    </p>
                    <p className="text-orange-500 font-medium text-center sm:text-left text-sm sm:text-base">
                      Complete address with detailed directions for easy navigation
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button 
                      onClick={handleGetDirections}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-lg transition-colors flex items-center justify-center text-sm sm:text-base"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </button>
                    <button 
                      onClick={handleViewOnMaps}
                      className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-3 sm:px-6 sm:py-3 rounded-lg transition-all text-sm sm:text-base"
                    >
                      View on Maps
                    </button>
                  </div>
                </div>
                
                {/* Google Maps Embed */}
                <div className="rounded-lg overflow-hidden shadow-lg order-1 lg:order-2">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.3562112463583!2d77.69670997410155!3d12.884801516777316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae132a7ef38a39%3A0xbf888e2c3943f7b3!2sBangalore%20Technological%20Institute!5e0!3m2!1sen!2sin!4v1755145332405!5m2!1sen!2sin" 
                    width="100%" 
                    height="250" 
                    style={{border: 0}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BTI Ignite Incubation Council Location"
                    className="sm:h-[300px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Contact;