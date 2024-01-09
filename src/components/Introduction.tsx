import Image from 'next/image';
import Link from 'next/link';
import MyImage from '/public/images/me.png';

export default function Introduction() {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col items-center'>
        <p className='text-2xl mb-1'>저의 블로그에 오신걸 환영합니다.</p>
        <p className='text-xl mb-1'>저는 프론트엔드 개발자입니다.</p>
        <Link href={'/contact'} className='border-2 border-accent p-2'>
          Contact
        </Link>
      </div>
      <Image src={MyImage} alt='나의 사진' width={200} />
    </div>
  );
}
