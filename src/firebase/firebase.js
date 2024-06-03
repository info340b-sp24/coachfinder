import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { useAuth } from './useAuth'; // Import the custom hook

const firebaseConfig = {
  apiKey: "AIzaSyBGSKXaHUWbGsVXJ5xON984M4bFXobx9QM",
  authDomain: "coachfinder-4563c.firebaseapp.com",
  projectId: "coachfinder-4563c",
  storageBucket: "coachfinder-4563c.appspot.com",
  messagingSenderId: "657740541280",
  appId: "1:657740541280:web:38d859d019580f7a4dc205",
  measurementId: "G-Z0PYMZ0BG7",
  databaseURL: "https://coachfinder-4563c-default-rtdb.firebaseio.com"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);

export { useAuth }; // Export the custom hook

