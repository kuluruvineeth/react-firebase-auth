// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq77Kd4znpjE6icljX_60PeMIlbvksD9E",
  authDomain: "react-firebase-auth-fc08a.firebaseapp.com",
  projectId: "react-firebase-auth-fc08a",
  storageBucket: "react-firebase-auth-fc08a.appspot.com",
  messagingSenderId: "615379298675",
  appId: "1:615379298675:web:a9ca95461a1e9182cbfd06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
