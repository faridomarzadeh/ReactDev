// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPAjlXUT9j6xki481v5tN7P4gAb8bhVeg",
  authDomain: "react-course-1c1d7.firebaseapp.com",
  projectId: "react-course-1c1d7",
  storageBucket: "react-course-1c1d7.appspot.com",
  messagingSenderId: "637998530291",
  appId: "1:637998530291:web:8fc59f9e41c7b8ad06c186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();