// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "magic-estate-40923.firebaseapp.com",
  projectId: "magic-estate-40923",
  storageBucket: "magic-estate-40923.appspot.com",
  messagingSenderId: "189488200979",
  appId: "1:189488200979:web:513dc5e1ab75a53c3beee6",
  measurementId: "G-Q76NETC8RV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
