"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

/**
 * Index page for test tools that shows available tests
 */
export default function TestIndexPage() {
  const pathname = usePathname();

  // Define the available test routes (same as in layout.tsx)
  const testRoutes = [
    {
      path: "/test/api",
      name: "API Client",
      description:
        "Test the core API client with chat, suggest, and document generation endpoints",
    },
    {
      path: "/test/prompts",
      name: "Prompt System",
      description:
        "Test the prompt formatting system with various templates and variables",
    },
    {
      path: "/test/streaming",
      name: "Streaming API",
      description:
        "Test streaming functionality for chat and document generation",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">AI Editor Test Tools</h1>

      <p className="mb-8 text-lg text-gray-700">
        Select a test interface to explore and debug different parts of the
        application.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {testRoutes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
          >
            <h2 className="mb-2 text-xl font-semibold text-blue-700">
              {route.name}
            </h2>
            <p className="flex-grow text-gray-600">{route.description}</p>
            <div className="mt-4 text-sm text-blue-500">Explore &rarr;</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
