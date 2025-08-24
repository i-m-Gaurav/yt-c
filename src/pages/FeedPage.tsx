import { VideoCard, Video } from '../components/VideoCard';
import { mockVideos } from '../data/mockVideos';

export const FeedPage = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {mockVideos.map(v => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
};
