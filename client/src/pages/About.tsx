import FounderProfile from '@/components/FounderProfile';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Target, Eye, Heart, Users, Award, Calendar } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-sans font-bold text-4xl md:text-5xl mb-6">About Ventures Crew</h1>
          <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are GNDEC's premier adventure club, dedicated to fostering courage, discovery, and action 
            through safe, meaningful outdoor experiences that build character and lifelong friendships.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="hover-elevate">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="font-sans font-bold text-2xl">Our Mission</h2>
              </div>
              <p className="font-serif text-muted-foreground leading-relaxed">
                To create a supportive community where GNDEC students can challenge themselves, 
                develop leadership skills, and forge lasting friendships through safe, well-organized 
                outdoor adventures. We believe in responsible exploration that respects both nature 
                and personal limits.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-primary" />
                <h2 className="font-sans font-bold text-2xl">Our Vision</h2>
              </div>
              <p className="font-serif text-muted-foreground leading-relaxed">
                To be recognized as the leading adventure club that transforms students into confident, 
                capable leaders who carry the spirit of adventure throughout their lives. We envision 
                a campus culture where outdoor exploration is valued as essential to personal development.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl mb-4">Our Values</h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from planning adventures to building our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-sans font-semibold text-lg mb-3">Safety & Care</h3>
                <p className="font-serif text-sm text-muted-foreground">
                  Every decision prioritizes the wellbeing of our members. We maintain rigorous safety 
                  standards and create an environment where everyone feels supported.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-sans font-semibold text-lg mb-3">Inclusive Community</h3>
                <p className="font-serif text-sm text-muted-foreground">
                  We welcome students of all backgrounds and experience levels. Our strength comes 
                  from diversity and mutual respect.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-sans font-semibold text-lg mb-3">Excellence & Growth</h3>
                <p className="font-serif text-sm text-muted-foreground">
                  We strive for excellence in everything we do while encouraging personal growth 
                  and stepping outside comfort zones.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16 bg-card rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="font-sans font-bold text-3xl mb-4">Our Impact</h2>
            <p className="font-serif text-muted-foreground">
              Since our founding, we've built a community that continues to grow and inspire.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="font-sans font-bold text-3xl text-primary mb-2">200+</div>
              <div className="font-serif text-sm text-muted-foreground">Active Members</div>
            </div>
            
            <div className="text-center">
              <div className="font-sans font-bold text-3xl text-primary mb-2">50+</div>
              <div className="font-serif text-sm text-muted-foreground">Adventures Completed</div>
            </div>
            
            <div className="text-center">
              <div className="font-sans font-bold text-3xl text-primary mb-2">3</div>
              <div className="font-serif text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            
            <div className="text-center">
              <div className="font-sans font-bold text-3xl text-primary mb-2">100%</div>
              <div className="font-serif text-sm text-muted-foreground">Safety Record</div>
            </div>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl mb-4">Meet Our Founder</h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
              Learn about the visionary who started Ventures Crew and continues to lead our community 
              with passion and dedication.
            </p>
          </div>
          
          <FounderProfile />
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl mb-4">What We Do</h2>
            <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
              From weekend hikes to multi-day expeditions, our activities are designed to challenge, 
              inspire, and create unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-sans font-semibold text-xl mb-3">Regular Activities</h3>
                <ul className="font-serif text-muted-foreground space-y-2">
                  <li>• Weekly hiking expeditions to nearby hills</li>
                  <li>• Monthly rock climbing workshops</li>
                  <li>• Seasonal river rafting adventures</li>
                  <li>• Team building camps and overnight stays</li>
                  <li>• Safety training and equipment workshops</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-sans font-semibold text-xl mb-3">Special Programs</h3>
                <ul className="font-serif text-muted-foreground space-y-2">
                  <li>• Leadership development courses</li>
                  <li>• Environmental awareness initiatives</li>
                  <li>• Inter-college adventure competitions</li>
                  <li>• Community service projects</li>
                  <li>• Alumni networking events</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-accent text-white">
            <CardContent className="p-12">
              <h2 className="font-sans font-bold text-3xl mb-4">Ready to Join Our Story?</h2>
              <p className="font-serif text-lg mb-8 opacity-90">
                Become part of a community that will challenge you, support you, and help you discover 
                capabilities you never knew you had.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/join">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90"
                    data-testid="button-join-about"
                  >
                    Join Ventures Crew
                  </Button>
                </Link>
                
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary"
                    data-testid="button-contact-about"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}