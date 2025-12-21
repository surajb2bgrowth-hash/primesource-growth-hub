import { Link } from 'react-router-dom';
import { ArrowRight, Users, Code, TrendingUp, CheckCircle, Building2, ShoppingCart, Briefcase, Heart, Landmark, Factory, Cog, Sparkles, Zap, Shield, Globe, ArrowUpRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import staffingImg from '@/assets/staffing-solutions.jpg';
import techImg from '@/assets/tech-services.jpg';
import marketingImg from '@/assets/digital-marketing.jpg';
import automationImg from '@/assets/business-automation.jpg';
import heroImg from '@/assets/hero-bg.jpg';

const services = [
  {
    icon: Users,
    title: 'Workforce Solutions',
    description: 'IT & Non-IT staffing with flexible engagement models to build your dream team.',
    image: staffingImg,
    href: '/services#workforce',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Code,
    title: 'Technology Services',
    description: 'Custom web & mobile development with modern tech stack and intuitive UI/UX.',
    image: techImg,
    href: '/services#technology',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: Cog,
    title: 'Business Automation',
    description: 'Streamline operations with intelligent workflow automation solutions.',
    image: automationImg,
    href: '/services#automation',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Marketing & Growth',
    description: 'Data-driven digital marketing to accelerate your business growth.',
    image: marketingImg,
    href: '/services#marketing',
    color: 'from-emerald-500 to-teal-600',
  },
];

const features = [
  { icon: Sparkles, title: 'Expert Team', description: 'Skilled professionals with deep domain expertise' },
  { icon: Zap, title: 'Fast Delivery', description: 'Agile processes for quick turnaround times' },
  { icon: Shield, title: 'Quality First', description: 'Rigorous standards for every deliverable' },
  { icon: Globe, title: 'Scalable Solutions', description: 'Services that grow with your business' },
];

const industries = [
  { icon: Building2, name: 'Technology' },
  { icon: ShoppingCart, name: 'E-Commerce' },
  { icon: Briefcase, name: 'Consulting' },
  { icon: Heart, name: 'Healthcare' },
  { icon: Landmark, name: 'Finance' },
  { icon: Factory, name: 'Manufacturing' },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section - Two Column Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        
        {/* Cross Pattern Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle, hsla(217, 91%, 60%, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Accent Dots */}
        <div className="absolute top-1/4 left-1/2 w-3 h-3 rounded-full bg-accent animate-pulse" />
        <div className="absolute top-20 right-1/3 w-2 h-2 rounded-full bg-accent/60" />
        
        {/* Content */}
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1">
              <AnimatedSection animation="fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm mb-8">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-primary-foreground/90 text-sm font-medium">
                    Trusted by 50+ Global Enterprises
                  </span>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={100}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-8">
                  End-to-End IT,
                  <br />
                  Workforce & Digital
                  <br />
                  Growth{' '}
                  <span className="text-accent">Solutions</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 leading-relaxed max-w-xl">
                  PrimeSource IT Consulting delivers comprehensive IT staffing, 
                  software development, and performance marketing services that 
                  drive measurable business outcomes.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-full px-8 bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow group">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                    <Link to="/services">
                      Explore Services
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Right Column - Image */}
            <div className="order-1 lg:order-2 relative">
              <AnimatedSection animation="scale-in" delay={200}>
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10">
                    <img
                      src={heroImg}
                      alt="Team collaboration at PrimeSource IT Consulting"
                      className="w-full h-auto object-cover aspect-[4/3]"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                  
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-background rounded-xl shadow-xl p-4 border border-border/50 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <Check className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">98% Client Satisfaction</div>
                        <div className="text-xs text-muted-foreground">Based on client feedback</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
                  <div className="absolute -bottom-8 right-1/4 w-16 h-16 bg-accent/30 rounded-full blur-lg" />
                </div>
              </AnimatedSection>
            </div>
          </div>
          
          {/* Bottom Stats Row */}
          <AnimatedSection animation="fade-up" delay={500}>
            <div className="flex flex-wrap justify-start gap-8 md:gap-16 mt-16 pt-12 border-t border-primary-foreground/10">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">10+</div>
                  <div className="text-sm text-primary-foreground/60">Projects Delivered</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">Skilled</div>
                  <div className="text-sm text-primary-foreground/60">Expert Team</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">24/7</div>
                  <div className="text-sm text-primary-foreground/60">Support Available</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-accent" />
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">Global</div>
                  <div className="text-sm text-primary-foreground/60">Service Reach</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background relative">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        <div className="container-custom relative">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Everything You Need to
              <span className="block text-accent">Scale Your Business</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate growth and drive results.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 100}>
                <Link to={service.href} className="group block h-full">
                  <div className="relative h-full rounded-3xl overflow-hidden bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-prominent">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-background/20 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                        <service.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-accent font-semibold">
                        Learn More
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[120px]" />
        </div>
        
        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
                Why PrimeSource
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Your Partner for
                <span className="block text-accent">Sustainable Growth</span>
              </h2>
              <p className="text-background/70 text-lg mb-10 leading-relaxed">
                We combine deep industry expertise with a client-centric approach to deliver 
                solutions that create real, measurable business impact.
              </p>
              <Button asChild size="lg" className="rounded-full px-8 bg-accent hover:bg-accent/90">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} animation="scale-in" delay={index * 100}>
                  <div className="bg-background/5 backdrop-blur-sm rounded-2xl p-6 border border-background/10 hover:bg-background/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="text-xl font-display font-bold mb-2">{feature.title}</h4>
                    <p className="text-background/60 text-sm">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-muted relative">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              Industries We Serve
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Empowering Businesses
              <span className="block text-accent">Across Sectors</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions for diverse industry challenges and opportunities.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} animation="scale-in" delay={index * 50}>
                <div className="bg-card rounded-2xl p-6 text-center border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <industry.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{industry.name}</h4>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 hero-pattern" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-8">
              Ready to Transform
              <span className="block">Your Business?</span>
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
              Let's discuss how PrimeSource can help you achieve your IT, staffing, 
              and digital growth objectives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-10 bg-accent hover:bg-accent/90 shadow-glow group">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
