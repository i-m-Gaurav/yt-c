import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export interface Video {
  id: string;
  title: string;
  channel: string;
  views: number;
  createdAt: string;
  thumbnail: string;
  description?: string;
}

interface VideoCardProps {
  video: Video;
}

export const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      <Link to={`/video/${video.id}`} className="group block rounded-lg overflow-hidden bg-background-subtle shadow-subtle border border-border">
        <div className="aspect-video w-full bg-background-elevated relative">
          <img src={video.thumbnail} alt={video.title} className="h-full w-full object-cover" />
        </div>
        <div className="p-3 space-y-1">
          <h3 className="text-sm font-semibold line-clamp-2 group-hover:underline">{video.title}</h3>
          <p className="text-xs text-foreground-subtle">{video.channel}</p>
          <p className="text-xs text-foreground-subtle">{video.views.toLocaleString()} views • {video.createdAt}</p>
        </div>
      </Link>
    </motion.div>
  );
};
