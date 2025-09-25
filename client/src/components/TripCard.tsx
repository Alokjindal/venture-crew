import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, IndianRupee } from 'lucide-react';
import { Trip } from '@shared/adventure-schema';
import { Link } from 'wouter';

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  const isFullyBooked = trip.currentParticipants >= trip.maxParticipants;
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <Card className="hover-elevate h-full flex flex-col" data-testid={`card-trip-${trip.id}`}>
      {trip.imageUrl && (
        <div className="aspect-video overflow-hidden rounded-t-md">
          <img 
            src={trip.imageUrl} 
            alt={trip.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardHeader className="flex-grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-sans font-semibold text-lg leading-tight" data-testid={`text-trip-title-${trip.id}`}>
            {trip.title}
          </h3>
          <Badge className={`${getDifficultyColor(trip.difficulty)} text-xs`}>
            {trip.difficulty}
          </Badge>
        </div>
        
        <p className="font-serif text-muted-foreground text-sm line-clamp-3" data-testid={`text-trip-description-${trip.id}`}>
          {trip.description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="font-serif">{new Date(trip.date).toLocaleDateString()}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-serif">{trip.duration}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-serif text-xs">{trip.location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="font-serif text-xs">
              {trip.currentParticipants}/{trip.maxParticipants}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <IndianRupee className="h-4 w-4 text-primary" />
            <span className="font-sans font-semibold text-lg" data-testid={`text-trip-price-${trip.id}`}>
              {trip.price}
            </span>
          </div>
          
          <div className="flex gap-1">
            {trip.includesFood && (
              <Badge variant="secondary" className="text-xs">Food</Badge>
            )}
            {trip.includesTransport && (
              <Badge variant="secondary" className="text-xs">Transport</Badge>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="gap-2">
        <Link href={`/trips/${trip.id}`} className="flex-1">
          <Button variant="outline" className="w-full" data-testid={`button-view-details-${trip.id}`}>
            View Details
          </Button>
        </Link>
        
        <Button 
          className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
          disabled={isFullyBooked}
          onClick={() => console.log('RSVP clicked for trip:', trip.id)}
          data-testid={`button-rsvp-${trip.id}`}
        >
          {isFullyBooked ? 'Fully Booked' : 'RSVP Now'}
        </Button>
      </CardFooter>
    </Card>
  );
}