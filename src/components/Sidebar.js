"use client";

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4 w-64 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2"><a href="/" className="text-blue-600 hover:underline">Home</a></li>
        <li className="mb-2"><a href="/blog" className="text-blue-600 hover:underline">Blog</a></li>
        <li className="mb-2"><a href="/contact" className="text-blue-600 hover:underline">Contact</a></li>
        <li className="mb-2"><a href="/login" className="text-blue-600 hover:underline">Login</a></li>
        <li className="mb-2"><a href="/profile" className="text-blue-600 hover:underline">Profile</a></li>
        <li className="mb-2"><a href="/register" className="text-blue-600 hover:underline">Register</a></li>
        <li className="mb-2"><a href="/reset-password" className="text-blue-600 hover:underline">Reset Password</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

