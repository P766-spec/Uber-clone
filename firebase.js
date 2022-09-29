// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXOL6Ko3TWo5pxVFqS-M0Rxp-jtz6h5bw",
  authDomain: "uber-next-clone-f1d08.firebaseapp.com",
  projectId: "uber-next-clone-f1d08",
  storageBucket: "uber-next-clone-f1d08.appspot.com",
  messagingSenderId: "342923236364",
  appId: "1:342923236364:web:33600cff07b876c25b0a29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }