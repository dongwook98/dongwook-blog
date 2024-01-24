import { getNonPinnedPosts } from '@/app/service/posts';
import MultiCarousel from './MultiCarousel';
import PostCard from './PostCard';
import { BiSolidLike } from 'react-icons/bi';

export default async function CarouselPosts() {
  const posts = await getNonPinnedPosts();

  return (
    <section className='my-8'>
      <h2 className='text-2xl font-semibold flex items-center'>
        <BiSolidLike className='text-blue-500 mr-1' />
        추천 포스트들
      </h2>
      {/* react-multi-carousel 라이브러리 쓰는곳을 별도의 컴포넌트로 분리
      또한 사용자의 인터렉션이 발생하는 부분이기도 함 그래서 client 컴포넌트로 분리
      */}
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
