// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoMi9qYpg3EGsK-O4IBRdtg-MYw--hMyk",
  authDomain: "wishlist-c800f.firebaseapp.com",
  projectId: "wishlist-c800f",
  storageBucket: "wishlist-c800f.appspot.com",
  messagingSenderId: "485093051671",
  appId: "1:485093051671:web:31560da66c131a96043b52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db }