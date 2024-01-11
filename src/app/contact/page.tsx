import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: '동욱에게 메일 보내기',
};

const LINKS = [
  {
    icon: <FaGithub />,
    url: 'https://github.com/dongwook98?tab=repositories',
  },
  {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/%EB%8F%99%EC%9A%B1-%EA%B0%95-a01795274/',
  },
];

export default function ContactPage() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
      <p>Email : ehddnr8563@gmail.com</p>
      <ul className='flex gap-4 my-2'>
        {LINKS.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className='text-5xl hover:text-accent'
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className='text-3xl font-bold my-8'>
        또는 아래에 메일을 보내주세요.
      </h2>
      <ContactForm />
    </section>
  );
}
