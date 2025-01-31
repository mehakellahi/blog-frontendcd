// app/layout.js

import "./globals.css"; // Import global styles if any
import Navbar from "../app/components/Navbar"; // Import your Navbar
import Sidebar from "../app/components/Sidebar"; // Import your Sidebar
import { Inter } from "next/font/google"; // Example of using a Google Font

const inter = Inter({ subsets: ["latin"] }); // Apply font if needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>My Next.js App</title>
      </head>
      <body className={inter.className}>
        <div className="layout">
          <Sidebar /> {/* Your Sidebar */}
          <div className="mainContent">
            <Navbar /> {/* Your Navbar */}
            <main>{children}</main> {/* Page-specific content goes here */}
          </div>
        </div>
      </body>
    </html>
  );
}
