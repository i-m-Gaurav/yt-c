import { Video } from '../components/VideoCard';

export const mockVideos: Video[] = Array.from({ length: 24 }).map((_, i) => ({
  id: String(i + 1),
  title: `Sample Video Title Number ${i + 1}`,
  channel: `Channel ${((i % 6) + 1)}`,
  views: Math.floor(Math.random() * 100000),
  createdAt: `${Math.floor(Math.random() * 11) + 1} months ago`,
  thumbnail: `https://picsum.photos/seed/video${i}/640/360`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}));
