// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3afJf8wO6QInZcA3fIgAm9lzI-9uoVpc",
    authDomain: "intervue-797fc.firebaseapp.com",
    projectId: "intervue-797fc",
    storageBucket: "intervue-797fc.firebasestorage.app",
    messagingSenderId: "769108484021",
    appId: "1:769108484021:web:3e5e835f38a10ee731c3fc",
    measurementId: "G-P1H8BH0Z44"
};

// Initialize Firebase
const app =!getApps.length? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);