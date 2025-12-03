"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

/**
 * Layout for test pages with navigation bar
 */
export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Define the available test routes
  const testRoutes = [
    { path: "/test", name: "Overview" },
    { path: "/test/api", name: "API Client" },
    { path: "/test/prompts", name: "Prompt System" },
    { path: "/test/streaming", name: "Streaming API" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center text-sm font-medium transition-colors hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1.5"
                >
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
                Back to Editor
              </Link>
            </div>

            <div className="flex space-x-4">
              {testRoutes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`rounded px-3 py-2 ${
                    pathname === route.path
                      ? "bg-gray-700 font-medium text-white"
                      : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-h-[calc(100vh-56px)] overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
