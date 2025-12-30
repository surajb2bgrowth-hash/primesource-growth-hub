import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { getBlogBySlug, blogPosts } from '@/data/blogPosts';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 2);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center gradient-hero">
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-custom relative z-10 pt-32 pb-20">
          <AnimatedSection animation="fade-up">
            <Link 
              to="/blogs" 
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
            
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6 backdrop-blur-sm">
              {post.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6 max-w-4xl">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
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
      <section className="relative -mt-20">
        <div className="container-custom">
          <AnimatedSection animation="scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8">
              <AnimatedSection animation="fade-up">
                <div className="prose prose-lg max-w-none 
                  prose-headings:font-display prose-headings:text-foreground 
                  prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-li:text-muted-foreground
                  prose-strong:text-foreground
                  prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                  prose-ul:my-6 prose-ol:my-6
                  prose-li:my-2
                ">
                  {post.content.split('\n').map((paragraph, index) => {
                    if (paragraph.trim().startsWith('## ')) {
                      return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
                    }
                    if (paragraph.trim().startsWith('### ')) {
                      return <h3 key={index}>{paragraph.replace('### ', '')}</h3>;
                    }
                    if (paragraph.trim().startsWith('- **')) {
                      const match = paragraph.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
                      if (match) {
                        return (
                          <li key={index}>
                            <strong>{match[1]}</strong>{match[2] ? `: ${match[2]}` : ''}
                          </li>
                        );
                      }
                    }
                    if (paragraph.trim().startsWith('- ')) {
                      return <li key={index}>{paragraph.replace('- ', '')}</li>;
                    }
                    if (paragraph.trim().match(/^\d+\.\s+/)) {
                      return <li key={index}>{paragraph.replace(/^\d+\.\s+/, '')}</li>;
                    }
                    if (paragraph.trim()) {
                      // Handle links
                      const linkMatch = paragraph.match(/\[(.+?)\]\((.+?)\)/g);
                      if (linkMatch) {
                        let content = paragraph;
                        linkMatch.forEach(link => {
                          const [, text, url] = link.match(/\[(.+?)\]\((.+?)\)/) || [];
                          if (text && url) {
                            content = content.replace(link, `<a href="${url}">${text}</a>`);
                          }
                        });
                        return <p key={index} dangerouslySetInnerHTML={{ __html: content }} />;
                      }
                      return <p key={index}>{paragraph}</p>;
                    }
                    return null;
                  })}
                </div>
              </AnimatedSection>

              {/* Share Section */}
              <AnimatedSection animation="fade-up" className="mt-12 pt-8 border-t border-border">
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
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Author Card */}
                <AnimatedSection animation="fade-up">
                  <div className="card-elevated p-6">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-4">About the Author</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The PrimeSource IT Service and Consulting team brings together experts in IT staffing, 
                      software development, and digital marketing to share insights and best practices.
                    </p>
                    <Link to="/about" className="text-accent text-sm font-medium mt-4 inline-block hover:underline">
                      Learn more about us →
                    </Link>
                  </div>
                </AnimatedSection>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <AnimatedSection animation="fade-up" delay={100}>
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

                {/* CTA Card */}
                <AnimatedSection animation="fade-up" delay={200}>
                  <div className="card-elevated p-6 bg-accent/5 border-accent/20">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">Need Help?</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Have questions about our services? Let's discuss how we can help your business grow.
                    </p>
                    <Button asChild className="w-full rounded-full">
                      <Link to="/contact">Contact Us</Link>
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
              Want to read more?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Explore our collection of articles on IT staffing, technology development, and digital marketing.
            </p>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/blogs">View All Articles</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
