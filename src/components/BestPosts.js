"use client";

import { useEffect, useState } from 'react';
import { getBestPerformingPosts } from '@/services/api';
import LoadingSpinner from '@/components/LoadingSpinner';

const BestPosts = () => {
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
    <div className="bg-white shadow rounded-lg p-4">
      <h1 className="text-2xl font-bold mb-4">Best Performing Posts</h1>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="list-disc pl-5">
          {posts.map((post) => (
            <li key={post.id} className="mb-2">
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BestPosts;

