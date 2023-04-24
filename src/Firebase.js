// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDgtjinTostwHYG79cb-3ejAzwdWbE676s",
    authDomain: "eshop-a9a70.firebaseapp.com",
    projectId: "eshop-a9a70",
    storageBucket: "eshop-a9a70.appspot.com",
    messagingSenderId: "245796431882",
    appId: "1:245796431882:web:0edf698bbf416e968b57f3",
    measurementId: "G-YJ78GK2P3J"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

//   const db =firebaseApp.firestore();
  const db =firebaseApp.firestore();

  const auth = firebase.auth()

  export {db,auth};