import { useState } from 'react';

export const SettingsPage = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="space-y-2">
        <p className="text-sm text-foreground-subtle">Theme</p>
        <button onClick={toggleTheme} className="rounded-md bg-background-subtle border border-border px-4 py-2 text-sm font-medium hover:bg-background-elevated">
          Toggle to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-foreground-subtle">Profile</p>
        <div className="rounded-md border border-border p-4 text-sm text-foreground-subtle bg-background-subtle">Profile edit form placeholder.</div>
      </div>
    </div>
  );
};
