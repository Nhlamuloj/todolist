// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import{getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAzf2-jOQjuEmS0JmEeNIFddNo1i9SU1bA",
  authDomain: "my-todolist-d2061.firebaseapp.com",
  projectId: "my-todolist-d2061",
  storageBucket: "my-todolist-d2061.appspot.com",
  messagingSenderId: "586803010790",
  appId: "1:586803010790:web:e3b238b1c119315be42f27",
  measurementId: "G-SLFL4B8B7Z"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app)


export  {auth,db};
