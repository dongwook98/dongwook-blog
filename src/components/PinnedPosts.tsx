import { getPinnedPosts } from '@/app/service/posts';
import PostsGrid from './PostsGrid';
import { TiPin } from 'react-icons/ti';

export default async function PinnedPosts() {
  const posts = await getPinnedPosts();

  return (
    <section className='my-8'>
      <h2 className='text-2xl font-semibold flex items-center my-2'>
        <TiPin className='text-red-500 text-3xl mr-1' />
        Pinned Posts
      </h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
