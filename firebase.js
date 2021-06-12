import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWML45zZZQYPwuSZ5S0DWbPmPNr8kNM_A",
  authDomain: "demo1-56fb4.firebaseapp.com",
  projectId: "demo1-56fb4",
  storageBucket: "demo1-56fb4.appspot.com",
  messagingSenderId: "897023225465",
  appId: "1:897023225465:web:7e5aa204092a5e2c352ea8",
  measurementId: "G-KCJYFY47L5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
