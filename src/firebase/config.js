// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiJTNves7tW1ib5G14k94xjcLRilXjew8",
  authDomain: "react-cursos-b8599.firebaseapp.com",
  projectId: "react-cursos-b8599",
  storageBucket: "react-cursos-b8599.appspot.com",
  messagingSenderId: "532455595158",
  appId: "1:532455595158:web:54dfa23cc1590d7582b6b7"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)