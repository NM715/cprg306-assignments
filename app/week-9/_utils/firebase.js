// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAizCIXzgLmbzLobu664PmRlIGUnJ1azNo",
    authDomain: "cprg306-assignments-1bf76.firebaseapp.com",
    projectId: "cprg306-assignments-1bf76",
    storageBucket: "cprg306-assignments-1bf76.firebasestorage.app",
    messagingSenderId: "724637241535",
    appId: "1:724637241535:web:55ac2e5a6796bd7813f60a"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);