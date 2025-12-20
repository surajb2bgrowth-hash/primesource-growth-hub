import { Link } from 'react-router-dom';
import { ArrowRight, Users, Code, TrendingUp, CheckCircle, Building2, ShoppingCart, Briefcase, Heart, Landmark, Factory, Cog, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import HeroScene from '@/components/3d/HeroScene';
import staffingImg from '@/assets/staffing-solutions.jpg';
import techImg from '@/assets/tech-services.jpg';
import marketingImg from '@/assets/digital-marketing.jpg';
import automationImg from '@/assets/business-automation.jpg';

const stats = [
  { value: '10+', label: 'Projects Delivered', icon: CheckCircle },
  { value: '100%', label: 'Client Satisfaction', icon: Heart },
  { value: '24/7', label: 'Dedicated Support', icon: Shield },
  { value: 'Global', label: 'Reach', icon: Globe },
];

const services = [
  {
    icon: Users,
    title: 'Workforce Solutions',
    description: 'IT & Non-IT staffing, contract and permanent hiring to build your ideal team.',
    image: staffingImg,
    href: '/services#workforce',
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    icon: Code,
    title: 'Technology Services',
    description: 'Web & mobile development, UI/UX design, and custom software solutions.',
    image: techImg,
    href: '/services#technology',
    gradient: 'from-indigo-600 to-purple-700',
  },
  {
    icon: Cog,
    title: 'Business Automation',
    description: 'Streamline workflows and automate processes to improve efficiency.',
    image: automationImg,
    href: '/services#automation',
    gradient: 'from-cyan-600 to-blue-700',
  },
  {
    icon: TrendingUp,
    title: 'Marketing & Growth',
    description: 'SEO, paid ads, social media, and content strategies to accelerate growth.',
    image: marketingImg,
    href: '/services#marketing',
    gradient: 'from-emerald-600 to-teal-700',
  },
];

const whyChooseUs = [
  { title: 'Expert Team', description: 'Skilled professionals with domain expertise', icon: Users },
  { title: 'Proven Process', description: 'Structured approach for consistent results', icon: CheckCircle },
  { title: 'Transparent Communication', description: 'Regular updates and clear reporting', icon: Zap },
  { title: 'Scalable Solutions', description: 'Services that grow with your business', icon: TrendingUp },
];

const industries = [
  { icon: Building2, name: 'Technology' },
  { icon: ShoppingCart, name: 'E-Commerce' },
  { icon: Briefcase, name: 'Professional Services' },
  { icon: Heart, name: 'Healthcare' },
  { icon: Landmark, name: 'Finance' },
  { icon: Factory, name: 'Manufacturing' },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section with 3D */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        
        {/* 3D Scene */}
        <HeroScene />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
        
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimatedSection animation="fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-primary-foreground/90 text-sm font-medium">
                    IT Consulting • Workforce Solutions • Digital Growth
                  </span>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-6">
                  Transform Your
                  <span className="block bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                    Business Vision
                  </span>
                  Into Reality
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl">
                  PrimeSource IT Consulting delivers comprehensive IT staffing, software development, 
                  and digital marketing services to help startups, SMEs, and growing enterprises 
                  achieve their business goals.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="hero" size="xl" className="group">
                    <Link to="/contact">
                      Get Started 
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="heroOutline" size="xl">
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Stats Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.label} animation="scale-in" delay={400 + index * 100}>
                  <div className="bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105">
                    <stat.icon className="w-8 h-8 text-accent mb-4" />
                    <div className="text-3xl font-display font-bold text-primary-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-primary-foreground/70 text-sm font-medium">{stat.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
          </div>
        </div>
      </section>

      {/* Mobile Stats */}
      <section className="lg:hidden bg-secondary py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="scale-in" delay={index * 100}>
                <div className="text-center p-4 bg-background rounded-xl shadow-soft">
                  <div className="text-2xl font-display font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Comprehensive Solutions for
              <span className="block text-accent">Your Business</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From talent acquisition to technology development and digital marketing, 
              we provide end-to-end services tailored to your unique needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 100}>
                <Link
                  to={service.href}
                  className="group block h-full"
                >
                  <div className="relative h-full bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-70 group-hover:opacity-80 transition-opacity`} />
                      <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                        <service.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{service.description}</p>
                      <span className="inline-flex items-center gap-2 text-accent font-medium text-sm">
                        Learn More 
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
        
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Why Choose PrimeSource
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Your Trusted Partner for
                <span className="text-accent"> IT Excellence</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                We combine deep industry expertise with a client-centric approach to deliver 
                solutions that drive real business outcomes. Our commitment to quality, 
                transparency, and partnership sets us apart.
              </p>
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-5">
              {whyChooseUs.map((item, index) => (
                <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
                  <div className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-display font-semibold text-foreground text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Empowering Businesses
              <span className="text-accent"> Across Sectors</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our solutions are designed to address the unique challenges and opportunities 
              across various industries.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} animation="scale-in" delay={index * 50}>
                <div className="bg-card rounded-2xl p-6 text-center group cursor-pointer border border-border/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mx-auto mb-4 group-hover:from-accent group-hover:to-blue-600 transition-all duration-300">
                    <industry.icon className="w-8 h-8 text-accent group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="font-medium text-foreground text-sm">{industry.name}</h4>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-primary-foreground mb-6">
              Ready to Transform
              <span className="block">Your Business?</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Let's discuss how PrimeSource can help you achieve your IT, staffing, 
              and digital growth objectives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contact">
                  Schedule a Consultation 
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
