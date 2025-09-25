import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-background/95">
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-8">
          <div className="font-sans font-light text-xl sm:text-2xl text-muted-foreground mb-4 tracking-wide">
            Ventures Crew
          </div>
          <h1 className="font-sans font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 leading-none tracking-tight">
            Adventure<br />
            <span className="text-accent">Awaits</span>
          </h1>
        </div>
        
        <div className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl mb-12 text-accent tracking-wider opacity-90">
          dare. discover. do.
        </div>
        
        <p className="font-serif text-xl sm:text-2xl md:text-3xl mb-16 max-w-4xl mx-auto leading-relaxed text-muted-foreground">
          Where students discover who they are through challenges that matter, friendships that last, and experiences that transform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Link href="/join">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-12 py-6 font-sans font-medium rounded-full transition-all duration-300"
              data-testid="button-discover-adventure"
            >
              Discover Adventure
            </Button>
          </Link>
          
          <Link href="/about">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-12 py-6 font-sans font-medium rounded-full border-muted-foreground/20 hover:bg-muted/20 transition-all duration-300"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </Link>
        </div>
        
        {/* Minimal stats */}
        <div className="text-center">
          <div className="flex justify-center gap-16 text-center">
            <div>
              <div className="font-sans font-light text-4xl text-foreground mb-2">200+</div>
              <div className="font-serif text-muted-foreground">Adventurers</div>
            </div>
            <div>
              <div className="font-sans font-light text-4xl text-foreground mb-2">3</div>
              <div className="font-serif text-muted-foreground">Years Strong</div>
            </div>
            <div>
              <div className="font-sans font-light text-4xl text-foreground mb-2">∞</div>
              <div className="font-serif text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}