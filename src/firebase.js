import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACrhdh1bogKLRTb47MEjcWP41kOQ5HP-U",
  authDomain: "reel-sowiz-v1.firebaseapp.com",
  projectId: "reel-sowiz-v1",
  storageBucket: "reel-sowiz-v1.appspot.com",
  messagingSenderId: "895001914758",
  appId: "1:895001914758:web:cde290f0c87525e3905007",
  measurementId: "G-048QV681RP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()