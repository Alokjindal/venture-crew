import BlogCard from '../BlogCard';
import { mockBlogPosts } from '@/lib/mock-data';

export default function BlogCardExample() {
  return (
    <div className="max-w-sm">
      <BlogCard post={mockBlogPosts[0]} />
    </div>
  );
}