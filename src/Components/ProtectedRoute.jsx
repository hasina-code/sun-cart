"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const { data: session, isPending } =
    authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push(`/login?redirect=${pathname}`);
    }
  }, [session, isPending, pathname, router]);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (!session) return null;

  return children;
}