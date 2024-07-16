"use client";

import { useEffect, useState } from 'react';
import { getBestPerformingPosts } from '@/services/api';
import PostDetails from '@/components/PostDetails';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBestPerformingPosts();
        setPosts(data);
      } catch (error) {
        setError('Failed to fetch posts. Please try again later.');
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div>
          {posts.map((post) => (
            <PostDetails key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
