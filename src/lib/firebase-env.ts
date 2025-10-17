// Firebase configuration using environment variables for better security
// Make sure to set these in your .env.local file. This module is resilient if
// envs are missing: it will skip initialization instead of throwing.

import { initializeApp, type FirebaseApp, type FirebaseOptions } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";

const firebaseConfig: Partial<FirebaseOptions> = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Determine if we have enough config to safely initialize the SDK.
const requiredKeys: (keyof FirebaseOptions)[] = [
  "apiKey",
  "authDomain",
  "projectId",
  "storageBucket",
  "messagingSenderId",
  "appId",
];

const hasRequiredConfig = requiredKeys.every(
  (k) => typeof (firebaseConfig as Record<string, unknown>)[k] === "string" && !!(firebaseConfig as Record<string, string>)[k]
);

let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;

try {
  if (hasRequiredConfig) {
    app = initializeApp(firebaseConfig as FirebaseOptions);
    if (typeof window !== "undefined") {
      analytics = getAnalytics(app);
    }
  } else {
    if (process.env.NODE_ENV !== "production") {
      // Soft warning in dev to help configuration without breaking the app
      // eslint-disable-next-line no-console
      console.warn(
        "Firebase not initialized: missing required env vars. Set NEXT_PUBLIC_FIREBASE_* in .env.local."
      );
    }
  }
} catch (err) {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.warn("Firebase initialization failed:", err);
  }
}

export { app, analytics };