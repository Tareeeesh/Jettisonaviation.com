

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TeamPage: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleViewPositions = () => {
    navigate('/careers');
  };

  const handleJoinTeam = () => {
    navigate('/careers');
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
                <a href="/about" className="text-red-400 font-medium hover:text-red-300 transition-colors cursor-pointer">
                  About Us
                </a>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600">
                      About Us
                    </a>
                    <a href="/team" className="block px-4 py-2 text-red-600 bg-gray-50 font-medium">
                      Our Team
                    </a>
                  </div>
                </div>
              </div>
              <a href="/services" className="text-white hover:text-red-400 transition-colors">
                Services
              </a>
              <a href="/careers" className="text-white hover:text-red-400 transition-colors">
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
                  className="block px-4 py-2 text-red-400 font-medium bg-blue-800"
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
                  className="block px-4 py-2 text-white hover:text-red-400 hover:bg-blue-800 transition-colors"
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
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20aviation%20landscape%20with%20modern%20aircraft%20and%20runway%2C%20dramatic%20sky%20with%20golden%20hour%20lighting%2C%20contemporary%20aviation%20facility%20with%20sleek%20aircraft%20silhouettes%2C%20professional%20aerospace%20industry%20setting%20with%20clean%20modern%20design&width=1920&height=1080&seq=team-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet the experienced aviation professionals who make Jettison Aviation a trusted leader in aircraft
            maintenance and pilot training.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=team-bg-1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Leadership Team</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our founders and executives bring decades of military and civilian aviation experience to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://static.readdy.ai/image/11db2d335196afd1a87f4c6f0210096a/ee556b14b3db519844382b54fc88bd3b.jpeg"
                alt="Sean Lisec - Executive Vice President & COO"
                className="w-full h-64 object-contain bg-gray-50"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Sean Lisec</h3>
                <p className="text-red-600 font-medium mb-3">Executive Vice President & Chief Operating Officer</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Aviation operations leader with strong expertise in MRO management, safety oversight, and technical operations. Sean oversees the company's maintenance strategy, operational performance, and service delivery across all technical functions.
                </p>
                <div className="mt-4 flex space-x-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">MRO Expert</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Operations Leader</span>
                </div>
              </div>
            </div>

            {/* COO */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://static.readdy.ai/image/11db2d335196afd1a87f4c6f0210096a/11f8649465930a7882a2a88ef1ada8ac.jpeg"
                alt="Michael Musoni - General Manager & Director of Maintenance"
                className="w-full h-64 object-contain bg-gray-50"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Michael Musoni</h3>
                <p className="text-red-600 font-medium mb-3">General Manager & Director of Maintenance</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Michael leads technical operations, fleet maintenance strategy, and regulatory compliance across the organization. With deep expertise in aircraft maintenance management, he ensures the highest standards of safety, reliability, and operational efficiency for all aviation clients.
                </p>
                <div className="mt-4 flex space-x-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Maintenance Expert</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Quality Assurance</span>
                </div>
              </div>
            </div>

            {/* CTO */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://static.readdy.ai/image/11db2d335196afd1a87f4c6f0210096a/da782ab1048a86ba0ab5889fd958536f.jpeg"
                alt="Carolien M. Birungi - Chief People Officer"
                className="w-full h-64 object-contain bg-gray-50"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Carolien M. Birungi</h3>
                <p className="text-red-600 font-medium mb-3">Chief People Officer</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Accomplished human resources executive overseeing talent management, employee engagement, and organizational development. Carolien designs programs that foster positive workplace culture, enhance performance, and support sustainable growth while building high-performing, motivated teams.
                </p>
                <div className="mt-4 flex space-x-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">HR Strategy</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">People Leader</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=team-bg-2&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Management Team</h2>
            <p className="text-gray-600 text-lg">
              Department leaders who ensure excellence in every aspect of our operations.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Director Africa & Asia */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-sm">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-global-line text-3xl text-blue-900"></i>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Maureen Tinka Komugisha</h3>
              <p className="text-red-600 font-medium mb-2">Director, Africa & Asia</p>
              <p className="text-gray-600 text-sm">
                Leads strategic growth and regional operations across Africa and Asia with expertise in aviation management and risk strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=team-bg-3&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">What Drives Our Team</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our shared values and commitment to excellence unite our team in delivering exceptional aviation services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-medal-line text-3xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Military Precision</h3>
              <p className="text-gray-600">
                Our military backgrounds instill discipline, attention to detail, and unwavering commitment to safety in
                everything we do.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-global-line text-3xl text-blue-900"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Global Perspective</h3>
              <p className="text-gray-600">
                Our international experience and network enable us to serve clients worldwide with cultural understanding
                and expertise.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-3xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Passion for Aviation</h3>
              <p className="text-gray-600">
                Every team member shares a deep love for aviation, driving us to exceed expectations and foster the next
                generation of pilots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section
        className="py-20 text-white relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20aviation%20landscape%20with%20modern%20aircraft%20and%20runway%2C%20dramatic%20sky%20with%20golden%20hour%20lighting%2C%20contemporary%20aviation%20facility%20with%20sleek%20aircraft%20silhouettes%2C%20professional%20aerospace%20industry%20setting%20with%20clean%20modern%20design&width=1920&height=1080&seq=team-stats&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Team by the Numbers</h2>
            <p className="text-blue-200 text-lg">Experience and expertise that speaks for itself</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">100+</div>
              <div className="text-blue-200">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">15</div>
              <div className="text-blue-200">Certified Technicians</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">8</div>
              <div className="text-blue-200">Military Veterans</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">12</div>
              <div className="text-blue-200">A&amp;P Licensed Staff</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=team-bg-4&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Join Our Team</h2>
          <p className="text-gray-600 text-lg mb-8">
            Are you passionate about aviation and committed to excellence? We're always looking for talented professionals to
            join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleViewPositions}
              className="bg-red-600 hover:bg-red-7 00 text-white font-medium py-2 px-6 rounded"
            >
              View Positions
            </button>
            <button
              onClick={handleJoinTeam}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded"
            >
              Join Team
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
                <li><button onClick={() => navigate('/about')} className="text-blue-200 hover:text-white transition-colors cursor-pointer">About</button></li>
                <li><button onClick={() => navigate('/services')} className="text-blue-200 hover:text-white transition-colors cursor-pointer">Services</button></li>
                <li><button onClick={() => navigate('/careers')} className="text-blue-200 hover:text-white transition-colors cursor-pointer">Careers</button></li>
                <li><button onClick={() => navigate('/team')} className="text-white font-medium cursor-pointer">Team</button></li>
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

export default TeamPage;


