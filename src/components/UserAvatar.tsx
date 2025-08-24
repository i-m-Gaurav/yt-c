interface UserAvatarProps {
  name: string;
  size?: number;
}

export const UserAvatar = ({ name, size = 40 }: UserAvatarProps) => {
  const initials = name.split(' ').map(p => p[0]).join('').slice(0,2).toUpperCase();
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center rounded-full bg-background-elevated text-sm font-medium border border-border shadow-subtle"
    >
      {initials}
    </div>
  );
};
