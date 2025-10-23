"use client";

import { OrchestraIconAnimated } from "@/app/components/icons/OrchestraIconAnimated";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mx-auto mb-4 h-32 w-32">
          <OrchestraIconAnimated size={128} animating={true} />
        </div>
        <p className="text-xl font-medium text-gray-800">
          Creating your document...
        </p>
        <p className="mt-2 text-sm text-gray-500">This may take a moment.</p>
      </div>
    </div>
  );
}
