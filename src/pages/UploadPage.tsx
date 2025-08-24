import { useState, ChangeEvent, FormEvent } from 'react';

export const UploadPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbFile, setThumbFile] = useState<File | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ title, description, category, videoFile, thumbFile });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Upload Video</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium">Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="w-full rounded-md bg-background-subtle border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Description</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} rows={5} className="w-full rounded-md bg-background-subtle border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
            <select value={category} onChange={e => setCategory(e.target.value)} className="w-full rounded-md bg-background-subtle border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20">
              <option value="">Select category</option>
              <option value="education">Education</option>
              <option value="gaming">Gaming</option>
              <option value="music">Music</option>
            </select>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Video File</label>
            <input type="file" accept="video/*" onChange={(e: ChangeEvent<HTMLInputElement>) => setVideoFile(e.target.files?.[0] || null)} className="block w-full text-sm" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Thumbnail File</label>
            <input type="file" accept="image/*" onChange={(e: ChangeEvent<HTMLInputElement>) => setThumbFile(e.target.files?.[0] || null)} className="block w-full text-sm" />
          </div>
        </div>
        <button type="submit" className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-90">Upload</button>
      </form>
    </div>
  );
};
