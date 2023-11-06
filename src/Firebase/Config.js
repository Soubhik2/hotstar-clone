import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAwWlbIWgKEuXJFa3HGwZbznQuZ05ujqhI",
    authDomain: "hotstar-project.firebaseapp.com",
    databaseURL: "https://hotstar-project-default-rtdb.firebaseio.com",
    projectId: "hotstar-project",
    storageBucket: "hotstar-project.appspot.com",
    messagingSenderId: "14848136567",
    appId: "1:14848136567:web:dbf563f4bceba9e063bd72",
    measurementId: "G-V90868399Z"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = firebase.database();
export const auth = firebase.auth()