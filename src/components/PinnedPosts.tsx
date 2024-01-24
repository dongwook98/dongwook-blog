import { getPinnedPosts } from '@/app/service/posts';
import PostsGrid from './PostsGrid';
import { TiPin } from 'react-icons/ti';

export default async function PinnedPosts() {
  const posts = await getPinnedPosts(); // 서버 컴포넌트기 때문에 노드 API 사용 가능

  return (
    <section className='my-8'>
      <h2 className='text-2xl font-semibold flex items-center my-2'>
        <TiPin className='text-red-500 text-3xl mr-1' />
        고정 포스트들
      </h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
