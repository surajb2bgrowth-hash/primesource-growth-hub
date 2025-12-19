import { Link } from 'react-router-dom';
import { ArrowRight, Users, Code, TrendingUp, CheckCircle, Building2, ShoppingCart, Briefcase, Heart, Landmark, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import heroBg from '@/assets/hero-bg.jpg';
import staffingImg from '@/assets/staffing-solutions.jpg';
import techImg from '@/assets/tech-services.jpg';
import marketingImg from '@/assets/digital-marketing.jpg';

const stats = [
  { value: '10+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Dedicated Support' },
  { value: 'End-to-End', label: 'Solutions' },
];

const services = [
  {
    icon: Users,
    title: 'Workforce Solutions',
    description: 'IT & Non-IT staffing, contract and permanent hiring to build your ideal team.',
    image: staffingImg,
    href: '/services#workforce',
  },
  {
    icon: Code,
    title: 'Technology Services',
    description: 'Web & mobile development, UI/UX design, and custom software solutions.',
    image: techImg,
    href: '/services#technology',
  },
  {
    icon: TrendingUp,
    title: 'Marketing & Growth',
    description: 'SEO, paid ads, social media, and content strategies to accelerate growth.',
    image: marketingImg,
    href: '/services#marketing',
  },
];

const whyChooseUs = [
  { title: 'Expert Team', description: 'Skilled professionals with domain expertise' },
  { title: 'Proven Process', description: 'Structured approach for consistent results' },
  { title: 'Transparent Communication', description: 'Regular updates and clear reporting' },
  { title: 'Scalable Solutions', description: 'Services that grow with your business' },
  { title: 'Quality Focus', description: 'Rigorous standards for every deliverable' },
  { title: 'Long-term Partnership', description: 'Committed to your ongoing success' },
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="IT consulting team collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6 backdrop-blur-sm">
                IT Consulting • Workforce Solutions • Digital Growth
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
                End-to-End IT, Workforce & Digital Growth Solutions
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
                PrimeSource IT Consulting delivers comprehensive IT staffing, software development, 
                and digital marketing services to help startups, SMEs, and growing enterprises 
                achieve their business goals.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="xl">
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="scale-in" delay={index * 100}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Comprehensive Solutions for Your Business
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From talent acquisition to technology development and digital marketing, 
              we provide end-to-end services tailored to your unique needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 150}>
                <Link
                  to={service.href}
                  className="group block card-elevated overflow-hidden h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-accent font-medium">
                      Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Why Choose PrimeSource
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Your Trusted Partner for IT Excellence
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We combine deep industry expertise with a client-centric approach to deliver 
                solutions that drive real business outcomes. Our commitment to quality, 
                transparency, and partnership sets us apart.
              </p>
              <Button asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
                  <div className="bg-background rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Empowering Businesses Across Sectors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our solutions are designed to address the unique challenges and opportunities 
              across various industries.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} animation="scale-in" delay={index * 50}>
                <div className="card-elevated p-6 text-center group cursor-pointer">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                    <industry.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h4 className="font-medium text-foreground">{industry.name}</h4>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={staffingImg}
            alt="Professional team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Let's discuss how PrimeSource can help you achieve your IT, staffing, 
              and digital growth objectives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Schedule a Consultation <ArrowRight className="w-5 h-5" />
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
