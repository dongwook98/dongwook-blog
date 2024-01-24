import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex justify-between items-center py-8 '>
      <Link href={'/'}>
        <h1 className='text-3xl font-bold hover:text-accent'>동욱의 블로그</h1>
      </Link>
      <nav className='flex gap-4'>
        <Link className='hover:text-accent' href={'/'}>
          Home
        </Link>
        <Link className='hover:text-accent' href={'/about'}>
          About
        </Link>
        <Link className='hover:text-accent' href={'/posts'}>
          Posts
        </Link>
        <Link className='hover:text-accent' href={'/contact'}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
