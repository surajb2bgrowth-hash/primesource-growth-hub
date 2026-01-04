import { Link } from 'react-router-dom';
import { BlogPost } from '@/data/blogPosts';

interface BlogContentProps {
  content: string;
}

interface ParsedSection {
  id: string;
  title: string;
  level: number;
}

export function extractTableOfContents(content: string): ParsedSection[] {
  const sections: ParsedSection[] = [];
  const lines = content.split('\n');
  
  lines.forEach((line) => {
    const h2Match = line.trim().match(/^## (.+)/);
    const h3Match = line.trim().match(/^### (.+)/);
    
    if (h2Match) {
      const title = h2Match[1];
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      sections.push({ id, title, level: 2 });
    } else if (h3Match) {
      const title = h3Match[1];
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      sections.push({ id, title, level: 3 });
    }
  });
  
  return sections;
}

export default function BlogContent({ content }: BlogContentProps) {
  const renderContent = () => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let listItems: React.ReactNode[] = [];
    let listType: 'ul' | 'ol' | null = null;
    let currentKey = 0;

    const flushList = () => {
      if (listItems.length > 0 && listType) {
        if (listType === 'ul') {
          elements.push(
            <ul key={`list-${currentKey++}`} className="my-6 space-y-3 list-none">
              {listItems}
            </ul>
          );
        } else {
          elements.push(
            <ol key={`list-${currentKey++}`} className="my-6 space-y-3 list-decimal list-inside">
              {listItems}
            </ol>
          );
        }
        listItems = [];
        listType = null;
      }
    };

    const parseInlineLinks = (text: string): React.ReactNode => {
      const linkRegex = /\[(.+?)\]\((.+?)\)/g;
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(text)) !== null) {
        // Add text before the link
        if (match.index > lastIndex) {
          parts.push(text.slice(lastIndex, match.index));
        }
        
        const linkText = match[1];
        const linkUrl = match[2];
        
        // Internal or external link
        if (linkUrl.startsWith('/')) {
          parts.push(
            <Link 
              key={`link-${match.index}`}
              to={linkUrl} 
              className="text-accent font-medium hover:underline"
            >
              {linkText}
            </Link>
          );
        } else {
          parts.push(
            <a 
              key={`link-${match.index}`}
              href={linkUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent font-medium hover:underline"
            >
              {linkText}
            </a>
          );
        }
        
        lastIndex = match.index + match[0].length;
      }

      // Add remaining text
      if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
      }

      return parts.length > 0 ? parts : text;
    };

    const parseBoldText = (text: string): React.ReactNode => {
      const boldRegex = /\*\*(.+?)\*\*/g;
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          parts.push(parseInlineLinks(text.slice(lastIndex, match.index)));
        }
        parts.push(<strong key={`bold-${match.index}`} className="text-foreground font-semibold">{parseInlineLinks(match[1])}</strong>);
        lastIndex = match.index + match[0].length;
      }

      if (lastIndex < text.length) {
        parts.push(parseInlineLinks(text.slice(lastIndex)));
      }

      return parts.length > 0 ? parts : parseInlineLinks(text);
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // H2 Heading
      if (trimmedLine.startsWith('## ')) {
        flushList();
        const title = trimmedLine.replace('## ', '');
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        elements.push(
          <h2 
            key={`h2-${index}`} 
            id={id}
            className="text-2xl md:text-3xl font-display font-bold text-foreground mt-12 mb-6 scroll-mt-24"
          >
            {title}
          </h2>
        );
        return;
      }

      // H3 Heading
      if (trimmedLine.startsWith('### ')) {
        flushList();
        const title = trimmedLine.replace('### ', '');
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        elements.push(
          <h3 
            key={`h3-${index}`} 
            id={id}
            className="text-xl md:text-2xl font-display font-semibold text-foreground mt-10 mb-4 scroll-mt-24"
          >
            {title}
          </h3>
        );
        return;
      }

      // Bold list item
      if (trimmedLine.startsWith('- **')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        const match = trimmedLine.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
        if (match) {
          listItems.push(
            <li key={`li-${index}`} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
              <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>
                <strong className="text-foreground font-semibold">{match[1]}</strong>
                {match[2] && <>: {parseBoldText(match[2])}</>}
              </span>
            </li>
          );
        }
        return;
      }

      // Regular list item
      if (trimmedLine.startsWith('- ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        listItems.push(
          <li key={`li-${index}`} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
            <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
            <span>{parseBoldText(trimmedLine.replace('- ', ''))}</span>
          </li>
        );
        return;
      }

      // Numbered list item
      if (trimmedLine.match(/^\d+\.\s+/)) {
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        listItems.push(
          <li key={`li-${index}`} className="text-muted-foreground leading-relaxed pl-2">
            {parseBoldText(trimmedLine.replace(/^\d+\.\s+/, ''))}
          </li>
        );
        return;
      }

      // Regular paragraph
      if (trimmedLine) {
        flushList();
        elements.push(
          <p key={`p-${index}`} className="text-muted-foreground leading-relaxed mb-6">
            {parseBoldText(trimmedLine)}
          </p>
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <article className="prose prose-lg max-w-none">
      {renderContent()}
    </article>
  );
}
