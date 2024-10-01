import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//     appId: process.env.REACT_APP_FIREBASE_APPID
// };

const firebaseConfig = {
    apiKey: "AIzaSyBdsz8aGsEueOjgdep581k91DhBROEtjLE",
    authDomain: "financerto-d4e50.firebaseapp.com",
    projectId: "financerto-d4e50",
    storageBucket: "financerto-d4e50.appspot.com",
    messagingSenderId: "527930106700",
    appId: "1:527930106700:web:2d699890b347ea5b4fa5e9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export { auth };

