import React, { useState } from 'react';

const CareersPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    availability: '',
    salary: '',
    coverLetter: '',
    resume: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.coverLetter.length > 500) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const submitData = new FormData();
      submitData.append('firstName', formData.firstName);
      submitData.append('lastName', formData.lastName);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('position', formData.position);
      submitData.append('experience', formData.experience);
      submitData.append('availability', formData.availability);
      submitData.append('salary', formData.salary);
      submitData.append('coverLetter', formData.coverLetter);
      if (formData.resume) {
        submitData.append('resume', formData.resume);
      }

      const response = await fetch('https://readdy.ai/api/form/submit/job-application-form-67890', {
        method: 'POST',
        body: submitData
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          availability: '',
          salary: '',
          coverLetter: '',
          resume: null
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="text-white">
                  <div className="flex items-center">
                    <img 
                      src="https://static.readdy.ai/image/11db2d335196afd1a87f4c6f0210096a/8b70a30164c6bc4cb0d4a3dd88aadf79.png" 
                      alt="Jettison Aviation" 
                      className="h-20 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-white hover:text-red-400 transition-colors">
                Home
              </a>
              <div className="relative group">
                <a href="/about" className="text-white hover:text-red-400 transition-colors cursor-pointer">
                  About Us
                </a>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600">
                      About Us
                    </a>
                    <a href="/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600">
                      Our Team
                    </a>
                  </div>
                </div>
              </div>
              <a href="/services" className="text-white hover:text-red-400 transition-colors">
                Services
              </a>
              <a href="/careers" className="text-red-400 font-medium hover:text-red-300 transition-colors">
                Careers
              </a>
              <a href="/contact" className="text-white hover:text-red-400 transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`text-2xl text-white ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-blue-900 border-t border-blue-800">
              <div className="py-4 space-y-2">
                <a 
                  href="/" 
                  className="block px-4 py-2 text-white hover:text-red-400 hover:bg-blue-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/about" 
                  className="block px-4 py-2 text-white hover:text-red-400 hover:bg-blue-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </a>
                <a 
                  href="/team" 
                  className="block px-4 py-2 text-white hover:text-red-400 hover:bg-blue-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Team
                </a>
                <a 
                  href="/services" 
                  className="block px-4 py-2 text-white hover:text-red-400 hover:bg-blue-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="/careers" 
                  className="block px-4 py-2 text-red-400 font-medium bg-blue-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </a>
                <a 
                  href="/contact" 
                  className="block px-4 py-2 text-white hover:text-red-400 hover:bg-blue-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative py-20 text-white"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20aviation%20team%20working%20together%20in%20modern%20aircraft%20hangar%2C%20diverse%20group%20of%20aviation%20professionals%2C%20mechanics%20and%20pilots%20collaborating%2C%20bright%20modern%20workspace%20with%20aircraft%20in%20background%2C%20teamwork%20and%20career%20opportunities%20in%20aviation%20industry&width=1920&height=1080&seq=careers-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Build your aviation career with industry leaders. We're looking for passionate professionals to join our growing team.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=careers-bg-1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Choose Jettison Aviation?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Join a company that values excellence, innovation, and professional growth in the aviation industry.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-trophy-line text-3xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Industry Leadership</h3>
              <p className="text-gray-600">
                Work with aviation industry leaders and gain experience with cutting-edge aircraft and technology.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-graduation-cap-line text-3xl text-blue-900"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Professional Development</h3>
              <p className="text-gray-600">
                Continuous training opportunities, certifications, and career advancement programs to help you grow.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-3xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Team Culture</h3>
              <p className="text-gray-600">
                Join a supportive team environment where military precision meets civilian innovation and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=careers-bg-2&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Current Openings</h2>
            <p className="text-gray-600 text-lg">
              Explore exciting career opportunities across our aviation services.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-briefcase-line text-4xl text-blue-900"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">No Current Openings</h3>
              <p className="text-gray-600 text-lg mb-6">
                We don't have any open positions at the moment, but we're always interested in connecting with talented aviation professionals.
              </p>
              <p className="text-gray-600">
                Feel free to submit your application below, and we'll keep your information on file for future opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=careers-bg-3&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Apply Now</h2>
              <p className="text-gray-600">
                Ready to take your aviation career to the next level? Submit your application below.
              </p>
            </div>
            
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you! Your application has been submitted successfully. We'll review it and get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                Sorry, there was an error submitting your application. Please try again.
              </div>
            )}
            
            <form id="job-application-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Position of Interest *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Select a position</option>
                    <option value="Aircraft Maintenance Technician">Aircraft Maintenance Technician</option>
                    <option value="Flight Instructor (CFI)">Flight Instructor (CFI)</option>
                    <option value="Avionics Specialist">Avionics Specialist</option>
                    <option value="Customer Service Representative">Customer Service Representative</option>
                    <option value="Quality Assurance Inspector">Quality Assurance Inspector</option>
                    <option value="Operations Manager">Operations Manager</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Select experience level</option>
                    <option value="Entry Level (0-1 years)">Entry Level (0-1 years)</option>
                    <option value="Junior (2-4 years)">Junior (2-4 years)</option>
                    <option value="Mid-Level (5-9 years)">Mid-Level (5-9 years)</option>
                    <option value="Senior (10-15 years)">Senior (10-15 years)</option>
                    <option value="Expert (15+ years)">Expert (15+ years)</option>
                  </select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                    Availability *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Select availability</option>
                    <option value="Immediately">Immediately</option>
                    <option value="Within 2 weeks">Within 2 weeks</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Within 2 months">Within 2 months</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Expectations
                  </label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    placeholder="e.g., $65,000 or Negotiable"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="hidden"
                  />
                  <label htmlFor="resume" className="cursor-pointer">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-upload-cloud-line text-2xl text-red-600"></i>
                    </div>
                    <p className="text-gray-600 mb-2">
                      {formData.resume ? formData.resume.name : 'Click to upload your resume'}
                    </p>
                    <p className="text-sm text-gray-500">
                      PDF, DOC, or DOCX files only (Max 5MB)
                    </p>
                  </label>
                </div>
              </div>
              
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter *
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm resize-vertical"
                  placeholder="Tell us why you're interested in joining Jettison Aviation and what makes you a great fit for this role..."
                ></textarea>
                <p className="text-sm text-gray-500 mt-1">
                  {formData.coverLetter.length}/500 characters
                </p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || formData.coverLetter.length > 500}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center mb-4">
                <div className="text-white">
                  <div className="flex items-center">
                    <img 
                      src="https://static.readdy.ai/image/11db2d335196afd1a87f4c6f0210096a/8b70a30164c6bc4cb0d4a3dd88aadf79.png" 
                      alt="Jettison Aviation" 
                      className="h-20 w-auto"
                    />
                  </div>
                </div>
              </div>
              <p className="text-blue-200">
                Professional aircraft maintenance and pilot training services with global reach.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/')} className="text-blue-200 hover:text-white transition-colors cursor-pointer">Home</button></li>
                <li><button onClick={() => navigate('/about')} className="text-blue-200 hover:text-white transition-colors cursor-pointer">About</button></li>
                <li><button onClick={() => navigate('/services')} className="text-blue-200 hover:text-white transition-colors cursor-pointer">Services</button></li>
                <li><button onClick={() => navigate('/careers')} className="text-white font-medium cursor-pointer">Careers</button></li>
                <li><button onClick={() => navigate('/contact')} className="text-blue-200 hover:text-white transition-colors cursor-pointer">Contact</button></li>
              </ul>
            </div>

            {/* Our Offerings */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Offerings</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => navigate('/services')} 
                    className="text-blue-200 hover:text-white transition-colors cursor-pointer text-left w-full"
                  >
                    Aircraft Maintenance
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/services')} 
                    className="text-blue-200 hover:text-white transition-colors cursor-pointer text-left w-full"
                  >
                    Flight Training Partnerships
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/services')} 
                    className="text-blue-200 hover:text-white transition-colors cursor-pointer text-left w-full"
                  >
                    Student Visa Support
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/services')} 
                    className="text-blue-200 hover:text-white transition-colors cursor-pointer text-left w-full"
                  >
                    AOG Emergency Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/services')} 
                    className="text-blue-200 hover:text-white transition-colors cursor-pointer text-left w-full"
                  >
                    Career Path Planning
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/services')} 
                    className="text-blue-200 hover:text-white transition-colors cursor-pointer text-left w-full"
                  >
                    Satellite Internet Solutions
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="ri-mail-line mr-3"></i>
                  <a href="mailto:info@jettisonaviation.com" className="text-blue-200 hover:text-white transition-colors">
                    info@jettisonaviation.com
                  </a>
                </div>
                <div className="flex items-start">
                  <i className="ri-map-pin-line mr-3 mt-1"></i>
                  <div className="text-blue-200">
                    <p className="font-semibold text-white mb-1">USA Office</p>
                    <a href="https://g.co/kgs/ENZ37yK" className="hover:text-white transition-colors block">
                      201 American Concourse, Fort Worth, TX 76106
                    </a>
                    <a href="tel:+12817160108" className="hover:text-white transition-colors block mt-1">
                      +1 (281) 716-0108
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-map-pin-line mr-3 mt-1"></i>
                  <div className="text-blue-200">
                    <p className="font-semibold text-white mb-1">Kenya Office</p>
                    <p className="hover:text-white transition-colors">
                      Wilson Airport, Nairobi
                    </p>
                    <a href="tel:+254734039041" className="hover:text-white transition-colors block mt-1">
                      +254 734 039 041
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-blue-200">
              © 2025 All Rights Reserved. | <a href="https://readdy.ai/?origin=logo" className="hover:text-white transition-colors"> </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareersPage;


