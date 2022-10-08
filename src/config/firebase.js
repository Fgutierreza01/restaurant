import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD7gx9P4qnZbF26juhuBXtT6_ABtqDLylo",
  authDomain: "restaurant-5d2f7.firebaseapp.com",
  projectId: "restaurant-5d2f7",
  storageBucket: "restaurant-5d2f7.appspot.com",
  messagingSenderId: "81855538875",
  appId: "1:81855538875:web:208d07a4a396c83c8e2b9e"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)