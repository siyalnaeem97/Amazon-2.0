import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC69j9hEWEShnmyRUJN22tFl5lwvY2YIZ4",
  authDomain: "clone-b93be.firebaseapp.com",
  projectId: "clone-b93be",
  storageBucket: "clone-b93be.appspot.com",
  messagingSenderId: "86808268532",
  appId: "1:86808268532:web:430dac47788fa6f2d518a1",
  measurementId: "G-3VVGKDXYN6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
