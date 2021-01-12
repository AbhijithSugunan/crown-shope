import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCKvBKilbNmwRVMr4R-osIgFRz_UpGfDrI",
    authDomain: "crown-db-786a9.firebaseapp.com",
    projectId: "crown-db-786a9",
    storageBucket: "crown-db-786a9.appspot.com",
    messagingSenderId: "723062689852",
    appId: "1:723062689852:web:1966874b7a3fb84d733339",
    measurementId: "G-BZR21KCKQQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;