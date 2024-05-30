// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGSKXaHUWbGsVXJ5xON984M4bFXobx9QM",
  authDomain: "coachfinder-4563c.firebaseapp.com",
  projectId: "coachfinder-4563c",
  storageBucket: "coachfinder-4563c.appspot.com",
  messagingSenderId: "657740541280",
  appId: "1:657740541280:web:38d859d019580f7a4dc205",
  measurementId: "G-Z0PYMZ0BG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export { app, auth };
