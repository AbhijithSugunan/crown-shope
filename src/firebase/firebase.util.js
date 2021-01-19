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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot  = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(`Error in creating user ${error.message}`)
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;