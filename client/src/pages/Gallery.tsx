import GalleryGrid from '@/components/GalleryGrid';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Camera, Filter, Calendar, MapPin } from 'lucide-react';

export default function Gallery() {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');

  // todo: remove mock functionality - replace with actual API calls
  const categories = ['All', 'Trekking', 'Rock Climbing', 'River Rafting', 'Camping', 'Workshops'];
  const years = ['All', '2024', '2023', '2022'];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-sans font-bold text-4xl md:text-5xl mb-6">Adventure Gallery</h1>
          <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Relive the excitement through our collection of adventure photos. Every image tells a story 
            of courage, friendship, and the incredible beauty of the great outdoors.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            <Badge variant="secondary">200+ Photos</Badge>
            <Badge variant="secondary">50+ Adventures</Badge>
            <Badge variant="secondary">3+ Years of Memories</Badge>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-4 bg-card rounded-lg">
            <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-sans font-bold text-2xl mb-1">200+</div>
            <div className="font-serif text-sm text-muted-foreground">Photos</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-sans font-bold text-2xl mb-1">15+</div>
            <div className="font-serif text-sm text-muted-foreground">Destinations</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-sans font-bold text-2xl mb-1">50+</div>
            <div className="font-serif text-sm text-muted-foreground">Adventures</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-sans font-bold text-2xl mb-1">10+</div>
            <div className="font-serif text-sm text-muted-foreground">Categories</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card p-6 rounded-lg mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="font-sans font-semibold text-lg">Filter Gallery</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger data-testid="select-category-filter">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger data-testid="select-year-filter">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toLowerCase()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              onClick={() => {
                setCategoryFilter('all');
                setYearFilter('all');
              }}
              data-testid="button-clear-gallery-filters"
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid showTitle={false} />

        {/* Featured Adventures */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="font-sans font-bold text-3xl mb-4">Featured Adventure Stories</h2>
            <p className="font-serif text-muted-foreground">
              Behind every photo is an incredible story. Here are some of our most memorable adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg hover-elevate">
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                <Camera className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2">Himalayan Base Trek 2024</h3>
              <p className="font-serif text-muted-foreground text-sm mb-3">
                Our most challenging adventure yet - 15 students conquered the base camp trail with determination and teamwork.
              </p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>March 2024</span>
                <span>24 Photos</span>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg hover-elevate">
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                <Camera className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2">Rock Climbing Workshop</h3>
              <p className="font-serif text-muted-foreground text-sm mb-3">
                Learning the ropes literally! Our first rock climbing workshop helped members discover their strength and courage.
              </p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>February 2024</span>
                <span>18 Photos</span>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg hover-elevate">
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                <Camera className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2">Beas River Rafting</h3>
              <p className="font-serif text-muted-foreground text-sm mb-3">
                Thrilling rapids and unforgettable teamwork as our members navigated the challenging waters of Beas River.
              </p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>January 2024</span>
                <span>32 Photos</span>
              </div>
            </div>
          </div>
        </section>

        {/* Upload Section */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-primary to-accent text-white p-12 rounded-lg text-center">
            <Camera className="h-16 w-16 mx-auto mb-4" />
            <h2 className="font-sans font-bold text-3xl mb-4">Share Your Adventure Photos</h2>
            <p className="font-serif text-lg mb-8 opacity-90">
              Were you part of one of our adventures? We'd love to feature your photos in our gallery! 
              Share your memories with the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                data-testid="button-submit-photos"
              >
                Submit Photos
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                data-testid="button-photo-guidelines"
              >
                Photo Guidelines
              </Button>
            </div>
          </div>
        </section>

        {/* Social Media Integration */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="font-sans font-bold text-3xl mb-4">Follow Us for More</h2>
            <p className="font-serif text-muted-foreground">
              Don't miss any of our adventures! Follow us on social media for real-time updates and behind-the-scenes content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg text-center hover-elevate">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2">Instagram</h3>
              <p className="font-serif text-muted-foreground mb-4">
                Daily stories, photo highlights, and adventure announcements
              </p>
              <div className="font-sans font-medium text-primary">@ventures.crew</div>
            </div>

            <div className="bg-card p-6 rounded-lg text-center hover-elevate">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2">Facebook</h3>
              <p className="font-serif text-muted-foreground mb-4">
                Event updates, photo albums, and community discussions
              </p>
              <div className="font-sans font-medium text-primary">Ventures Crew GNDEC</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}