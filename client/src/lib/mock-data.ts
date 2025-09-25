import { BlogPost, Trip } from "@shared/adventure-schema";

// todo: remove mock functionality
export const mockTrips: Trip[] = [
  {
    id: "1",
    title: "Himalayan Base Trek",
    description: "Experience the majestic Himalayas with our guided base camp trek. Perfect for beginners looking to challenge themselves in stunning mountain scenery.",
    date: "2024-11-15",
    location: "Dharamshala, Himachal Pradesh",
    difficulty: "Intermediate",
    duration: "3 Days",
    price: 2500,
    maxParticipants: 15,
    currentParticipants: 8,
    imageUrl: "/api/placeholder/400/300",
    includesFood: true,
    includesTransport: true,
  },
  {
    id: "2", 
    title: "River Rafting Adventure",
    description: "Navigate thrilling rapids in the Beas River. An adrenaline-pumping experience with professional guides ensuring safety throughout.",
    date: "2024-10-28",
    location: "Manali, Himachal Pradesh",
    difficulty: "Beginner",
    duration: "1 Day",
    price: 1200,
    maxParticipants: 20,
    currentParticipants: 12,
    imageUrl: "/api/placeholder/400/300",
    includesFood: true,
    includesTransport: false,
  },
  {
    id: "3",
    title: "Rock Climbing Workshop",
    description: "Learn the fundamentals of rock climbing with certified instructors. All equipment provided for this hands-on workshop.",
    date: "2024-11-05",
    location: "Shivalik Hills, Punjab",
    difficulty: "Beginner",
    duration: "1 Day",
    price: 800,
    maxParticipants: 12,
    currentParticipants: 12,
    imageUrl: "/api/placeholder/400/300",
    includesFood: false,
    includesTransport: true,
  }
];

// todo: remove mock functionality
export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Safety First: Essential Gear for Your First Trek",
    content: "When embarking on your first adventure with Ventures Crew, having the right gear can make the difference between an amazing experience and a challenging ordeal...",
    excerpt: "A comprehensive guide to essential trekking gear for beginners, covering everything from proper footwear to emergency supplies.",
    author: "Alok Jindal",
    date: "2024-10-15",
    imageUrl: "/api/placeholder/600/400",
    tags: ["Safety", "Gear", "Beginner Guide"]
  },
  {
    id: "2",
    title: "Conquering the Triund Trek: A Student's Journey",
    content: "The morning mist clung to the valley as our group of 12 GNDEC students began the ascent to Triund. What started as nervous excitement quickly transformed into determination...",
    excerpt: "Follow our students' incredible journey to one of Himachal's most popular trekking destinations and the lessons learned along the way.",
    author: "Priya Sharma",
    date: "2024-10-08",
    imageUrl: "/api/placeholder/600/400",
    tags: ["Trek", "Student Experience", "Himachal"]
  },
  {
    id: "3",
    title: "Building Community Through Adventure",
    content: "Ventures Crew isn't just about outdoor activities - it's about building lasting friendships and creating a supportive community of like-minded adventurers...",
    excerpt: "Discover how our adventure club fosters meaningful connections and builds confidence through shared outdoor experiences.",
    author: "Alok Jindal",
    date: "2024-09-30",
    imageUrl: "/api/placeholder/600/400",
    tags: ["Community", "Adventure", "Personal Growth"]
  }
];