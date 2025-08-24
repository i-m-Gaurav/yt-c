import { useParams } from 'react-router-dom';
import { mockVideos } from '../data/mockVideos';
import { UserAvatar } from '../components/UserAvatar';

export const VideoDetailPage = () => {
  const { id } = useParams();
  const video = mockVideos.find(v => v.id === id);

  if (!video) return <div>Video not found.</div>;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="w-full aspect-video bg-background-elevated rounded-lg border border-border flex items-center justify-center text-foreground-subtle">
        Video Player Placeholder
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold leading-tight">{video.title}</h1>
        <div className="flex items-center gap-3">
          <UserAvatar name={video.channel} size={44} />
          <div>
            <p className="font-semibold">{video.channel}</p>
            <p className="text-xs text-foreground-subtle">{video.views.toLocaleString()} views • {video.createdAt}</p>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-background-subtle border border-border text-sm leading-relaxed">
          {video.description || 'No description provided.'}
        </div>
      </div>
    </div>
  );
};
