import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import techImg from '@/assets/tech-services.jpg';
import marketingImg from '@/assets/digital-marketing.jpg';
import staffingImg from '@/assets/staffing-solutions.jpg';
import automationImg from '@/assets/business-automation.jpg';
import caseStudiesHeroImg from '@/assets/case-studies-hero.jpg';

const caseStudies = [
  {
    title: 'E-Commerce Platform Development',
    client: 'Retail Startup',
    industry: 'E-Commerce',
    challenge: 'Build a scalable online store with inventory management and payment integration.',
    solution: 'Developed a custom e-commerce platform with React frontend, Node.js backend, and integrated payment gateways.',
    outcome: 'Launched successfully with smooth user experience and robust order management capabilities.',
    results: ['Seamless checkout flow', 'Real-time inventory sync', 'Mobile-responsive design'],
    image: techImg,
    category: 'Technology',
  },
  {
    title: 'IT Team Augmentation',
    client: 'Growing Tech Company',
    industry: 'Technology',
    challenge: 'Scale development capacity to meet product roadmap deadlines.',
    solution: 'Provided skilled React and Node.js developers through our IT staffing services with seamless onboarding.',
    outcome: 'Team successfully integrated and contributed to on-time feature delivery.',
    results: ['3 senior developers placed', 'Zero onboarding delays', 'Full roadmap delivery'],
    image: staffingImg,
    category: 'Workforce',
  },
  {
    title: 'Lead Generation Campaign',
    client: 'B2B Services Company',
    industry: 'Professional Services',
    challenge: 'Generate qualified leads through digital channels with limited marketing budget.',
    solution: 'Implemented targeted LinkedIn ads and Google Ads campaigns with optimized landing pages.',
    outcome: 'Achieved consistent lead flow with improved cost-per-lead metrics.',
    results: ['40% lower CPL', 'Quality lead pipeline', 'Optimized ad spend'],
    image: marketingImg,
    category: 'Marketing',
  },
  {
    title: 'Workflow Automation Implementation',
    client: 'Healthcare Provider',
    industry: 'Healthcare',
    challenge: 'Manual processes causing delays in patient data management and reporting.',
    solution: 'Designed and implemented automated workflows for patient intake, scheduling, and reporting.',
    outcome: 'Reduced manual workload and improved data accuracy across departments.',
    results: ['50% time savings', 'Reduced errors', 'Faster reporting'],
    image: automationImg,
    category: 'Automation',
  },
  {
    title: 'Mobile App Development',
    client: 'Fitness Startup',
    industry: 'Health & Wellness',
    challenge: 'Create an engaging mobile app for workout tracking and community features.',
    solution: 'Built a cross-platform mobile app with React Native, featuring social integration and real-time sync.',
    outcome: 'App launched on both iOS and Android with positive user feedback.',
    results: ['Cross-platform launch', 'Intuitive UX', 'Social features integrated'],
    image: techImg,
    category: 'Technology',
  },
  {
    title: 'Non-IT Staff Placement',
    client: 'Manufacturing Company',
    industry: 'Manufacturing',
    challenge: 'Quickly fill multiple operational and administrative roles during expansion.',
    solution: 'Leveraged our extensive talent network to source, screen, and place qualified candidates.',
    outcome: 'All positions filled within target timeframe with high retention rates.',
    results: ['Multiple roles filled', 'Fast turnaround', 'High retention'],
    image: staffingImg,
    category: 'Workforce',
  },
];

const categories = ['All', 'Technology', 'Workforce', 'Marketing', 'Automation'];

export default function CaseStudiesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center gradient-hero">
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6 backdrop-blur-sm">
                Case Studies
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
                Real Results for Real Businesses
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                See how we've helped businesses overcome challenges and achieve their objectives 
                through our IT, staffing, and marketing solutions.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="scale-in" delay={200} className="hidden lg:block">
              <div className="relative">
                <img
                  src={caseStudiesHeroImg}
                  alt="Business analytics and success metrics"
                  className="rounded-3xl shadow-2xl border border-primary-foreground/10"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === 'All'
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.title} animation={index % 2 === 0 ? 'slide-right' : 'slide-left'}>
                <div className={`bg-card rounded-3xl shadow-elevated overflow-hidden flex flex-col lg:flex-row border border-border/50 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-2/5 relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary/30 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                        {study.client}
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-6">
                      {study.title}
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Outcome</h4>
                        <p className="text-muted-foreground">{study.outcome}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {study.results.map((result) => (
                        <span key={result} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                          <CheckCircle className="w-4 h-4" />
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
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
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/contact">
                Start the Conversation <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
