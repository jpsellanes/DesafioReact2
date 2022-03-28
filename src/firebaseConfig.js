// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbPE4FwXPyJQAutsmsFcYwu1gLfulYZZc",
    authDomain: "desafioreact-b30e2.firebaseapp.com",
    projectId: "desafioreact-b30e2",
    storageBucket: "desafioreact-b30e2.appspot.com",
    messagingSenderId: "914153995740",
    appId: "1:914153995740:web:3a29d605b631dabd0ea319"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getFirestore(app)