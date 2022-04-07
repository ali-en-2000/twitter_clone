import firebase from 'firebase'
 

const firebaseConfig = {
    apiKey: "AIzaSyDxbeJ_t3tixS5OahGMJPgpiHWcc6dxKyA",
    authDomain: "twitter-ce475.firebaseapp.com",
    projectId: "twitter-ce475",
    storageBucket: "twitter-ce475.appspot.com",
    messagingSenderId: "78864330809",
    appId: "1:78864330809:web:105a282520fd54bb739de8"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();

export default db;