// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIy2LIoGIZnTgxD9pn25qOANpUuSKFfuY",
    authDomain: "genius-car-services-app-c72de.firebaseapp.com",
    projectId: "genius-car-services-app-c72de",
    storageBucket: "genius-car-services-app-c72de.appspot.com",
    messagingSenderId: "472350139310",
    appId: "1:472350139310:web:00b0c8a6fd413eb6869e3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;