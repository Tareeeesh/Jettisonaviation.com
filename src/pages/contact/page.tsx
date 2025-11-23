

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Message must be 500 characters or less';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('subject', formData.subject);
      formDataToSubmit.append('message', formData.message);
      
      const response = await fetch('https://readdy.ai/api/form/d3pku9btpgsu3r1tni1g', {
        method: 'POST',
        body: formDataToSubmit
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setErrors({});
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
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
                      className="h-28 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => navigate('/')} className="text-white hover:text-red-400 transition-colors cursor-pointer">
                Home
              </button>
              <div className="relative group">
                <button onClick={() => navigate('/about')} className="text-white hover:text-red-400 transition-colors cursor-pointer">
                  About Us
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <button onClick={() => navigate('/about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600 cursor-pointer">
                      About Us
                    </button>
                    <button onClick={() => navigate('/team')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600 cursor-pointer">
                      Our Team
                    </button>
                  </div>
                </div>
              </div>
              <button onClick={() => navigate('/services')} className="text-white hover:text-red-400 transition-colors cursor-pointer">
                Services
              </button>
              <button onClick={() => navigate('/careers')} className="text-white hover:text-red-400 transition-colors cursor-pointer">
                Careers
              </button>
              <button onClick={() => navigate('/contact')} className="text-red-400 font-medium hover:text-red-300 transition-colors cursor-pointer">
                Contact
              </button>
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
                <button 
                  onClick={() => {navigate('/'); setIsMobileMenuOpen(false);}}
                  className="block w-full text-left px-4 py-2 text-white hover:text-red-400 hover:bg-blue-800 transition-colors cursor-pointer"
                >
                  Home
                </button>
                <button 
                  onClick={() => {navigate('/about'); setIsMobileMenuOpen(false);}}
                  className="block w-full text-left px-4 py-2 text-white hover:text-red-400 hover:bg-blue-800 transition-colors cursor-pointer"
                >
                  About Us
                </button>
                <button 
                  onClick={() => {navigate('/team'); setIsMobileMenuOpen(false);}}
                  className="block w-full text-left px-4 py-2 text-white hover:text-red-400 hover:bg-blue-800 transition-colors cursor-pointer"
                >
                  Our Team
                </button>
                <button 
                  onClick={() => {navigate('/services'); setIsMobileMenuOpen(false);}}
                  className="block w-full text-left px-4 py-2 text-white hover:text-red-400 hover:bg-blue-800 transition-colors cursor-pointer"
                >
                  Services
                </button>
                <button 
                  onClick={() => {navigate('/careers'); setIsMobileMenuOpen(false);}}
                  className="block w-full text-left px-4 py-2 text-white hover:text-red-400 hover:bg-blue-800 transition-colors cursor-pointer"
                >
                  Careers
                </button>
                <button 
                  onClick={() => {navigate('/contact'); setIsMobileMenuOpen(false);}}
                  className="block w-full text-left px-4 py-2 text-red-400 font-medium bg-blue-800 cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Get in touch with our aviation experts. We're here to help with all your aircraft maintenance and flight training needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* US Office */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="ri-map-pin-line text-red-600 mr-3"></i>
                United States Office
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-building-line text-red-600 mt-1 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">201 American Concourse<br />Fort Worth, TX 76106</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="ri-mail-line text-red-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@jettisonaviation.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="ri-phone-line text-red-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (281) 716-0108</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kenya Office */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="ri-map-pin-line text-blue-600 mr-3"></i>
                Kenya Office
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-building-line text-blue-600 mt-1 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">Wilson Airport<br />Langata Road, Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="ri-mail-line text-blue-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@jettisonaviation.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="ri-phone-line text-blue-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+254 734 039 041</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Maps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">Thank you! Your message has been sent successfully.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">Please check all required fields and try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm ${
                        errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm ${
                        errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Enter message subject"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength={500}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm resize-none ${
                      errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Enter your message here..."
                  ></textarea>
                  <div className="flex justify-between items-center mt-1">
                    {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
                    <p className="text-sm text-gray-500 ml-auto">{formData.message.length}/500</p>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-medium whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Maps */}
            <div className="space-y-8">
              {/* US Office Map */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fort Worth, Texas</h3>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.2!2d-97.3628!3d32.8198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQ5JzExLjMiTiA5N8KwMjEnNDYuMSJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Kenya Office Map */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nairobi, Kenya</h3>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7!2d36.8155!3d-1.3207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940b62a3c8efde4c!2sWilson%20Airport!5e0!3m2!1sen!2ske!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Jettison Aviation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for comprehensive aviation services across the United States and Kenya.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Aircraft Maintenance</h3>
              <p className="text-gray-600">Certified A&P technicians providing comprehensive maintenance services</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-graduation-cap-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flight Training</h3>
              <p className="text-gray-600">Professional pilot training programs with experienced instructors</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-passport-line text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Visa Support</h3>
              <p className="text-gray-600">Complete assistance with student visa applications and documentation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-24-hours-line text-orange-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AOG Emergency</h3>
              <p className="text-gray-600">24/7 Aircraft on Ground emergency response services</p>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Certifications</h4>
                <p className="text-gray-600">Certified A&P Technicians<br />All Major Airframes Supported</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600">Veteran-Owned Business<br />Decades of Aviation Expertise</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h4>
                <p className="text-gray-600">Operations in USA & Kenya<br />International Aviation Services</p>
              </div>
            </div>
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
                <li><button onClick={() => navigate('/careers')} className="text-blue-200 hover:text-white transition-colors cursor-pointer">Careers</button></li>
                <li><button onClick={() => navigate('/team')} className="text-blue-200 hover:text-white transition-colors cursor-pointer">Team</button></li>
                <li><button onClick={() => navigate('/contact')} className="text-white font-medium cursor-pointer">Contact</button></li>
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
                    onClick={() => navigate('/careers')} 
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

export default ContactPage;

