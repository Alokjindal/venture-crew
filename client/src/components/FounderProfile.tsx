import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Award } from 'lucide-react';
import founderImage from '@assets/generated_images/Founder_Alok_Jindal_portrait_568ff9be.png';

export default function FounderProfile() {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={founderImage}
                alt="Alok Jindal, Founder and President of Ventures Crew"
                className="w-full h-full object-cover"
                data-testid="img-founder-profile"
              />
            </div>
          </div>

          {/* Profile Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-sans font-bold text-3xl mb-2" data-testid="text-founder-name">
                Alok Jindal
              </h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-sm">
                  Founder & President
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Adventure Leader
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span className="font-serif">Guru Nanak Dev Engineering College (GNDEC)</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-serif text-foreground leading-relaxed">
                As the founder of Ventures Crew, Alok envisioned creating a community where students could 
                push their boundaries, discover their potential, and build lifelong friendships through 
                outdoor adventures. With over three years of experience in adventure sports and mountain 
                rescue, he leads by example in promoting safe, responsible exploration.
              </p>

              <p className="font-serif text-muted-foreground leading-relaxed">
                Under his leadership, Ventures Crew has grown from a small group of adventure enthusiasts 
                to GNDEC's premier adventure club, maintaining a perfect safety record while organizing 
                over 50 successful expeditions. His motto "Dare. Discover. Do." embodies the spirit of 
                courage, curiosity, and action that defines every club activity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="font-sans font-bold text-lg">50+</div>
                <div className="font-serif text-sm text-muted-foreground">Expeditions Led</div>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="font-sans font-bold text-lg">200+</div>
                <div className="font-serif text-sm text-muted-foreground">Students Guided</div>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <Award className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="font-sans font-bold text-lg">100%</div>
                <div className="font-serif text-sm text-muted-foreground">Safety Record</div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-border">
              <Mail className="h-4 w-4 text-primary" />
              <span className="font-serif text-sm text-muted-foreground">
                Contact: venturescrew@gndec.ac.in
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}