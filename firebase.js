import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCFOTYPqtKFMv8lArObTj8kDYFgrbg-E3E",
  authDomain: "facebook-clone-a311c.firebaseapp.com",
  projectId: "facebook-clone-a311c",
  storageBucket: "facebook-clone-a311c.appspot.com",
  messagingSenderId: "252749711166",
  appId: "1:252749711166:web:82fd2975f67d72f3ad0e6f",
  measurementId: "G-VN61YL9BJ8",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
