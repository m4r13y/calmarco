import { analytics } from "./firebase-env";
import { logEvent } from "firebase/analytics";

// Common analytics events
export const trackPageView = (pageName: string) => {
  if (analytics) {
    logEvent(analytics, "page_view", {
      page_title: pageName,
    });
  }
};

export const trackButtonClick = (buttonName: string, location?: string) => {
  if (analytics) {
    logEvent(analytics, "select_content", {
      content_type: "button",
      item_id: buttonName,
      ...(location && { location }),
    });
  }
};

export const trackCustomEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (analytics) {
    logEvent(analytics, eventName, parameters);
  }
};

// Future Firebase services can be added here
// For example:
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);