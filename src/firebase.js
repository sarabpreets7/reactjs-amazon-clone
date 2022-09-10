import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-baFa9kwPWjpsBxlDLg8Jk5Vhy2js1nY",
    authDomain: "clone-45018.firebaseapp.com",
    projectId: "clone-45018",
    storageBucket: "clone-45018.appspot.com",
    messagingSenderId: "673987824075",
    appId: "1:673987824075:web:222df2214690dc4935ce4e",
    measurementId: "G-QZ749QPNW3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };