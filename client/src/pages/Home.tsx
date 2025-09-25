import Hero from '@/components/Hero';
import WhyAdventureMatters from '@/components/WhyAdventureMatters';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { Users, Shield, Compass, Heart, Target, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Why Adventure Matters */}
      <WhyAdventureMatters />

      {/* What Adventure Club Means */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-sans font-bold text-5xl md:text-6xl mb-8 tracking-tight">
              More Than Adventure
            </h2>
            <p className="font-serif text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're a community where curiosity meets courage, where friendships are forged in shared challenges, 
              and where every step outside your comfort zone leads to growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-card/50 backdrop-blur-apple hover-elevate">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 mx-auto mb-6 text-accent" />
                <h3 className="font-sans font-semibold text-xl mb-4">Safety & Trust</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  Every adventure begins with trust. Our rigorous safety protocols and experienced leaders 
                  ensure you can focus on discovery, not worry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-apple hover-elevate">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 mx-auto mb-6 text-accent" />
                <h3 className="font-sans font-semibold text-xl mb-4">Inclusive Community</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  From beginners to experienced adventurers, everyone has a place here. 
                  Diversity of experience makes our community stronger.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-apple hover-elevate">
              <CardContent className="p-8 text-center">
                <Compass className="h-12 w-12 mx-auto mb-6 text-accent" />
                <h3 className="font-sans font-semibold text-xl mb-4">Guided Growth</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  Learn from experienced mentors who've walked these paths before. 
                  Growth happens when knowledge meets opportunity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-apple hover-elevate">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 mx-auto mb-6 text-accent" />
                <h3 className="font-sans font-semibold text-xl mb-4">Lasting Bonds</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  The friendships formed in adventure last a lifetime. 
                  Shared challenges create unbreakable connections.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-apple hover-elevate">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 mx-auto mb-6 text-accent" />
                <h3 className="font-sans font-semibold text-xl mb-4">Personal Achievement</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  Discover capabilities you never knew you had. 
                  Every challenge overcome builds confidence for life's journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-apple hover-elevate">
              <CardContent className="p-8 text-center">
                <Star className="h-12 w-12 mx-auto mb-6 text-accent" />
                <h3 className="font-sans font-semibold text-xl mb-4">Excellence</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  We strive for excellence in every expedition, every workshop, 
                  and every moment of growth we facilitate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-sans font-bold text-5xl md:text-6xl mb-8 tracking-tight">
              A Community of <span className="text-accent">Explorers</span>
            </h2>
            <p className="font-serif text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Join 200+ students who've discovered that the greatest adventures aren't just about places you go, 
              but the person you become along the way.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="font-sans font-semibold text-2xl mb-4">Start Small, Dream Big</h3>
                <p className="font-serif text-lg text-muted-foreground leading-relaxed">
                  Every explorer started with a single step. Whether it's your first day-hike or 
                  your hundredth summit, we meet you where you are and help you grow.
                </p>
              </div>
              
              <div>
                <h3 className="font-sans font-semibold text-2xl mb-4">Learn by Doing</h3>
                <p className="font-serif text-lg text-muted-foreground leading-relaxed">
                  Skills are built through experience. Our workshops, mentorship programs, and 
                  guided adventures create learning opportunities you can't find in any classroom.
                </p>
              </div>
              
              <div>
                <h3 className="font-sans font-semibold text-2xl mb-4">Adventure for All</h3>
                <p className="font-serif text-lg text-muted-foreground leading-relaxed">
                  From single-day hikes to multi-day expeditions, from gear workshops to 
                  leadership training — there's a path for every level of curiosity and commitment.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-8 rounded-2xl">
                <div className="font-sans font-bold text-4xl text-foreground mb-2">200+</div>
                <div className="font-serif text-muted-foreground">Students discovering their potential</div>
              </div>
              
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-8 rounded-2xl">
                <div className="font-sans font-bold text-4xl text-foreground mb-2">3</div>
                <div className="font-serif text-muted-foreground">Years of building community</div>
              </div>
              
              <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-8 rounded-2xl">
                <div className="font-sans font-bold text-4xl text-foreground mb-2">100%</div>
                <div className="font-serif text-muted-foreground">Commitment to safety and growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background to-card/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans font-bold text-5xl md:text-6xl mb-8 tracking-tight">
            Your Adventure <span className="text-accent">Begins Here</span>
          </h2>
          <p className="font-serif text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed">
            Join a community that believes in the transformative power of adventure. 
            Discover not just new places, but new possibilities within yourself.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/join">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-12 py-6 rounded-full font-medium"
                data-testid="button-join-ventures-crew"
              >
                Join Our Community
              </Button>
            </Link>
            
            <Link href="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-12 py-6 rounded-full border-muted-foreground/20 hover:bg-muted/20"
                data-testid="button-learn-more-about"
              >
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}