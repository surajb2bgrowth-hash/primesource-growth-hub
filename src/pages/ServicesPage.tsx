import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Users, UserCheck, FileCheck, Code, Smartphone, Palette, Target, Linkedin, Video, PenTool, Share2, Search, BarChart3, Cog, Workflow, GitMerge, Zap, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import staffingImg from '@/assets/staffing-solutions.jpg';
import techImg from '@/assets/tech-services.jpg';
import marketingImg from '@/assets/digital-marketing.jpg';
import automationImg from '@/assets/business-automation.jpg';
import servicesHeroImg from '@/assets/services-hero.jpg';

const workforceServices = [
  {
    icon: Users,
    title: 'IT Staffing',
    description: 'Connect with skilled IT professionals for your technology needs.',
    benefits: ['Pre-vetted tech talent', 'Flexible engagement', 'Quick turnaround', 'Domain expertise'],
  },
  {
    icon: UserCheck,
    title: 'Non-IT Staffing',
    description: 'Find the right professionals for operations, finance, HR, and more.',
    benefits: ['Cross-functional expertise', 'Industry-specific pools', 'Scalable solutions', 'Compliance-ready'],
  },
  {
    icon: FileCheck,
    title: 'Contract & Permanent',
    description: 'Flexible hiring solutions tailored to your requirements.',
    benefits: ['Contract-to-hire', 'Direct placement', 'Smooth onboarding', 'Retention focus'],
  },
];

const technologyServices = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    benefits: ['Responsive design', 'Performance optimized', 'SEO-friendly', 'Scalable'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    benefits: ['User-centric design', 'Cross-platform', 'Offline capable', 'App store ready'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces and seamless experiences that convert.',
    benefits: ['User research', 'Wireframes', 'Design systems', 'Accessibility'],
  },
];

const automationServices = [
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and manual processes to save time.',
    benefits: ['Task automation', 'Error reduction', 'Time savings', 'Cost efficiency'],
  },
  {
    icon: Workflow,
    title: 'Workflow Optimization',
    description: 'Streamline workflows for maximum efficiency and productivity.',
    benefits: ['Process mapping', 'Bottleneck fixes', 'Workflow redesign', 'Metrics'],
  },
  {
    icon: GitMerge,
    title: 'System Integration',
    description: 'Connect systems and applications for seamless data flow.',
    benefits: ['API integration', 'Data sync', 'Legacy connectivity', 'Real-time'],
  },
];

const marketingServices = [
  { icon: Target, title: 'Google Ads', description: 'Data-driven PPC campaigns that deliver measurable ROI.' },
  { icon: Linkedin, title: 'LinkedIn Ads', description: 'B2B advertising strategies to reach decision-makers.' },
  { icon: Video, title: 'Webinar Promotion', description: 'Promote your webinars to the right audience.' },
  { icon: PenTool, title: 'Content Creation', description: 'Professional content that builds thought leadership.' },
  { icon: Share2, title: 'Social Media', description: 'Build brand awareness and engage your audience.' },
  { icon: Search, title: 'SEO Services', description: 'Improve search rankings and drive organic traffic.' },
  { icon: BarChart3, title: 'Marketing Strategy', description: 'Comprehensive strategies aligned with goals.' },
];

interface ServiceSectionProps {
  id: string;
  badge: string;
  title: string;
  titleAccent: string;
  description: string;
  image: string;
  imageAlt: string;
  services: Array<{
    icon: React.ElementType;
    title: string;
    description: string;
    benefits?: string[];
  }>;
  ctaText: string;
  reverse?: boolean;
  bgClass?: string;
}

function ServiceSection({ id, badge, title, titleAccent, description, image, imageAlt, services, ctaText, reverse, bgClass = 'bg-background' }: ServiceSectionProps) {
  return (
    <section id={id} className={`section-padding scroll-mt-24 ${bgClass}`}>
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <AnimatedSection animation={reverse ? 'slide-left' : 'slide-right'} className={reverse ? 'lg:order-2' : ''}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              {badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              {title}
              <span className="block text-accent">{titleAccent}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/contact">
                {ctaText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>

          <AnimatedSection animation={reverse ? 'slide-right' : 'slide-left'} className={reverse ? 'lg:order-1' : ''}>
            <div className="relative">
              <img
                src={image}
                alt={imageAlt}
                className="rounded-3xl shadow-extreme w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-5 shadow-prominent hidden md:block">
                <div className="text-2xl font-display font-bold text-accent-foreground">100%</div>
                <div className="text-accent-foreground/80 text-sm">Client Focus</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className={`grid ${services.length > 4 ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'md:grid-cols-3'} gap-6`}>
          {services.map((service, index) => (
            <AnimatedSection key={service.title} animation="fade-up" delay={index * 75}>
              <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                {service.benefits && (
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 hero-pattern" />
        
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-8">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/90 text-sm font-medium">Our Services</span>
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-[1.1] mb-8">
                Solutions That
                <span className="block text-accent">
                  Drive Results
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/70 leading-relaxed max-w-xl">
                Comprehensive services tailored to your unique business needs.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="scale-in" delay={200} className="hidden lg:block">
              <div className="relative">
                <img
                  src={servicesHeroImg}
                  alt="Professional team meeting"
                  className="rounded-3xl shadow-2xl border border-primary-foreground/10"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ServiceSection
        id="workforce"
        badge="Workforce Solutions"
        title="Build Your"
        titleAccent="Dream Team"
        description="Finding the right talent is critical to business success. Our workforce solutions connect you with skilled professionals across IT and non-IT domains, with flexible engagement models designed to meet your specific requirements."
        image={staffingImg}
        imageAlt="HR team reviewing candidates"
        services={workforceServices}
        ctaText="Discuss Hiring Needs"
      />

      <ServiceSection
        id="technology"
        badge="Technology Services"
        title="Custom Software"
        titleAccent="Solutions"
        description="Transform your ideas into powerful digital products. Our technology team delivers custom web and mobile applications with intuitive designs and robust functionality to drive your business forward."
        image={techImg}
        imageAlt="Development team working"
        services={technologyServices}
        ctaText="Start Your Project"
        reverse
        bgClass="bg-muted"
      />

      <ServiceSection
        id="automation"
        badge="Business Automation"
        title="Streamline Your"
        titleAccent="Operations"
        description="Streamlining workflows and automating business processes to improve efficiency and reduce operational costs. Our automation solutions help you focus on what matters most—growing your business."
        image={automationImg}
        imageAlt="Business automation workflow"
        services={automationServices}
        ctaText="Automate Your Business"
      />

      <ServiceSection
        id="marketing"
        badge="Marketing & Growth"
        title="Accelerate Your"
        titleAccent="Digital Presence"
        description="Reach your target audience and drive measurable results with our comprehensive digital marketing services. From paid advertising to SEO and content creation, we help you build a strong online presence."
        image={marketingImg}
        imageAlt="Marketing team analyzing data"
        services={marketingServices}
        ctaText="Grow Your Business"
        reverse
        bgClass="bg-muted"
      />

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 hero-pattern" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-10">
              Let's discuss how our services can help you achieve your business objectives.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 bg-accent hover:bg-accent/90 shadow-glow">
              <Link to="/contact">
                Talk to Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
