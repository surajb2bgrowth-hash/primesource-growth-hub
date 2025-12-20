import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import logoDark from '@/assets/logo-dark.png';

const footerLinks = {
  services: [
    { label: 'IT Staffing', href: '/services#workforce' },
    { label: 'Web Development', href: '/services#technology' },
    { label: 'Business Automation', href: '/services#automation' },
    { label: 'Digital Marketing', href: '/services#marketing' },
    { label: 'SEO Services', href: '/services#marketing' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Case Studies', href: '/resources#case-studies' },
    { label: 'Blog', href: '/resources#blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logoDark} 
                alt="PrimeSource IT Consulting" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              End-to-end IT consulting, workforce solutions, and digital growth services 
              for startups, SMEs, and growing enterprises.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/primesource-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@primesourceitc.com"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/70 text-sm leading-relaxed">
                  4th Floor, Bizness Square Junction,<br />
                  Opposite Hitex Road, Jubilee Enclave,<br />
                  HITEC City, Madhapur,<br />
                  Hyderabad, Telangana – 500081, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <a
                  href="mailto:info@primesourceitc.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  info@primesourceitc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} PrimeSource IT Consulting. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
