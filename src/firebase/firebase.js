import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDV83twx77sIi6HwtksVjoWJnTyNOsvDw8",
  authDomain: "slack-clone-b3275.firebaseapp.com",
  databaseURL: "https://slack-clone-b3275.firebaseio.com",
  projectId: "slack-clone-b3275",
  storageBucket: "slack-clone-b3275.appspot.com",
  messagingSenderId: "340072523578",
  appId: "1:340072523578:web:2a28c928f03863912c9203",
  measurementId: "G-3Z873Z8NCY"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = app.firestore();

export { db, auth, provider };