import HomeContent from '@/components/HomeContent';
import BestPosts from '@/components/BestPosts';

export default function Home() {
  return (
    <div className="p-4">
      <HomeContent />
      <BestPosts />
    </div>
  );
}
