// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS_YT8tfAw2_6q2YL1DbRCNlI2gXjVAPo",
  authDomain: "python-421503.firebaseapp.com",
  projectId: "python-421503",
  storageBucket: "python-421503.appspot.com",
  messagingSenderId: "155749721216",
  appId: "1:155749721216:web:86b32c55ef7089e46eb265",
  measurementId: "G-EK5Z4RSZT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);