"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Award, Users, Target, TrendingUp, Send, Clock, CheckCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=600&fit=crop',
      title: 'Precision Cost Estimation',
      subtitle: 'Turn complex construction costs into clear, actionable insights'
    },
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=600&fit=crop',
      title: 'Win More Projects',
      subtitle: 'Accurate, timely, and data-driven cost estimates for your success'
    },
    {
      image: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=1200&h=600&fit=crop',
      title: 'Global Construction Partners',
      subtitle: 'Serving contractors across the US, UK, and Australia'
    }
  ];

 const portfolio = [
    {
      title: 'Commercial Complex - Sydney',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      description: 'Complete cost estimation for 50-story mixed-use development',
      fullDescription: 'A comprehensive cost estimation project for a landmark 50-story mixed-use development in the heart of Sydney. Our team provided detailed quantity take-offs, material cost analysis, and labor estimates that helped secure the winning bid.',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      client: 'Sydney Development Corp',
      duration: '6 months',
      value: '$250M',
      services: ['Cost Estimation', 'Bid Preparation', 'Material Analysis'],
      challenges: 'Complex structural requirements and tight timeline',
      results: 'Delivered 15% cost savings through optimized material selection'
    },
    {
      title: 'Infrastructure Project - London',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=400&fit=crop',
      description: 'Bridge construction bid preparation and procurement strategy',
      fullDescription: 'Strategic bid preparation for a major bridge construction project crossing the Thames. Included comprehensive procurement strategy and supplier negotiations.',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      client: 'London Infrastructure Ltd',
      duration: '4 months',
      value: '$180M',
      services: ['Bid Preparation', 'Procurement Strategy', 'Supplier Analysis'],
      challenges: 'Historical site restrictions and environmental regulations',
      results: 'Won competitive bid with 8% cost advantage'
    },
    {
      title: 'Oil & Gas Facility - Texas',
      category: 'Oil & Gas',
      image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop',
      description: 'Detailed quantity take-offs for refinery expansion',
      fullDescription: 'Extensive quantity take-offs and cost analysis for a major refinery expansion project. Involved coordination with multiple specialty contractors and suppliers.',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      client: 'Texas Energy Solutions',
      duration: '8 months',
      value: '$420M',
      services: ['Quantity Take-offs', 'Cost Analysis', 'Risk Assessment'],
      challenges: 'Safety compliance and specialized equipment requirements',
      results: 'Identified $12M in potential cost optimizations'
    },
    {
      title: 'Residential Development - Melbourne',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
      description: 'Multi-phase housing project cost breakdown and analysis',
      fullDescription: 'Complete cost breakdown for a 500-unit residential development across 4 construction phases. Included detailed scheduling and phased budget allocation.',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      client: 'Melbourne Housing Group',
      duration: '5 months',
      value: '$95M',
      services: ['Cost Breakdown', 'Scheduling', 'Budget Planning'],
      challenges: 'Multi-phase coordination and fluctuating material costs',
      results: 'Enabled 20% faster project approval through detailed planning'
    },
    {
      title: 'Healthcare Facility - New York',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
      description: 'Hospital renovation and expansion cost estimation',
      fullDescription: 'Detailed cost estimation for hospital renovation while maintaining operational capacity. Specialized medical equipment and systems integration included.',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      client: 'NYC Health Systems',
      duration: '7 months',
      value: '$320M',
      services: ['Cost Estimation', 'Systems Integration', 'Phased Planning'],
      challenges: 'Operational continuity and specialized medical requirements',
      results: 'Zero operational disruption with optimized construction sequence'
    },
    {
      title: 'Transportation Hub - Manchester',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      description: 'Metro station construction bid-winning proposal',
      fullDescription: 'Comprehensive bid preparation for a new metro station including underground construction, mechanical systems, and passenger facilities.',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      client: 'Manchester Transport Authority',
      duration: '6 months',
      value: '$210M',
      services: ['Bid Preparation', 'Underground Analysis', 'Systems Estimation'],
      challenges: 'Underground utilities and geological constraints',
      results: 'Won bid with innovative cost-saving solutions'
    }
  ];

  const categories = ['All', 'Commercial', 'Infrastructure', 'Oil & Gas', 'Residential', 'Healthcare'];

  const filteredProjects = activeFilter === 'All' 
    ? portfolio 
    : portfolio.filter(project => project.category === activeFilter);


  const features = [
    {
      icon: <Award size={48} />,
      title: 'Expert Team',
      description: 'Experienced civil engineers with deep construction knowledge'
    },
    {
      icon: <Target size={48} />,
      title: 'Precision First',
      description: 'Accurate estimates using industry-leading software and data'
    },
    {
      icon: <Users size={48} />,
      title: 'Global Reach',
      description: 'Serving clients across US, UK, and Australia'
    },
    {
      icon: <TrendingUp size={48} />,
      title: 'Win More Bids',
      description: 'Data-driven strategies to increase your project win rate'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Axiom Estimators
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['about', 'how-we-work', 'leadership', 'governance', 'history', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 transition-all duration-300 capitalize font-medium relative group cursor-pointer`}
              >
                {item.replace('-', ' ')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'} transition-all duration-300`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {['about', 'how-we-work', 'leadership', 'governance', 'history', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 capitalize text-left cursor-pointer font-medium"
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Carousel with Swiper - Slide Effect */}
  <section className="relative h-screen">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          speed={800}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 flex items-center justify-center">
                  <div className="text-center text-white px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">{slide.title}</h1>
                    <p className="text-xl md:text-3xl font-light animate-fade-in">{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
     
            width: 50px;
            height: 50px;
            border-radius: 8px;
            transition: all 0.3s ease;
          }
              /* 🔥 Hide navigation buttons on mobile */
  @media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none !important;
    }
  }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 20px;
            font-weight: bold;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
     
            transform: scale(1.1);
          }
          .swiper-pagination-bullet {
            background: white;
            opacity: 0.5;
            width: 12px;
            height: 12px;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            width: 40px;
            border-radius: 6px;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out;
          }
        `}</style>
      </section>

      {/* About Section with Images */}
      <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-16 rounded-full"></div>
          
          {/* Main Content with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                alt="Team working on construction estimates"
                className="relative rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition duration-500"
              />
            </div>
            <div className="order-1 lg:order-2 text-gray-600 leading-relaxed space-y-6">
              <p className="text-lg">
                At Axiom Estimators, we turn complex construction costs into clear, actionable insights. Founded by a team of experienced civil engineers, we specialize in construction cost estimation, bid preparation, procurement strategy, and complete project deliverables—so you can focus on building while we handle the numbers.
              </p>
              <p className="text-lg">
                We partner with general contractors, subcontractors, and developers across the US, UK, and Australia, helping them win more projects with accurate, timely, and data-driven cost estimates. Our mission is simple: deliver precision, save time, and reduce risk for every client we serve.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 text-center h-full">
                  <div className="text-blue-600 flex justify-center mb-4 transform group-hover:scale-110 transition duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Image Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-gray-600 leading-relaxed space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Why Choose Axiom?</h3>
              <p className="text-lg">
                With decades of combined experience in civil engineering and construction management, our team brings unparalleled expertise to every project. We understand the complexities of modern construction and use cutting-edge technology to deliver results that exceed expectations.
              </p>
              <p className="text-lg">
                From initial concept to final delivery, we're committed to transparency, accuracy, and your success. Our track record speaks for itself—helping contractors win competitive bids and complete projects on time and within budget.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Professional team meeting"
                className="relative rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">How We Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-16 rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="relative rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition duration-500"
              />
            </div>
            <div className="text-gray-600 leading-relaxed space-y-6 order-1 lg:order-2">
              <p className="text-lg">
                We believe in collaboration, transparency, and results. Our process starts with understanding your project's scope and schedule. We then deploy our in-house team of estimators and engineers to prepare detailed quantity take-offs, cost breakdowns, and bid-winning proposals using industry-leading software and the latest pricing databases.
              </p>
              <p className="text-lg">
                We maintain open communication from start to finish, ensuring that you receive deliverables that are accurate, compliant, and tailored to your project's goals—on time, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Leadership</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-16 rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-gray-600 leading-relaxed space-y-6">
              <p className="text-lg">
                Our leadership team combines engineering expertise with construction management experience. With years of hands-on involvement in oil & gas, infrastructure, and commercial construction projects, our leaders bring practical knowledge and strategic vision to every estimate.
              </p>
              <p className="text-lg">
                They understand what it takes to build trust with clients and win bids in competitive markets, making them the backbone of our success.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop"
                alt="Leadership team"
                className="relative rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section id="governance" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Governance</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-16 rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
                alt="Governance and compliance"
                className="relative rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition duration-500"
              />
            </div>
            <div className="text-gray-600 leading-relaxed space-y-6 order-1 lg:order-2">
              <p className="text-lg">
                Integrity and accountability are at the core of how we operate. We follow strict internal review procedures, ensure confidential handling of client data, and comply with international estimation standards and local codes in every region we serve.
              </p>
              <p className="text-lg">
                Every project undergoes multiple levels of review—so our clients can rely on consistent, defensible, and audit-ready cost data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Our History</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-16 rounded-full"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-gray-600 leading-relaxed space-y-6">
              <p className="text-lg">
                Our story began with a simple idea: contractors shouldn't lose sleep over cost estimation. Founded by a small group of civil engineers, we've grown into a trusted remote estimation partner for clients across continents. Over the years, we've helped countless firms reduce bid preparation time, improve accuracy, and increase their project win rate.
              </p>
              <p className="text-lg">
                What started as an engineering initiative has become a global service model for construction efficiency.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Company history and growth"
                className="relative rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reconciliation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Reconciliation Action Plan</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-16 rounded-full"></div>
          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-6 text-center">
            <p className="text-lg">
              We recognize the importance of inclusion, respect, and collaboration in every environment we work in. Our commitment to reconciliation is reflected in our partnerships, hiring practices, and community engagement. We actively seek to work with diverse professionals and regional partners, ensuring that our growth contributes to sustainable opportunities across the construction industry.
            </p>
          </div>
        </div>
      </section>

 {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Our Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our diverse range of successful projects across multiple industries and continents
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-4">
                      <span className="text-white font-semibold">Click to view details</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                      {project.value}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{project.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>📍 {project.client}</span>
                      <span>⏱️ {project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal/Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="relative h-80">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-8 text-white w-full">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold">{selectedProject.category}</span>
                  <h2 className="text-4xl font-bold mt-4">{selectedProject.title}</h2>
                  <p className="text-xl mt-2">{selectedProject.client}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Project Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">{selectedProject.value}</div>
                  <div className="text-gray-600 font-semibold">Project Value</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">{selectedProject.duration}</div>
                  <div className="text-gray-600 font-semibold">Duration</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">{selectedProject.services.length}</div>
                  <div className="text-gray-600 font-semibold">Services Provided</div>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{selectedProject.fullDescription}</p>
              </div>

              {/* Services Provided */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Services Provided</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.services.map((service, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Video Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Walkthrough</h3>
                <div className="relative rounded-xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={selectedProject.video}
                    title={selectedProject.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Challenges & Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">⚠️</span> Challenges
                  </h3>
                  <p className="text-gray-600">{selectedProject.challenges}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">✅</span> Results
                  </h3>
                  <p className="text-gray-600">{selectedProject.results}</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <button 
                  onClick={() => {
                    setSelectedProject(null);
                    scrollToSection('contact');
                  }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Your Project Today
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact - Enhanced */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-center text-gray-300 mb-16 text-lg">Let's discuss how we can help you win your next project</p>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition text-white placeholder-gray-400"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition text-white placeholder-gray-400"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition text-white placeholder-gray-400"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:bg-white/15 transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Email Us</h3>
                    <p className="text-gray-300">info@axiomestimators.com</p>
                    <p className="text-gray-300 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:bg-white/15 transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Call Us</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300 text-sm mt-1">Mon-Fri: 9AM - 6PM EST</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:bg-white/15 transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Our Locations</h3>
                    <p className="text-gray-300">United States</p>
                    <p className="text-gray-300">United Kingdom</p>
                    <p className="text-gray-300">Australia</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:bg-white/15 transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Quick Response</h3>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle size={18} className="text-green-400" />
                      <span>Average response time: 2 hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 mt-2">
                      <CheckCircle size={18} className="text-green-400" />
                      <span>Available 7 days a week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Axiom Estimators</h3>
              <p className="text-gray-400">Turning complex construction costs into clear, actionable insights.</p>
              <div className="flex space-x-4 mt-6">
                <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition cursor-pointer">
                  <Linkedin size={20} className="text-blue-400" />
                </div>
                <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition cursor-pointer">
                  <Facebook size={20} className="text-blue-400" />
                </div>
                <div className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition cursor-pointer">
                  <Twitter size={20} className="text-blue-400" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-blue-400 transition">About Us</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="text-gray-400 hover:text-blue-400 transition">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-blue-400 transition">Contact</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-blue-400 transition cursor-pointer">Cost Estimation</li>
                <li className="hover:text-blue-400 transition cursor-pointer">Bid Preparation</li>
                <li className="hover:text-blue-400 transition cursor-pointer">Procurement Strategy</li>
                <li className="hover:text-blue-400 transition cursor-pointer">Project Deliverables</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Newsletter</h4>
              <p className="text-gray-400 mb-4 text-sm">Subscribe to get updates on construction industry insights</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition text-white text-sm placeholder-gray-500"
                />
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-4 py-2 rounded-lg transition">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Axiom Estimators. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;