// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJM5hWMWv0_4L9rkI2RwkUmHrh8SvDyCY",
  authDomain: "restart-firebase-d68a3.firebaseapp.com",
  projectId: "restart-firebase-d68a3",
  storageBucket: "restart-firebase-d68a3.firebasestorage.app",
  messagingSenderId: "700968608818",
  appId: "1:700968608818:web:f05d3624c536e3dc4fc82b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);