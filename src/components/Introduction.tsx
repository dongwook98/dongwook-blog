import Image from 'next/image';
import Link from 'next/link';
import MyImage from '/public/images/me.png';

export default function Introduction() {
  return (
    <section className='flex justify-center items-center'>
      <div className='flex flex-col items-center self-end'>
        <p className='text-xl mb-1 text-center'>
          저의 블로그에 오신걸 환영합니다.
          <br />웹 개발 중 프론트엔드 개발과 관련된 포스팅을 주로 합니다.
        </p>
        <Link
          href={'/contact'}
          className='bg-accent rounded-md p-2 text-white font-semibold hover:brightness-125'
        >
          Contact Me
        </Link>
      </div>
      <Image
        className='border border-white rounded-full hover:border-accent'
        src={MyImage}
        alt='블로그 작가 동욱의 사진'
        width={200}
        height={200}
        priority // Next.js에게 가장 중요한 이미지 먼저 다운로드 받으라고 하게함
      />
    </section>
  );
}
