// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxRgjfZZuv3_Sv-_12SnGBPUaoLc-Ff_s",
  authDomain: "cursoreact-coderhouse.firebaseapp.com",
  projectId: "cursoreact-coderhouse",
  storageBucket: "cursoreact-coderhouse.appspot.com",
  messagingSenderId: "584777833767",
  appId: "1:584777833767:web:fd12e2e8d2330322ff5d02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 