import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { mockBlogPosts } from '@/lib/mock-data';
import { useState } from 'react';
import { Search, PenTool, Calendar } from 'lucide-react';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // todo: remove mock functionality - replace with actual API calls
  const categories = ['All', 'Safety', 'Adventure', 'Personal Growth', 'Community', 'Gear Guide'];
  
  const filteredPosts = mockBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || 
                           (post.tags && post.tags.some(tag => tag.toLowerCase().includes(categoryFilter.toLowerCase())));
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-sans font-bold text-4xl md:text-5xl mb-6">Adventure Stories</h1>
          <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Read about our incredible adventures, learn essential safety tips, and get inspired by stories 
            from our community members. Every post is written by adventurers, for adventurers.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-4 bg-card rounded-lg">
            <PenTool className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-sans font-bold text-2xl mb-1">{mockBlogPosts.length}</div>
            <div className="font-serif text-sm text-muted-foreground">Stories</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-sans font-bold text-2xl mb-1">Weekly</div>
            <div className="font-serif text-sm text-muted-foreground">New Posts</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <PenTool className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-sans font-bold text-2xl mb-1">5+</div>
            <div className="font-serif text-sm text-muted-foreground">Contributors</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="font-sans font-bold text-2xl mb-1">6</div>
            <div className="font-serif text-sm text-muted-foreground">Categories</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-lg mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-5 w-5 text-primary" />
            <h2 className="font-sans font-semibold text-lg">Find Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-search-blog"
              />
            </div>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger data-testid="select-blog-category">
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

            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('all');
              }}
              data-testid="button-clear-blog-filters"
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="font-sans font-bold text-2xl mb-6">Featured Story</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card p-8 rounded-lg hover-elevate">
              <div>
                <Badge variant="secondary" className="mb-3">Featured</Badge>
                <h3 className="font-sans font-bold text-2xl mb-4">{filteredPosts[0].title}</h3>
                <p className="font-serif text-muted-foreground mb-6 leading-relaxed">
                  {filteredPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-serif">By {filteredPosts[0].author}</span>
                    <span className="mx-2">•</span>
                    <span className="font-serif">{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                  </div>
                  <Button data-testid="button-read-featured">Read Story</Button>
                </div>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <PenTool className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div>
          <h2 className="font-sans font-bold text-2xl mb-6">Latest Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPosts.slice(1).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <PenTool className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-sans font-semibold text-xl mb-2">No stories found</h3>
            <p className="font-serif text-muted-foreground mb-6">
              Try adjusting your search criteria or check back later for new stories.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('all');
              }}
              data-testid="button-show-all-posts"
            >
              Show All Stories
            </Button>
          </div>
        )}

        {/* Categories */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="font-sans font-bold text-3xl mb-4">Explore by Category</h2>
            <p className="font-serif text-muted-foreground">
              Discover stories that match your interests and experience level.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category) => (
              <Button 
                key={category}
                variant="outline" 
                className="h-16 flex flex-col gap-1"
                onClick={() => setCategoryFilter(category.toLowerCase())}
                data-testid={`button-category-${category.toLowerCase()}`}
              >
                <span className="font-sans font-medium text-sm">{category}</span>
                <span className="font-serif text-xs text-muted-foreground">
                  {/* todo: remove mock functionality - calculate actual post counts */}
                  {Math.floor(Math.random() * 5) + 1} posts
                </span>
              </Button>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-primary to-accent text-white p-12 rounded-lg text-center">
            <h2 className="font-sans font-bold text-3xl mb-4">Never Miss a Story</h2>
            <p className="font-serif text-lg mb-8 opacity-90">
              Get the latest adventure stories, safety tips, and community updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Your email address" 
                className="bg-white text-foreground"
                data-testid="input-blog-newsletter"
              />
              <Button 
                className="bg-white text-primary hover:bg-white/90"
                data-testid="button-blog-newsletter-subscribe"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        {/* Write for Us */}
        <section className="mt-16">
          <div className="bg-card p-8 rounded-lg text-center">
            <PenTool className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-sans font-bold text-2xl mb-4">Share Your Story</h2>
            <p className="font-serif text-muted-foreground mb-6 max-w-2xl mx-auto">
              Have an adventure story to tell? Safety tips to share? We'd love to feature your experiences 
              and insights on our blog. Join our community of storytellers!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                data-testid="button-write-for-us"
              >
                Write for Us
              </Button>
              <Button 
                variant="outline"
                data-testid="button-story-guidelines"
              >
                Story Guidelines
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}