import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mountain, Sun, Moon } from 'lucide-react';

const navigation = [
  { name: 'Adventure', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Stories', href: '/blog' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Safety', href: '/safety' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [location] = useLocation();
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light');
    console.log('Theme toggled:', !isDark ? 'light' : 'dark');
  };

  return (
    <header className="bg-background/80 backdrop-blur-apple border-b border-border/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover-elevate rounded-xl px-3 py-2" data-testid="link-home">
            <Mountain className="h-6 w-6 text-accent" />
            <div className="flex flex-col">
              <span className="font-sans font-medium text-lg text-foreground">Ventures Crew</span>
              <span className="font-serif text-xs text-muted-foreground -mt-1">dare. discover. do.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`font-sans font-medium text-sm transition-colors duration-200 cursor-pointer ${
                    location === item.href 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-muted/20"
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <div className="hidden md:flex items-center gap-4">
              <Link href="/join">
                <Button 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 font-medium"
                  data-testid="button-join-now"
                >
                  Join Now
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden rounded-full" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-apple">
                <div className="flex flex-col gap-6 mt-12">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                      <span
                        className={`font-sans font-medium text-xl transition-colors duration-200 cursor-pointer block ${
                          location === item.href 
                            ? 'text-foreground' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        data-testid={`mobile-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                  <div className="border-t border-border/20 pt-6 mt-6">
                    <Link href="/join" onClick={() => setMobileMenuOpen(false)}>
                      <Button 
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                        data-testid="mobile-button-join-now"
                      >
                        Join Ventures Crew
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}