// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5LiCQfT7NNRE48aK0yzI7HgrDE6vt1Rc",
    authDomain: "expart-photographer-auth.firebaseapp.com",
    projectId: "expart-photographer-auth",
    storageBucket: "expart-photographer-auth.appspot.com",
    messagingSenderId: "1048643530278",
    appId: "1:1048643530278:web:342554b380b5470ad3c0e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
