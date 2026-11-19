"use client";

import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset, }: { error: Error & { digest?: string }; reset: () => void; }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleRetry = () => {
    startTransition(() => {
      router.refresh(); 
      reset();
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-6">
      <h2 className="text-xl font-semibold text-red-600">
        Something went wrong while loading products!
      </h2>
      <p className="text-sm text-gray-500 mt-2">
        Please check your connection and try again.
      </p>
      <Button onClick={handleRetry} disabled={isPending} className="mt-4">
        {isPending ? "Retrying..." : "Try Again"}
      </Button>
    </div>
  );
}
