import { getPostData } from '@/app/service/posts';
import MarkdownViewer from '@/components/MarkdownViewer';
import Image from 'next/image';
import { MdCalendarToday } from 'react-icons/md';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const { title, description, date, path, content } = await getPostData(slug);

  return (
    <article className='rounded-2xl overflow-hidden bg-zinc-100 shadow-lg m-4'>
      {/* <Image
        className='w-full h-1/6 max-h-[500px]'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      /> */}
      <section className='flex flex-col p-4'>
        <div className='flex items-center self-end text-accent'>
          <MdCalendarToday />
          <time className='font-semibold ml-1'>{date.toString()}</time>
        </div>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-xl font-bold'>{description}</p>
        <div className='w-full border border-accent mt-4 mb-8'></div>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
