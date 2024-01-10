import { getPostData } from '@/app/service/posts';
import AdjacentPostCard from '@/components/AdjacentPostCard';
import PostContent from '@/components/PostContent';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { nextPost, prevPost } = post;

  return (
    <article className='rounded-2xl overflow-hidden border shadow-lg my-4'>
      {/* <Image
        className='w-full h-1/6 max-h-[500px]'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      /> */}
      <PostContent post={post} />
      <section className='flex shadow-md'>
        {prevPost && <AdjacentPostCard post={prevPost} type='prev' />}
        {nextPost && <AdjacentPostCard post={nextPost} type='next' />}
      </section>
    </article>
  );
}
