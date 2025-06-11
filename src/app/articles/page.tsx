import ArticleCard from '@/components/ArticleCard';

export default function Articles() {
  // Example articles data - in a real app, this would come from a database or CMS
  const articles = [
    {
      id: 1,
      title: 'AI in Mental Health Diagnosis',
      excerpt: 'Exploring how artificial intelligence is revolutionizing mental health diagnosis and assessment.',
      date: '2024-03-20',
      category: 'Research',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Machine Learning for Therapy',
      excerpt: 'How machine learning algorithms are being used to personalize therapeutic approaches.',
      date: '2024-03-15',
      category: 'Technology',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'The Future of Digital Mental Health',
      excerpt: 'Predictions and trends shaping the future of mental health technology.',
      date: '2024-03-10',
      category: 'Trends',
      readTime: '10 min read',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
        <p className="text-xl text-gray-600 mb-12">
          Exploring the latest developments in AI and mental health research.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
} 