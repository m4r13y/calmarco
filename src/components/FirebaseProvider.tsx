"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/firebase";

export default function FirebaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Analytics is automatically initialized when imported
    // This component ensures it's loaded in client-side environment
    if (analytics) {
      console.log("Firebase Analytics initialized");
    }
  }, []);

  return <>{children}</>;
}