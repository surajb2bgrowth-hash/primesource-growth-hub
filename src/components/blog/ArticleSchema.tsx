import { BlogPost } from '@/data/blogPosts';
import { Helmet } from 'react-helmet-async';

interface ArticleSchemaProps {
  post: BlogPost;
  url: string;
}

export default function ArticleSchema({ post, url }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": "PrimeSource IT Service and Consulting",
      "url": "https://primesourceitsc.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PrimeSource IT Service and Consulting PVT LTD",
      "logo": {
        "@type": "ImageObject",
        "url": "https://primesourceitsc.com/favicon.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "keywords": post.keywords.join(", "),
    "articleSection": post.category,
    "wordCount": post.content.split(/\s+/).length
  };

  return (
    <Helmet>
      <title>{post.title} | PrimeSource IT Service and Consulting</title>
      <meta name="description" content={post.metaDescription} />
      <meta name="keywords" content={post.keywords.join(", ")} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="PrimeSource IT Service and Consulting" />
      <meta property="article:published_time" content={post.date} />
      <meta property="article:section" content={post.category} />
      {post.keywords.map((keyword, i) => (
        <meta key={i} property="article:tag" content={keyword} />
      ))}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.metaDescription} />
      
      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
