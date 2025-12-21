import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, ChevronRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import techImg from '@/assets/tech-services.jpg';
import marketingImg from '@/assets/digital-marketing.jpg';
import staffingImg from '@/assets/staffing-solutions.jpg';
import automationImg from '@/assets/business-automation.jpg';
import blogHeroImg from '@/assets/blog-hero.jpg';

const blogPosts = [
  {
    title: 'Top 5 IT Staffing Trends to Watch in 2025',
    excerpt: 'Discover the emerging trends shaping IT recruitment and workforce solutions. Learn how businesses can stay ahead in talent acquisition.',
    author: 'PrimeSource Team',
    date: 'December 15, 2024',
    readTime: '5 min read',
    image: staffingImg,
    category: 'Workforce',
    slug: 'it-staffing-trends-2025',
  },
  {
    title: 'How to Choose the Right Technology Partner for Your Startup',
    excerpt: 'A comprehensive guide to evaluating and selecting a technology development partner that aligns with your business goals.',
    author: 'PrimeSource Team',
    date: 'December 10, 2024',
    readTime: '7 min read',
    image: techImg,
    category: 'Technology',
    slug: 'choosing-technology-partner',
  },
  {
    title: 'Digital Marketing Strategies That Drive B2B Growth',
    excerpt: 'Explore proven digital marketing approaches that help B2B companies generate leads and build brand awareness.',
    author: 'PrimeSource Team',
    date: 'December 5, 2024',
    readTime: '6 min read',
    image: marketingImg,
    category: 'Marketing',
    slug: 'b2b-digital-marketing-strategies',
  },
  {
    title: 'Business Process Automation: A Complete Guide',
    excerpt: 'Learn how workflow automation can transform your operations, reduce costs, and improve efficiency across departments.',
    author: 'PrimeSource Team',
    date: 'November 28, 2024',
    readTime: '8 min read',
    image: automationImg,
    category: 'Automation',
    slug: 'business-process-automation-guide',
  },
  {
    title: 'Building Scalable Web Applications in 2024',
    excerpt: 'Best practices for developing web applications that can handle growth while maintaining performance and reliability.',
    author: 'PrimeSource Team',
    date: 'November 20, 2024',
    readTime: '6 min read',
    image: techImg,
    category: 'Technology',
    slug: 'scalable-web-applications',
  },
  {
    title: 'The Future of Remote IT Teams',
    excerpt: 'How companies are successfully building and managing distributed technology teams in the modern workplace.',
    author: 'PrimeSource Team',
    date: 'November 15, 2024',
    readTime: '5 min read',
    image: staffingImg,
    category: 'Workforce',
    slug: 'future-remote-it-teams',
  },
];

const categories = ['All', 'Workforce', 'Technology', 'Marketing', 'Automation'];

export default function BlogsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center gradient-hero">
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6 backdrop-blur-sm">
                Blog
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
                Insights & Industry Trends
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Stay informed with our latest articles on IT staffing, technology development, 
                and digital marketing best practices.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="scale-in" delay={200} className="hidden lg:block">
              <div className="relative">
                <img
                  src={blogHeroImg}
                  alt="Content creation workspace"
                  className="rounded-3xl shadow-2xl border border-primary-foreground/10"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Blog Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4">
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
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 rounded-full bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.slug} animation="fade-up" delay={index * 100}>
                <article className="card-elevated overflow-hidden h-full flex flex-col group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
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
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
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

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights and industry trends delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-background border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <Button className="rounded-full px-6">
                Subscribe <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
