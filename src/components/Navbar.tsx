import { Menu, Search, Upload, UserCircle2 } from 'lucide-react';
import { ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  onToggleSidebar: () => void;
}

export const Navbar = ({ onToggleSidebar }: NavbarProps) => {
  const navigate = useNavigate();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // placeholder search handler
    if (e.target.value === 'test') {
      navigate('/');
    }
  };

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-4 border-b border-border bg-background/80 px-4 backdrop-blur">
      <button onClick={onToggleSidebar} className="p-2 rounded-md hover:bg-background-subtle transition">
        <Menu className="w-5 h-5" />
      </button>
      <Link to="/" className="font-semibold tracking-wide text-xl">VidIndia</Link>
      <div className="flex flex-1 justify-center">
        <div className="w-full max-w-xl relative">
          <input
            onChange={handleSearch}
            placeholder="Search"
            className="w-full rounded-full bg-background-subtle/90 border border-border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 placeholder:opacity-50"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link to="/upload" className="flex items-center gap-1 rounded-md bg-foreground text-background px-3 py-1.5 text-sm font-medium hover:opacity-90 transition">
          <Upload className="w-4 h-4" />
          <span className="hidden md:inline">Upload</span>
        </Link>
        <Link to="/profile/1" className="p-1.5 rounded-full hover:bg-background-subtle transition">
          <UserCircle2 className="w-7 h-7" />
        </Link>
      </div>
    </header>
  );
};
