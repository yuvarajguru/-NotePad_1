// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9V1znEUQJKCVOEyy6DPEbq3XlDHDrwtg",
  authDomain: "rn-notepadp1.firebaseapp.com",
  projectId: "rn-notepadp1",
  storageBucket: "rn-notepadp1.appspot.com",
  messagingSenderId: "599433577699",
  appId: "1:599433577699:web:997a181572eb16e39771d6"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// const storage = getStorage(app);
export const Firebase_db = getFirestore(FIREBASE_APP);
