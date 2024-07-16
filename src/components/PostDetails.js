"use client";

const PostDetails = ({ post }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p>{post.content}</p>
      <p className="text-gray-500 text-sm">Posted on {post.date}</p>
    </div>
  );
};

export default PostDetails;
