'use client';

import React from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/posts/${post.id}`} className="block p-6">
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
            {post.category}
          </span>
          <span className="mx-2">·</span>
          <span>{post.readTime}</span>
          <span className="mx-2">·</span>
          <time>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        <h2 className="text-2xl font-semibold mb-3 hover:text-green-600 transition-colors">
          {post.title}
        </h2>

        <p className="text-gray-600">
          {post.excerpt}
        </p>

        <div className="mt-4 text-green-600 font-medium hover:text-green-700 transition-colors">
          Read more →
        </div>
      </Link>
    </article>
  );
};

export default PostCard; 