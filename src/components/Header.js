"use client";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold">My App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/blog" className="hover:underline">Blog</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
