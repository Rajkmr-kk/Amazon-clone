import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnXRIdZpjcLAdTia6iAHwLx7QYeu4Jxho",
    authDomain: "chat-app-bc90f.firebaseapp.com",
    databaseURL: "https://chat-app-bc90f.firebaseio.com",
    projectId: "chat-app-bc90f",
    storageBucket: "chat-app-bc90f.appspot.com",
    messagingSenderId: "87298158485",
    appId: "1:87298158485:web:aaa1090f5065e4a65e909c",
    measurementId: "G-E91K419QQD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };