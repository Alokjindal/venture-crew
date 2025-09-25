import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// todo: remove mock functionality
const mockGalleryImages = [
  {
    id: '1',
    src: '/api/placeholder/600/400',
    alt: 'GNDEC students on mountain trek with backpacks and hiking gear',
    title: 'Mountain Trek Adventure',
    description: 'Students conquering the beautiful mountain trails of Himachal Pradesh'
  },
  {
    id: '2', 
    src: '/api/placeholder/600/400',
    alt: 'Rock climbing session with students wearing safety harnesses',
    title: 'Rock Climbing Workshop',
    description: 'Learning the fundamentals of rock climbing with certified instructors'
  },
  {
    id: '3',
    src: '/api/placeholder/600/400', 
    alt: 'River rafting team paddling through white water rapids',
    title: 'River Rafting Expedition',
    description: 'Navigating the thrilling rapids of Beas River'
  },
  {
    id: '4',
    src: '/api/placeholder/600/400',
    alt: 'Students gathered around campfire during evening',
    title: 'Campfire Stories',
    description: 'Sharing stories and building friendships around the campfire'
  },
  {
    id: '5',
    src: '/api/placeholder/600/400',
    alt: 'Group photo of Ventures Crew members at mountain summit',
    title: 'Summit Success',
    description: 'Celebrating together after reaching the mountain summit'
  },
  {
    id: '6',
    src: '/api/placeholder/600/400',
    alt: 'Adventure gear and equipment laid out for safety inspection',
    title: 'Safety Equipment Check',
    description: 'Ensuring all safety gear meets our high standards'
  },
  {
    id: '7',
    src: '/api/placeholder/600/400',
    alt: 'Students crossing wooden bridge over mountain stream',
    title: 'Bridge Crossing',
    description: 'Teamwork in action while crossing mountain bridges'
  },
  {
    id: '8',
    src: '/api/placeholder/600/400',
    alt: 'Sunrise view from mountain peak with students in silhouette',
    title: 'Sunrise Summit',
    description: 'Witnessing breathtaking sunrise from the mountain peak'
  },
];

interface GalleryGridProps {
  showTitle?: boolean;
}

export default function GalleryGrid({ showTitle = true }: GalleryGridProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % mockGalleryImages.length);
    }
  };

  const previousImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + mockGalleryImages.length) % mockGalleryImages.length);
    }
  };

  return (
    <div className="space-y-8">
      {showTitle && (
        <div className="text-center">
          <h2 className="font-sans font-bold text-3xl mb-4">Adventure Gallery</h2>
          <p className="font-serif text-muted-foreground max-w-2xl mx-auto">
            Relive the excitement through photos from our incredible adventures. Each image tells a story of courage, friendship, and discovery.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockGalleryImages.map((image, index) => (
          <Dialog key={image.id}>
            <DialogTrigger asChild>
              <Card 
                className="overflow-hidden cursor-pointer hover-elevate group"
                onClick={() => setSelectedImageIndex(index)}
                data-testid={`gallery-image-${image.id}`}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="font-sans font-semibold text-white text-sm">{image.title}</h3>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            
            <DialogContent className="max-w-4xl w-full p-0">
              {selectedImageIndex !== null && (
                <div className="relative">
                  <img
                    src={mockGalleryImages[selectedImageIndex].src}
                    alt={mockGalleryImages[selectedImageIndex].alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h3 className="font-sans font-bold text-xl mb-2">
                      {mockGalleryImages[selectedImageIndex].title}
                    </h3>
                    <p className="font-serif text-white/90">
                      {mockGalleryImages[selectedImageIndex].description}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={previousImage}
                    data-testid="button-gallery-previous"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={nextImage}
                    data-testid="button-gallery-next"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm font-serif">
                      {selectedImageIndex + 1} / {mockGalleryImages.length}
                    </span>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}