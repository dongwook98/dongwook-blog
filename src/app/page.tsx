import PinnedPosts from '@/components/PinnedPosts';
import Introduction from '@/components/Introduction';

export default function HomePage() {
  return (
    <>
      <Introduction />
      {/* @ts-expect-error Async Server Component */}
      <PinnedPosts />
    </>
  );
}
