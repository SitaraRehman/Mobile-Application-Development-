// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (same jo tumne bheja)
const firebaseConfig = {
  apiKey: "AIzaSyBSxkXL3BN743BIxYa4iUMOTwZf4tQcg7A",
  authDomain: "mymobileapp-bc708.firebaseapp.com",
  projectId: "mymobileapp-bc708",
  storageBucket: "mymobileapp-bc708.firebasestorage.app",
  messagingSenderId: "140344795412",
  appId: "1:140344795412:web:4dd843e6818d0c34596201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize AUTH & DATABASE
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
