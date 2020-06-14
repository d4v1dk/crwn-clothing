import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCMPkbJTMjvHdxo0LeonpL9OIQQBL58zzg",
    authDomain: "crwn-clothing-8f966.firebaseapp.com",
    databaseURL: "https://crwn-clothing-8f966.firebaseio.com",
    projectId: "crwn-clothing-8f966",
    storageBucket: "crwn-clothing-8f966.appspot.com",
    messagingSenderId: "764100167447",
    appId: "1:764100167447:web:2feebe5af2a5c02897d952"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};
  

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;