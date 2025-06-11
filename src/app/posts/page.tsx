import PostCard from '@/components/PostCard';

export default function Posts() {
  // Example posts data - in a real app, this would come from a database or CMS
  const posts = [
    {
      id: 1,
      title: 'Getting Started with AI in Mental Health',
      excerpt: 'A comprehensive guide to understanding the basics of AI applications in mental health.',
      date: '2024-03-18',
      category: 'Learning Path',
      readTime: '15 min read',
    },
    {
      id: 2,
      title: 'How to Use OSAT: A Complete Tutorial',
      excerpt: 'Step-by-step guide to using the OSAT app for mental health support.',
      date: '2024-03-12',
      category: 'Tutorial',
      readTime: '12 min read',
    },
    {
      id: 3,
      title: 'Troubleshooting Common AI Model Issues',
      excerpt: 'Solutions to common problems when working with AI models in mental health applications.',
      date: '2024-03-05',
      category: 'Troubleshooting',
      readTime: '10 min read',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-8">Learning Resources</h1>
        <p className="text-xl text-gray-600 mb-12">
          Tutorials, guides, and troubleshooting tips for AI in mental health.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
} 