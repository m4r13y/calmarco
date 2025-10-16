// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYsscTX1-yjQtkfFffLke0iox0AWEVfng",
  authDomain: "calmarco-a5bd9.firebaseapp.com",
  projectId: "calmarco-a5bd9",
  storageBucket: "calmarco-a5bd9.firebasestorage.app",
  messagingSenderId: "97250158889",
  appId: "1:97250158889:web:4066f3f99672856f5fef38",
  measurementId: "G-DRS43T538H"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };