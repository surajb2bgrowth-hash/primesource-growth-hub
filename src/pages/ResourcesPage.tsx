import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowRight, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import techImg from '@/assets/tech-services.jpg';
import marketingImg from '@/assets/digital-marketing.jpg';
import staffingImg from '@/assets/staffing-solutions.jpg';

const blogPosts = [
  {
    title: 'Top 5 IT Staffing Trends to Watch in 2025',
    excerpt: 'Discover the emerging trends shaping IT recruitment and workforce solutions. Learn how businesses can stay ahead in talent acquisition.',
    author: 'PrimeSource Team',
    date: 'December 15, 2024',
    readTime: '5 min read',
    image: staffingImg,
    slug: 'it-staffing-trends-2025',
  },
  {
    title: 'How to Choose the Right Technology Partner for Your Startup',
    excerpt: 'A comprehensive guide to evaluating and selecting a technology development partner that aligns with your business goals.',
    author: 'PrimeSource Team',
    date: 'December 10, 2024',
    readTime: '7 min read',
    image: techImg,
    slug: 'choosing-technology-partner',
  },
  {
    title: 'Digital Marketing Strategies That Drive B2B Growth',
    excerpt: 'Explore proven digital marketing approaches that help B2B companies generate leads and build brand awareness.',
    author: 'PrimeSource Team',
    date: 'December 5, 2024',
    readTime: '6 min read',
    image: marketingImg,
    slug: 'b2b-digital-marketing-strategies',
  },
];

const caseStudies = [
  {
    title: 'E-Commerce Platform Development',
    client: 'Retail Startup',
    challenge: 'Build a scalable online store with inventory management and payment integration.',
    solution: 'Developed a custom e-commerce platform with React frontend, Node.js backend, and integrated payment gateways.',
    outcome: 'Launched successfully with smooth user experience and robust order management capabilities.',
    image: techImg,
  },
  {
    title: 'IT Team Augmentation',
    client: 'Growing Tech Company',
    challenge: 'Scale development capacity to meet product roadmap deadlines.',
    solution: 'Provided skilled React and Node.js developers through our IT staffing services with seamless onboarding.',
    outcome: 'Team successfully integrated and contributed to on-time feature delivery.',
    image: staffingImg,
  },
  {
    title: 'Lead Generation Campaign',
    client: 'B2B Services Company',
    challenge: 'Generate qualified leads through digital channels with limited marketing budget.',
    solution: 'Implemented targeted LinkedIn ads and Google Ads campaigns with optimized landing pages.',
    outcome: 'Achieved consistent lead flow with improved cost-per-lead metrics.',
    image: marketingImg,
  },
];

export default function ResourcesPage() {
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
              Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Insights & Success Stories
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Explore our blog for industry insights and learn how we've helped businesses 
              achieve their goals through our case studies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section-padding scroll-mt-24">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Latest Insights & Trends
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our latest articles on IT staffing, technology development, 
              and digital marketing best practices.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.slug} animation="fade-up" delay={index * 100}>
                <article className="card-elevated overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="inline-flex items-center gap-1 text-accent font-medium text-sm hover:gap-2 transition-all cursor-pointer">
                        Read More <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="section-padding bg-muted scroll-mt-24">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Real Results for Real Businesses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses overcome challenges and achieve their objectives 
              through our IT, staffing, and marketing solutions.
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.title} animation={index % 2 === 0 ? 'slide-right' : 'slide-left'}>
                <div className={`bg-background rounded-2xl shadow-elevated overflow-hidden flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-2/5 relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                      {study.client}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                      {study.title}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Challenge</h4>
                        <p className="text-muted-foreground text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Solution</h4>
                        <p className="text-muted-foreground text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Outcome</h4>
                        <p className="text-muted-foreground text-sm">{study.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Start the Conversation <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
