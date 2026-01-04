import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { getBlogBySlug, blogPosts } from '@/data/blogPosts';
import BlogContent, { extractTableOfContents } from '@/components/blog/BlogContent';
import TableOfContents from '@/components/blog/TableOfContents';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import ArticleSchema from '@/components/blog/ArticleSchema';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Get posts from other categories for more internal linking
  const otherPosts = blogPosts
    .filter(p => p.category !== post.category && p.slug !== post.slug)
    .slice(0, 2);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://primesourceitsc.com/blogs/${post.slug}`;
  const canonicalUrl = `https://primesourceitsc.com/blogs/${post.slug}`;
  
  const tocItems = extractTableOfContents(post.content);

  return (
    <Layout>
      {/* Article Schema & Meta Tags */}
      <ArticleSchema post={post} url={canonicalUrl} />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center gradient-hero">
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-custom relative z-10 pt-32 pb-16">
          <AnimatedSection animation="fade-up">
            {/* Breadcrumbs for SEO */}
            <Breadcrumbs 
              items={[
                { label: 'Blog', href: '/blogs' },
                { label: post.category, href: `/blogs?category=${post.category}` },
                { label: post.title }
              ]} 
            />
            
            {/* Category Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium backdrop-blur-sm">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
              <span className="text-primary-foreground/70 text-sm">{post.readTime}</span>
            </div>
            
            {/* H1 Title - Single H1 for SEO */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6 max-w-4xl">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span itemProp="author">{post.author}</span>
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <time dateTime={post.date}>{post.date}</time>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime}
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-16">
        <div className="container-custom">
          <AnimatedSection animation="scale-in">
            <figure className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={post.image}
                alt={`${post.title} - ${post.metaDescription}`}
                className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </figure>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8" itemScope itemType="https://schema.org/Article">
              <meta itemProp="headline" content={post.title} />
              <meta itemProp="description" content={post.metaDescription} />
              
              <AnimatedSection animation="fade-up">
                <BlogContent content={post.content} />
              </AnimatedSection>

              {/* Internal Links Section */}
              <AnimatedSection animation="fade-up" className="mt-12 pt-8 border-t border-border">
                <h2 className="text-xl font-display font-bold text-foreground mb-6">
                  Continue Reading
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedPosts.slice(0, 2).map((related) => (
                    <Link 
                      key={related.slug}
                      to={`/blogs/${related.slug}`}
                      className="group card-elevated p-4 hover:border-accent/30 transition-all"
                    >
                      <span className="text-xs text-accent font-medium uppercase tracking-wide">
                        {related.category}
                      </span>
                      <h3 className="text-foreground font-semibold mt-2 group-hover:text-accent transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {related.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </AnimatedSection>

              {/* Keywords/Tags for SEO */}
              <AnimatedSection animation="fade-up" className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((keyword, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              {/* Share Section */}
              <AnimatedSection animation="fade-up" className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Share2 className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground font-medium">Share this article:</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                {/* Table of Contents */}
                <AnimatedSection animation="fade-up">
                  <TableOfContents items={tocItems} />
                </AnimatedSection>

                {/* Author Card */}
                <AnimatedSection animation="fade-up" delay={100}>
                  <div className="card-elevated p-6">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-4">About the Author</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The PrimeSource IT Service and Consulting team brings together experts in 
                      <Link to="/services#workforce" className="text-accent hover:underline"> IT staffing</Link>, 
                      <Link to="/services#technology" className="text-accent hover:underline"> software development</Link>, and 
                      <Link to="/services#marketing" className="text-accent hover:underline"> digital marketing</Link> to share insights and best practices.
                    </p>
                    <Link to="/about" className="text-accent text-sm font-medium mt-4 inline-block hover:underline">
                      Learn more about our team →
                    </Link>
                  </div>
                </AnimatedSection>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <AnimatedSection animation="fade-up" delay={200}>
                    <div className="card-elevated p-6">
                      <h3 className="font-display font-semibold text-lg text-foreground mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedPosts.map((related) => (
                          <Link 
                            key={related.slug}
                            to={`/blogs/${related.slug}`}
                            className="block group"
                          >
                            <div className="flex gap-3">
                              <img 
                                src={related.image} 
                                alt={related.title}
                                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                                loading="lazy"
                              />
                              <div>
                                <h4 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                                  {related.title}
                                </h4>
                                <p className="text-xs text-muted-foreground mt-1">{related.readTime}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                )}

                {/* Explore More Categories */}
                {otherPosts.length > 0 && (
                  <AnimatedSection animation="fade-up" delay={300}>
                    <div className="card-elevated p-6">
                      <h3 className="font-display font-semibold text-lg text-foreground mb-4">Explore More</h3>
                      <div className="space-y-3">
                        {otherPosts.map((other) => (
                          <Link 
                            key={other.slug}
                            to={`/blogs/${other.slug}`}
                            className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                          >
                            <span className="text-xs text-accent/70 uppercase tracking-wide">{other.category}</span>
                            <p className="line-clamp-1 mt-1">{other.title}</p>
                          </Link>
                        ))}
                        <Link 
                          to="/blogs" 
                          className="block text-accent text-sm font-medium mt-4 hover:underline"
                        >
                          View all articles →
                        </Link>
                      </div>
                    </div>
                  </AnimatedSection>
                )}

                {/* CTA Card */}
                <AnimatedSection animation="fade-up" delay={400}>
                  <div className="card-elevated p-6 bg-accent/5 border-accent/20">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      Need Expert Help?
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Looking for professional 
                      <Link to="/services" className="text-accent hover:underline"> IT services</Link>, 
                      <Link to="/services#marketing" className="text-accent hover:underline"> digital marketing</Link>, or 
                      <Link to="/services#workforce" className="text-accent hover:underline"> staffing solutions</Link>? 
                      Let's discuss how we can help your business grow.
                    </p>
                    <Button asChild className="w-full rounded-full">
                      <Link to="/contact">Get Free Consultation</Link>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More Articles CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Want to Read More?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Explore our collection of expert articles on 
              <Link to="/blogs?category=Technology" className="text-accent hover:underline"> technology</Link>, 
              <Link to="/blogs?category=Marketing" className="text-accent hover:underline"> digital marketing</Link>, 
              <Link to="/blogs?category=Workforce" className="text-accent hover:underline"> IT staffing</Link>, and 
              <Link to="/blogs?category=Automation" className="text-accent hover:underline"> business automation</Link>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/blogs">View All Articles</Link>
              </Button>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/case-studies">See Our Case Studies</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
