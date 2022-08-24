import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: process.env.KEY,
    authDomain: "netflix-abf9a.firebaseapp.com",
    projectId: "netflix-abf9a",
    storageBucket: "netflix-abf9a.appspot.com",
    messagingSenderId: "438610352082",
    appId: "1:438610352082:web:841848b4e5eced66ae1a0b",
    measurementId: "G-18EWWQJMTZ"
};
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export default storage;