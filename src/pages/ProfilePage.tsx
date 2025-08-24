import { UserAvatar } from '../components/UserAvatar';
import { mockVideos } from '../data/mockVideos';
import { VideoCard } from '../components/VideoCard';

export const ProfilePage = () => {
  const userVideos = mockVideos.slice(0, 8);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <UserAvatar name="John Doe" size={72} />
        <div>
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-sm text-foreground-subtle">Creator bio placeholder text goes here.</p>
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-4">Videos</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {userVideos.map(v => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </div>
    </div>
  );
};
