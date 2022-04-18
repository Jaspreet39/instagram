
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCuiXfHtQSd6afLje5VzpIvDUcALk0QCGA",
  authDomain: "instagram-3adb8.firebaseapp.com",
  projectId: "instagram-3adb8",
  storageBucket: "instagram-3adb8.appspot.com",
  messagingSenderId: "1052947575800",
  appId: "1:1052947575800:web:2b461f109bce23d4b3dc0d",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();



export { app, db, storage };
