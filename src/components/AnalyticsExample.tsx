"use client";

import { useAnalytics } from "@/lib/useAnalytics";
import { logEvent } from "firebase/analytics";

export default function AnalyticsExample() {
  const analytics = useAnalytics();

  const trackEvent = () => {
    if (analytics) {
      logEvent(analytics, "button_click", {
        button_name: "example_button",
        page: "home"
      });
      console.log("Event tracked!");
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Firebase Analytics Example</h3>
      <p className="text-sm text-gray-600 mb-4">
        Click the button below to track an analytics event.
      </p>
      <button
        onClick={trackEvent}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        disabled={!analytics}
      >
        {analytics ? "Track Event" : "Analytics Loading..."}
      </button>
    </div>
  );
}