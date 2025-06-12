import React, { useState } from 'react';
import { 
  Heart, 
  Shield, 
  Users, 
  HandHeart, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  ChevronRight,
  Star,
  Award,
  Home,
  Briefcase,
  GraduationCap
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-800" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">WVSO</h1>
                <p className="text-xs text-gray-600">Wounded Veterans Support</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-800 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-800 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-800 transition-colors">Services</button>
              <button onClick={() => scrollToSection('get-involved')} className="text-gray-700 hover:text-blue-800 transition-colors">Get Involved</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-800 transition-colors">Contact</button>
              <button className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900 transition-colors">
                Donate Now
              </button>
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="py-4 space-y-4">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Home</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">About</button>
                <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Services</button>
                <button onClick={() => scrollToSection('get-involved')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Get Involved</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Contact</button>
                <button className="mx-4 bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900 transition-colors">
                  Donate Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6192448/pexels-photo-6192448.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-700/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Supporting Our
                <span className="text-yellow-400"> Heroes</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Providing comprehensive support, resources, and hope to wounded veterans and their families as they navigate their journey to recovery and reintegration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Make a Donation
                </button>
                <button onClick={() => scrollToSection('services')} className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">2,500+</div>
                    <div className="text-blue-100">Veterans Supported</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">15</div>
                    <div className="text-blue-100">Years of Service</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">95%</div>
                    <div className="text-blue-100">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">24/7</div>
                    <div className="text-blue-100">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to providing comprehensive support to wounded veterans, helping them rebuild their lives with dignity, purpose, and hope.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Who We Are</h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded by veterans for veterans, the Wounded Veterans Support Organisation has been a beacon of hope for over 15 years. We understand the unique challenges faced by wounded veterans because we've walked that path ourselves.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our comprehensive approach addresses not just the immediate needs of wounded veterans, but also focuses on long-term recovery, reintegration, and building sustainable, fulfilling lives.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="h-12 w-12 text-yellow-500" />
                <div>
                  <h5 className="font-semibold text-gray-900">Certified Excellence</h5>
                  <p className="text-gray-600">Recognised by national veteran organisations</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6192442/pexels-photo-6192442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Veterans supporting each other in a group setting"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Our Values</h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-800" />
                </div>
                <h6 className="font-semibold text-gray-900 mb-2">Honour</h6>
                <p className="text-gray-600">Respecting the service and sacrifice of every veteran</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-800" />
                </div>
                <h6 className="font-semibold text-gray-900 mb-2">Compassion</h6>
                <p className="text-gray-600">Providing care with empathy and understanding</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-800" />
                </div>
                <h6 className="font-semibold text-gray-900 mb-2">Community</h6>
                <p className="text-gray-600">Building strong support networks and connections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support programmes designed to address every aspect of veteran recovery and reintegration.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Home className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Housing Support</h4>
              <p className="text-gray-700 mb-4">
                Emergency housing assistance, transitional accommodation, and support in finding permanent housing solutions.
              </p>
              <button className="text-blue-800 font-semibold flex items-center hover:text-blue-900 transition-colors">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Mental Health</h4>
              <p className="text-gray-700 mb-4">
                Professional counselling, peer support groups, and specialised trauma therapy programmes.
              </p>
              <button className="text-blue-800 font-semibold flex items-center hover:text-blue-900 transition-colors">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Employment</h4>
              <p className="text-gray-700 mb-4">
                Job placement services, skills training, and career development programmes tailored for veterans.
              </p>
              <button className="text-blue-800 font-semibold flex items-center hover:text-blue-900 transition-colors">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Family Support</h4>
              <p className="text-gray-700 mb-4">
                Comprehensive programmes supporting veteran families through their recovery journey.
              </p>
              <button className="text-blue-800 font-semibold flex items-center hover:text-blue-900 transition-colors">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Education</h4>
              <p className="text-gray-700 mb-4">
                Educational grants, vocational training, and academic support programmes for veterans and their children.
              </p>
              <button className="text-blue-800 font-semibold flex items-center hover:text-blue-900 transition-colors">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
              <div className="bg-blue-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HandHeart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Crisis Support</h4>
              <p className="text-gray-700 mb-4">
                24/7 crisis intervention, emergency assistance, and immediate support for veterans in need.
              </p>
              <button className="text-blue-800 font-semibold flex items-center hover:text-blue-900 transition-colors">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section with Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Making a Real Impact</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our programmes are transforming lives and building stronger communities for veterans and their families.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/6192448/pexels-photo-6192448.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Veteran receiving job training and career support"
                className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Career Development</h4>
                <p className="text-sm opacity-90">Helping veterans transition to meaningful careers</p>
              </div>
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Mental health counselling session for veterans"
                className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Mental Health Support</h4>
                <p className="text-sm opacity-90">Professional counselling and peer support</p>
              </div>
            </div>
            
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Veteran family receiving support and assistance"
                className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Family Support</h4>
                <p className="text-sm opacity-90">Supporting entire families through recovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6192457/pexels-photo-6192457.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Stories of Hope</h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Real stories from veterans whose lives have been transformed through our support programmes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-6 italic">
                "WVSO didn't just help me find a job – they helped me rebuild my confidence and find my purpose again. I'm now employed full-time and supporting other veterans in their journey."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">MW</span>
                </div>
                <div>
                  <div className="font-semibold">Michael W.</div>
                  <div className="text-blue-200 text-sm">Army Veteran</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-6 italic">
                "The mental health support I received was life-changing. The counselors understood what I was going through because they'd been there too. I finally feel like myself again."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">SJ</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah J.</div>
                  <div className="text-blue-200 text-sm">Royal Navy Veteran</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-6 italic">
                "From homelessness to having my own flat – WVSO supported me every step of the way. Their housing programme gave me stability, and their job training gave me hope."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">DR</span>
                </div>
                <div>
                  <div className="font-semibold">David R.</div>
                  <div className="text-blue-200 text-sm">RAF Veteran</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in making a difference in the lives of wounded veterans. Every contribution, big or small, creates lasting impact.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/6646943/pexels-photo-6646943.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Hands holding donation"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <h4 className="text-2xl font-semibold text-gray-900">Make a Donation</h4>
              </div>
              <p className="text-gray-700 mb-6">
                Your donation directly supports our programmes and services, helping us provide comprehensive care to wounded veterans.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <button className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center hover:border-blue-800 transition-colors">
                  <div className="text-2xl font-bold text-blue-800">£25</div>
                  <div className="text-sm text-gray-600">Emergency kit</div>
                </button>
                <button className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center hover:border-blue-800 transition-colors">
                  <div className="text-2xl font-bold text-blue-800">£50</div>
                  <div className="text-sm text-gray-600">Counselling session</div>
                </button>
                <button className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center hover:border-blue-800 transition-colors">
                  <div className="text-2xl font-bold text-blue-800">£100</div>
                  <div className="text-sm text-gray-600">Training course</div>
                </button>
              </div>
              
              <button className="w-full bg-yellow-500 text-blue-900 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
                Donate Now
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/6646914/pexels-photo-6646914.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Volunteers working together"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <h4 className="text-2xl font-semibold text-gray-900">Volunteer With Us</h4>
              </div>
              <p className="text-gray-700 mb-6">
                Share your skills and time to make a direct impact on veteran lives. We have opportunities for everyone.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                  <span className="text-gray-700">Mentorship and peer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                  <span className="text-gray-700">Administrative and office support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                  <span className="text-gray-700">Event planning and fundraising</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                  <span className="text-gray-700">Professional skills workshops</span>
                </div>
              </div>
              
              <button className="w-full bg-blue-800 text-white py-4 rounded-full font-semibold hover:bg-blue-900 transition-colors">
                Apply to Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to us for support, information, or to get involved. We're here to help 24/7.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h4>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">24/7 Support Helpline</h5>
                    <p className="text-gray-700">0800 123 4567</p>
                    <p className="text-sm text-gray-600">Free from all UK phones</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Email</h5>
                    <p className="text-gray-700">support@wvso.org.uk</p>
                    <p className="text-sm text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Head Office</h5>
                    <p className="text-gray-700">
                      Veterans House<br />
                      12 Support Street<br />
                      London SW1A 1AA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">Crisis Support</h5>
                <p className="text-red-700 text-sm">
                  If you or someone you know is in immediate danger, please call 999 or contact our crisis helpline: <strong>0800 CRISIS (274747)</strong>
                </p>
              </div>
              
              <div className="mt-8">
                <img 
                  src="https://images.pexels.com/photos/6192471/pexels-photo-6192471.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                  alt="WVSO office building and support center"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h4>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none transition-colors"
                  >
                    <option>Request Support</option>
                    <option>Volunteer Inquiry</option>
                    <option>Donation Information</option>
                    <option>General Question</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-blue-800 outline-none transition-colors"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-yellow-400" />
                <div>
                  <h5 className="text-xl font-bold">WVSO</h5>
                  <p className="text-xs text-gray-400">Wounded Veterans Support</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Supporting wounded veterans and their families on their journey to recovery and reintegration.
              </p>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Quick Links</h6>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Our Services</button></li>
                <li><button onClick={() => scrollToSection('get-involved')} className="hover:text-white transition-colors">Get Involved</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Support</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Crisis Helpline</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Find Local Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Stay Connected</h6>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and resources.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-yellow-400"
                />
                <button className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-r-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Wounded Veterans Support Organisation. All rights reserved. | Registered Charity No. 123456789</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;