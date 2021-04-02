import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAp59V-l_Ku_wr7IqRYN4FoUGnszU2axao',
  authDomain: 'jt-chatter.firebaseapp.com',
  projectId: 'jt-chatter',
  storageBucket: 'jt-chatter.appspot.com',
  messagingSenderId: '1051524481753',
  appId: '1:1051524481753:web:e8c55cbb5b526d41cbf4c8',
  measurementId: 'G-F32JEQVZBZ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
