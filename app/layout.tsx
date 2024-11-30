import React from 'react';
import './globals.css';

const Layout: React.FC = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul className="flex gap-4 p-4 bg-gray-800 text-white">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/dashboard/settings">Settings</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="p-4">{children}</main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          © 2024 My Next.js App
        </footer>
      </body>
    </html>
  );
};

export default Layout;
