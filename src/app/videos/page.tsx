import VideoCard from '@/components/VideoCard';

export default function Videos() {
  // Example videos data - in a real app, this would come from a database or CMS
  const videos = [
    {
      id: 1,
      title: 'AI in Clinical Psychology: An Interview with Dr. Smith',
      thumbnail: '/thumbnails/interview-1.jpg',
      duration: '25:14',
      date: '2024-03-15',
      description: 'Exploring the impact of AI on clinical psychology practice with leading expert Dr. Smith.',
    },
    {
      id: 2,
      title: 'The Future of Mental Health Tech',
      thumbnail: '/thumbnails/interview-2.jpg',
      duration: '18:45',
      date: '2024-03-01',
      description: 'A discussion about emerging technologies in mental health care with industry pioneers.',
    },
    {
      id: 3,
      title: 'Building Ethical AI for Mental Health',
      thumbnail: '/thumbnails/interview-3.jpg',
      duration: '32:20',
      date: '2024-02-15',
      description: 'Understanding the ethical considerations in developing AI solutions for mental health.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-8">Video Interviews</h1>
        <p className="text-xl text-gray-600 mb-12">
          In-depth conversations with experts about AI and mental health.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Expert Interview Series</h3>
            <p className="text-gray-600 mb-4">
              Conversations with leading researchers and practitioners in AI and mental health.
            </p>
            <span className="text-blue-600">6 videos →</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Tech Deep Dives</h3>
            <p className="text-gray-600 mb-4">
              Technical explanations of AI applications in mental health care.
            </p>
            <span className="text-blue-600">4 videos →</span>
          </div>
        </div>
      </section>
    </div>
  );
} 