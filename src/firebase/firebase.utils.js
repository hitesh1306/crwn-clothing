import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBqVHzpHYBkImm6N2ZJ60OpRMNUlwxxoXI",
  authDomain: "crwn-clothing-aaaa7.firebaseapp.com",
  databaseURL: "https://crwn-clothing-aaaa7.firebaseio.com",
  projectId: "crwn-clothing-aaaa7",
  storageBucket: "crwn-clothing-aaaa7.appspot.com",
  messagingSenderId: "397049607104",
  appId: "1:397049607104:web:eaa96f49322711cf6b0e25",
  measurementId: "G-E37V0Y0NZE"
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
      console.log("Error creating user: ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
