import TripCard from '@/components/TripCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { mockTrips } from '@/lib/mock-data';
import { useState } from 'react';
import { Search, Filter, Calendar, MapPin } from 'lucide-react';

export default function Trips() {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // todo: remove mock functionality - replace with actual API calls
  const filteredTrips = mockTrips.filter(trip => {
    const matchesSearch = trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trip.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'all' || trip.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  const sortedTrips = [...filteredTrips].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'price':
        return a.price - b.price;
      case 'difficulty':
        const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-sans font-bold text-4xl md:text-5xl mb-6">Trips & Events</h1>
          <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover your next adventure! From beginner-friendly day trips to challenging multi-day expeditions, 
            we have something for every adventurer.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-4 bg-card rounded-lg">
            <div className="font-sans font-bold text-2xl text-primary mb-1">
              {mockTrips.length}
            </div>
            <div className="font-serif text-sm text-muted-foreground">Available Trips</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <div className="font-sans font-bold text-2xl text-primary mb-1">
              {mockTrips.reduce((sum, trip) => sum + (trip.maxParticipants - trip.currentParticipants), 0)}
            </div>
            <div className="font-serif text-sm text-muted-foreground">Open Spots</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <div className="font-sans font-bold text-2xl text-primary mb-1">
              ₹{Math.min(...mockTrips.map(trip => trip.price))}
            </div>
            <div className="font-serif text-sm text-muted-foreground">Starting Price</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <div className="font-sans font-bold text-2xl text-primary mb-1">
              {mockTrips.filter(trip => trip.difficulty === 'Beginner').length}
            </div>
            <div className="font-serif text-sm text-muted-foreground">Beginner Trips</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card p-6 rounded-lg mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="font-sans font-semibold text-lg">Filter & Search</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search trips or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search-trips"
              />
            </div>

            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger data-testid="select-difficulty-filter">
                <SelectValue placeholder="Difficulty Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger data-testid="select-sort-by">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="difficulty">Difficulty</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setDifficultyFilter('all');
                setSortBy('date');
              }}
              data-testid="button-clear-filters"
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Trip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sortedTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>

        {/* No Results */}
        {sortedTrips.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-sans font-semibold text-xl mb-2">No trips found</h3>
            <p className="font-serif text-muted-foreground mb-6">
              Try adjusting your search criteria or check back later for new adventures.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setDifficultyFilter('all');
              }}
              data-testid="button-show-all-trips"
            >
              Show All Trips
            </Button>
          </div>
        )}

        {/* Upcoming Events Calendar */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="font-sans font-bold text-3xl mb-4">Upcoming Events Calendar</h2>
            <p className="font-serif text-muted-foreground">
              Mark your calendar! Here's a quick overview of our scheduled adventures.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg">
            <div className="space-y-4">
              {mockTrips.slice(0, 5).map((trip) => (
                <div key={trip.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover-elevate">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="font-sans font-bold text-lg text-primary">
                        {new Date(trip.date).getDate()}
                      </div>
                      <div className="font-serif text-xs text-muted-foreground">
                        {new Date(trip.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-sans font-semibold">{trip.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span className="font-serif">{trip.location}</span>
                        <Badge variant="secondary" className="text-xs ml-2">
                          {trip.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-sans font-semibold">₹{trip.price}</div>
                    <div className="font-serif text-xs text-muted-foreground">
                      {trip.currentParticipants}/{trip.maxParticipants} spots
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent text-white p-12 rounded-lg">
            <h2 className="font-sans font-bold text-3xl mb-4">Don't See What You're Looking For?</h2>
            <p className="font-serif text-lg mb-8 opacity-90">
              Have an adventure idea? Want to suggest a destination? We're always open to new ideas from our community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                data-testid="button-suggest-trip"
              >
                Suggest a Trip
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                data-testid="button-contact-trips"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}