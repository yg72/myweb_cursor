'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  date: string;
  description: string;
}

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/videos/${video.id}`} className="block">
        <div className="relative aspect-video">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
            {video.duration}
          </div>
        </div>
        
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
            {video.title}
          </h2>
          
          <p className="text-gray-600 text-sm mb-3">
            {video.description}
          </p>
          
          <time className="text-sm text-gray-500">
            {new Date(video.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </Link>
    </article>
  );
};

export default VideoCard; 