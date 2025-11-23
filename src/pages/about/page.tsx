import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                <button onClick={() => navigate('/about')} className="text-red-400 font-medium hover:text-red-300 transition-colors cursor-pointer">
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
              <button onClick={() => navigate('/contact')} className="text-white hover:text-red-400 transition-colors cursor-pointer">
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
                  className="block w-full text-left px-4 py-2 text-red-400 font-medium bg-blue-800 cursor-pointer"
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
                  className="block w-full text-left px-4 py-2 text-white hover:text-red-400 hover:bg-blue-800 transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative py-20 text-white"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20aviation%20landscape%20with%20modern%20aircraft%20and%20runway%2C%20dramatic%20sky%20with%20golden%20hour%20lighting%2C%20contemporary%20aviation%20facility%20with%20sleek%20aircraft%20silhouettes%2C%20professional%20aerospace%20industry%20setting%20with%20clean%20modern%20design&width=1920&height=1080&seq=about-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Jettison Aviation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner in aviation excellence, connecting dreams with reality through professional maintenance services and global flight training opportunities.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=about-bg-1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded by aviation veterans with decades of combined experience, Jettison Aviation emerged from a passion for excellence in aircraft maintenance and a commitment to nurturing the next generation of pilots.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our journey began in military aviation, where precision, reliability, and safety aren't just standards—they're matters of life and death. This foundation shapes everything we do today.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From our base in Fort Worth, Texas, we've built a global network that connects aspiring pilots with world-class training opportunities while providing unmatched maintenance services for aircraft owners worldwide.
              </p>
            </div>
            <div className="h-full">
              <img 
                src="https://static.readdy.ai/image/11db2d335196afd1a87f4c6f0210096a/af6a2a8403bfd426900e8f3565a3bdc5.jpeg"
                alt="Our Aviation Team"
                className="w-full h-80 md:h-96 rounded-lg shadow-lg object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=about-bg-2&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-target-line text-3xl text-red-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide exceptional aircraft maintenance services and create pathways for aspiring pilots to achieve their aviation dreams through our global network of accredited flight schools and training programs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-eye-line text-3xl text-blue-900"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the world's most trusted aviation services company, known for our unwavering commitment to safety, excellence, and the advancement of aviation professionals globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=about-bg-3&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              These principles guide every decision we make and every service we provide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-3xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Safety First</h3>
              <p className="text-gray-600">
                Every procedure, every maintenance check, every training recommendation is made with safety as our top priority.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-3xl text-blue-900"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in everything we do, from routine maintenance to complex repairs and training coordination.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-3xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                Honest communication, transparent processes, and ethical business practices define our relationships with clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20aviation%20landscape%20with%20modern%20aircraft%20and%20runway%2C%20dramatic%20sky%20with%20golden%20hour%20lighting%2C%20contemporary%20aviation%20facility%20with%20sleek%20aircraft%20silhouettes%2C%20professional%20aerospace%20industry%20setting%20with%20clean%20modern%20design&width=1920&height=1080&seq=about-stats&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-blue-200 text-lg">
              Numbers that reflect our commitment to aviation excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">100+</div>
              <div className="text-blue-200">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">500+</div>
              <div className="text-blue-200">Aircraft Serviced</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">50+</div>
              <div className="text-blue-200">Partner Flight Schools</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">1000+</div>
              <div className="text-blue-200">Pilots Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=about-bg-4&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Certifications & Partnerships</h2>
            <p className="text-gray-600 text-lg">
              Authorized by leading aircraft manufacturers and training organizations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <img 
              src="https://jettisonaviation.com/wp-content/uploads/2025/06/Bombardier-2-300x37.png"
              alt="Bombardier Certification"
              className="w-full h-auto mx-auto"
            />
            <img 
              src="https://jettisonaviation.com/wp-content/uploads/2025/06/Textron-Logo-300x50.png"
              alt="Textron Certification"
              className="w-full h-auto mx-auto"
            />
            <img 
              src="https://jettisonaviation.com/wp-content/uploads/2025/06/Embraer-2-300x48.png"
              alt="Embraer Certification"
              className="w-full h-auto mx-auto"
            />
            <img 
              src="https://jettisonaviation.com/wp-content/uploads/2025/06/Gulfstream_Aerospace_logo-300x44.png"
              alt="Gulfstream Certification"
              className="w-full h-auto mx-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=about-bg-5&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Whether you need aircraft maintenance or want to start your pilot journey, we're here to help you achieve your aviation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-red-600 hover:bg-red-7  text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              Schedule Maintenance
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              Start Pilot Training
            </button>
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
                <li><button onClick={() => navigate('/about')} className="text-white font-medium cursor-pointer">About</button></li>
                <li><button onClick={() => navigate('/services')} className="text-blue-200 hover:text-white transition-colors cursor-pointer">Services</button></li>
                <li><button onClick={() => navigate('/careers')} className="text-blue-200 hover:text-white transition-colors cursor-pointer">Careers</button></li>
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

export default AboutPage;


