// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCjR0Lhn9QWHOGdxW_q_--E88U2KGWiWbs",
  authDomain: "weirdos-mikes-bbq.firebaseapp.com",
  projectId: "weirdos-mikes-bbq",
  storageBucket: "weirdos-mikes-bbq.appspot.com",
  messagingSenderId: "1098626485454",
  appId: "1:1098626485454:web:f97288c16ab2c361ca549f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
