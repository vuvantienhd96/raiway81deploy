// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBexQRPkY13VXe2wGmSH2-4XwB8rsNncGM",
  authDomain: "projectvti89.firebaseapp.com",
  projectId: "projectvti89",
  storageBucket: "projectvti89.appspot.com",
  messagingSenderId: "271349291596",
  appId: "1:271349291596:web:11fb177e5fe1da966a32e9",
  measurementId: "G-2TT0BTLZL3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);