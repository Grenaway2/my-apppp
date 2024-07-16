import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import { AuthProvider } from '@/context/AuthContext';

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-grow">
            <Sidebar />
            <main className="flex-grow p-4">
              {children}
            </main>
          </div>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
