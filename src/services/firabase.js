import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1gg3aMiY7x_F5Fge459LH0bQyo5QE6Ms",
  authDomain: "storeopenings-8d867.firebaseapp.com",
  projectId: "storeopenings-8d867",
  storageBucket: "storeopenings-8d867.appspot.com",
  messagingSenderId: "599845165872",
  appId: "1:599845165872:web:502b988fed8d9e7f70c6f5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)