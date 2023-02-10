import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB65LQ3oq04NofmfaX1_4XvDPoHV2G-wJo",
  authDomain: "e-commerce-project-ac8fd.firebaseapp.com",
  databaseURL: "https://e-commerce-project-ac8fd-default-rtdb.firebaseio.com",
  projectId: "e-commerce-project-ac8fd",
  storageBucket: "e-commerce-project-ac8fd.appspot.com",
  messagingSenderId: "543862426087",
  appId: "1:543862426087:web:4d071ce4b08bdad83c1542",
  measurementId: "G-ZSN2M6KC89",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
