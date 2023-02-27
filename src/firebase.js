import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBoOoBcGtakV4CmXMOUFqRW0UV97BZVrKc",
  authDomain: "login-97932.firebaseapp.com",
  projectId: "login-97932",
  storageBucket: "login-97932.appspot.com",
  messagingSenderId: "463690328881",
  appId: "1:463690328881:web:324a7057c82c74204d1e10"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
