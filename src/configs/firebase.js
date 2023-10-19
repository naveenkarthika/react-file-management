// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWx7i4Bdi1-vSdVTHAheNlXTzWm7dJJTE",
  authDomain: "react-file-management.firebaseapp.com",
  projectId: "react-file-management",
  storageBucket: "react-file-management.appspot.com",
  messagingSenderId: "501374978590",
  appId: "1:501374978590:web:7df2672332abe46182fc0f"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);


export default firebaseApp;