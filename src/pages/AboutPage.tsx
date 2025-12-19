import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Users, Shield, Award, Lightbulb, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import aboutTeamImg from '@/assets/about-team.jpg';
import techImg from '@/assets/tech-services.jpg';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Embracing new technologies and approaches to deliver cutting-edge solutions.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Operating with honesty, transparency, and ethical standards in all interactions.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Striving for the highest quality in every service and deliverable we provide.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'Building lasting relationships based on trust, collaboration, and mutual success.',
  },
];

const teamStats = [
  { value: '10+', label: 'Projects Delivered' },
  { value: '15+', label: 'Team Members' },
  { value: '5+', label: 'Industries Served' },
  { value: '100%', label: 'Client Focus' },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={aboutTeamImg}
            alt="PrimeSource team meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-20">
          <AnimatedSection animation="fade-up" className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6 backdrop-blur-sm">
              About PrimeSource
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Your Growth Partner in IT & Digital Excellence
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              PrimeSource IT Consulting is a professional services firm delivering comprehensive 
              IT consulting, workforce solutions, and digital growth services to businesses 
              ready to scale.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-right">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Building Success Through Technology & Talent
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                PrimeSource IT Consulting specializes in connecting businesses with the right 
                talent, technology, and strategies to achieve sustainable growth. We work with 
                startups, SMEs, and growing enterprises across multiple industries.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive approach combines IT & Non-IT staffing solutions, custom 
                software development, and results-driven digital marketing to provide end-to-end 
                support for your business objectives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Based in Hyderabad's thriving tech hub, we leverage our skilled team and proven 
                processes to deliver solutions that make a measurable impact on your business.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div className="relative">
                <img
                  src={techImg}
                  alt="Technology team at work"
                  className="rounded-2xl shadow-prominent w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent rounded-xl p-6 shadow-elevated">
                  <div className="text-3xl font-display font-bold text-accent-foreground mb-1">10+</div>
                  <div className="text-accent-foreground/80 text-sm">Projects Successfully Delivered</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="fade-up">
              <div className="bg-background rounded-2xl p-8 h-full shadow-soft">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses with the talent, technology, and strategies they need to 
                  compete and succeed in today's dynamic market. We are committed to delivering 
                  high-quality solutions that drive measurable results and long-term value for 
                  our clients.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={150}>
              <div className="bg-background rounded-2xl p-8 h-full shadow-soft">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a trusted partner for businesses seeking comprehensive IT, staffing, and 
                  digital growth solutions. We aim to build lasting relationships by consistently 
                  exceeding expectations and helping our clients achieve their full potential.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Principles That Guide Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values shape how we work with clients, partners, and each other to 
              deliver exceptional results.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} animation="fade-up" delay={index * 100}>
                <div className="card-elevated p-6 text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h4 className="text-xl font-display font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Culture */}
      <section id="team" className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutTeamImg}
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Skilled Professionals, Dedicated to Your Success
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Our team combines technical expertise, industry knowledge, and a passion for 
              delivering results to help businesses achieve their goals.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="scale-in" delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss how PrimeSource can help you achieve your business objectives 
              with our comprehensive IT, staffing, and digital marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
