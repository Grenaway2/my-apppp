export default function NotFound() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/" className="text-blue-600 hover:underline">Go back to Home</a>
      </div>
    );
  }
  