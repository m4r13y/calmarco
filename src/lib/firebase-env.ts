// Firebase configuration using environment variables for better security
// If environment variables are not set, fallback to the provided config

import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAYsscTX1-yjQtkfFffLke0iox0AWEVfng",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "calmarco-a5bd9.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "calmarco-a5bd9",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "calmarco-a5bd9.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "97250158889",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:97250158889:web:4066f3f99672856f5fef38",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-DRS43T538H"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };