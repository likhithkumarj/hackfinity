import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can participate in HACKFINITY?",
      answer: "HACKFINITY is open to all students, developers, and tech enthusiasts. You can participate as an individual or form teams of up to 3 members. All skill levels are welcome!"
    },
    {
      question: "What is the registration fee and what does it include?",
      answer: "The registration fee is ₹1,499 per team (not per person). This includes all meals throughout the 18-hour event, refreshments, swag bag, access to mentorship, networking opportunities, and participation certificates."
    },
    {
      question: "Do I need to bring my own laptop and equipment?",
      answer: "Yes, participants need to bring their own laptops, chargers, and any specific hardware they might need for their project. We'll provide high-speed internet, power outlets, and comfortable workspaces."
    },
    {
      question: "Can I participate alone or do I need a team?",
      answer: "You can participate either as an individual or as part of a team (max 3 members). If you're participating alone, we'll have a team formation session at the beginning of the event to help you find teammates."
    },
    {
      question: "What programming languages and technologies can I use?",
      answer: "You can use any programming languages, frameworks, APIs, and technologies you're comfortable with. Popular choices include Python, JavaScript, Java, C++, React, Node.js, mobile app frameworks, and more."
    },
    {
      question: "Will mentors be available during the hackathon?",
      answer: "Yes! We'll have experienced mentors from various tech domains available throughout the event to provide guidance, answer technical questions, and help you with your project development."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Essential items: Laptop, chargers, phone, valid ID, comfortable clothes, personal hygiene items, and any specific hardware for your project. We recommend bringing a sleeping bag or blanket for rest periods."
    },
    {
      question: "Are there any accommodation arrangements?",
      answer: "The event runs for 18 continuous hours at BTI Campus. While we don't provide formal accommodation, there will be designated rest areas where participants can take power naps during the event."
    },
    {
      question: "How will projects be evaluated and judged?",
      answer: "Projects will be judged based on four main criteria: Innovation & Creativity (25%), Technical Implementation (25%), Real-world Impact (25%), and Presentation Quality (25%). Each team will have 5 minutes to present followed by Q&A."
    },
    {
      question: "When will the results be announced?",
      answer: "Results will be announced on Day 2 (August 23) at 2:30 PM during the closing ceremony, immediately after the judging process is complete."
    },
    {
      question: "Can I start working on my project before the hackathon?",
      answer: "No, all code must be written during the 18-hour hackathon period. However, you can come with ideas, do research, and plan your approach beforehand."
    },
    {
      question: "What happens if I have technical issues during the event?",
      answer: "Our technical support team will be available 24/7 throughout the event to help with any technical issues, internet connectivity problems, or other logistical concerns."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers! Here are the most commonly asked questions 
            about HACKFINITY 2025. Don't see your question? Feel free to contact us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-orange-500/50"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500/20 rounded-full p-2 group-hover:bg-orange-500/30 transition-colors">
                    <HelpCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <div className="text-orange-500 group-hover:text-orange-400 transition-colors">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="pl-16">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-gray-300 mb-6">
            Can't find the answer you're looking for? Our team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all">
              Join WhatsApp Group
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;