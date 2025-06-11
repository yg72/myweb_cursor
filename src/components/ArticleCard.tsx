'use client';

import React from 'react';
import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/articles/${article.id}`} className="block">
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {article.category}
            </span>
            <span className="mx-2">·</span>
            <span>{article.readTime}</span>
          </div>
          
          <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
            {article.title}
          </h2>
          
          <p className="text-gray-600 mb-4">
            {article.excerpt}
          </p>
          
          <div className="text-sm text-gray-500">
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard; 