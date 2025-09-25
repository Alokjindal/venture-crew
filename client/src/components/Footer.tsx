import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mountain } from 'lucide-react';
import { Link } from 'wouter';
import { useState } from 'react';

const footerSections = {
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Trips & Events', href: '/trips' },
    { name: 'Safety & Gear', href: '/safety' },
    { name: 'Gallery', href: '/gallery' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Join Club', href: '/join' },
    { name: 'Faculty & Sponsors', href: '/faculty' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Safety Waiver', href: '/waiver' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', newsletterEmail);
    setNewsletterEmail('');
    // todo: remove mock functionality - integrate with actual newsletter service
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Mountain className="h-8 w-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg text-foreground">Ventures Crew</span>
                <span className="font-serif text-xs text-muted-foreground -mt-1">dare. discover. do.</span>
              </div>
            </Link>
            
            <p className="font-serif text-sm text-muted-foreground">
              GNDEC's premier adventure club, fostering safe exploration and lifelong friendships through outdoor adventures.
            </p>
            
            <div className="space-y-2">
              <p className="font-serif text-sm text-foreground">Contact:</p>
              <p className="font-serif text-sm text-muted-foreground">venturescrew@gndec.ac.in</p>
              <p className="font-serif text-sm text-muted-foreground">@ventures.crew</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {footerSections.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto font-serif text-sm text-muted-foreground hover:text-foreground justify-start"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2">
              {footerSections.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto font-serif text-sm text-muted-foreground hover:text-foreground justify-start"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-foreground">Stay Updated</h4>
            <p className="font-serif text-sm text-muted-foreground">
              Get the latest adventure updates and trip announcements.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit" 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                data-testid="button-newsletter-subscribe"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-serif text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Ventures Crew, GNDEC. All rights reserved.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {footerSections.legal.map((link) => (
                <Link key={link.name} href={link.href}>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto font-serif text-sm text-muted-foreground hover:text-foreground"
                    data-testid={`footer-legal-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}