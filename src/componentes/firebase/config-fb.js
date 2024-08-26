
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvysmyrdNX_GZynO5yHnLNsmeW8vUMaRQ",
  authDomain: "kode-shop.firebaseapp.com",
  projectId: "kode-shop",
  storageBucket: "kode-shop.appspot.com",
  messagingSenderId: "749820591220",
  appId: "1:749820591220:web:6ea099fd30e9fb0e976521",
  measurementId: "G-QS93WYKWKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
