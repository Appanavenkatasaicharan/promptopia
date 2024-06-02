// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHbgfJBlLWBnM30TZyRqI8timTzl06I2M",
  authDomain: "sample-a4d16.firebaseapp.com",
  projectId: "sample-a4d16",
  storageBucket: "sample-a4d16.appspot.com",
  messagingSenderId: "476302382532",
  appId: "1:476302382532:web:1c355efc6dd20667cd0091",
  measurementId: "G-2R80408N30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);