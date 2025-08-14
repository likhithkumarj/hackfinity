import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const faqs = [
    {
      category: "General",
      question: "What is HACKFINITY?",
      answer: "HACKFINITY is an 18-hour offline hackathon focused on building AI solutions for social good, taking place on August 22-23, 2025 at Bangalore Technological Institute (BTI). Participants work in teams to create innovative applications that address real-world social challenges using artificial intelligence."
    },
    {
      category: "General",
      question: "What is included in the registration fee?",
      answer: "The ₹1,499 registration fee includes: venue access for 18 hours, meals and refreshments, HACKFINITY swag kit, mentorship sessions, networking opportunities, and participation in all hackathon activities. This is a one-time fee per participant."
    },
    {
      category: "General",
      question: "Where and when is HACKFINITY taking place?",
      answer: "HACKFINITY takes place on August 22-23, 2025 at Bangalore Technological Institute (BTI) campus in Bangalore. It's an 18-hour offline event where participants will work continuously to build their AI solutions for social good."
    },
    {
      category: "Participation",
      question: "How do I register and what does it cost?",
      answer: "Registration is simple! Click the \"Register Now\" button on our homepage and fill out the registration form. The registration fee is ₹1,499 per participant, which includes meals, venue access, swag, and participation in all activities. Payment is processed securely through Razorpay."
    },
    {
      category: "Participation",
      question: "What is the team size limit?",
      answer: "Teams can have a maximum of 3 members. You can register as a solo participant or with a pre-formed team. Team member 1 is automatically the team leader. Team should register and pay the ₹1,499 registration fee"
    },
    {
      category: "Participation",
      question: "Can I get a refund if I cannot attend?",
      answer: "No, all registration fees are non-refundable once payment is collected. Refunds are only provided if the event is cancelled by the organizers. We recommend ensuring your availability before registering as personal circumstances do not qualify for refunds."
    },
    {
      category: "Technical",
      question: "What are the submission requirements?",
      answer: "Teams must submit their working solution with source code, a presentation explaining their project, and a demo. All submissions must be related to AI for social good and be original work created during the 18-hour hackathon period. Pre-existing libraries and APIs are allowed."
    },
    {
      category: "Prizes & Judging",
      question: "What are the prizes and how much can I win?",
      answer: "HACKFINITY offers a total prize pool of ₹18,000! Prizes are awarded based on innovation, technical implementation, social impact potential, and presentation quality. Winners will be announced at the closing ceremony and prizes distributed within 30 days."
    }
  ];

  const categories = ['All', 'General', 'Participation', 'Technical', 'Prizes & Judging'];
  
  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
            Got questions? We've got answers! Here are the most commonly asked questions 
            about HACKFINITY 2025. Don't see your question? Feel free to contact us.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setOpenIndex(null);
                }}
                className={`px-3 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-base ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-black/50 text-gray-300 border border-orange-500/30 hover:bg-orange-500/20 hover:text-orange-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="text-center text-gray-400 text-xs sm:text-sm">
            Showing {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} 
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </div>
        </div>

        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-500/50"
            >
              <button
                className="w-full px-4 py-4 sm:px-8 sm:py-6 text-left flex items-center justify-between focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                  <div className="bg-orange-500/20 rounded-full p-2 group-hover:bg-orange-500/30 transition-colors flex-shrink-0">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-orange-400 font-medium mb-1">{faq.category}</div>
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-orange-300 transition-colors leading-tight">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <div className="text-orange-500 group-hover:text-orange-400 transition-colors flex-shrink-0 ml-2">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-4 pb-4 sm:px-8 sm:pb-6">
                  <div className="pl-8 sm:pl-16">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center bg-orange-500/10 border border-orange-500/30 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Still have questions?</h3>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base px-4 sm:px-0">
            Can't find the answer you're looking for? Our team is here to help!
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => window.location.href = 'mailto:director@btibangalore.com?subject=Support Request - HACKFINITY 2025&body=Hi, I need help with...'}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold transition-colors text-sm sm:text-base"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;