import { Post } from '@/app/service/posts';
import PostCard from './PostCard';

type Props = {
  posts: Post[];
};

// PostsGrid는 Grid 역할만 하도록 분리
export default function PostsGrid({ posts }: Props) {
  return (
    <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
