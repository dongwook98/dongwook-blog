import PinnedPosts from '@/components/PinnedPosts';
import Introduction from '@/components/Introduction';
import CarouselPosts from '@/components/CarouselPosts';

export default function HomePage() {
  return (
    <>
      <Introduction />
      <PinnedPosts />
      <CarouselPosts />
    </>
  );
}
