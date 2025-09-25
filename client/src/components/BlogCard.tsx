import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';
import { BlogPost } from '@shared/adventure-schema';
import { Link } from 'wouter';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="hover-elevate h-full flex flex-col cursor-pointer" data-testid={`card-blog-${post.id}`}>
        {post.imageUrl && (
          <div className="aspect-video overflow-hidden rounded-t-md">
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <CardHeader className="flex-grow">
          <h3 className="font-sans font-semibold text-lg leading-tight mb-2" data-testid={`text-blog-title-${post.id}`}>
            {post.title}
          </h3>
          
          <p className="font-serif text-muted-foreground text-sm line-clamp-3" data-testid={`text-blog-excerpt-${post.id}`}>
            {post.excerpt}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="font-serif">{post.author}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="font-serif">{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>
          
          {post.tags && (
            <div className="flex flex-wrap gap-1">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}