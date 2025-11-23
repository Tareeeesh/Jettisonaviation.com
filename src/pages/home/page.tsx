import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
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
                      className="h-16 md:h-28 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => navigate('/')} className="text-red-400 font-medium hover:text-red-300 transition-colors cursor-pointer">
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
                  className="block w-full text-left px-4 py-2 text-red-400 font-medium bg-blue-800 cursor-pointer"
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
        className="relative min-h-[450px] md:min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://static.readdy.ai/image/11db2d335196afd1a87f4c6f0210096a/5d8fa5fcc2ec2b225155b118b8414e46.jpeg')",
          backgroundAttachment: 'scroll',
          backgroundSize: 'cover',
          backgroundPosition: 'center top'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12 text-center text-white">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6">
            Quality and Excellence at Your Service
          </h1>
          <p className="text-base md:text-xl lg:text-2xl mb-4 md:mb-8 max-w-3xl mx-auto">
            Your trusted partner for aircraft maintenance and global flight school connection
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-4 md:mt-8">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer text-sm md:text-base"
            >
              Request Maintenance
            </button>
            <button 
              onClick={() => navigate('/services')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer text-sm md:text-base"
            >
              Explore Our Services
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer text-sm md:text-base"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section 
        className="py-12 md:py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=aviation-bg-1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4">Who We Are</h2>
              <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 md:mb-6">Veteran-Owned, Globally Connected</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Specializing in certified maintenance services, and connecting aspiring pilots with accredited flight schools worldwide.
              </p>
            </div>
            <div className="h-full">
              <img 
                src="https://static.readdy.ai/image/11db2d335196afd1a87f4c6f0210096a/af6a2a8403bfd426900e8f3565a3bdc5.jpeg"
                alt="Global Aviation Network"
                className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-white">
        <section 
          className="py-12 md:py-20 relative"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=aviation-bg-2&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-90"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <i className="ri-plane-line text-2xl md:text-3xl text-blue-900"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Flight School Partnerships</h3>
                <p className="text-gray-600 text-sm md:text-base">Connecting students with accredited flight training programs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <i className="ri-passport-line text-2xl md:text-3xl text-blue-900"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Student Visa Support</h3>
                <p className="text-gray-600 text-sm md:text-base">Assisting with applications and international enrollment.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <i className="ri-line-chart-line text-2xl md:text-3xl text-blue-900"></i>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Career Path Planning</h3>
                <p className="text-gray-600 text-sm md:text-base">Guiding aspiring pilots towards successful aviation careers.</p>
              </div>
            </div>
            
            <div className="text-center mt-8 md:mt-12">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer text-sm md:text-base"
              >
                Start Pilot Path
              </button>
            </div>
          </div>
        </section>
      </section>

      {/* Maintenance Excellence Section */}
      <section 
        className="relative py-12 md:py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=Professional%20modern%20aviation%20hangar%20with%20sleek%20business%20jets%20and%20aircraft%2C%20golden%20hour%20lighting%20creating%20dramatic%20shadows%2C%20contemporary%20aviation%20facility%20with%20glass%20and%20steel%20architecture%2C%20luxury%20private%20jets%20on%20tarmac%2C%20professional%20aviation%20industry%20atmosphere%20with%20warm%20ambient%20lighting%20and%20clear%20blue%20sky&width=1920&height=1080&seq=aviation-hero-main&orientation=landscape')"
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-85"></div>
        <section 
          className="py-12 md:py-20 relative"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=aviation-bg-3&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-95"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20diverse%20aircraft%20maintenance%20technician%20working%20on%20modern%20business%20jet%20engine%2C%20Black%20or%20Hispanic%20aviation%20professional%20performing%20detailed%20maintenance%20work%20in%20clean%20hangar%2C%20skilled%20multicultural%20aviation%20technician%20with%20advanced%20tools%20and%20equipment%2C%20diverse%20workforce%20in%20high-quality%20aircraft%20service%20and%20repair%20facility&width=400&height=600&seq=aircraft-maintenance-diverse&orientation=portrait"
                  alt="Aircraft Maintenance"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">Our Expertise Across All Major Airframes</h2>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  We are certified and experienced in maintaining a wide range of aircraft platforms, including:
                </p>
                <ul className="space-y-2 md:space-y-3 text-blue-900 font-medium text-sm md:text-base">
                  <li className="flex items-center">
                    <i className="ri-check-line text-red-600 mr-3"></i>
                    Bombardier Global Series: XRS, 5500, 6500, 7500
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-red-600 mr-3"></i>
                    Gulfstream
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-red-600 mr-3"></i>
                    Challenger Jets
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-red-600 mr-3"></i>
                    Embraer Praetors &amp; Phenoms
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-red-600 mr-3"></i>
                    Textron / Cessna
                  </li>
                </ul>
                <p className="text-gray-600 mt-4 md:mt-6 text-sm md:text-base">
                  Our team brings a combined history of work on both military-grade and commercial aircraft, ensuring precision, reliability, and speed.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer text-sm md:text-base"
                  >
                    Request Maintenance
                  </button>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer text-sm md:text-base"
                  >
                    Emergency AOG Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Services and Certifications */}
      <section 
        className="py-12 md:py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=aviation-bg-4&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Aircraft Maintenance Services */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-6 text-center">Aircraft Maintenance Services</h3>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center text-gray-700 text-sm md:text-base">
                  <i className="ri-tools-line text-red-600 mr-3"></i>
                  Scheduled Maintenance
                </li>
                <li className="flex items-center text-gray-700 text-sm md:text-base">
                  <i className="ri-tools-line text-red-600 mr-3"></i>
                  Unscheduled Repairs
                </li>
                <li className="flex items-center text-gray-700 text-sm md:text-base">
                  <i className="ri-tools-line text-red-600 mr-3"></i>
                  Overhauls
                </li>
                <li className="flex items-center text-gray-700 text-sm md:text-base">
                  <i className="ri-tools-line text-red-600 mr-3"></i>
                  Troubleshooting &amp; Systems Diagnostics
                </li>
                <li className="flex items-center text-gray-700 text-sm md:text-base">
                  <i className="ri-tools-line text-red-600 mr-3"></i>
                  Installations &amp; Modifications
                </li>
                <li className="flex items-center text-gray-700 text-sm md:text-base">
                  <i className="ri-tools-line text-red-600 mr-3"></i>
                  AOG (Aircraft On Ground) Emergency Response
                </li>
              </ul>
              <p className="text-gray-600 italic mt-4 md:mt-6 text-center text-sm md:text-base">
                "If your aircraft is grounded, our certified A&amp;P and I.A. technicians are ready to respond fast."
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-6 text-center">Certifications &amp; OEM Training</h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <img 
                  src="https://jettisonaviation.com/wp-content/uploads/2025/06/Bombardier-2-300x37.png"
                  alt="Bombardier Certification"
                  className="w-full h-auto"
                />
                <img 
                  src="https://jettisonaviation.com/wp-content/uploads/2025/06/Textron-Logo-300x50.png"
                  alt="Textron Certification"
                  className="w-full h-auto"
                />
                <img 
                  src="https://jettisonaviation.com/wp-content/uploads/2025/06/Embraer-2-300x48.png"
                  alt="Embraer Certification"
                  className="w-full h-auto"
                />
                <img 
                  src="https://jettisonaviation.com/wp-content/uploads/2025/06/Gulfstream_Aerospace_logo-300x44.png"
                  alt="Gulfstream Certification"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">Our team holds training and certifications from:</p>
              <p className="text-blue-900 font-bold text-center text-sm md:text-base">
                All technicians are A&amp;P licensed and many are Inspection Authorized (I.A) with military flight-line backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section 
        className="py-12 md:py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=aviation-bg-5&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
            <i className="ri-phone-line text-3xl md:text-4xl text-blue-900"></i>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">GET IN TOUCH WITH US</h2>
          <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
            Whether you're looking to schedule maintenance or explore flight training opportunities, we're here to help.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer text-sm md:text-base"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-16" style={{ backgroundColor: '#1e3a8b' }}>
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
                <li><button onClick={() => navigate('/')} className="text-white font-medium cursor-pointer">Home</button></li>
                <li><button onClick={() => navigate('/about')} className="text-blue-200 hover:text-white transition-colors cursor-pointer">About</button></li>
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
}
