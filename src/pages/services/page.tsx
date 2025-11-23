import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('maintenance');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const navigate = useNavigate();

  const services = {
    maintenance: {
      title: 'Aircraft Maintenance Services',
      description: 'Comprehensive maintenance solutions for all major aircraft types',
      items: [
        'Scheduled Maintenance Programs',
        'Unscheduled Repairs & Troubleshooting',
        'Complete Aircraft Overhauls',
        'Systems Diagnostics & Testing',
        'Avionics Installations & Upgrades',
        'AOG Emergency Response Services'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20aircraft%20maintenance%20technician%20working%20on%20modern%20business%20jet%20engine%2C%20detailed%20aviation%20maintenance%20work%20in%20clean%20hangar%2C%20skilled%20aviation%20professional%20with%20advanced%20tools%20and%20equipment%2C%20high-quality%20aircraft%20service%20and%20repair%20facility&width=600&height=400&seq=services-maintenance&orientation=landscape'
    },
    parts: {
      title: 'Aircraft Parts Sourcing & Supply',
      description: 'Reliable sourcing and supply of quality aircraft parts',
      items: [
        'Repaired Aircraft Parts',
        'Overhauled Components',
        'Serviceable Parts Inventory',
        'Parts for All Aircraft Types',
        'Quality Certified Components',
        'Fast Global Delivery'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20aircraft%20parts%20warehouse%20with%20organized%20inventory%2C%20high-quality%20aviation%20components%20and%20spare%20parts%2C%20modern%20aviation%20supply%20facility%20with%20certified%20aircraft%20parts%2C%20professional%20parts%20management%20and%20logistics%20center&width=600&height=400&seq=services-parts&orientation=landscape'
    },
    training: {
      title: 'Flight Training Partnerships',
      description: 'Connect with accredited flight schools worldwide',
      items: [
        'Private Pilot License (PPL) Programs',
        'Commercial Pilot License (CPL) Training',
        'Airline Transport Pilot License (ATPL)',
        'Instrument Rating Courses',
        'Multi-Engine Training',
        'Type Rating Certifications'
      ],
      image: 'https://static.readdy.ai/image/11db2d335196afd1a87f4c6f0210096a/2a2360c431f0a11ff6d59ddaf210bc16.jpeg'
    },
    satellite: {
      title: 'Satellite Internet for Aviation',
      description: 'High-speed connectivity solutions for aircraft operations',
      items: [
        'In-Flight Wi-Fi Systems',
        'Cockpit Internet Connectivity',
        'Real-Time Weather Data Access',
        'Flight Operations Communication',
        'Passenger Entertainment Systems',
        'Global Coverage Solutions'
      ],
      image: 'https://static.readdy.ai/image/11db2d335196afd1a87f4c6f0210096a/c9ba8be9cd4e6436aa33d99eb804d24c.jpeg'
    },
    support: {
      title: 'Student Support Services',
      description: 'Complete assistance for international aviation students',
      items: [
        'Visa Application Assistance',
        'School Selection Guidance',
        'Housing Coordination',
        'Career Path Planning',
        'Airline Placement Programs',
        'Ongoing Mentorship'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20diverse%20aviation%20career%20counseling%20session%20with%20Black%20Hispanic%20and%20White%20professionals%2C%20multicultural%20group%20of%20aspiring%20pilots%20receiving%20guidance%20from%20diverse%20mentors%2C%20modern%20aviation%20training%20facility%20with%20career%20planning%20resources%2C%20international%20students%20from%20various%20ethnicities%20in%20aviation%20education%20program&width=600&height=400&seq=services-support-diverse&orientation=landscape'
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
              <button onClick={() => navigate('/services')} className="text-red-400 font-medium hover:text-red-300 transition-colors cursor-pointer">
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
                  className="block w-full text-left px-4 py-2 text-red-400 font-medium bg-blue-800 cursor-pointer"
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
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20aviation%20landscape%20with%20modern%20aircraft%20and%20runway%2C%20dramatic%20sky%20with%20golden%20hour%20lighting%2C%20contemporary%20aviation%20facility%20with%20sleek%20aircraft%20silhouettes%2C%20professional%20aerospace%20industry%20setting%20with%20clean%20modern%20design&width=1920&height=1080&seq=services-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive aviation solutions from maintenance to pilot training, designed to meet all your aviation needs.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=services-bg-1&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">What We Offer</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From expert aircraft maintenance to global flight training opportunities, we provide comprehensive aviation services.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center mb-12 border-b">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`px-6 py-3 font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  activeService === key
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                {services[activeService as keyof typeof services].title}
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                {services[activeService as keyof typeof services].description}
              </p>
              <ul className="space-y-4">
                {services[activeService as keyof typeof services].items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <i className="ri-check-line text-red-600 mr-3 text-xl"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div>
              <img 
                src={services[activeService as keyof typeof services].image}
                alt={services[activeService as keyof typeof services].title}
                className="w-full h-80 rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Aircraft Types */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=services-bg-2&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Aircraft We Service</h2>
            <p className="text-gray-600 text-lg">
              Certified maintenance for all major aircraft manufacturers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                manufacturer: 'Bombardier',
                models: ['Global 5500', 'Global 6500', 'Global 7500', 'Challenger Series'],
                icon: 'ri-plane-line'
              },
              {
                manufacturer: 'Gulfstream',
                models: ['G450', 'G550', 'G650', 'G700'],
                icon: 'ri-flight-takeoff-line'
              },
              {
                manufacturer: 'Embraer',
                models: ['Praetor 500', 'Praetor 600', 'Phenom 100', 'Phenom 300'],
                icon: 'ri-plane-fill'
              },
              {
                manufacturer: 'Textron/Cessna',
                models: ['Citation CJ3+', 'Citation Latitude', 'Citation Longitude'],
                icon: 'ri-flight-land-line'
              },
              {
                manufacturer: 'Dassault',
                models: ['Falcon 2000', 'Falcon 7X', 'Falcon 8X'],
                icon: 'ri-rocket-line'
              },
              {
                manufacturer: 'Hawker Beechcraft',
                models: ['King Air Series', 'Premier I', 'Hawker 400XP'],
                icon: 'ri-space-ship-line'
              }
            ].map((aircraft, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className={`${aircraft.icon} text-3xl text-blue-900`}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{aircraft.manufacturer}</h3>
                <ul className="space-y-2">
                  {aircraft.models.map((model, modelIndex) => (
                    <li key={modelIndex} className="text-gray-600 flex items-center">
                      <i className="ri-check-line text-red-600 mr-2"></i>
                      {model}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20aviation%20landscape%20with%20modern%20aircraft%20and%20runway%2C%20dramatic%20sky%20with%20golden%20hour%20lighting%2C%20contemporary%20aviation%20facility%20with%20sleek%20aircraft%20silhouettes%2C%20professional%20aerospace%20industry%20setting%20with%20clean%20modern%20design&width=1920&height=1080&seq=services-emergency&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-red-600 bg-opacity-85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <i className="ri-alarm-warning-line text-4xl"></i>
          </div>
          <h2 className="text-4xl font-bold mb-6">24/7 Emergency AOG Support</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Aircraft on Ground? Our certified technicians are ready to respond immediately, anywhere in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsEmergencyModalOpen(true)}
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              Emergency Hotline
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              Schedule Service
            </button>
          </div>
        </div>
      </section>

      {/* Emergency Modal */}
      {isEmergencyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setIsEmergencyModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-alarm-warning-line text-3xl text-red-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">Emergency AOG Support</h3>
              <p className="text-gray-600">24/7 Aircraft on Ground Emergency Response</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Emergency Hotline</h4>
                <a 
                  href="tel:+18175551234" 
                  className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  +1 (817) 555-1234
                </a>
                <p className="text-sm text-red-700 mt-1">Available 24/7 for AOG emergencies</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Emergency Email</h4>
                <a 
                  href="mailto:emergency@jettisonaviation.com" 
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  emergency@jettisonaviation.com
                </a>
                <p className="text-sm text-blue-700 mt-1">For urgent maintenance requests</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">What to Have Ready</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Aircraft registration number</li>
                  <li>• Current location/airport</li>
                  <li>• Description of the issue</li>
                  <li>• Contact information</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 flex gap-3">
              <a 
                href="tel:+18175551234"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition-colors text-center whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-line mr-2"></i>
                Call Now
              </a>
              <button
                onClick={() => {
                  setIsEmergencyModalOpen(false);
                  navigate('/contact');
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
              >
                Contact Form
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Certifications */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=services-bg-3&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-95"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Certifications</h2>
            <p className="text-gray-600 text-lg">
              Authorized service centers and training partnerships with leading manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-12">
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
          
          <div className="text-center">
            <p className="text-blue-900 font-bold text-lg">
              All technicians are A&P licensed with many holding Inspection Authorization (I.A) and military flight-line experience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Clean%20modern%20aviation%20background%20with%20subtle%20aircraft%20silhouettes%2C%20professional%20blue%20and%20white%20gradient%20sky%2C%20minimalist%20aviation%20design%20with%20geometric%20patterns%2C%20contemporary%20aerospace%20industry%20aesthetic%2C%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=services-bg-4&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact us today to discuss your aircraft maintenance needs or explore flight training opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              Request Quote
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              Schedule Service
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
                <li><button onClick={() => navigate('/services')} className="text-white font-medium cursor-pointer">Services</button></li>
                <li><button onClick={() => navigate('/careers')} className="text-blue-200 hover:text-white transition-colors cursor-pointer">Careers</button></li>
                <li><button onClick={() => navigate('/contact')} className="text-blue-200 hover:text-white transition-colors cursor-pointer">Contact</button></li>
              </ul>
            </div>

            {/* Our Offerings */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Offerings</h3>
              <ul className="space-y-2">
                <li className="text-blue-200">Aircraft Maintenance</li>
                <li className="text-blue-200">Flight Training Partnerships</li>
                <li className="text-blue-200">Student Visa Support</li>
                <li className="text-blue-200">AOG Emergency Services</li>
                <li className="text-blue-200">Career Path Planning</li>
                <li className="text-blue-200">Satellite Internet Solutions</li>
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

export default ServicesPage;


