// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxvB0UkFzpe7Jy5NEAETqLf8uHVfWCuzY",
  authDomain: "elite-haven.firebaseapp.com",
  projectId: "elite-haven",
  storageBucket: "elite-haven.appspot.com",
  messagingSenderId: "666968216219",
  appId: "1:666968216219:web:558c2937cd03855f202c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app