import { getPinnedPosts } from '@/app/service/posts';
import PostsGrid from './PostsGrid';
import { TiPin } from 'react-icons/ti';

export default async function PinnedPosts() {
  const posts = await getPinnedPosts();

  return (
    <section>
      <h2 className='text-xl font-semibold flex items-center '>
        <TiPin className='text-red-500 text-2xl' />
        Pinned Posts
      </h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
