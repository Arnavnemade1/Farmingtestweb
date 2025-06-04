import React, { useState, useEffect } from 'react';
import { ChevronDown, Smartphone, Satellite, Users, Globe, Brain, Sprout, TrendingUp, Heart, MapPin, Zap, Star } from 'lucide-react';

const FarmTechWebsite = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Lightweight app optimized for low-end devices with vernacular language support"
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Satellite Intelligence",
      description: "Advanced satellite imagery combined with IoT sensors for precise crop monitoring"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Region-Specific AI",
      description: "Custom AI models trained for local conditions, crops, and farming practices"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Crowdsourced data and WhatsApp integration for seamless farmer collaboration"
    }
  ];

  const impactStats = [
    { number: "15+", label: "Languages Planned", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "AI-Powered Support", icon: <Zap className="w-6 h-6" /> },
    { number: "100%", label: "Open Source Commitment", icon: <Users className="w-6 h-6" /> },
    { number: "∞", label: "Scalability Potential", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-6">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <Sprout className="w-24 h-24 mx-auto mb-6 text-emerald-400 animate-bounce" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent leading-tight">
            FARMTECH AI
          </h1>
          
          <div className="text-2xl md:text-4xl font-light mb-8 text-emerald-100 leading-relaxed">
            <div className="overflow-hidden h-16">
              <div 
                className="transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateY(-${currentSlide * 4}rem)` }}
              >
                <div className="h-16 flex items-center justify-center">Revolutionizing Agriculture</div>
                <div className="h-16 flex items-center justify-center">Empowering Rural Farmers</div>
                <div className="h-16 flex items-center justify-center">AI for Every Field</div>
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-emerald-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Building cutting-edge AI technology for underserved farming communities through 
            mobile-first design, vernacular language support, and region-specific intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-12 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 rounded-full text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-emerald-500/25">
              <span className="flex items-center gap-3">
                Join the Revolution
                <Star className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
            <button className="px-12 py-4 border-2 border-emerald-400 hover:bg-emerald-400/10 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-emerald-400" />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              BREAKTHROUGH TECHNOLOGY
            </h2>
            <p className="text-2xl text-emerald-100 max-w-3xl mx-auto">
              Designed specifically for farmers in regions that traditional tech companies ignore
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-emerald-800/50 to-teal-800/50 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <div className="text-emerald-400 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-emerald-100 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Board Section */}
      <div className="py-24 px-6 bg-gradient-to-r from-emerald-900/80 to-teal-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              OUR BOARD
            </h2>
            <p className="text-xl text-emerald-200">
              The visionaries behind the revolution
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-6xl font-black text-white group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-300">
                  AN
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-emerald-300 transition-colors">
                  Arnav Nemade
                </h3>
                <p className="text-emerald-400 text-xl font-semibold">
                  Co-Founder
                </p>
              </div>
              
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-6xl font-black text-white group-hover:from-teal-400 group-hover:to-emerald-400 transition-all duration-300">
                  VS
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-emerald-300 transition-colors">
                  Vir Sanghavi
                </h3>
                <p className="text-emerald-400 text-xl font-semibold">
                  Co-Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-8 text-emerald-400 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-black mb-12 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            OUR MISSION
          </h2>
          <div className="text-2xl md:text-3xl text-emerald-100 leading-relaxed space-y-8 max-w-5xl mx-auto">
            <p className="border-l-4 border-emerald-400 pl-8 text-left">
              Target underserved regions that traditional tech companies overlook due to lack of profit or resources
            </p>
            <p className="border-l-4 border-teal-400 pl-8 text-left">
              Collaborate with IITs, IISCs, and NGOs to streamline agricultural innovation
            </p>
            <p className="border-l-4 border-green-400 pl-8 text-left">
              Integrate satellite data, IoT sensors, and crowdsourced intelligence for maximum impact
            </p>
            <p className="border-l-4 border-emerald-400 pl-8 text-left">
              Provide on-ground support through village visits and direct farmer integration
            </p>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-24 px-6 bg-gradient-to-r from-teal-900/60 to-emerald-900/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            TECHNOLOGY STACK
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-800/30 to-teal-800/30 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-emerald-400 mb-6">
                <Brain className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">AI & Machine Learning</h3>
              <ul className="text-emerald-100 space-y-2">
                <li>• TensorFlow & PyTorch</li>
                <li>• Computer Vision Models</li>
                <li>• Natural Language Processing</li>
                <li>• Edge Computing Optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-800/30 to-teal-800/30 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-emerald-400 mb-6">
                <Smartphone className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Mobile Development</h3>
              <ul className="text-emerald-100 space-y-2">
                <li>• React Native</li>
                <li>• Progressive Web Apps</li>
                <li>• Offline-First Architecture</li>
                <li>• Low-Bandwidth Optimization</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-800/30 to-teal-800/30 backdrop-blur-sm p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105">
              <div className="text-emerald-400 mb-6">
                <Satellite className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Data Infrastructure</h3>
              <ul className="text-emerald-100 space-y-2">
                <li>• Satellite Imagery APIs</li>
                <li>• IoT Sensor Networks</li>
                <li>• Cloud Computing Platform</li>
                <li>• Real-time Data Processing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Project Vision */}
      <div className="py-24 px-6 bg-gradient-to-r from-emerald-900/80 to-teal-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              PROJECT VISION
            </h2>
            <p className="text-xl text-emerald-200">
              Building for the future of agriculture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4 text-emerald-400 group-hover:text-emerald-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black mb-2 text-white group-hover:text-emerald-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-emerald-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Zap className="w-20 h-20 mx-auto mb-8 text-emerald-400 animate-pulse" />
          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
            BE THE CHANGE
          </h2>
          <p className="text-2xl md:text-3xl text-emerald-100 mb-12 leading-relaxed">
            Join us in building the future of agriculture for those who need it most. 
            Together, we can create unprecedented impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-16 py-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 rounded-full text-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-emerald-500/40">
              <span className="flex items-center justify-center gap-4">
                Start Building Together
                <Star className="w-8 h-8 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 px-6 border-t border-emerald-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <Sprout className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
          <p className="text-emerald-200 text-lg">
            FarmTech AI - Building the future of agriculture, empowering farmers worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmTechWebsite;
