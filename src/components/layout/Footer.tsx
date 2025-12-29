import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';
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
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blogs' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom section-padding-sm relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logoDark} 
                alt="PrimeSource IT Consulting" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-background/70 mb-8 leading-relaxed max-w-sm">
              End-to-end IT consulting, workforce solutions, and digital growth services 
              for startups, SMEs, and growing enterprises.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/primesource-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@primesourceitsc.com"
                className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/60 hover:text-accent text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/60 hover:text-accent text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a 
                href="mailto:contact@primesourceitsc.com"
                className="flex items-center gap-3 text-background/60 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">contact@primesourceitsc.com</span>
              </a>
              <div className="flex items-start gap-3 text-background/60">
                <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm leading-relaxed">
                  4th Floor, Bizness Square Junction,<br />
                  HITEC City, Madhapur,<br />
                  Hyderabad, Telangana – 500081
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} PrimeSource IT Service and Consulting PVT LTD. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-background/50 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/50 hover:text-accent text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
