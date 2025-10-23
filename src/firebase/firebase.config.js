// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTxNaS_FLqn0g6PBX_mYd4W2b0ICRh0Uk",
  authDomain: "game-keeper-55693.firebaseapp.com",
  projectId: "game-keeper-55693",
  storageBucket: "game-keeper-55693.firebasestorage.app",
  messagingSenderId: "1038485974503",
  appId: "1:1038485974503:web:746bd8159a67b75db6a142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;