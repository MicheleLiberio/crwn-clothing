import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDpLDzFn6ZguIIzcO1uRhpNkOw7ZAL3tlA",
    authDomain: "crwn-db-d4fef.firebaseapp.com",
    projectId: "crwn-db-d4fef",
    storageBucket: "crwn-db-d4fef.appspot.com",
    messagingSenderId: "478615961267",
    appId: "1:478615961267:web:5cc250914a82c2fb71fac6",
    measurementId: "G-4ZCYH6TL25"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;