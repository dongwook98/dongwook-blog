'use client';

import { sendContactEmail } from '@/app/service/contact';
import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from './Banner';

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    sendContactEmail(form) //
      .then(() => {
        setBanner({ message: '메일 전송 성공', state: 'success' });
        setForm(DEFAULT_DATA);
        setIsLoading(false);
      })
      .catch(() => {
        setBanner({ message: '메일 전송 실패', state: 'error' });
        setIsLoading(false);
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className='w-full max-w-md'>
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={handleSubmit}
        className='w-full flex flex-col gap-2 my-4 p-4 border rounded-xl '
      >
        <label htmlFor='from' className='font-semibold'>
          여러분의 이메일
        </label>
        <input
          type='email'
          id='from'
          name='from'
          required
          autoFocus
          value={form.from}
          onChange={handleChange}
          className='border rounded-md p-1'
        />
        <label htmlFor='subject' className='font-semibold'>
          제목
        </label>
        <input
          type='text'
          id='subject'
          name='subject'
          required
          value={form.subject}
          onChange={handleChange}
          className='border rounded-md p-1'
        />
        <label htmlFor='message' className='font-semibold'>
          메시지
        </label>
        <textarea
          rows={10}
          id='message'
          name='message'
          required
          value={form.message}
          onChange={handleChange}
          className='border rounded-md p-1'
        />

        <button className='bg-accent text-xl font-bold hover:brightness-125 p-2 rounded-md'>
          {isLoading ? '전송중..' : '전송'}
        </button>
      </form>
    </section>
  );
}
