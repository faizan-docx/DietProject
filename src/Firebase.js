// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg81_BAT6HzVcILhI4gpfcYVmF2ZvMg_w",
  authDomain: "thediet4u-fd9ea.firebaseapp.com",
  projectId: "thediet4u-fd9ea",
  storageBucket: "thediet4u-fd9ea.firebasestorage.app",
  messagingSenderId: "1036317890651",
  appId: "1:1036317890651:web:2b817cb934f5e7a5f1477e",
  measurementId: "G-PLJ0LM5H0W",
  databaseURL:"https://console.firebase.google.com/u/4/project/thediet4u-fd9ea/database/thediet4u-fd9ea-default-rtdb/data/~2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ This is what you need for saving data
const db = getFirestore(app);

// Export db so you can use it in your form
export { db };