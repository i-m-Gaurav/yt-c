import { Home, Upload, Settings, User, Minus, PlaySquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const links = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/subscriptions', label: 'Subscriptions', icon: PlaySquare },
  { to: '/upload', label: 'Upload', icon: Upload },
  { to: '/profile/1', label: 'Profile', icon: User },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  const location = useLocation();

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 220 }}
      className="group flex flex-col border-r border-border bg-background-subtle/60 backdrop-blur h-full"
    >
      <div className="flex items-center justify-between px-3 h-14 border-b border-border">
        <span className="font-semibold tracking-wide">{collapsed ? 'VI' : 'VidIndia'}</span>
        <button onClick={onToggle} className="p-1 rounded hover:bg-background-elevated">
          <Minus className="w-4 h-4" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto py-2 space-y-1">
        {links.map(l => {
          const active = location.pathname === l.to;
          const Icon = l.icon;
          return (
            <Link
              key={l.to}
              to={l.to}
              className={`flex items-center gap-3 px-4 py-2 rounded-md mx-2 text-sm font-medium transition shadow-subtle hover:bg-background-elevated/60 ${active ? 'bg-background-elevated' : ''}`}
            >
              <Icon className="w-5 h-5" />
              {!collapsed && <span>{l.label}</span>}
            </Link>
          );
        })}
      </nav>
    </motion.aside>
  );
};
