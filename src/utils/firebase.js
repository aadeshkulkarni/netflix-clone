// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-1U7NtiqUK5DPdtEF1ec_9z43-UGRwt4",
  authDomain: "netflixgpt-10640.firebaseapp.com",
  projectId: "netflixgpt-10640",
  storageBucket: "netflixgpt-10640.appspot.com",
  messagingSenderId: "864779696079",
  appId: "1:864779696079:web:93530a68634e85681f84ba",
  measurementId: "G-0EDH61G1H7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)