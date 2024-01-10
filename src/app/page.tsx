import PinnedPosts from '@/components/PinnedPosts';
import Introduction from '@/components/Introduction';
import CarouselPosts from '@/components/CarouselPosts';

export default function HomePage() {
  return (
    <>
      <Introduction />
      {/* @ts-expect-error Async Server Component */}
      <PinnedPosts />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPosts />
    </>
  );
}
