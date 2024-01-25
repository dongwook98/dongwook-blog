import { PostData } from '@/app/service/posts';
import MarkdownViewer from '@/components/MarkdownViewer';
import { MdCalendarToday } from 'react-icons/md';

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;

  return (
    <section className='flex flex-col p-8'>
      <div className='flex items-center self-end text-accent'>
        <MdCalendarToday />
        <time className='font-semibold ml-1'>{date.toString()}</time>
      </div>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-xl font-bold'>{description}</p>
      <div className='w-full border border-accent mt-4 mb-8'></div>
      {/* 외부 라이브러리를 사용한다면 그 라이브러리를 한단계 추상화해주는 컴포넌트로 만들기  */}
      <MarkdownViewer content={content} />
    </section>
  );
}
