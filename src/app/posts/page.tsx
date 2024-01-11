import FilterablePosts from '@/components/FilterablePosts';
import { Metadata } from 'next';
import { getAllPosts } from '../service/posts';

export const metadata: Metadata = {
  title: 'All Posts',
  description: '동욱의 블로그의 모든 포스트들',
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}
