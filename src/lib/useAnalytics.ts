"use client";

import { useEffect, useState } from "react";
import { analytics } from "./firebase-env";
import { Analytics } from "firebase/analytics";

export function useAnalytics(): Analytics | null {
  const [analyticsInstance, setAnalyticsInstance] = useState<Analytics | null>(null);

  useEffect(() => {
    if (analytics) {
      setAnalyticsInstance(analytics);
    }
  }, []);

  return analyticsInstance;
}