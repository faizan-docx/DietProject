// Firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg81_BAT6HzVcILhI4gpfcYVmF2ZvMg_w",
  authDomain: "thediet4u-fd9ea.firebaseapp.com",
  projectId: "thediet4u-fd9ea",
  storageBucket: "thediet4u-fd9ea.appspot.com", // correct domain
  messagingSenderId: "1036317890651",
  appId: "1:1036317890651:web:2b817cb934f5e7a5f1477e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
