import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, Target, Compass, Heart, MapPin } from 'lucide-react';

export default function WhyAdventureMatters() {
  const benefits = [
    {
      icon: Target,
      title: 'Build Resilience',
      description: 'Adventure pushes you out of comfort zones and teaches risk assessment'
    },
    {
      icon: Users,
      title: 'Lasting Friendships',
      description: 'Share water and stories on the trail with teammates who become lifelong friends'
    },
    {
      icon: GraduationCap,
      title: 'Real Learning',
      description: 'Practice first-aid, navigation, low-impact camping, and project planning'
    },
    {
      icon: Compass,
      title: 'Leadership Skills',
      description: 'Route planning, time management, and calm decision-making under pressure'
    },
    {
      icon: Heart,
      title: 'Cultural Connection',
      description: 'Connect with culture and place through travel and local experiences'
    },
    {
      icon: MapPin,
      title: 'Broaden Perspective',
      description: 'See hilltop sunrises and learn village stories that expand your worldview'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-sans font-bold text-5xl md:text-6xl mb-8 tracking-tight">
            Why Adventure Matters
          </h2>
          <div className="font-sans text-2xl md:text-3xl text-accent mb-12 tracking-wide">
            Dare. Discover. Do.
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground">
              College isn't only about lectures and labs — it's also where you discover who you are. 
              Adventure pushes students out of comfort zones, teaches risk assessment, builds resilience, 
              and sparks friendships that last.
            </p>
            
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-muted-foreground">
              A single weekend trek teaches route planning, time management, leadership, and the kindness 
              of teammates who share water and stories on the trail.
            </p>
            
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-muted-foreground">
              Travel broadens perspective. Seeing a hilltop sunrise or learning a local village's story 
              connects students to culture and place.
            </p>
          </div>

          <div className="space-y-8">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-muted-foreground">
              Adventure is also measurable learning: you practice first-aid, navigation, low-impact camping, 
              and project planning. For employers and grad schools, that translates to teamwork, initiative, 
              and calm under pressure.
            </p>
            
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-muted-foreground">
              Ventures Crew's mission is to make these experiences accessible and safe. We run workshops 
              before trips, pair novices with experienced trip leaders, follow strict safety checklists, 
              and emphasize environmental respect.
            </p>
            
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-accent">
              That way, students gain the benefits of travel without unnecessary risk.
            </p>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 bg-card/50 backdrop-blur-apple hover-elevate">
              <CardContent className="p-8 text-center">
                <benefit.icon className="h-12 w-12 mx-auto mb-6 text-accent" />
                <h3 className="font-sans font-semibold text-xl mb-4">{benefit.title}</h3>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground mb-8">
              If you're curious but nervous — start small.
            </p>
            <p className="font-serif text-xl text-muted-foreground">
              Join a day-hike, attend a gear workshop, or volunteer as trip support. 
              Adventure is a classroom you don't want to miss.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-12 py-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
              data-testid="button-start-small"
            >
              Start Your Journey
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-12 py-6 rounded-full border-muted-foreground/20 hover:bg-muted/20"
              data-testid="button-learn-more-adventure"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}