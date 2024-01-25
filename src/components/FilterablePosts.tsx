'use client';

import { Post } from '@/app/service/posts';
import { useState } from 'react';
import Categories from './Categories';
import PostsGrid from './PostsGrid';

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = 'All Posts';

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className='flex my-4'>
      <PostsGrid posts={filtered} />
      {/* 클라이언트 컴포넌트 모듈 (트리) 내에서 쓰이는 컴포넌트는 모든게 다 자동으로 
      클라이언트 컴포넌트로 번들링/간주 되므로, Categories 자식 컴포넌트에서는 
      별도로 'use client'라고 명시해 주지 않아도 됨 */}
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
