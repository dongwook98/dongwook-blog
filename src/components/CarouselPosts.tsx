import { getNonPinnedPosts } from '@/app/service/posts';
import MultiCarousel from './MultiCarousel';
import PostCard from './PostCard';
import { BiSolidLike } from 'react-icons/bi';

export default async function CarouselPosts() {
  const posts = await getNonPinnedPosts();
  console.log(posts);

  return (
    <section className='my-8'>
      <h2 className='text-2xl font-semibold flex items-center'>
        <BiSolidLike className='text-blue-500 mr-1' />
        You may like Posts
      </h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
