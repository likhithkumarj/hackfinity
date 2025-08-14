import React, { useState } from 'react';
import { User, Mail, Phone, Users, Code, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  college: string;
  year: string;
}

interface TeamData {
  teamName: string;
  teamLead: TeamMember;
  member2: TeamMember;
  member3: TeamMember;
  preferredProblem: string;
  experience: string;
  expectations: string;
}

const Registration: React.FC = () => {
  const [teamData, setTeamData] = useState<TeamData>({
    teamName: '',
    teamLead: {
      name: '',
      email: '',
      phone: '',
      college: '',
      year: ''
    },
    member2: {
      name: '',
      email: '',
      phone: '',
      college: '',
      year: ''
    },
    member3: {
      name: '',
      email: '',
      phone: '',
      college: '',
      year: ''
    },
    preferredProblem: '',
    experience: '',
    expectations: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Team name validation
    if (!teamData.teamName.trim()) {
      newErrors.teamName = 'Team name is required';
    }

    // Team lead validation (required)
    if (!teamData.teamLead.name.trim()) {
      newErrors.teamLeadName = 'Team lead name is required';
    }
    if (!teamData.teamLead.email.trim()) {
      newErrors.teamLeadEmail = 'Team lead email is required';
    } else if (!/\S+@\S+\.\S+/.test(teamData.teamLead.email)) {
      newErrors.teamLeadEmail = 'Please enter a valid email address';
    }
    if (!teamData.teamLead.phone.trim()) {
      newErrors.teamLeadPhone = 'Team lead phone number is required';
    } else if (!/^\d{10}$/.test(teamData.teamLead.phone.replace(/\D/g, ''))) {
      newErrors.teamLeadPhone = 'Please enter a valid 10-digit phone number';
    }
    if (!teamData.teamLead.college.trim()) {
      newErrors.teamLeadCollege = 'Team lead college/institution is required';
    }

    // Validate member 2 if any field is filled
    const member2HasData = Object.values(teamData.member2).some(value => value.trim() !== '');
    if (member2HasData) {
      if (!teamData.member2.name.trim()) {
        newErrors.member2Name = 'Member 2 name is required if adding this member';
      }
      if (!teamData.member2.email.trim()) {
        newErrors.member2Email = 'Member 2 email is required if adding this member';
      } else if (!/\S+@\S+\.\S+/.test(teamData.member2.email)) {
        newErrors.member2Email = 'Please enter a valid email address for member 2';
      }
    }

    // Validate member 3 if any field is filled
    const member3HasData = Object.values(teamData.member3).some(value => value.trim() !== '');
    if (member3HasData) {
      if (!teamData.member3.name.trim()) {
        newErrors.member3Name = 'Member 3 name is required if adding this member';
      }
      if (!teamData.member3.email.trim()) {
        newErrors.member3Email = 'Member 3 email is required if adding this member';
      } else if (!/\S+@\S+\.\S+/.test(teamData.member3.email)) {
        newErrors.member3Email = 'Please enter a valid email address for member 3';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (section: keyof TeamData, field: string, value: string) => {
    if (section === 'teamName' || section === 'preferredProblem' || section === 'experience' || section === 'expectations') {
      setTeamData(prev => ({ ...prev, [section]: value }));
    } else {
      setTeamData(prev => ({
        ...prev,
        [section]: { ...(prev[section] as TeamMember), [field]: value }
      }));
    }

    // Clear specific error when user starts typing
    const errorKey = section === 'teamName' ? section : `${section}${field.charAt(0).toUpperCase() + field.slice(1)}`;
    if (errors[errorKey]) {
      setErrors(prev => ({ ...prev, [errorKey]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Team registration data:', teamData);
      
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setTeamData({
          teamName: '',
          teamLead: { name: '', email: '', phone: '', college: '', year: '' },
          member2: { name: '', email: '', phone: '', college: '', year: '' },
          member3: { name: '', email: '', phone: '', college: '', year: '' },
          preferredProblem: '',
          experience: '',
          expectations: ''
        });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Registration error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const problemStatements = [
    'AI/ML Innovation Challenge',
    'Sustainable Technology Solutions',
    'FinTech & Blockchain Applications',
    'Healthcare Technology Revolution'
  ];

  const yearOptions = [
    '1st Year',
    '2nd Year', 
    '3rd Year',
    '4th Year',
    'Graduate',
    'Postgraduate'
  ];

  if (submitStatus === 'success') {
    return (
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-500/20 border border-green-500 rounded-2xl p-12">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Registration Successful!</h2>
            <p className="text-xl text-green-300 mb-6">
              Your team "{teamData.teamName}" has been successfully registered for HACKFINITY 2025.
            </p>
            <div className="bg-black/50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Next Steps:</h3>
              <ul className="text-left text-gray-300 space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Check your email for payment instructions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Complete payment of ₹1,499 within 24 hours</span>
                </li>

                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Prepare for the hackathon on August 22, 2025</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Register Another Team
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Register Your <span className="text-orange-500">Team</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Fill out the registration form below to secure your spot in HACKFINITY 2025
          </p>
          <div className="bg-orange-500/20 border border-orange-500 rounded-lg p-4 inline-block">
            <p className="text-orange-300 font-semibold">Entry Fee: ₹1,499 per team (Max 3 members)</p>
          </div>
        </div>

        {submitStatus === 'error' && Object.keys(errors).length > 0 && (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mb-8">
            <div className="flex items-center space-x-2 text-red-300">
              <AlertCircle className="w-5 h-5" />
              <span className="font-semibold">Please fix the following errors:</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Team Information */}
          <div className="bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Users className="w-6 h-6 text-orange-500 mr-3" />
              Team Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-orange-300 font-semibold mb-2">Team Name *</label>
                <input
                  type="text"
                  required
                  className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                    errors.teamName ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-orange-500'
                  }`}
                  value={teamData.teamName}
                  onChange={(e) => handleInputChange('teamName', '', e.target.value)}
                  placeholder="Enter your team name"
                />
                {errors.teamName && <p className="text-red-400 text-sm mt-1">{errors.teamName}</p>}
              </div>
              <div>
                <label className="block text-orange-300 font-semibold mb-2">Preferred Problem Statement</label>
                <select
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                  value={teamData.preferredProblem}
                  onChange={(e) => handleInputChange('preferredProblem', '', e.target.value)}
                >
                  <option value="">Select a problem statement</option>
                  {problemStatements.map((problem, index) => (
                    <option key={index} value={problem}>{problem}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Team Lead */}
          <div className="bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <User className="w-6 h-6 text-orange-500 mr-3" />
              Team Lead Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-orange-300 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                    errors.teamLeadName ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-orange-500'
                  }`}
                  value={teamData.teamLead.name}
                  onChange={(e) => handleInputChange('teamLead', 'name', e.target.value)}
                  placeholder="Enter full name"
                />
                {errors.teamLeadName && <p className="text-red-400 text-sm mt-1">{errors.teamLeadName}</p>}
              </div>
              <div>
                <label className="block text-orange-300 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                    errors.teamLeadEmail ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-orange-500'
                  }`}
                  value={teamData.teamLead.email}
                  onChange={(e) => handleInputChange('teamLead', 'email', e.target.value)}
                  placeholder="Enter email address"
                />
                {errors.teamLeadEmail && <p className="text-red-400 text-sm mt-1">{errors.teamLeadEmail}</p>}
              </div>
              <div>
                <label className="block text-orange-300 font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                    errors.teamLeadPhone ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-orange-500'
                  }`}
                  value={teamData.teamLead.phone}
                  onChange={(e) => handleInputChange('teamLead', 'phone', e.target.value)}
                  placeholder="Enter 10-digit phone number"
                />
                {errors.teamLeadPhone && <p className="text-red-400 text-sm mt-1">{errors.teamLeadPhone}</p>}
              </div>
              <div>
                <label className="block text-orange-300 font-semibold mb-2">College/Institution *</label>
                <input
                  type="text"
                  required
                  className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                    errors.teamLeadCollege ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-orange-500'
                  }`}
                  value={teamData.teamLead.college}
                  onChange={(e) => handleInputChange('teamLead', 'college', e.target.value)}
                  placeholder="Enter college/institution name"
                />
                {errors.teamLeadCollege && <p className="text-red-400 text-sm mt-1">{errors.teamLeadCollege}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block text-orange-300 font-semibold mb-2">Year of Study</label>
                <select
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                  value={teamData.teamLead.year}
                  onChange={(e) => handleInputChange('teamLead', 'year', e.target.value)}
                >
                  <option value="">Select year</option>
                  {yearOptions.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Team Members (Optional)</h3>
            <div className="space-y-8">
              {/* Member 2 */}
              <div>
                <h4 className="text-lg font-semibold text-orange-300 mb-4">Member 2</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                        errors.member2Name ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-orange-500'
                      }`}
                      value={teamData.member2.name}
                      onChange={(e) => handleInputChange('member2', 'name', e.target.value)}
                    />
                    {errors.member2Name && <p className="text-red-400 text-sm mt-1">{errors.member2Name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                        errors.member2Email ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-orange-500'
                      }`}
                      value={teamData.member2.email}
                      onChange={(e) => handleInputChange('member2', 'email', e.target.value)}
                    />
                    {errors.member2Email && <p className="text-red-400 text-sm mt-1">{errors.member2Email}</p>}
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                    value={teamData.member2.phone}
                    onChange={(e) => handleInputChange('member2', 'phone', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="College/Institution"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                    value={teamData.member2.college}
                    onChange={(e) => handleInputChange('member2', 'college', e.target.value)}
                  />
                </div>
              </div>
              
              {/* Member 3 */}
              <div>
                <h4 className="text-lg font-semibold text-orange-300 mb-4">Member 3</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                        errors.member3Name ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-orange-500'
                      }`}
                      value={teamData.member3.name}
                      onChange={(e) => handleInputChange('member3', 'name', e.target.value)}
                    />
                    {errors.member3Name && <p className="text-red-400 text-sm mt-1">{errors.member3Name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                        errors.member3Email ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-orange-500'
                      }`}
                      value={teamData.member3.email}
                      onChange={(e) => handleInputChange('member3', 'email', e.target.value)}
                    />
                    {errors.member3Email && <p className="text-red-400 text-sm mt-1">{errors.member3Email}</p>}
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                    value={teamData.member3.phone}
                    onChange={(e) => handleInputChange('member3', 'phone', e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="College/Institution"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                    value={teamData.member3.college}
                    onChange={(e) => handleInputChange('member3', 'college', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-black/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Code className="w-6 h-6 text-orange-500 mr-3" />
              Additional Information
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-orange-300 font-semibold mb-2">Team's Programming Experience</label>
                <textarea
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none h-24 resize-none"
                  placeholder="Brief description of your team's coding experience and expertise..."
                  value={teamData.experience}
                  onChange={(e) => handleInputChange('experience', '', e.target.value)}
                ></textarea>
              </div>
              <div>
                <label className="block text-orange-300 font-semibold mb-2">What do you expect from HACKFINITY?</label>
                <textarea
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none h-24 resize-none"
                  placeholder="Your expectations and goals for this hackathon..."
                  value={teamData.expectations}
                  onChange={(e) => handleInputChange('expectations', '', e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-12 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center mx-auto ${
                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Registering Team...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-3" />
                  Register Team
                </>
              )}
            </button>
            <p className="text-gray-400 mt-4">
              By registering, you agree to our terms and conditions. Payment instructions will be sent after form submission.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;