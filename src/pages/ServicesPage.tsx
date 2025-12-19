import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight, Users, UserCheck, FileCheck, Code, Smartphone, Palette, Target, Linkedin, Video, PenTool, Share2, Search, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import staffingImg from '@/assets/staffing-solutions.jpg';
import techImg from '@/assets/tech-services.jpg';
import marketingImg from '@/assets/digital-marketing.jpg';

const workforceServices = [
  {
    icon: Users,
    title: 'IT Staffing',
    description: 'Connect with skilled IT professionals for your technology needs.',
    benefits: ['Access to pre-vetted tech talent', 'Flexible engagement models', 'Quick turnaround time', 'Domain expertise matching'],
  },
  {
    icon: UserCheck,
    title: 'Non-IT Staffing',
    description: 'Find the right professionals for operations, finance, HR, and more.',
    benefits: ['Cross-functional expertise', 'Industry-specific talent pools', 'Scalable workforce solutions', 'Compliance-ready processes'],
  },
  {
    icon: FileCheck,
    title: 'Contract & Permanent Hiring',
    description: 'Flexible hiring solutions tailored to your business requirements.',
    benefits: ['Contract-to-hire options', 'Direct placement services', 'Smooth onboarding support', 'Retention-focused approach'],
  },
];

const technologyServices = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    benefits: ['Responsive design', 'Performance optimization', 'SEO-friendly architecture', 'Scalable solutions'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    benefits: ['User-centric design', 'Cross-platform compatibility', 'Offline capabilities', 'App store optimization'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces and seamless user experiences that convert.',
    benefits: ['User research & testing', 'Wireframes & prototypes', 'Design systems', 'Accessibility compliance'],
  },
];

const marketingServices = [
  {
    icon: Target,
    title: 'Google Ads',
    description: 'Data-driven PPC campaigns that deliver measurable ROI.',
    benefits: ['Keyword research', 'Ad copy optimization', 'Conversion tracking', 'Budget management'],
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Ads',
    description: 'B2B advertising strategies to reach decision-makers.',
    benefits: ['Audience targeting', 'Lead generation campaigns', 'Account-based marketing', 'Performance analytics'],
  },
  {
    icon: Video,
    title: 'Webinar Promotion',
    description: 'Promote your webinars and virtual events to the right audience.',
    benefits: ['Registration campaigns', 'Multi-channel promotion', 'Attendee engagement', 'Post-event follow-up'],
  },
  {
    icon: PenTool,
    title: 'LinkedIn Content Creation',
    description: 'Professional content that builds thought leadership.',
    benefits: ['Content strategy', 'Professional copywriting', 'Visual content', 'Engagement optimization'],
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engage your audience across platforms.',
    benefits: ['Platform-specific strategies', 'Content calendars', 'Community management', 'Performance reporting'],
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Improve your search rankings and drive organic traffic.',
    benefits: ['Technical SEO audits', 'On-page optimization', 'Content strategy', 'Link building'],
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing Strategy',
    description: 'Comprehensive strategies aligned with your business goals.',
    benefits: ['Market analysis', 'Competitor research', 'Channel planning', 'KPI framework'],
  },
];

export default function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center gradient-hero">
        <div className="container-custom relative z-10 pt-32 pb-20">
          <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6 backdrop-blur-sm">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Comprehensive Solutions for Your Business Growth
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              From workforce solutions to technology development and digital marketing, 
              we deliver end-to-end services tailored to your unique needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Workforce Solutions */}
      <section id="workforce" className="section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection animation="slide-right">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Workforce Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Build Your Ideal Team
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Finding the right talent is critical to business success. Our workforce solutions 
                connect you with skilled professionals across IT and non-IT domains, with flexible 
                engagement models designed to meet your specific requirements.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Discuss Your Hiring Needs <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <img
                src={staffingImg}
                alt="HR team reviewing candidates"
                className="rounded-2xl shadow-prominent w-full"
              />
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workforceServices.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 100}>
                <div className="card-elevated p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Services */}
      <section id="technology" className="section-padding bg-muted scroll-mt-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection animation="slide-left" className="order-2 lg:order-1">
              <img
                src={techImg}
                alt="Development team working on code"
                className="rounded-2xl shadow-prominent w-full"
              />
            </AnimatedSection>

            <AnimatedSection animation="slide-right" className="order-1 lg:order-2">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Technology Services
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Custom Software Solutions
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transform your ideas into powerful digital products. Our technology team 
                delivers custom web and mobile applications with intuitive designs and 
                robust functionality to drive your business forward.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {technologyServices.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 100}>
                <div className="bg-background rounded-xl p-6 shadow-soft h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing & Growth */}
      <section id="marketing" className="section-padding scroll-mt-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection animation="slide-right">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
                Marketing & Growth
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Accelerate Your Digital Presence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Reach your target audience and drive measurable results with our comprehensive 
                digital marketing services. From paid advertising to SEO and content creation, 
                we help you build a strong online presence.
              </p>
              <Button asChild>
                <Link to="/contact">
                  Grow Your Business <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <img
                src={marketingImg}
                alt="Marketing team analyzing data"
                className="rounded-2xl shadow-prominent w-full"
              />
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {marketingServices.map((service, index) => (
              <AnimatedSection key={service.title} animation="fade-up" delay={index * 75}>
                <div className="card-elevated p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Let's discuss how our services can help you achieve your business objectives.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Talk to Us <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
